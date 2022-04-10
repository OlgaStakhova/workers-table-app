<template>
  <form @submit.prevent="handlerFormSubmit" class="form">
    <input
      v-model="formData.firstName"
      name="first-name"
      type="text"
      class="form__input"
      minlength="2"
      maxlength="40"
      autocomplete="off"
      placeholder="First name"
      required
    />
    <input
      v-model="formData.lastName"
      name="last-name"
      type="text"
      class="form__input"
      minlength="2"
      maxlength="40"
      autocomplete="off"
      placeholder="Last name"
      required
    />
    <input
      v-model="formData.department"
      name="department"
      type="text"
      class="form__input"
      minlength="2"
      maxlength="40"
      autocomplete="off"
      placeholder="Department"
      required
    />
    <input
      v-model="formData.salary"
      name="salary"
      type="number"
      class="form__input"
      min="1"
      autocomplete="off"
      placeholder="Salary"
      required
    />
    <button class="form__button" type="submit">
      {{ isEdit ? "save edited worker" : "create new worker" }}
    </button>
  </form>
</template>

<script>
import uniqid from "uniqid";
import { succsessNotification } from "@/utils/notificationManager.js";
import { routeAlias } from '@/constants/routeAlias'

const INIT_FORM_DATA = {
  firstName: "",
  lastName: "",
  department: "",
  salary: "",
};
export default {
  name: "FormAddWorker",
  components: {},
  props: {
    editItem: {
      type: Object,
    },
  },
  data() {
    return {
      formData: { ...INIT_FORM_DATA },
      isEdit: false,
    };
  },
  created() {
    if (this.editItem) {
      this.formData = { ...this.editItem };
      this.isEdit = true;
    }
  },
  methods: {
    handlerFormSubmit() {
      let data = null;
      if (this.isEdit) {
        data = {
          ...this.formData,
        };
        this.$emit("form:edit", data);
        succsessNotification(this.messageEdit);
        this.$nextTick(()=> this.$router.push({ name: routeAlias.TABLE_PAGE }));
        return;
      } 
        data = {
          id: uniqid(),
          ...this.formData,
        };
        this.$emit("form:create", data);
        succsessNotification(this.messageCreate);
        this.reset();

    },

    reset() {
      this.formData = {
        ...INIT_FORM_DATA,
      };
    },
  },
  computed: {
    messageCreate() {
      return `New Worker ${this.formData.firstName} ${this.formData.lastName} create`;
    },
    messageEdit() {
      return `Worker ${this.formData.firstName} ${this.formData.lastName} was edited`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";

.form {
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  &__input {
    height: 40px;
    margin-bottom: 20px;
    width: 100%;
    border: 2px solid $color-input-border;
    outline: none;
    padding: 5px;
    font-size: 14px;
    transition: border-color 0.4s ease-in;
    &::placeholder {
      color: $input-placeholder-color;
    }
    &:focus {
      box-shadow: inset 5px 5px 15px -2px $input-focus-shadow-color;
      border-color: $input-border-focus-color;
    }
    &:valid {
      border-color: $input-border-valid-color;
    }
  }
  &__button {
    width: 100%;
    height: 40px;
    background-color: $form-button-background;
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: $form-button-text-color;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.4s ease-in;
    &:hover {
      background-color: transparent;
      border: 3px solid $form-button-hover-border-color;
      color: $form-button-hover-text-color;
    }
  }
}
</style>
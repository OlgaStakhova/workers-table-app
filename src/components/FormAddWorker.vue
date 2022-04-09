<template>
  <form class="form">
    <input
      v-model="firstName"
      name="first-name"
      type="text"
      class="form__input"
      minlength="2"
      maxlength="40"
      autocomplete="false"
      required
    />
    <input
      v-model="lastName"
      name="last-name"
      type="text"
      class="form__input"
      minlength="2"
      maxlength="40"
      autocomplete="false"
      required
    />
    <input
      v-model="department"
      name="department"
      type="text"
      class="form__input"
      minlength="2"
      maxlength="40"
      autocomplete="false"
      required
    />
    <input
      v-model="salary"
      name="salary"
      type="text"
      class="form__input"
      minlength="2"
      maxlength="40"
      autocomplete="false"
      required
    />
    <button class="form__button" type="submit">create new worker</button>
  </form>
</template>

<script>
export default {
  name: "FormAddWorker",
  components: {},
  data() {
    return {
      firstName: "",
      lastName: "",
      department: "",
      salary: "",
    };
  },
  methods: {
    handlerFormSubmit() {},
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

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
      color: #929191;
    }
    &:focus {
      box-shadow: inset 5px 5px 15px -2px #000000;
      border-color: #d84f4f;
    }
  }
}
</style>
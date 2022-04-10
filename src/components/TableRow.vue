<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ worker.firstName }}</td>
    <td>{{ worker.lastName }}</td>
    <td>{{ worker.department }}</td>
    <td>{{ worker.salary }}</td>
    <td class="row-control">
      <button @click="handlerEditButton" class="row-control__item" type="button"><IconEdit class="row-control__icon"/></button>
      <button @click="handlerDeleteButton" class="row-control__item" type="button"><IconDelete class="row-control__icon"/></button>
    </td>
  </tr>
</template>

<script>
import IconEdit from "@/assets/svg/edit-icon.svg";
import IconDelete from "@/assets/svg/delete-icon.svg";
export default {
  name: "TableRow",
  props: {
    worker: {
      type: Object,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  components: {
    IconEdit,
    IconDelete,
  },
  methods: {
      handlerEditButton() {
        this.$emit('edit:item', this.worker);
      },
      handlerDeleteButton() {
        this.$emit('delete:item', this.worker.id);
      }
  }
};
</script>

<style lang="scss" scoped>
.row-control {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    &__item {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        cursor: pointer;
        &:first-child {
            margin: 0px 10px 0px 20px;
        }
    }
    &__icon {
        fill: rgb(6, 121, 6);
        width: 25px;
        height: 25px;
    }
}
</style>
<template>
  <table class="table">
    <tbody>
      <tr class="table-header">
        <th>Count</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Department</th>
        <th>Salary</th>
        <th></th>
      </tr>

      <TableRow
        class="table-row"
        v-for="(item, index) in workerItems"
        :worker="item"
        :key="item.id"
        :index="index"
         @edit:item="handlerEditItem"
         @delete:item="handlerDeleteItem"
      />

      <tr v-if="!workerItems.length" class="table__emty-row">
        <td colspan="5">No workers, please add new worker</td>
      </tr>

      <tr class="table-footer">
        <td colspan="3"></td>
        <td class="table__summary-title">Summary</td>
        <td class="table__summary-result">
          {{ summarySalary ? summarySalary : "" }}
        </td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import TableRow from "@/components/TableRow.vue";
import { mapMutations } from "vuex";
import { DELETE_WORKER } from '@/store/modules/mutation-types.js';
import { routeAlias } from '@/constants/routeAlias.js'
export default {
  name: "TableWorkers",
  props: {
    workerItems: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  components: {
      TableRow,
  },
  computed: {
      summarySalary() {
        const total = this.workerItems.reduce((total, item)=> { return total = + total + +item.salary },0)
        return total;
    }
  },
  methods: {
     ...mapMutations("worker", [DELETE_WORKER]),

      handlerEditItem(editItem) { 
          if(editItem) {
             this.$router.push({ name: routeAlias.ADD_WORKER_PAGE, params: {item:editItem } });
          }
      },

      handlerDeleteItem(itemId) {
        this.DELETE_WORKER(itemId);
      }
  }
};
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  th {
    background-color: $table-header-background;
    font-weight: 600;
  }

  ::v-deep .table-row td,
  td,
  th {
    font-size: 1.4rem;
    border: 2px solid #595959;
    padding: 3px;
    width: calc(600px / 5);
    height: 30px;
    text-align: center; 
    vertical-align: middle;
  }

  ::v-deep .table-row td:first-child,
  td:first-child,
  th:first-child {
    width: 50px;
  }

  ::v-deep .table-row td:last-child,
  td:last-child,
  th:last-child {
    border: none;
    background: none;
    width: 50px;
  }

  &__summary-title,
  &__summary-result {
      font-weight: 600;
      background-color: $table-summary-background;
  }
  &__emty-row {
      font-weight: 600;
  }
}
</style>
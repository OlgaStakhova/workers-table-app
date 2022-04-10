<template>
  <div class="wrapper">
    <FormFilters @change:filter="handlerChangeFilters" />
    <TableWorkers :workerItems="filteredWorkers" />
  </div>
</template>

<script>
import TableWorkers from "@/components/TableWorkers.vue";
import FormFilters from "@/components/FormFilters.vue";
import { mapGetters } from "vuex";
export default {
  name: "TableWorkersPage",
  components: {
    TableWorkers,
    FormFilters,
  },
  data() {
    return {
      filters: null,
    };
  },
  created() {
    const dataFromSave =
      localStorage.getItem("workers:save:data") &&
      JSON.parse(localStorage.getItem("workers:save:data"));
    this.init(dataFromSave);
  },
  methods: {
    handlerChangeFilters(filters) {
      this.filters = filters;
    },
  },
  computed: {
    ...mapGetters("worker", ["getWorkers"]),

    filteredWorkers() {
      if ((this.filters && !this.filters.filterName) || !this.filters) {
        return this.getWorkers;
      }
      return this.getWorkers.filter((worker) =>
        worker.firstName.includes(this.filters.filterName)
      );
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 650px;
  margin: 0 auto;
  padding: 30px 0px 30px;
}
</style>
<template>
  <div class="wrapper">
    <TableWorkers :workerItems="workersItems"/>
  </div>
</template>

<script>
import TableWorkers from '@/components/TableWorkers.vue'
import { mapGetters } from "vuex";
export default {
  name: "TableWorkersPage",
  components: { 
      TableWorkers,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters("worker", ["getWorkers"]),

    workersItems() {
      return this.getWorkers;
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
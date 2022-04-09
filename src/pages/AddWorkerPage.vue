<template>
  <div class="page-wrapper">
    <button type="button">Back to table</button>
    <h2 class="page-title">Form create new worker</h2>
    <FormAddWorker/>
  </div>
</template>

<script>
import FormAddWorker from '@/components/FormAddWorker.vue';
export default {
  name: "AddWorkerPage",
  components: {
    FormAddWorker
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
</style>
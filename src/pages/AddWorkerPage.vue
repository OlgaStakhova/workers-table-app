<template>
  <div class="page-wrapper">
    <BackButton>
      <BackIcon class="back-button-icon"/>
    </BackButton>
    <h2 class="page-title">Form create new worker</h2>
    <FormAddWorker @form:submit="handlerFormData"/>
  </div>
</template>

<script>
import FormAddWorker from '@/components/FormAddWorker.vue';
import BackButton from '@/components/BackButton.vue'
import BackIcon from '@/assets/svg/back-icon.svg';
import { mapMutations } from 'vuex';
import { ADD_WORKER } from '@/store/modules/mutation-types.js'
export default {
  name: "AddWorkerPage",
  components: {
    FormAddWorker,
    BackIcon,
    BackButton,
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations("worker", [ADD_WORKER]),

    handlerFormData(data) {
       this.ADD_WORKER(data)
    }
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
.page-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: $page-titile-color;
  text-align: center;
  margin-bottom: 30px;
}

.back-button-icon {
  fill: $back-button-icon-color;
}
</style>
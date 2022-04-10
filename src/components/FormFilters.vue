<template>
  <form class="form-filters">
    <input
      v-model="filters.filterName"
      name="filterName"
      type="text"
      class="form-filters__input"
      minlength="1"
      maxlength="40"
      autocomplete="off"
      placeholder="Filter by first name"
      @input="handlerFilterByName"
    />
  </form>
</template>

<script>
export default {
  name: "FormFilters",
  data() {
      return {
          filters: {
            filterName: '',
          }
          
      }
  },
  methods: {
      handlerFilterByName() {
          this.$emit('change:filter',this.filters)
      }
  }

};
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
.form-filters {
  width: 250px;
  margin-right: auto;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(4, 83, 21);
  padding: 10px 5px;
  &__input {
    height: 30px;
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
  }
  
}
</style>
<template>
  <button @click.stop="handlerButton" class="back-button" type="button">
    <slot> </slot>
  </button>
</template>

<script>
import { routeAlias } from '@/constants/routeAlias.js'
export default {
  name: "BackButton",
  methods: {
      handlerButton() {
          this.$router.push({ name: routeAlias.TABLE_PAGE });
      }
  }
};
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
 .back-button {
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: 3px solid $button-back-border-color;
    border-radius: 50%;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

</style>
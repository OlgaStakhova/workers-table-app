<template>
  <div class="footer">
    <div class="footer-content">
      <p class="footer-content__copirate">Olha Stakhova</p>
      <p class="footer-content__copirate">2022</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterToolbar",
};
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  background-color: $footer-background-color;
}

.footer-content {
  display: flex;
  max-width: 400px;
  flex-direction: column;
  &__copirate {
    font-size: $footer-font-size;
    text-align: center;
  }
}
</style>
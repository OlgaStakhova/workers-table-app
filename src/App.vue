<template>
  <div id="app">
    <HeaderToolbar />
    <main class="main main-bg">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
    <FooterToolbar />
  </div>
</template>

<script>
import HeaderToolbar from "@/components/HeaderToolbar.vue";
import FooterToolbar from "@/components/FooterToolbar.vue";

export default {
  name: "App",
  components: {
    HeaderToolbar,
    FooterToolbar,
  },
};
</script>

<style lang="scss">
@import "./style/variables.scss";
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main {
  flex-grow: 1;
  padding: 80px 35px;
}

.container {
  width: 700px;
  margin: 0 auto;
}

.main-bg {
  background: $app-background-image;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>

<template>
  <header class="header">
    <nav class="nav">
      <div class="logo">
        <IconLogo class="logo__icon" />
        <span>Workers administration</span>
      </div>
      <ul class="nav-list">
        <li class="nav-list__item" :class="{ active: isTablePage }">
          <router-link class="link" to="/">Table workers</router-link>
        </li>
        <li class="nav-list__item" :class="{ active: !isTablePage }">
          <router-link class="link" to="/add-worker">Add worker</router-link>
        </li>
      </ul>
    </nav>
    <hr class="line" />
  </header>
</template>

<script>
import { routeAlias } from "@/constants/routeAlias.js";
import IconLogo from "../assets/svg/logo-icon.svg";
export default {
  name: "HeaderToolbar",
  components: {
    IconLogo,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    isTablePage() {
      return this.$route.name === routeAlias.TABLE_PAGE;
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";
.header {
  width: 100%;
  padding: 20px 0px;
  position: fixed;
  z-index: 1;
}
.logo {
  font-size: $logo-font-size;
  color: $logo-font-color;
  font-weight: 600;
  display: flex;
  align-items: center;
  &__icon {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    fill: $logo-icon-color;
  }
}
.nav {
  width: 700px;
  padding: 0px 0px 20px 0px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-list {
  display: flex;
  flex-wrap: nowrap;

  &__item {
    position: relative;
  }

  &__item .link {
    font-size: $nav-item-font-size;
    color: $nav-item-color;
    cursor: pointer;
  }
  &__item.active::before {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0px;
    background-color: $activ-nav-color;
  }

  &__item:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
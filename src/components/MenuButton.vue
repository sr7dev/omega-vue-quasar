<template>
  <button class="nav-button cursor-pointer" @click="mainmenu">
    <i class="fa fa-bars margin-right-10" aria-hidden="true"></i>
    {{ $t("MENU_STR") }}
  </button>
</template>

<script>
export default {
  name: "MenuButton",
  methods: {
    mainmenu() {
      this.$router.push({ path: "/main" });
    }
  }
};
</script>

<template>
  <button class="nav-button cursor-pointer" @click="home">
    <i class="fa fa-home margin-right-10" aria-hidden="true"></i>
    {{ $t("HOME_STR") }}
  </button>
</template>

<script>
export default {
  name: "HomeButton",
  methods: {
    home() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<template>
  <div class="col">
    <button class="nav-button cursor-pointer" @click="prev">
      <i class="fa fa-chevron-left margin-right-10" aria-hidden="true"></i>
      {{ $t("PREV_STR") }}
    </button>
  </div>
</template>

<script>
export default {
  name: "PrevButton",
  methods: {
    prev() {
      this.$router.go(-1);
    }
  }
};
</script>

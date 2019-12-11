<template>
  <div class="col">
    <button class="nav-button cursor-pointer" style="float: right" @click="next">
      {{ $t("NEXT_STR") }}
      <i class="fa fa-chevron-right margin-left-10" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "LinkButton",
  props: ["path"],
  methods: {
    next() {
      this.$router.push({ path: this.path });
    }
  }
};
</script>

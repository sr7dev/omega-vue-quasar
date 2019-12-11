<template>
  <button class="alert cursor-pointer" @click="alarms">
    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
    {{ $t("ALARM_STR") }}
  </button>
</template>

<script>
export default {
  name: "AlarmButton",
  methods: {
    alarms() {
      this.$router.push({ path: "/alarms" });
    }
  }
};
</script>

<template>
  <q-layout>
    <!-- <LanguageSwithcer /> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import LanguageSwithcer from "../components/LanguageSwitcher";
export default {
  name: "MyLayout",
  components: {
    // LanguageSwithcer
  }
};
</script>

<style></style>

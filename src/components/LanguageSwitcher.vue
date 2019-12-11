<template>
  <ul>
    <li v-for="lang in languages" :key="lang">
      <a @click="changeLang(lang)">{{ lang }}</a>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: right;
  margin-right: calc(50% - 300px);
  margin-top: 100px;
}

li {
  display: inline-block;
  width: 40px;
  font-size: 20px;
}

a:hover {
  color: red;
  text-decoration: underline;
  text-decoration-color: red;
}
</style>

<script>
export default {
  name: "LanguageSwitcher",
  data: () => ({
    languages: ["en", "es"]
  }),
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

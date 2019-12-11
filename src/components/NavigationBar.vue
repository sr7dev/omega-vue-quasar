<template>
  <div class="row container-left-right nav-bar">
    <div class="col">
      <PrevButton v-show="showPrev" />
    </div>
    <div class="col" style="display: flex; justify-content: center;">
      <MenuButton v-show="showMenu" />
      <HomeButton v-show="showHome" />
    </div>
    <div class="col">
      <NextButton v-if="next !== ''" v-bind:path="next" />
      <LinkButton v-if="label !== '' && path !== ''"
                  v-bind:iconClass="iconClass"
                  v-bind:label="label"
                  v-bind:path="path" />
    </div>
  </div>
</template>

<style scoped></style>

<script>
  import PrevButton from "../components/PrevButton";
  import MenuButton from "../components/MenuButton";
  import HomeButton from "../components/HomeButton";
  import NextButton from "../components/NextButton";
  import LinkButton from "../components/LinkButton";
  export default {
    name: "NavigationBar",
    components: {
      PrevButton,
      MenuButton,
      HomeButton,
      NextButton,
      LinkButton
    },
    props: {
      showPrev: {
        type: Boolean,
        default: true
      },
      showMenu: {
        type: Boolean,
        default: false
      },
      showHome: {
        type: Boolean,
        default: true
      },
      next: {
        type: String,
        default: ""
      },
      iconClass: {
        type: String,
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      path: {
        type: String,
        default: ""
      }
    }
  };
</script>

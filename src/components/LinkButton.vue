<template>  
  <button v-bind:class="buttonClass" v-bind:style="customStyle" @click="link">
    <i
        v-show="iconLeft"
        class="fa margin-right-10"
        v-bind:class="iconClass"
        aria-hidden="true"></i>
    {{ label }}
    <i
        v-show="iconRight"
        class="fa margin-left-10"
        v-bind:class="iconClass"
        aria-hidden="true"></i>
  </button>
</template>

<script>
export default {
    name: "LinkButton",
    props: {
      buttonClass: {
        type: String,
        default: "nav-button cursor-pointer"
      },
      customStyle: {
        type: String,
        default: "float: right"
      },
      iconLeft: {
        type: Boolean,
        default: true
      },
      iconRight: {
        type: Boolean,
        default: false
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
    },
    methods: {
      link() {
        this.$router.push({ path: this.path });
      },
    },
};
</script>

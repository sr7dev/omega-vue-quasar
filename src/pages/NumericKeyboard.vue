<template>
  <q-page>
    <div class="flex flex-center margin-top-50 margin-bottom-50">
      <q-input
        v-model="model"
        label=""
        hint="Integers only."
        error-message="Please enter valid integer value."
        :error="!isValid"
        @focus="show"
        data-layout="numeric"/>
    </div>
    <q-page-sticky position="top" :offset="[18, 18]" id="keyboard_wrapper">
      <vue-touch-keyboard :options="options" v-if="visible" :layout="layout" :cancel="hide" :accept="accept" :input="input" id="keyboard"/>
    </q-page-sticky>
  </q-page>
</template>

<style>
#keyboard_wrapper>div {
  display: contents;
}
#keyboard {
  width: 100%;
  max-width: 1000px;
}
</style>

<script>
import Vue from 'vue'
import VueTouchKeyboard from 'vue-touch-keyboard'
import style from 'vue-touch-keyboard/dist/vue-touch-keyboard.css' // load default style

Vue.use(VueTouchKeyboard)

export default {
  name: 'NumericKeyboard',
  data () {
    return {
      model: '',
      visible: false,
      layout: 'normal',
      input: null,
      options: {
        useKbEvents: false,
        preventClickEvent: false
      }
    }
  },
  mounted () {
  },
  methods: {
    //accept (text) {
    accept () {
      this.hide()
      this.style = style
    },
    show (e) {
      this.input = e.target
      this.layout = e.target.dataset.layout

      if (!this.visible) {
        this.visible = true
      }
    },
    hide () {
      this.visible = false
    }
  },
  computed: {
    isValid () {
      return /^\d+$/.test(this.model)
    }
  }
}
</script>

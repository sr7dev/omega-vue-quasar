<template>
  <div class="TouchInput">
    <q-page>
      <div class="screen">
        <div class="available_area">
          <input
            :value="input"
            class="inputbox"
            @input="onInputChange"
            placeholder="Input the valid numbers only"
            ref="input"
          />
          <p v-if="error" class="error">Please input valid integer value.</p>
        </div>
        <SimpleKeyboard
          @onChange="onChange"
          @onKeyPress="onKeyPress"
          :input="input"
          style="background-color:#FFF"
        />
      </div>
    </q-page>
  </div>
</template>

<script>
import SimpleKeyboard from "../components/SimpleKeyboard";

export default {
  name: "TouchPage",
  components: {
    SimpleKeyboard
  },
  data: () => ({
    input: "",
    error: false
  }),
  mounted() {
    this.$refs.input.focus();
  },
  watch: {
    input: function(val) {
      this.input = val;
      console.log("sd");
      this.$refs.input.focus();
    }
  },
  methods: {
    isAllNumber(inputtxt) {
      var numbers = /^[0-9]+$/;
      if (inputtxt.match(numbers)) {
        return true;
      } else {
        return false;
      }
    },
    onChange(input) {
      this.input = input;
      if (this.isAllNumber(input) === false) {
        this.error = true;
      } else {
        this.error = false;
      }
      if (this.input.length === 0) {
        this.error = false;
      }
    },
    onKeyPress(button) {
      console.log("button", button);
    },
    onInputChange(input) {
      this.input = input.target.value;
      if (this.isAllNumber(this.input) === false) {
        this.error = true;
      } else {
        this.error = false;
      }
      if (this.input.length === 0) {
        this.error = false;
      }
    }
  }
};
</script>

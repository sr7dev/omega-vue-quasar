<template>
  <div>
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-12 title">
                <p class="fontsize-18 text-center">
                  {{ $t("UDP_SETUP_STR") }}
                </p>
              </div>
            </div>

            <div class="row content-row">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("IP_ADDR_STR") }}</p>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  class="custom_inputbox fontsize-14"
                  v-model="unicast.ip_addr"
                  @focus="showKeyboard('ip_addr')"
                  @keyup.esc="closeKeyboards()"
                />
              </div>
            </div>

            <div class="row content-row">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("PORT_STR") }}</p>
              </div>
              <div class="col-7">
                <input
                  type="number"
                  class="custom_inputbox fontsize-14"
                  v-model="unicast.port"
                  @focus="showKeyboard('port')"
                  @keyup.esc="closeKeyboards()"
                />
              </div>
            </div>

            <div class="row content-row">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("UDPENCODER_STR") }}</p>
              </div>
              <div class="col-7 fontsize-14">
                <input
                  type="text"
                  class="custom_inputbox fontsize-14"
                  readonly
                  v-model="unicast.encoder"
                  @click="toggleEncoder()"
                />
              </div>
            </div>

            <NavigationBar v-bind:next="next" />

            <!-- keyboard -->
            <div class="keyboard-container">
              <input
                type="text"
                class="inputbox fontsize-8"
                v-model="keyboardInput"
                v-if="isShowKeyboard"
                style="background-color:#FFF"
                :class="{ error: hasError }"
                @keyup.esc="closeKeyboards()"
              />
              <span v-if="hasError" class="invalid">{{ errorMsg }}</span>
              <SimpleKeyboard
                v-if="isShowKeyboard"
                style="background-color:#FFF;"
                :input="keyboardInput"
                @onChange="onChangeKeyboard"
                @onKeyPress="onKeyPressKeyboard"
                class="item"
              />
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>
<script>
import SimpleKeyboard from "../components/SimpleKeyboard";
import NavigationBar from "../components/NavigationBar";
import config from "../../config.js";
export default {
  name: "NetworkSetting",
  components: {
    SimpleKeyboard,
    NavigationBar
  },

  data() {
    return {
      next: "",
      errorMsg: "Invalid IP address",
      hasError: false,
      isShowKeyboard: false,
      keyboardInput: "",
      currentKeyword: "",
      input: "",

      unicast: {
        ip_addr: "192.168.0.23",
        port: "1111",
        encoder: "Off"
      }
    };
  },
  methods: {
    toggleEncoder() {
      if (this.unicast.encoder == "Off") this.unicast.encoder = "On";
      else this.unicast.encoder = "Off";
    },
    // show & hide keyboard
    showKeyboard(keyword) {
      switch (keyword) {
        case "ip_addr":
          this.keyboardInput = this.unicast.ip_addr;
          break;
        case "port":
          this.keyboardInput = this.unicast.port;
          break;

        default:
          break;
      }

      this.isShowKeyboard = true;
      this.currentKeyword = keyword;
    },
    closeKeyboards() {
      if (!this.hasError) {
        this.isShowKeyboard = false;
        this.keyboardInput = "";
      }
    },

    // validation methods
    checkValidation() {
      let validationResult = false;

      switch (this.currentKeyword) {
        case "ip_addr":
          validationResult = this.keyboardInput.match(
            config.regexString.ipAddress
          )
            ? true
            : false;
          this.errorMsg = "Invalid IP address";
          break;
        case "port":
          validationResult = this.keyboardInput.match(
            config.regexString.numbers
          )
            ? true
            : false;
          this.errorMsg = "Invalid Port";
          break;

        default:
          break;
      }

      return validationResult;
    },

    // keyboard event handler
    onChangeKeyboard(input) {
      this.keyboardInput = input;

      switch (this.currentKeyword) {
        case "ip_addr":
          this.unicast.ip_addr = input;
          break;
        case "port":
          this.unicast.port = input;
          break;

        default:
          break;
      }

      // check validation realtime
      if (this.checkValidation()) {
        this.hasError = false;
      } else {
        this.hasError = true;
      }
    },
    onKeyPressKeyboard(button) {
      if (button == "{enter}") {
        if (this.checkValidation()) {
          this.hasError = false;
          this.isShowKeyboard = false;
        } else {
          this.hasError = true;
        }
      } else if (button == "{bksp}") {
        console.log("backspace");
      }
    }
  },
  mounted() {},
  created() {
    window.addEventListener("keydown", e => {
      if (e.key == "Escape") {
        if (!this.hasError) {
          this.closeKeyboards();
        }
      }
    });
  }
};
</script>

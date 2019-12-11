<template>
  <div>
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-12">
                <p class="fontsize-18 text-center">
                  {{ $t("DNS_SETUP_STR") }}
                </p>
              </div>
            </div>

            <div class="row content-row">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("SEARCH_STR") }}</p>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  class="custom_inputbox fontsize-14"
                  v-model="dns.search"
                  @focus="showKeyboard('search')"
                  @keyup.esc="closeKeyboards()"
                />
              </div>
            </div>
            <div class="row content-row">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("PRI_DNS_STR") }}</p>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  class="custom_inputbox fontsize-14"
                  v-model="dns.pri_dns"
                  @focus="showKeyboard('pri_dns')"
                  @keyup.esc="closeKeyboards()"
                />
              </div>
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("ALT_DNS_STR") }}</p>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  class="custom_inputbox fontsize-14"
                  v-model="dns.alt_dns"
                  @focus="showKeyboard('alt_dns')"
                  @keyup.esc="closeKeyboards()"
                />
              </div>
            </div>
            <div class="text-content"></div>
            <div class="row content-row">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("ALC_EMAIL_STR") }}</p>
                <p class="fontsize-14">{{ $t("SERVER_STR") }}</p>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  class="custom_inputbox fontsize-14"
                  v-model="dns.email_server"
                  @focus="showKeyboard('email_server')"
                  @keyup.esc="closeKeyboards()"
                />
              </div>
            </div>

            <div class="row content-row">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("EMAIL_FROM_STR") }}</p>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  class="custom_inputbox fontsize-14"
                  v-model="dns.from"
                  @focus="showKeyboard('from')"
                  @keyup.esc="closeKeyboards()"
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
  name: "DNSSetup",
  components: {
    SimpleKeyboard,
    NavigationBar
  },

  data() {
    return {
      next: "/unicastsetup",
      errorMsg: "",
      hasError: false,
      isShowKeyboard: false,
      keyboardInput: "",
      currentKeyword: "",
      input: "",

      dns: {
        search: "emacinc.com",
        pri_dns: "10.0.2.1",
        alt_dns: "0.0.0.1",
        email_server: "",
        from: "apen@wagner.net"
      }
    };
  },
  methods: {
    // show & hide keyboard
    showKeyboard(keyword) {
      switch (keyword) {
        case "search":
          this.keyboardInput = this.dns.search;
          break;
        case "pri_dns":
          this.keyboardInput = this.dns.pri_dns;
          break;
        case "alt_dns":
          this.keyboardInput = this.dns.alt_dns;
          break;
        case "email_server":
          this.keyboardInput = this.dns.email_server;
          break;
        case "from":
          this.keyboardInput = this.dns.from;
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
        case "search":
          validationResult = this.keyboardInput.match(
            config.regexString.required
          )
            ? true
            : false;
          this.errorMsg = "This is a required field";
          break;
        case "pri_dns":
          validationResult = this.keyboardInput.match(
            config.regexString.ipAddress
          )
            ? true
            : false;
          this.errorMsg = "Invalid IP address";
          break;
        case "alt_dns":
          validationResult = this.keyboardInput.match(
            config.regexString.ipAddress
          )
            ? true
            : false;
          this.errorMsg = "Invalid IP address";
          break;
        case "email_server":
          validationResult = this.keyboardInput.match(
            config.regexString.required
          )
            ? true
            : false;
          this.errorMsg = "This is a required field";
          break;
        case "from":
          validationResult = this.keyboardInput.match(config.regexString.email)
            ? true
            : false;
          this.errorMsg = "Invalid Email";
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
        case "search":
          this.dns.search = input;
          break;
        case "pri_dns":
          this.dns.pri_dns = input;
          break;
        case "alt_dns":
          this.dns.alt_dns = input;
          break;
        case "email_server":
          this.dns.email_server = input;
          break;
        case "from":
          this.dns.from = input;
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

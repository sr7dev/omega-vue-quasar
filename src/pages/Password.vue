<template>
  <div class="Password">
    <q-page>
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row content-row">
              <div class="col-12 align-center">
                <p class="fontsize-14">
                  {{ $t("SUPLOGIN_STR") }}
                </p>
              </div>
            </div>

            <div class="row content-row">
              <div class="col-4">
                <p class="fontsize-14">{{ $t("PASSWORD_STR") }}</p>
              </div>
              <div class="col-8">
                <input
                  :value="info.password"
                  class="inputbox fontsize-14"
                  @input="onInputChangePassword"
                  ref="pass"
                  type="password"
                  @keyup.esc="closeKeyboard()"
                  @focus="
                    showkeyboardPassword = true;
                    showkeyboardOldPassword = false;
                    showkeyboardNewPassword = false;
                    showkeyboardconfirmNew = false;
                  "
                />
              </div>
              <div class="keyboard-container">
                <span
                  class="closeKeyboard"
                  @click="closeKeyboard()"
                  v-if="showkeyboardPassword == true"
                  >X</span
                >
                <SimpleKeyboard
                  style="background-color:#FFF;"
                  @onChange="onChangePassword"
                  @onKeyPress="onKeyPress"
                  :input="info.password"
                  v-if="showkeyboardPassword == true"
                />
              </div>
            </div>

            <div class="row content-row">
              <div class="col-12 align-center">
                <p class="fontsize-14">
                  {{ $t("CHANGEPASS_STR") }}
                </p>
              </div>
            </div>

            <div class="row content-row">
              <div class="col-4">
                <p class="fontsize-14">
                  {{ $t("OLDPASS_STR") }}
                </p>
              </div>
              <div class="col-8">
                <input
                  :value="info.oldPassword"
                  class="inputbox fontsize-14"
                  @input="onInputChangeOldPassword"
                  type="password"
                  @keyup.esc="closeKeyboard()"
                  @focus="
                    showkeyboardPassword = false;
                    showkeyboardOldPassword = true;
                    showkeyboardNewPassword = false;
                    showkeyboardconfirmNew = false;
                  "
                />
              </div>
              <div class="keyboard-container">
                <input
                  :value="info.oldPassword"
                  class="inputbox fontsize-14"
                  @input="onInputChangeOldPassword"
                  ref="oldpass"
                  type="password"
                  @keyup.esc="closeKeyboard()"
                  style="background-color:#FFF"
                  v-if="showkeyboardOldPassword == true"
                />
                <span
                  class="closeKeyboard"
                  @click="closeKeyboard()"
                  v-if="showkeyboardOldPassword == true"
                  >X</span
                >
                <SimpleKeyboard
                  style="background-color:#FFF;"
                  @onChange="onChangeOldPassword"
                  @onKeyPress="onKeyPressOldPassword"
                  :input="info.oldPassword"
                  @keyup.esc="closeKeyboard()"
                  v-if="showkeyboardOldPassword == true"
                />
              </div>
            </div>

            <div class="row content-row">
              <div class="col-4">
                <p class="fontsize-14">
                  {{ $t("New Pass") }}
                </p>
              </div>
              <div class="col-8">
                <input
                  :value="info.newPassword"
                  class="inputbox fontsize-14"
                  @input="onInputChangeNewPassword"
                  type="password"
                  @keyup.esc="closeKeyboard()"
                  @focus="
                    showkeyboardPassword = false;
                    showkeyboardOldPassword = false;
                    showkeyboardNewPassword = true;
                    showkeyboardconfirmNew = false;
                  "
                />
              </div>
              <div class="keyboard-container">
                <input
                  v-if="showkeyboardNewPassword == true"
                  :value="info.newPassword"
                  class="inputbox fontsize-14"
                  @input="onInputChangeNewPassword"
                  @keyup.esc="closeKeyboard()"
                  ref="newpass"
                  type="password"
                  style="background-color:#FFF"
                />
                <span
                  class="closeKeyboard"
                  @click="closeKeyboard()"
                  v-if="showkeyboardNewPassword == true"
                  >X</span
                >
                <SimpleKeyboard
                  style="background-color:#FFF;"
                  @onChange="onChangeNewPassword"
                  @onKeyPress="onKeyPressNewPassword"
                  :input="info.newPassword"
                  v-if="showkeyboardNewPassword == true"
                />
              </div>
            </div>

            <div class="row content-row">
              <div class="col-4">
                <p class="fontsize-14">
                  {{ $t("CONFIRM_STR") }}
                </p>
              </div>
              <div class="col-8">
                <input
                  :value="info.confirmNew"
                  class="inputbox fontsize-14"
                  @input="onInputChangeconfirmNew"
                  type="password"
                  @keyup.esc="closeKeyboard()"
                  @focus="
                    showkeyboardPassword = false;
                    showkeyboardOldPassword = false;
                    showkeyboardNewPassword = false;
                    showkeyboardconfirmNew = true;
                  "
                />
                <p v-if="!bMatchPwd && bShowWarning" class="fontsize-10 status-line-height" style="color:red;">Password does not match.</p>
              </div>
              <div class="keyboard-container">
                <input
                  :value="info.confirmNew"
                  class="inputbox fontsize-14"
                  @input="onInputChangeconfirmNew"
                  ref="confirmpass"
                  type="password"
                  style="background-color:#FFF"
                  @keyup.esc="closeKeyboard()"
                  v-if="showkeyboardconfirmNew == true"
                />
                <span
                  class="closeKeyboard"
                  @click="closeKeyboard()"
                  v-if="showkeyboardconfirmNew == true"
                  >X</span
                >
                <SimpleKeyboard
                  style="background-color:#FFF;"
                  @onChange="onChangeconfirmNew"
                  @onKeyPress="onKeyPressconfirmNew"
                  :input="info.confirmNew"
                  v-if="showkeyboardconfirmNew == true"
                />
              </div>
            </div>

            <div class="row container-left-right nav-bar">
              <div class="col">
                <button class="nav-button" @click="login">
                  <i
                    class="fa fa-chevron-left margin-right-10"
                    aria-hidden="true"
                  ></i>
                  {{ $t("PLOGIN_STR") }}
                </button>
              </div>
              <div class="col" style="display: flex; justify-content: center;">
                <button class="nav-button" @click="home">
                  <i class="fa fa-home margin-right-10" aria-hidden="true"></i>
                  {{ $t("W_HOME_STR") }}
                </button>
              </div>
              <div class="col">
                <button class="nav-button" style="float: right" @click="changePassword">
                  {{ $t("CHANGE_STR") }}
                  <!-- <i
                    class="fa fa-chevron-right margin-left-10"
                    aria-hidden="true"
                  ></i> -->
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import SimpleKeyboard from "../components/SimpleKeyboard";
export default {
  name: "Password",
  components: {
    SimpleKeyboard
  },
  data() {
    return {
      info: {
        password: "",
        oldPassword: "",
        newPassword: "",
        confirmNew: ""
      },
      showkeyboardPassword: false,
      showkeyboardOldPassword: false,
      showkeyboardNewPassword: false,
      showkeyboardconfirmNew: false,
      bMatchPwd: false,
      bShowWarning: false
    };
  },
  methods: {
    closeKeyboard() {
      (this.showkeyboardPassword = false),
        (this.showkeyboardOldPassword = false),
        (this.showkeyboardNewPassword = false),
        (this.showkeyboardconfirmNew = false);
    },
    home() {
      this.$router.push({ path: "/" });
    },
    login() {
      this.$router.push({ path: "/" });
    },
    changePassword() {
      if (this.info.newPassword === this.info.confirmNew) {
        this.info.password = this.info.newPassword;
        this.bMatchPwd = true;
        this.bShowWarning = false;
      } else {
        this.bMatchPwd = false;
        this.bShowWarning = true;
      }
      
    },
    onInputChangePassword(text) {
      this.info.password = text.target.value;
    },
    onInputChangeOldPassword(text) {
      this.info.oldPassword = text.target.value;
    },
    onInputChangeNewPassword(text) {
      this.info.newPassword = text.target.value;
    },
    onInputChangeconfirmNew(text) {
      this.info.confirmNew = text.target.value;
    },

    onChangePassword(text) {
      this.info.password = text;
    },
    onChangeOldPassword(text) {
      this.info.oldPassword = text;
    },
    onChangeNewPassword(text) {
      this.info.newPassword = text;
    },
    onChangeconfirmNew(text) {
      this.info.confirmNew = text;
    },

    onKeyPress(button) {
      console.log("button", button);
      this.$refs.pass.focus();
      if (button == "{enter}") {
        this.showkeyboardPassword = false;
      }
    },
    onKeyPressOldPassword(button) {
      console.log("button", button);
      this.$refs.oldpass.focus();
      if (button == "{enter}") {
        this.showkeyboardOldPassword = false;
      }
    },
    onKeyPressNewPassword(button) {
      console.log("button", button);
      this.$refs.oldpass.focus();
      if (button == "{enter}") {
        this.showkeyboardNewPassword = false;
      }
    },
    onKeyPressconfirmNew(button) {
      console.log("button", button);
      this.$refs.confirmpass.focus();
      if (button == "{enter}") {
        this.showkeyboardconfirmNew = false;
      }
    }
  },
  created() {
    window.addEventListener("keydown", e => {
      if (e.key == "Escape") {
        this.closeKeyboard();
      }
    });
  }
};
</script>

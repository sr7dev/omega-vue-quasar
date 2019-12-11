<template>
  <div class="AlarmSetup">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-2"></div>
              <div class="col-10">
                <p class="fontsize-16">
                  {{ $t("ALARM_CONFIG_STR") }}
                </p>
              </div>
            </div>

            <div class="row screen-row">
              <div class="col-6">
                <p class="fontsize-12">
                  {{ $t("SYS_ALARM_SU_STR") }}
                </p>
              </div>
              <div class="col-6">
                <q-select
                  color="teal"
                  filled
                  v-model="model"
                  :options="options"
                >
                </q-select>
              </div>
            </div>

            <div class="row screen-row checkboxes">
              <div class="col-6">
                <q-checkbox
                  v-model="setting.alarm1"
                  :label="$t('M_ALARMS_STR') + 1"
                  class="fontsize-16"
                />
              </div>
              <div class="col-6">
                <q-checkbox
                  v-model="setting.out1"
                  :label="$t('W_AL_OUT_STR') + 1"
                  class="fontsize-20"
                />
              </div>
            </div>

            <div class="row screen-row checkboxes">
              <div class="col-6 ">
                <q-checkbox
                  v-model="setting.alarm2"
                  :label="$t('M_ALARMS_STR') + 2"
                  class="fontsize-20"
                />
              </div>
              <div class="col-6">
                <q-checkbox
                  v-model="setting.out2"
                  :label="$t('W_AL_OUT_STR') + 2"
                  class="fontsize-20"
                />
              </div>
            </div>

            <div class="row screen-row checkboxesa">
              <div class="col-6">
                <q-checkbox
                  v-model="setting.email"
                  :label="$t('EMAIL_STR')"
                  class="fontsize-16"
                />
              </div>
            </div>

            <div class="row screen-row alram-content">
              <div class="col-1">
                <input
                  type="text"
                  class="inputbox fontsize-8"
                  v-model="setting.maxvalue"
                  @input="onInputChangeMax"
                  @focus="showkeyboardMax = true"
                  @keyup.esc="closAllKeyboards()"
                />

                <div class="keyboard-container">
                  <input
                    type="text"
                    class="inputbox fontsize-8"
                    v-model="setting.maxvalue"
                    @input="onInputChangeMax"
                    ref="num"
                    v-if="showkeyboardMax == true"
                    style="background-color:#FFF"
                    :class="{ error: validNumber }"
                    @keyup.esc="closAllKeyboards()"
                  />
                  <span v-if="validNumber == true" class="invalidemail"
                    >Write Number 1~999</span
                  >
                  <SimpleKeyboard
                    style="background-color:#FFF;"
                    @onChange="onChangeMax"
                    @onKeyPress="onKeyPressMax"
                    :input="setting.maxvalue"
                    class="item"
                    v-if="showkeyboardMax == true"
                  />
                </div>
              </div>
              <div
                class="col-5 fontsize-12"
                style="padding-top:5px; padding-left:10px"
              >
                {{ $t("SAM_MAX_STR") }}&nbsp;#
              </div>
              <div class="col-6 fontsize-12" @click="enableButton()">
                <button class="fontsize-8" style="width:50px">
                  <span v-if="setting.enable == true">
                    {{ $t("TGL_ON_STR") }}
                  </span>
                  <span v-if="setting.enable == false">
                    {{ $t("TGL_OFF_STR") }}
                  </span>
                </button>
                {{ $t("ENABLE_STR") }}
              </div>
            </div>

            <div class="row screen-row">
              <div class="col-4">
                <p class="fontsize-12">{{ $t("EMAIL_STR") }}:</p>
              </div>
              <div class="col-8">
                <input
                  type="email"
                  class="inputbox fontsize-12"
                  v-model="emailText"
                  @input="onInputChange"
                  :class="{ error: hasError }"
                  @keyup.enter="enterPressed()"
                  @focus="showkeyboard = true"
                />
              </div>
              <div class="keyboard-container">
                <input
                  style="background-color:#FFF"
                  type="email"
                  class="inputbox fontsize-12"
                  placeholder="Email"
                  :value="input"
                  @input="onInputChange"
                  ref="input"
                  :class="{ error: hasError }"
                  @keyup.enter="enterPressed()"
                  v-if="showkeyboard == true"
                />
                <span
                  v-if="invalidEmail == true && hasError == true"
                  class="invalid"
                  >Invalid Email</span
                >
                <!-- <span
                class="closeKeyboard" @click="closeKeyboard()"
                v-if="showkeyboard == true"
                >X</span> -->
                <SimpleKeyboard
                  style="background-color:#FFF;"
                  @onChange="onChange"
                  @onKeyPress="onKeyPress"
                  :input="input"
                  class="item"
                  v-if="showkeyboard == true"
                />
              </div>
            </div>

            <NavigationBar v-bind:next="next" />
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>
<script>
import SimpleKeyboard from "../components/SimpleKeyboard";
import NavigationBar from "../components/NavigationBar";
export default {
  name: "Alarms",
  components: {
    SimpleKeyboard,
    NavigationBar
  },

  data() {
    return {
      next: "",
      input: "",
      error: "",
      enableOff: false,

      validNumber: false,
      hasError: false,
      invalidEmail: false,
      showkeyboard: true,
      showkeyboardMax: false,
      model: localStorage.getItem("savedSelected"),
      emailText: localStorage.getItem("SavedEmail"),
      setting: {
        alarm1: false,
        alarm2: false,
        out1: false,
        out2: false,
        email: false,
        maxvalue: "",
        enable: false
      },

      options: [
        this.$t("M_SENSORS_STR"),
        this.$t("SAM_LSEN_STR"),
        this.$t("SAM_LIMSW_STR"),
        this.$t("SAM_CAN_STR"),
        this.$t("SAM_MAX_STR"),
        this.$t("SAM_TEMP_STR")
      ]
    };
  },
  methods: {
    // closeKeyboard() {
    //   this.showkeyboard = false
    // },
    closAllKeyboards() {
      if (this.hasError == false && this.validNumber == false) {
        (this.showkeyboard = false), (this.showkeyboardMax = false);
      }
    },
    enableButton() {
      this.setting.enable = !this.setting.enable;

      if (this.enableOn == true) {
        localStorage.setItem("enable", true);
      }
      if (this.enableOn == false) {
        localStorage.setItem("enable", false);
      }
    },
    home() {
      this.$router.push({ path: "/" });
    },
    isEmail(inputtxt) {
      var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,24}))$/;
      if (inputtxt.match(email)) {
        return true;
      } else {
        return false;
      }
    },
    onChange(input) {
      this.input = input;
      if (this.isEmail(input) === false) {
        this.hasError = true;
        this.invalidEmail = true;
      } else {
        this.hasError = false;
      }
      if (this.input.length === 0) {
        this.error = false;
      }
    },
    onChangeMax(input) {
      this.setting.maxvalue = input;
    },
    onInputChange(input) {
      this.input = input.target.value;
      if (this.isEmail(this.input) === false) {
        this.error = true;
      } else {
        this.error = false;
      }
      if (this.input.length === 0) {
        this.error = false;
      }
    },
    onInputChangeMax(input) {
      this.setting.maxvalue = input.target.value;
    },
    onKeyPress(button) {
      console.log("button", button);
      if (button == "{enter}") {
        if (this.hasError == true) {
          this.invalidEmail = true;
        }
        if (this.hasError == false) {
          this.showkeyboard = false;
          this.invalidEmail = false;
        }
      }
    },
    onKeyPressMax(button) {
      console.log("button", button);
      if (
        button == "{enter}" &&
        this.setting.maxvalue.length <= 3 &&
        !isNaN(this.setting.maxvalue)
      ) {
        this.showkeyboardMax = false;
        this.validNumber = false;
      }
      if (button == "{enter}" && isNaN(this.setting.maxvalue)) {
        this.validNumber = true;
      }
    }
  },
  watch: {
    "setting.enable": function() {
      localStorage.setItem(this.model, JSON.stringify(this.setting));
    },
    "setting.maxvalue": function() {
      var number = this.setting.maxvalue;
      this.$refs.num.focus();
      if (isNaN(number)) {
        this.validNumber = true;
      }
      if (!isNaN(number)) {
        this.validNumber = false;
      }
      localStorage.setItem(this.model, JSON.stringify(this.setting));
    },
    emailText: function() {
      localStorage.setItem("SavedEmail", this.emailText);
    },
    "setting.email": function() {
      localStorage.setItem(this.model, JSON.stringify(this.setting));
    },
    "setting.out2": function() {
      localStorage.setItem(this.model, JSON.stringify(this.setting));
    },
    "setting.out1": function() {
      localStorage.setItem(this.model, JSON.stringify(this.setting));
    },
    "setting.alarm2": function() {
      localStorage.setItem(this.model, JSON.stringify(this.setting));
    },
    "setting.alarm1": function() {
      localStorage.setItem(this.model, JSON.stringify(this.setting));
    },

    //get setting from local storge
    model: function() {
      localStorage.setItem("savedSelected", this.model);
      this.setting = JSON.parse(localStorage.getItem(this.model));
    },

    input: function(val) {
      this.input = val;
      this.emailText = val;
      this.$refs.input.focus();
    }
  },
  mounted() {
    var options = this.options;
    var theSetting = this.setting;
    var model = this.model;
    // var enabling    = localStorage.getItem('enable')

    //get saved selector setting
    if (model != null) {
      this.setting = JSON.parse(localStorage.getItem(model));
    }

    // //get saved max number
    // this.MaxLimit = localStorage.getItem('MaxLimit')

    //get saved eneable on/of
    // if(enabling === 'true') {
    //   this.enableOn   = true;
    //   this.enableOff  = false
    // }
    // if (enabling === 'false') {
    //   this.enableOn   = false;
    //   this.enableOff  = true
    // }

    //add localStorage items for firist visit
    for (var i = 0; i <= 6; i++) {
      if (!localStorage.getItem(this.options[i]) == true) {
        localStorage.setItem(options[i], JSON.stringify(theSetting));
      }
      if (!localStorage.getItem(this.options[i]) == false) {
        this.showkeyboard = false;
      }
    }
    this.$refs.input.focus();
  },
  created() {
    window.addEventListener("keydown", e => {
      if (e.key == "Escape") {
        if (this.hasError == false && this.validNumber == false) {
          this.closAllKeyboards();
        }
        if (this.hasError == true) {
          this.invalidEmail = true;
        }
      }
    });
  }
};
</script>

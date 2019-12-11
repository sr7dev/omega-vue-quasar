<template>
  <div class="AlarmSetup">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-4"></div>
              <div class="col-8">
                <p class="fontsize-16">
                  {{ $t("SEL_LANG_STR") }}
                </p>
              </div>
            </div>

            <!-- Spacer -->
            <div class="row content-row">
              <div class="col-6">&nbsp;</div>
            </div>

            <div class="row screen-row">
              <div class="col-4">&nbsp;</div>
              <div class="col-4">
                <q-select class="fontsize-14"
                          color="teal"
                          filled
                          v-model="language"
                          :options="options"
                          @input="onChange">
                </q-select>
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
  import axios from "axios";
  import NavigationBar from "../components/NavigationBar";
  import globalObj from "../statics/js/screen-id";
  export default {
    name: "Language",
    components: {
      NavigationBar
    },
    data() {
      return {
        next: "",
        language: localStorage.getItem("languageGeneric"),
        languageCode: localStorage.getItem("languageCode"),
        options: [
          {
            label: this.$t("M_ENGLISH_STR"),
            generic: "M_ENGLISH_STR",
            value: "en",
            button: globalObj.BTN_LANG_ENGL
          },
          {
            label: this.$t("M_FRENCH_STR"),
            generic: "M_FRENCH_STR",
            value: "fr",
            button: globalObj.BTN_LANG_FREN
          },
          {
            label: this.$t("M_GERMAN_STR"),
            generic: "M_GERMAN_STR",
            value: "gr",
            button: globalObj.BTN_LANG_GER
          },
          {
            label: this.$t("M_SPANISH_STR"),
            generic: "M_SPANISH_STR",
            value: "es",
            button: globalObj.BTN_LANG_SPAN
          },
          {
            label: this.$t("M_SWEDISH_STR"),
            generic: "M_SWEDISH_STR",
            value: "sw",
            button: globalObj.BTN_LANG_SWED
          }
        ],        
      };
    },
    methods: {
      buildFP_MSG(theButton=0) {
        // Builds FP_MSG as defined in display.h on console.
        return {
          soh: 'h',
          len: 255,
          cmd: globalObj.CMD.OP_SEND_LAST_PUSH,
          fxn: globalObj.FXN.OP_BUTTON,
          seq: 0,
          data: theButton,   // Max 250 single byte characters.
        }
      },
      changeLanguage() {
        console.log('post:', this.language.value);

        let data = JSON.stringify({
          language: this.language.value,
        });

        let fpmsg = this.buildFP_MSG(this.language.button);
        console.log(fpmsg);

        axios.post(
          'http://192.168.0.23/post-data.php',
          data,
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }         
        ).then(function(response) {
            console.log('Success.', response.data);
          }
        ).catch(function(error) {            
            console.log(error);
            this.errors.push(error);
          }
        )
      },
      onChange() {
        // This runs before the language watcher.
        //console.log(this.language.value);
        this.$i18n.locale = this.language.value;
        this.changeLanguage();
      }
    },
    watch: {
      language: function() {
        localStorage.setItem("languageGeneric", this.$t(this.language.generic));
        localStorage.setItem("languageCode", this.language.value);
        //console.log(this.language.generic);
      },      
    },
    mounted() {      
      /*
      console.log("mounted");
      console.log('language: ', this.language);
      console.log('languageCode: ', this.languageCode);
      this.$i18n.locale = this.languageCode;
      */
    },
  };
</script>

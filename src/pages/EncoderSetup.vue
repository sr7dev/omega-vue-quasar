<template>
  <div>
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-12">
                <p class="fontsize-18">
                  {{ $t("ENC_SETUP_STR") }}
                </p>
              </div>
            </div>

            <div class="row content-row " style="margin-top:30px;">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("ENC_TYPE_STR") }}</p>
              </div>
              <q-select class="fontsize-12 col-2"
                        color="teal"
                        outlined
                        v-model="valueType"
                        :options="types">
              </q-select>
            </div>

            <div class="row content-row ">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("ENC_DIR_STR") }}</p>
              </div>
              <button class="col-1 direction-btn" @click="dirToggle">{{ dirValue }}</button>
            </div>

            <div class="row content-row ">
              <div class="col-2"></div>
              <div class="col-3">
                <p class="fontsize-14">{{ $t("ENC_CPI_STR") }}</p>
              </div>
              <button class="col-2">0.0</button>
            </div>

            <div class="row content-row ">
              <div class="col-2"></div>
              <div class="col-6">
                <p class="fontsize-14">{{ $t("ENC_COUNT_STR") }}</p>
              </div>
              <p class="col-2 fontsize-14">0</p>
            </div>
            <NavigationBar></NavigationBar>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>
<script>
import NavigationBar from "../components/NavigationBar";
export default {
  name: "EncoderSetup",
  components: { NavigationBar },
  data() {
    return {
      types: [this.$t("TGL_QUAD_STR"), 
              this.$t("TGL_PULSE_STR")],
      valueType: this.$t("TGL_QUAD_STR"),
      bDirection: false,
      dirValue: this.$t("TGL_CCW_STR"),
    };
  },
  methods: {
    dirToggle() {
      this.bDirection = this.bDirection ? false : true;
      this.dirValue = this.bDirection ? this.$t("TGL_CW_STR") : this.$t("TGL_CCW_STR")
    },
  }
};
</script>
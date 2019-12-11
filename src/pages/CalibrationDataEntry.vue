<template>
  <div class="ClibrationDataEntry">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-12">
                <p class="fontsize-18">
                  {{ $t("CAL_ENTRY_STR") }}
                </p>
              </div>
              <div class="col-1"></div>
              <div class="col-11 fontsize-18">
                <p class="fontsize-18">
                  1 OAK
                </p>
              </div>
            </div>

            <div class="row screen-row text-content">
              <div class="col-1"></div>
              <div class="col-11">
                <p class="fontsize-18 row screen-row ">
                  <span class="col-2">N:</span>
                  <span class="col-4">1</span>
                  <button class="col-4" @click="clearAll">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                    {{ $t("CLEAR_ALL_STR") }}
                  </button>
                </p>
                <p class="fontsize-18 row screen-row ">
                  <span class="col-1">X:</span>
                  <span class="col-4">-406</span>
                </p>
                <div class="fontsize-18 row screen-row">
                  <span class="col-1">Y:</span>
                  <span class="col-4" style="border: solid 1px">
                    <numkeyboard v-model="valueY" ok-text="Enter" text-align="left" placeholder="0.0"></numkeyboard>
                  </span>
                  <span class="col-1"></span>
                  <button class="col-4" @click="calculate">
                    <i class="fa fa-calculator" aria-hidden="true"></i>
                    {{ $t("W_CALCULATE_STR") }}
                  </button>
                </div>
              </div>
            </div>

            <div class="row container-left-right nav-bar">
              <div class="col">
                <PrevButton></PrevButton>
              </div>
              <div class="col" style="display: flex; justify-content: center;">
                <HomeButton></HomeButton>
              </div>
              <div class="col">
                <button class="nav-button" style="float: right" @click="edit">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                  {{ $t("EDIT_BTN_STR") }}
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
import PrevButton from "../components/PrevButton";
import HomeButton from "../components/HomeButton";

export default {
  name: "calibrationDataEntry",
  components: { PrevButton,
                HomeButton
              },
  data() {
    return {
        valueY: '0.0',
    };
  },
  methods: {
    edit() {
      this.$router.push({ path: '/calibrationeditor'});
    },
    calculate() {
      this.$router.push({ path: '/calculationresults'});
    },
    clearAll() {
      this.valueY = '0.0';
    },
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

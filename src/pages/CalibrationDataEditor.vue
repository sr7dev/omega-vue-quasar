<template>
  <div class="CalibrationDataEditor">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-12">
                <p class="fontsize-18">
                  {{ $t("CAL_EDIT_STR") }}
                </p>
              </div>
              <div class="col-1"></div>
              <div class="col-11 fontsize-18">
                <p class="fontsize-18">
                 {{material}}
                </p>
              </div>
            </div>

            <div class="row screen-row text-content">
              <div class="col-1"></div>
              <div class="col-11">
                <p class="fontsize-18 row screen-row ">
                  <span class="col-2">N:</span>
                  <span class="col-3">
                    <q-select
                      class="col-2 fontsize-14"
                      color="teal"
                      outlined
                      v-model="valueN"
                      :options="valuesOfN"
                    >
                    </q-select>
                  </span>
                </p>
                <p class="fontsize-18 row screen-row ">
                  <span class="col-2">X:</span> 
                  <span>{{valueX}}</span>
                </p>
                <p class="fontsize-18 row screen-row ">
                  <span class="col-2">Y:</span>
                  <span class="col-4" style="border: solid 1px">
                    <numkeyboard v-model="valueY" ok-text="Enter" text-align="left" placeholder="0.0"></numkeyboard>
                  </span>
                </p>
                <p class="fontsize-18 row screen-row " style="margin-top:3px;">
                  <span class="col-2">Ignore:</span
                  ><button class="col-2" @click="ignoreToggle">{{ignoreValue}}</button>
                </p>
              </div>
            </div>

            <div class="row container-left-right nav-bar">
              <div class="col">
                <PrevButton></PrevButton>
              </div>
              <div class="col">
                <button class="nav-button" style="float: right" @click="autoCal">
                  {{ $t("AUTO_START_STR") }}
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
export default {
  name: "calibrationeditor",
    components: { PrevButton },
    data() {
      return {
        valueX: 0,
        valueY: '0.0',
        bIgnore: false,
        ignoreValue: 'No',
        valuesOfN: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        valueN: '1',
        material: ''
      };
  },
  methods: {
    ignoreToggle() {
      this.bIgnore = this.bIgnore ? false : true;
      this.ignoreValue = this.bIgnore ? 'Yes' : 'No';
    },
    autoCal(){
      console.log("auto calculate");
    }
  }, 
  created() {
    this.material = localStorage.getItem("material");
  }
};
</script>

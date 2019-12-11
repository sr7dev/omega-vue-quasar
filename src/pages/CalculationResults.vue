<template>
  <div class="CalculationResults">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-12">
                <p class="fontsize-18">
                  {{ $t("CALC_RESULTS_STR") }}
                </p>
              </div>
              <div class="col-1"></div>
              <div class="col-11 fontsize-18">
                <p class="fontsize-18">
                  {{ $t("MATERIAL_STR") }} 5 {{ $t("EMPTY_STR") }}
                </p>
              </div>
            </div>

            <div class="row screen-row text-content">
              <div class="col-1"></div>
              <div class="col-5">
                <p class="fontsize-18"><span>M:</span> {{valueM}}</p>
                <p class="fontsize-18"><span>B:</span> {{valueB}}</p>
                <p class="fontsize-18"><span>R2</span> {{valueR2}}</p>
              </div>
              <div class="col-5">
                <button style="float: right;" @click="update">
                  <i class="fa fa-repeat" aria-hidden="true"></i>
                  {{ $t("AH_UPDATE_STR") }}
                </button>
              </div>
              <div class="col-1"></div>
            </div>

            <div class="row container-left-right nav-bar">
              <div class="col">
                <PrevButton></PrevButton>
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
        components: {PrevButton},
        data() {
          return {
            valueM: '0.0000000',
            valueB: '0.00',
            valueR2: '0.0000000'
          };
        },
        methods: {
          update() {
            this.$router.push({ path: '/materialedit'})
          }
        }
     }
</script>

<template>
  <div class="MarkerTest">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-12">
                <p class="fontsize-18 text-left">
                  {{ $t("MARK_TEST_STR") }}
                </p>
              </div>
            </div>

            <div class="row content-row fontsize-14 v-markers-margin">
				<div class="col-1"></div>
				<div class="col-3 label-top-padding text-right">
					{{ $t("W_MARKERS_STR")}}1:
				</div>
				<button class="col-1 direction-btn" @click="toggleMarker1">
					{{ strMarker1 }}
				</button>
				<div class="col-1"></div>
				<div class="col-3 label-top-padding text-right">
					{{ $t("M_ALARMS_STR")}}1:
				</div>
				<button class="col-1 direction-btn" @click="toggleAlarm1">
					{{ strAlarm1 }}
				</button>
            </div>

			<div class="row content-row fontsize-14 v-markers-margin">
				<div class="col-1"></div>
				<div class="col-3 label-top-padding text-right">
					{{ $t("W_MARKERS_STR")}}2:
				</div>
				<button class="col-1 direction-btn" @click="toggleMarker2">
					{{ strMarker2 }}
				</button>
				<div class="col-1"></div>
				<div class="col-3 label-top-padding text-right">
					{{ $t("M_ALARMS_STR")}}2:
				</div>
				<button class="col-1 direction-btn" @click="toggleAlarm2">
					{{ strAlarm2 }}
				</button>
            </div>

			<div class="row content-row fontsize-14 v-markers-margin">
				<div class="col-1"></div>
				<div class="col-3 label-top-padding text-right">
					{{ $t("W_MARKERS_STR")}}3:
				</div>
				<button class="col-1 direction-btn" @click="toggleMarker3">
					{{ strMarker3 }}
				</button>
				<div class="col-1"></div>
				<div class="col-3 label-top-padding text-right">
					{{ $t("W_AL_OUT_STR")}}1:
				</div>
				<button class="col-1 direction-btn" @click="toggleOut1">
					{{ strOut1 }}
				</button>
            </div>

			<div class="row content-row fontsize-14 v-markers-margin">
				<div class="col-1"></div>
				<div class="col-3 label-top-padding text-right">
					{{ $t("W_MARKERS_STR")}}4:
				</div>
				<button class="col-1 direction-btn" @click="toggleMarker4">
					{{ strMarker4 }}
				</button>
				<div class="col-1"></div>
				<div class="col-3 label-top-padding text-right">
					{{ $t("W_AL_OUT_STR")}}2:
				</div>
				<button class="col-1 direction-btn" @click="toggleOut2">
					{{ strOut2 }}
				</button>
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
  name: "MarkerTest",
  components: { NavigationBar,
              },
  data() {
    return {
		bMarker1: false,
		bMarker2: false,
		bMarker3: false,
		bMarker4: false,
		bAlarm1: false,
		bAlarm2: false,
		bOut1: false,
		bOut2: false,

		strMarker1: this.$t("MRK_DRY_STR"),
		strMarker2: this.$t("MRK_DRY_STR"),
		strMarker3: this.$t("MRK_DRY_STR"),
		strMarker4: this.$t("MRK_DRY_STR"),
		strAlarm1: this.$t("TGL_OFF_STR"),
		strAlarm2: this.$t("TGL_OFF_STR"),
		strOut1: this.$t("TGL_OFF_STR"),
		strOut2: this.$t("TGL_OFF_STR"),
    };
  },
  methods: {
	toggleMarker1() {
		this.bMarker1 = this.bMarker1 ? false : true;
      	this.strMarker1 = this.bMarker1 ? this.$t("MRK_WET_STR") : this.$t("MRK_DRY_STR")
	},
	toggleMarker2() {
		this.bMarker2 = this.bMarker2 ? false : true;
      	this.strMarker2 = this.bMarker2 ? this.$t("MRK_WET_STR") : this.$t("MRK_DRY_STR")
	},
	toggleMarker3() {
		this.bMarker3 = this.bMarker3 ? false : true;
      	this.strMarker3 = this.bMarker3 ? this.$t("MRK_WET_STR") : this.$t("MRK_DRY_STR")
	},
	toggleMarker4() {
		this.bMarker4 = this.bMarker4 ? false : true;
      	this.strMarker4 = this.bMarker4 ? this.$t("MRK_WET_STR") : this.$t("MRK_DRY_STR")
	},
	toggleAlarm1() {
		this.bAlarm1 = this.bAlarm1 ? false : true;
      	this.strAlarm1 = this.bAlarm1 ? this.$t("MRK_WET_STR") : this.$t("MRK_DRY_STR")
	},
	toggleAlarm2() {
		this.bAlarm2 = this.bAlarm2 ? false : true;
      	this.strAlarm2 = this.bAlarm2 ? this.$t("MRK_WET_STR") : this.$t("MRK_DRY_STR")
	},
	toggleOut1() {
		this.bOut1 = this.bOut1 ? false : true;
      	this.strOut1 = this.bOut1 ? this.$t("MRK_WET_STR") : this.$t("MRK_DRY_STR")
	},
	toggleOut2() {
		this.bOut2 = this.bOut2 ? false : true;
      	this.strOut2 = this.bOut2 ? this.$t("MRK_WET_STR") : this.$t("MRK_DRY_STR")
	}
  }
};
</script>
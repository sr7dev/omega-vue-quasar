<template>
    <div class="MarkerAdvanced">
		<q-btn :label="selectedLogic" @click="dialog = true" class="label"></q-btn>
		<q-dialog v-model="dialog" persistent>
			<q-card class="marker-advanced-qcard">
				<div class="screen-adv">
					<div class="row screen-row">
						<div class="col-12">
							<p class="fontsize-18 text-left" style="margin-left:10px">
								{{ $t("W_MARKERS_STR") }}&nbsp;{{ id }}&nbsp;{{ $t("MRK_ADV_STR") }}
							</p>
						</div>
					</div>
					<div class="row content-row fontsize-14 v-algin">
						<div class="col-1"></div>
						<p class="col-3 marker-line-height">{{ $t("LOGIC_STR")}}</p>
					</div>
					<div class="row content-row fontsize-14">
						<div class="col-1"></div>
						<div class="col-3">
							<button class="advanced-btn" @click="selectLogic">{{ selectedLogic }}</button>
						</div>
						<div class="col-1" v-if="bSelect"></div>
						<button class="col-2 sensor-btn-active" @click="sensor1" v-if="bSelect && !bSensor1">{{ $t("SENSOR_STR")}}&nbsp;1</button>
						<button class="col-2 sensor-btn-inactive" @click="sensor1" v-if="bSelect && bSensor1">{{ $t("SENSOR_STR")}}&nbsp;1</button>
						<MHKeyboard
							width="10%"
							datatype="integer"
							v-on:childToParent="inputNum"
							:init="senCount"
							:default="'1'"
							icon="keyboard"
							instructmsg = "Please insert value"
							title="Spot"
							max=8
							min=1
							v-else-if="bAny"
						/>
						<p v-else-if="bAny" class="col-2 label-top-padding">{{ $t("M_SENSORS_STR")}}</p>
						<p v-if="bAny && bWarning" class="col-4 fontsize-10" style="color: red;padding-top:0.7em;">Input between 1 to 8</p> 
					</div>
					<div class="row content-row logic-desc-height">
						<div class="col-1"></div>
						<div class="col-5">
							<p class="fontsize-8 marker-line-height">{{logicDescription1}}</p>
							<p class="fontsize-8 marker-line-height">{{logicDescription2}}</p>
							<p class="fontsize-8 marker-line-height">{{logicDescription3}}</p>
						</div>
					</div>
					<div class="row content-row fontsize-14 advanced-where-height">
						<div class="col-1"></div>
						<div class="col-3">
							<p class="marker-line-height">{{ $t("WHERE_STR")}}</p>
							<button class="advanced-btn" @click="selectWhere">{{ selectedWhere }}</button>
							<p class="fontsize-8 marker-line-height">{{whereDescription1}}</p>
							<p class="fontsize-8 marker-line-height">{{whereDescription2}}</p>
						</div>
					</div>
					<div class="row" style="margin-right:15px">
						<div class="col">
						</div>
						<div class="col">
							<q-btn class="bottom-btn" style="float: right" @click="save" v-close-popup>
							{{ $t("SAVE_STR") }}
							</q-btn>
						</div>
						<div class="col">
							<q-btn class="bottom-btn" style="float: right" @click="cancel" v-close-popup>
							{{ $t("CANCEL_STR") }}
							</q-btn>
						</div>
					</div>
				</div>
			</q-card>
		</q-dialog>
    </div>
</template>
<script>
import MHKeyboard from "../components/MHKeyboard";
export default {
	components: {
		MHKeyboard
	},
  	name: "MarkerAdvanced",
	props: [
		'id'
	],
  	beforeMount() {
		this.$nextTick(function () {
			let advancedValues = JSON.parse(localStorage.getItem("markadvanced"+this.id));
			if (advancedValues != null) {
				this.selectedLogic = advancedValues.logic === null ? this.$t("PEAKH2_STR") : advancedValues.logic;
				this.selectedWhere = advancedValues.where === null ? this.$t("MK_WHERE_SPOT_STR") : advancedValues.where;
				this.bSensor1 = advancedValues.sensor1 == true;
				this.senCount = advancedValues.count;
				switch (this.selectedLogic) {
					case this.$t("MKL_AVG_STR"):
						this.bAvg = true;
						this.logicDescription1 = this.$t("MKL_AV_LINE1_STR");
						this.logicDescription2 = this.$t("MKL_AV_LINE2_STR");
						this.logicDescription3 = '';
						break;
					case this.$t("MKL_SELECT_STR"):
						this.bSelect = true;
						this.logicDescription1 = this.$t("MKL_SEL_LINE1_STR");
						this.logicDescription2 = this.$t("MKL_SEL_LINE2_STR");
						this.logicDescription3 = this.$t("MKL_SEL_LINE3_STR");
						break;
					case this.$t("MKL_ANY_STR"):
						this.bAny = true;
						this.logicDescription1 = this.$t("MKL_ANY_LINE1_STR");
						this.logicDescription2 = this.$t("MKL_ANY_LINE2_STR");
						this.logicDescription3 = this.$t("MKL_ANY_LINE3_STR");
						break;
					case this.$t("MKL_PEAK_STR"):
						this.bPeak = true;
						this.logicDescription1 = this.$t("MKL_PK_LINE1_STR");
						this.logicDescription2 = this.$t("MKL_PK_LINE2_STR");
						this.logicDescription3 = "";
						break;
					default:
						this.bAvg = true;
						this.logicDescription1 = this.$t("MKL_AV_LINE1_STR");
						this.logicDescription2 = this.$t("MKL_AV_LINE2_STR");
						this.logicDescription3 = '';
				}

				if (this.selectedWhere == this.$t("MK_WHERE_EOB_STR")) {
					this.bEob = true;
					this.whereDescription1 = this.$t("MKW_EOB_LINE1_STR");
					this.whereDescription2 = this.$t("MKW_EOB_LINE2_STR");
				} else if(this.selectedWhere == this.$t("MK_WHERE_SPOT_STR")) {
					this.bSpot = true;
					this.whereDescription1 = this.$t("MKW_SP_LINE1_STR");
					this.whereDescription2 = "";
				} else {
					this.bSpot = true;
					this.whereDescription1 = this.$t("MKW_SP_LINE1_STR");
					this.whereDescription2 = "";
				}
			} else {
				this.bPeak = true;
				this.bAvg = false;
				this.bSelect = false;
				this.bAny = false;
			
				this.selectedLogic = this.$t("PEAKH2_STR");
				this.logicDescription1 = this.$t("MKL_PK_LINE1_STR");
				this.logicDescription2 = this.$t("MKL_PK_LINE2_STR");
				this.logicDescription3 = '';

				this.bSpot = true;
				this.bEob = false;
				this.selectedWhere = this.$t("MK_WHERE_SPOT_STR");
				this.whereDescription1 = this.$t("MKW_SP_LINE1_STR");
				this.whereDescription2 = '';

				this.bSensor1 = false;
				this.senCount = 1;
				this.bWarning = false;
			}
			
		});
	},  
	data() {
		return {
			bPeak: true,
			bAvg: false,
			bSelect: false,
			bAny: false,
		
			selectedLogic: this.$t("PEAKH2_STR"),
			logicDescription1: this.$t("MKL_PK_LINE1_STR"),
			logicDescription2: this.$t("MKL_PK_LINE2_STR"),
			logicDescription3: '',

			bSpot: true,
			bEob: false,
			selectedWhere: this.$t("MK_WHERE_SPOT_STR"),
			whereDescription1: this.$t("MKW_SP_LINE1_STR"),
			whereDescription2: '',

			bSensor1: false,
			senCount: 1,
			bWarning: false,
			dialog: false
		};	
	},
	computed: {

	},
	methods: {
		selectLogic() {
			if (this.bPeak){
				this.bPeak = false;
				this.bAvg = true;
				this.selectedLogic = this.$t("MKL_AVG_STR");
				this.logicDescription1 = this.$t("MKL_AV_LINE1_STR");
				this.logicDescription2 = this.$t("MKL_AV_LINE2_STR");
				this.logicDescription3 = "";
				this.bSelect = false;
				this.bAny = false;
				this.bSpot = false;
				this.bEob = true;
				this.whereDescription1 = this.$t("MKW_EOB_LINE1_STR");
				this.whereDescription2 = this.$t("MKW_EOB_LINE2_STR");
				this.selectedWhere = this.$t("MK_WHERE_EOB_STR");
			} else if (this.bAvg) {
				this.bPeak = false;
				this.bAvg = false;
				this.bSelect = true;
				this.selectedLogic = this.$t("MKL_SELECT_STR");
				this.logicDescription1 = this.$t("MKL_SEL_LINE1_STR");
				this.logicDescription2 = this.$t("MKL_SEL_LINE2_STR");
				this.logicDescription3 = this.$t("MKL_SEL_LINE3_STR");
				this.bAny = false;
			} else if (this.bSelect) {
				this.bPeak = false;
				this.bAvg = false;
				this.bSelect = false;
				this.bAny = true;
				this.selectedLogic = this.$t("MKL_ANY_STR");
				this.logicDescription1 = this.$t("MKL_ANY_LINE1_STR");
				this.logicDescription2 = this.$t("MKL_ANY_LINE2_STR");
				this.logicDescription3 = this.$t("MKL_ANY_LINE3_STR");
			} else if (this.bAny) {
				this.bPeak = true;
				this.selectedLogic = this.$t("MKL_PEAK_STR");
				this.logicDescription1 = this.$t("MKL_PK_LINE1_STR");
				this.logicDescription2 = this.$t("MKL_PK_LINE2_STR");
				this.logicDescription3 = "";
				this.bAvg = false;
				this.bSelect = false;
				this.bAny = false;
			}

		},
		sensor1() {
			this.bSensor1 = this.bSensor1 ? false : true;
		},
		selectWhere() {
			if (this.bSpot) {
				this.bSpot = false;
				this.bEob = true;
				this.whereDescription1 = this.$t("MKW_EOB_LINE1_STR");
				this.whereDescription2 = this.$t("MKW_EOB_LINE2_STR");
				this.selectedWhere = this.$t("MK_WHERE_EOB_STR");
			} else if (this.bEob) {
				if (!this.bAvg) {
					this.bSpot = true;
					this.bEob = false;
					this.whereDescription1 = this.$t("MKW_SP_LINE1_STR");
					this.whereDescription2 = "";
					this.selectedWhere = this.$t("MK_WHERE_SPOT_STR");
				}
			}
		},
		save() {
			let temp = "markadvanced"+this.id;
			let tempData = {
							logic:this.selectedLogic, 
							where:this.selectedWhere,
							sensor1:this.bSensor1,
							count:this.senCount
						};
			localStorage.setItem(temp, JSON.stringify(tempData));
			// this.$router.push({ path: '/markers'});
		},
		cancel() {
			// this.$router.push({ path: '/markers'});
		},
		inputNum(val) {
			this.senCount = val;
		}
	}
};
</script>
<style scoped>
	.label {
		border: 1px solid black !important;
		box-shadow: none !important;
		height: 100%;
		width: 100%;
	}
	.bottom-btn {
		border: 1px solid black !important;
		box-shadow: none !important;
		height: 100%;
		width: 230px;
	}
</style>
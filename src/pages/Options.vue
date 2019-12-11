<template>
  <div class="Options">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row status-line-height">
                <p class="fontsize-13 col-2 text-right label-top-option">{{ $t("M_OPTIONS_STR") }}</p>
				<p class="fontsize-13 text-right col-4 label-top-option">{{ $t("AUTOS_STR") }}</p>
				<button class="col-1" @click="autoSpeed">{{autoSpeedValue}}</button>
            </div>

			<div class="row screen-row status-line-height v-maring-option">
                <p class="fontsize-13 text-right col-6 chain-speed-top">{{ $t("CHAIN_SP_STR") }}</p>
				<MHKeyboard
					width="20%"
					class="option-input-top-padding"
					datatype="integer"
					v-on:childToParent="overSpeed"
					:init="chainSpeedValue"
					:default="'0.0'"
					icon="keyboard"
					instructmsg = "Please insert value"
					title="Spot"
					max=3000
					min=0
				/>
				<p class="fontsize-13 col-2 text-left chain-speed-top">Ft/Min</p>
            </div>

			<div class="row screen-row status-line-height v-maring-option">
                <p class="fontsize-13 text-right col-6 label-top-option">{{ $t("AUTOZ_STR") }}</p>
				<button class="col-1" @click="autoZero">{{autoZeroValue}}</button>
            </div>

			<div class="row screen-row status-line-height v-maring-option">
                <p class="fontsize-13 text-right col-6 label-top-option">{{ $t("OPT_LSEN_STR") }}</p>
				<button class="col-2" @click="lightSensor">{{lightSensorValue}}</button>
            </div>

			<div class="row screen-row status-line-height v-maring-option">
                <p class="fontsize-13 text-right col-6 label-top-option">{{ $t("LIMSW_STR") }}</p>
				<button class="col-1" @click="limitSwitch">{{limitSwitchValue}}</button>
            </div>

			<div class="row screen-row status-line-height v-maring-option">
                <p class="fontsize-13 text-right col-6 label-top-option">{{ $t("UNITS_STR") }}</p>
				<button class="col-2" @click="units">{{unitsValue}}</button>
            </div>

			<div class="row screen-row status-line-height">
                <p class="fontsize-13 text-right col-6 label-top-option">{{ $t("PASSWORD_STR") }}</p>
				<button class="col-1" @click="password">{{passwordValue}}</button>
            </div>

			<NavigationBar v-bind:next="next" />
          </div>
		</div>
      </div>
    </q-page>
  </div>
</template>
<script>
import NavigationBar from "../components/NavigationBar";
import MHKeyboard from "../components/MHKeyboard";
export default {
  	name: "Options",
  	components: { 
		NavigationBar,
		MHKeyboard
	},
  	data() {
    	return {
			autoSpeedValue: 'Off',
			chainSpeedValue: 100,
			autoZeroValue: 'Off',
			lightSensorValue: 'Multi',
			limitSwitchValue: 'On',
			unitsValue: 'U.S.',
			passwordValue: 'Off',
			next: '/sensorsetup'
    	};	
	},
  	methods: {
		autoSpeed() {
			this.autoSpeedValue = this.autoSpeedValue == 'Off' ? 'On' : 'Off';
			localStorage.setItem("autoSpeedValue", this.autoSpeedValue);
		},
		autoZero() {
			this.autoZeroValue = this.autoZeroValue == 'Off' ? 'On' : 'Off';
			localStorage.setItem("autoZeroValue", this.autoZeroValue);
		},
		limitSwitch() {
			this.limitSwitchValue = this.limitSwitchValue == 'Off' ? 'On' : 'Off';
			localStorage.setItem("limitSwitchValue", this.limitSwitchValue);
		},
		password() {
			this.passwordValue = this.passwordValue == 'Off' ? 'On' : 'Off';
			localStorage.setItem("passwordValue", this.passwordValue);
		},
		lightSensor() {
			this.lightSensorValue = this.lightSensorValue == 'Multi' ? 'Single' : 'Multi';
			localStorage.setItem("lightSensorValue", this.lightSensorValue);
		},
		units() {
			this.unitsValue = this.unitsValue == 'U.S.' ? 'Metric' : 'U.S.';
			localStorage.setItem("unitsValue", this.unitsValue);
		},
		overSpeed(val) {
			this.chainSpeedValue = val;
			localStorage.setItem("chainSpeedValue", this.chainSpeedValue);
		}
	},
	beforeMount() {
		this.autoSpeedValue = localStorage.getItem("autoSpeedValue") === null ? "Off" : localStorage.getItem("autoSpeedValue");
		this.autoZeroValue = localStorage.getItem("autoZeroValue") === null ? "Off" : localStorage.getItem("autoZeroValue");
		this.limitSwitchValue = localStorage.getItem("limitSwitchValue") === null ? "On" : localStorage.getItem("limitSwitchValue");
		this.passwordValue = localStorage.getItem("passwordValue") === null ? "Off" : localStorage.getItem("passwordValue");
		this.lightSensorValue = localStorage.getItem("lightSensorValue") === null ? "Multi" : localStorage.getItem("lightSensorValue");
		this.unitsValue = localStorage.getItem("unitsValue") === null ? "U.S." : localStorage.getItem("unitsValue");
		this.chainSpeedValue = localStorage.getItem("chainSpeedValue") === null ? 100 : localStorage.getItem("chainSpeedValue");
	}
};
</script>
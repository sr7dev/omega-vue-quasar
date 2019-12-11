<template>
  <div class="Report">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row status-line-height">
				<div class="col-2">
                	<p class="fontsize-14 text-left status-line-height">{{ $t("REPORT_STR") }}</p>
					<p class="fontsize-10 text-left status-line-height">{{ $t("MKL_PEAK_STR") }}</p>
				</div>
				<div class="col-1">
					<p class="fontsize-10 text-left status-line-height">{{ $t("FIRST_STR") }}</p>
					<p class="fontsize-10 text-left status-line-height">{{ $t("LAST_STR") }}</p>
				</div>
				<div class="col-7"></div>
				<button class="col-2" @click="clear">{{ $t("CLEAR_STR") }}</button>
            </div>

			<div class="row content-row">
				<div class="col-1"></div>
				<div class="col-10">
					<input
						:value="info.companyName"
						class="inputbox fontsize-14"
						@input="onInputChangeCompanyName"
						ref="company"
						@keyup.esc="closeKeyboard()"
						@focus="
							showkeyboardCompany = true;
							showkeyboardLocation = false;"
						placeholder="Company name"
						style="width:100%"
					/>
				</div>
				<div class="keyboard-container">
					<span
						class="closeKeyboard"
						@click="closeKeyboard()"
						v-if="showkeyboardCompany == true"
					>X</span
					>
					<SimpleKeyboard
						style="background-color:#FFF;"
						@onChange="onChangeCompany"
						@onKeyPress="onKeyPressCompany"
						:input="info.companyName"
						v-if="showkeyboardCompany == true"
					/>
				</div>
				<div class="col-1"></div>
            </div>

			<div class="row content-row">
				<div class="col-2"></div>
				<div class="col-4 fontsize-14 label-top-padding">
					{{ $t("W_LOCATION_STR") }}
				</div>
				<div class="col-5">
					<input
						:value="info.location"
						class="inputbox fontsize-14"
						@input="onInputChangeLocation"
						ref="locationRef"
						@keyup.esc="closeKeyboard()"
						@focus="
							showkeyboardCompany = false;
							showkeyboardLocation = true;"
						placeholder="omega-001"
					/>
				</div>
				<div class="keyboard-container">
					<span
						class="closeKeyboard"
						@click="closeKeyboard()"
						v-if="showkeyboardLocation == true"
					>X</span
					>
					<SimpleKeyboard
						style="background-color:#FFF;"
						@onChange="onChangeLocation"
						@onKeyPress="onKeyPressLocation"
						:input="info.loaction"
						v-if="showkeyboardLocation == true"
					/>
				</div>
				<div class="col-1"></div>
            </div>

			<div class="row screen-row">
                <div class="col-6" style="border: solid 1px">
					<div class="row screen-row">
						<p class="col-6 fontsize-14">{{ $t("RPT_TOTAL_STR") }}</p>
						<p class="col-6 fontsize-14">{{ total }}</p>
					</div>
					<div class="row screen-row">
						<p class="col-6 fontsize-14">{{ $t("RPT_PASS_STR") }}</p>
						<p class="col-6 fontsize-14">{{ pass }}</p>
					</div>
					<div class="row screen-row">
						<p class="col-6 fontsize-14">{{ $t("RPT_MEAN_STR") }}</p>
						<p class="col-6 fontsize-14">{{ mean }}</p>
					</div>
					<div class="row screen-row">
						<p class="col-6 fontsize-14">{{ $t("RPT_STD_STR") }}</p>
						<p class="col-6 fontsize-14">{{ std }}</p>
					</div>
                </div>
				<div class="col-6" style="border: solid 1px">
					<div class="row screen-row">
						<p class="col-6 fontsize-14">{{ $t("MRK_WET_STR") }}&nbsp;1:</p>
						<p class="col-6 fontsize-14">{{ wet1 }}</p>
					</div>
					<div class="row screen-row">
						<p class="col-6 fontsize-14">{{ $t("MRK_WET_STR") }}&nbsp;2:</p>
						<p class="col-6 fontsize-14">{{ wet2 }}</p>
					</div>
					<div class="row screen-row">
						<p class="col-6 fontsize-14">{{ $t("MRK_WET_STR") }}&nbsp;3:</p>
						<p class="col-6 fontsize-14">{{ wet3 }}</p>
					</div>
					<div class="row screen-row">
						<p class="col-6 fontsize-14">{{ $t("MRK_WET_STR") }}&nbsp;4:</p>
						<p class="col-6 fontsize-14">{{ wet4 }}</p>
					</div>
                </div>
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
import SimpleKeyboard from "../components/SimpleKeyboard";
export default {
  	name: "Report",
	  components: { NavigationBar,
	  				SimpleKeyboard,
	},
  	data() {
    	return {
			info: {
				companyName: "",
				location: ""
			},
			showkeyboardCompany: false,
			showkeyboardLocation: false,

			total: 0,
			pass: 0,
			mean: '0.0',
			std: '0.00',
			wet1: 0,
			wet2: 0,
			wet3: 0,
			wet4: 0
    	};	
	},
  	methods: {
		clear() {
			this.info.companyName = "";
			this.info.location = "";
		},
		closeKeyboard() {
			(this.showkeyboardCompany = false),
			(this.showkeyboardLocation = false)
		},
		onChangeCompany(text) {
			this.info.companyName = text;
		},
		onInputChangeCompanyName(text) {
			this.info.companyName = text.target.value;
		},
		onChangeLocation(text) {
			this.info.location = text;
		},
		onInputChangeLocation(text) {
			this.info.location = text.target.value;
		},
		onKeyPressCompany(button) {
			this.$refs.company.focus();
			if (button == "{enter}") {
				this.showkeyboardCompany = false;
			}
		},
		onKeyPressLocation(button) {
			this.$refs.locationRef.focus();
			if (button == "{enter}") {
				this.showkeyboardLocation = false;
			}
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
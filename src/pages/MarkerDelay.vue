<template>
    <div class="MarkerDelays">
		<q-btn :label="btnLabel" @click="dialog = true" class="label"></q-btn>
		<q-dialog v-model="dialog">
			<q-card class="marker-advanced-qcard">
				<div class="screen-adv">
                    <q-card-section>
                        <div class="fontsize-18 text-center">
                            {{ $t("MARK_DELAY_STR") }}
                        </div>
                        <q-icon 
                            name="close" 
                            @click="pressESC"
                            style="position: absolute;
                                right: 10px;
                                top: 10px;
                                font-size: 20px;"
                            />
                    </q-card-section>
                    <div class="row content-row fontsize-14" style="margin-top: 10%;">
                        <div class="col-2"></div>
                        <div class="col-3" style="padding-top:10px">
                            <p class="fontsize-10 status-line-height">{{ $t("MD_SP_LINE1_STR")}}</p>
                            <p class="fontsize-10 status-line-height">{{ $t("MD_SP_LINE2_STR")}}</p>
                        </div>
                        <MHKeyboard
                            width="20%"
                            datatype="float"
                            v-on:childToParent="inputSpot"
                            :init="spotValue"
                            :default="'0.0'"
                            icon="keyboard"
                            instructmsg = "Please insert value"
                            title="Spot"
                            maxlength=20
                        />
                        <div class="col-4" style="padding-top:10px">
                            {{ $t("INCH_STR")}}
                        </div>
                    </div>
                    <div class="row content-row fontsize-14 v-delay-margin">
                        <div class="col-2"></div>
                        <div class="col-3" style="padding-top:10px">
                            <p class="fontsize-10 status-line-height">{{ $t("MD_EOB_LINE1_STR")}}</p>
                            <p class="fontsize-10 status-line-height">{{ $t("MD_EOB_LINE2_STR")}}</p>
                        </div>
                        <MHKeyboard
                            width="20%"
                            datatype="float"
                            v-on:childToParent="inputEob"
                            :init="eobValue"
                            :default="'0.0'"
                            icon="keyboard"
                            instructmsg = "Please insert value"
                            title="Spot"
                            maxlength=20
                        />
                        <div class="col-4 label-top-padding" style="padding-top:10px">
                            {{ $t("INCH_STR")}}
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
  name: "MarkerDelay",
  components: {
        MHKeyboard
  },
  data() {
    return {
		spotValue: '0.0',
        eobValue: '0.0',
        btnLabel: this.$t("DELAY_STR"),
        dialog: false,
    };
  },
  methods: {
    inputSpot(val) {
      this.spotValue = val;
      localStorage.setItem("delaySpot", this.spotValue);
    },
    inputEob(val) {
      this.eobValue = val;
      localStorage.setItem("delayEob", this.eobValue);
    },
    pressESC() {
        this.dialog = false
    },
  },
  beforeMount() {
      this.spotValue = localStorage.getItem("delaySpot") === null ? '0.0' : localStorage.getItem("delaySpot");
      this.eobValue = localStorage.getItem("delayEob") === null ? '0.0' : localStorage.getItem("delayEob");
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
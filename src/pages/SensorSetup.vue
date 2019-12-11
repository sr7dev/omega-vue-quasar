<template>
    <div id="SensorSetup">
        <q-page class="fixed-padding">
            <div class="screen">
                <div class="content">
                    <div class="q-pa-md">
                        <div class="row screen-row">
                            <div class="col-10">
                                <p class="fontsize-14">
                                    {{ $t("SEN_SETUP_STR") }}
                                </p>
                            </div>
                        </div>
                        <div class="row content-row ">
                            <div class="col-1"></div>
                            <div class="col-2">
                                <p class="fontsize-10 label-top-margin">{{ $t("NUMBER_SEN_STR") }}</p>
                            </div>
                            <div class="col-2 fontsize-10">
                                <q-select class="fontsize-10"
                                    color="teal"
                                    outlined
                                    v-model="valueNumber"
                                    :options="numbers"
                                    @input="changeNumber"
                                ></q-select>
                            </div>
                        </div>
                        <div class="row content-row ">
                            <div class="col-1"></div>
                            <div class="col-2">
                                <p class="fontsize-10 label-top-margin">{{ $t("SEN_TYPE_STR") }}</p>
                            </div>
                            <div class="col-2 fontsize-10">
                                <q-select class="fontsize-10"
                                    color="teal"
                                    outlined
                                    v-model="valueType"
                                    :options="types"
                                    @input="changeValue"
                                ></q-select>
                            </div>
                        </div>
                        <div class="row content-row">
                            <div class="col-7"></div>
                            <div class="col-5">
                                <div class="modal-dialog">
                                    <q-dialog v-model="bWarning" persistent>
                                        <q-card class="sensor-setup-qcard">
                                            <p class="q-ml-sm fontsize-18 text-center">{{$t("WARNING_STR")}}</p>
                                            <div class="warning-text">
                                                <p class="fontsize-10 error-text">{{ $t("TEMP_WARN1_STR") }}</p>
                                                <p class="fontsize-10 error-text">{{ $t("TEMP_WARN2_STR") }}</p>
                                                <p class="fontsize-10 error-text">{{ $t("TEMP_WARN3_STR") }}</p>
                                                <p class="fontsize-10 error-text">{{ $t("TEMP_WARN4_STR") }}</p>
                                                <p class="fontsize-10 error-text">{{ $t("TEMP_WARN5_STR") }}</p>
                                                <p class="fontsize-10 error-text">{{ $t("TEMP_WARN6_STR") }}</p>
                                                <p class="fontsize-10 error-text">{{ $t("TEMP_WARN7_STR") }}</p>
                                            </div>
                                            <button flat v-close-popup class="modal-button" @click="okButton">{{$t("OK_STR")}}</button>
                                            <button flat v-close-popup class="modal-button" @click="cancelButton">{{$t("CANCEL_STR")}}</button>
                                        </q-card>
                                    </q-dialog>
                                </div>
                            </div>
                        </div>
                        <div class="border-sensor-setup"></div>
                        <div class="row content-row ">
                            <span class="col-5 fontsize-14">
                            {{ $t("SAM_TEMP_STR") }}
                            </span>
                            <span class="col-7 fontsize-14">
                            {{ $t("SAM_COMPENSATION_STR") }}
                            </span>
                        </div>
                        <div class="row content-row ">
                            <p class="fontsize-12 col-1"></p>
                            <p class="fontsize-12 col-2 label-top-margin">{{ $t("TEMP_ENA_STR") }}</p>
                            <button class="fontsize-10 col-2" style="line-height:1em;" @click="enableToggle">
                            {{ toggleString }}
                            </button>
                            <p class="fontsize-12 col-2"></p>
                            <p class="col-2 status-line-height">
                                <span class="fontsize-10">{{$t("TEMP_STAT_STR")}}</span><br/>
                                <span class="fontsize-12" >{{statusString}}</span>
                            </p>
                        </div>
                        <div class="row content-row">
                            <div class="col-4">
                                <p class="fontsize-8">{{ $t("TARGET_STR") }}</p>
                                <p class="fontsize-14">{{targetVal}}F</p>
                            </div>
                            <div class="col-4">
                                <p class="fontsize-8">{{ $t("HEAD_STR") }}</p>
                                <p class="fontsize-14">{{headVal}}F</p>
                            </div>
                            <div class="col-4">
                                <p class="fontsize-8">{{ $t("TEMP_CASE_STR") }}</p>
                                <p class="fontsize-14">{{caseVal}}F</p>
                            </div>
                        </div>
                        <div class="row content-row">
                            <p class="col-1"></p>
                            <button class="col-2 fontsize-9 head-calibration-btn" @click="clickCalibration">
                            {{ $t("HEAD_STR") }}
                            <br />
                            {{ $t("M_CALIBRATE_STR") }}
                            </button>
                            <MHKeyboard
                                width="10%"
                                class="option-input-top-padding sensor-setup"
                                datatype="integer"
                                v-on:childToParent="typingCali1"
                                :init="headCalibration1"
                                :default="'0000'"
                                icon="keyboard"
                                instructmsg = "Please insert value"
                                title="Head Calibrate1"
                                maxlength=4
                                v-if="bEditable1"
                            />
                            <p class="col-1 calibration-text-valign" style="text-align:center;" v-if="!bEditable1">{{headCalibration1}}</p>
                            <MHKeyboard
                                width="10%"
                                class="option-input-top-padding sensor-setup"
                                datatype="integer"
                                v-on:childToParent="typingCali2"
                                :init="headCalibration2"
                                :default="'0000'"
                                icon="keyboard"
                                instructmsg = "Please insert value"
                                title="Head Calibrate2"
                                maxlength=4
                                v-if="bEditable2"
                            />
                            <p class="col-1 calibration-text-valign" style="text-align:center;" v-if="!bEditable2">{{headCalibration2}}</p>
                        </div>
                        <NavigationBar v-bind:next="next" ></NavigationBar>
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
    name: "SensorSetup",
    components: {
        NavigationBar,
        MHKeyboard
    },
    beforeMount() {
        this.toggleString = localStorage.getItem("sen-enable") == null ? "off" : localStorage.getItem("sen-enable");
        this.bEnable = this.toggleString == "On" ? true : false;
        this.valueNumber = localStorage.getItem("sen-number") == null ? 1 : localStorage.getItem("sen-number");
        this.valueType = localStorage.getItem("sen-value") == null ? 21860 : localStorage.getItem("sen-value");
        this.headCalibration1 = localStorage.getItem("sen-head1") == null ? '0000': localStorage.getItem("sen-head1");
        this.headCalibration2 = localStorage.getItem("sen-head2") == null ? '0000': localStorage.getItem("sen-head2");
    },
    data() {
        return {
            numbers: [ 1, 2, 3, 4, 5, 6, 7, 8 ],
            valueNumber: 1,
            types: [ '21860', '148WM', '14660'],
            valueType: '21860',
            bEnable: false,
            toggleString: 'Off',
            statusString: 'Offline',
            targetVal: '0.0',
            headVal: '0.0',
            caseVal: '0.0',
            headCalibration1: '0000',
            headCalibration2: '0000',
            bWarning: false,
            bEditable1: false,
            bEditable2: false,
            next: '/encodersetup'
        };
    },
    methods: {
        enableToggle() {
            this.bEnable = this.bEnable ? false : true;
            this.toggleString = this.bEnable ? this.$t("TGL_ON_STR") : this.$t("TGL_OFF_STR");
            localStorage.setItem("sen-enable", this.toggleString);
            // this.statusString = this.bEnable ? this.$t("TEMP_ONLINE_STR") : this.$t("TEMP_OFFLINE_STR");
        },
        clickCalibration() {
            this.bWarning = true; 
        },
        okButton() {
            this.bWarning = false; 
            this.bEditable1 = true;
            this.bEditable2 = true;
        },
        cancelButton() {
            this.bWarning = false; 
        },
        typingCali1(val) {
            this.headCalibration1 = val;
            localStorage.setItem("sen-head1", this.headCalibration1);
            this.bEditable1 = false;
        },
        typingCali2(val) {
            this.headCalibration2 = val;
            localStorage.setItem("sen-head2", this.headCalibration2);
            this.bEditable2 = false;
        },
        changeNumber() {
            localStorage.setItem("sen-number", this.valueNumber);
        },
        changeValue() {
            localStorage.setItem("sen-value", this.valueType);
        }
    }
};
</script>
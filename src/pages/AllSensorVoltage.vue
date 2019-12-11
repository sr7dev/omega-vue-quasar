<template>
  <div class="AllSensorVoltage">
    <q-page>
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row">
              <div class="col">
                <p class="fontsize-18">
                  {{ $t("SAM_SENSORS_STR") }}
                </p>
              </div>
              <div class="col">
                <p class="fontsize-18">
                  <i class="fa fa-bolt" aria-hidden="true"></i>
                  {{ $t("SEN_VOLT_STR") }}
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <button class="nav-button fontsize-12" style="float: right">
                  <i class="fa fa-balance-scale" aria-hidden="true"></i>
                  {{ $t("SEN_ZERO_STR") }}
                </button>
              </div>
              <div class="col"></div>
            </div>

            <div class="row">
              <div class="col">
                <div v-for="sensor in leftRow" v-bind:key="sensor.id">
                  <div class="row">
                    <div class="col-3">
                      <p class="fontsize-20">{{ sensor.id }}:</p>
                    </div>
                    <div class="col-8" style="text-align: right;">
                      <p class="fontsize-20">{{ toFloat2(sensor.voltage) }}V</p>
                    </div>
                    <div class="col-1" />
                  </div>
                  <p v-if="sensor.isAlarm" class="fontsize-8 alarm">
                    {{ $t("ALARM_STR") }}
                  </p>
                </div>
              </div>

              <div class="col">
                <div v-for="sensor in rightRow" v-bind:key="sensor.id">
                  <div class="row">
                    <div class="col-3">
                      <p class="fontsize-20">{{ sensor.id }}:</p>
                    </div>
                    <div class="col-8" style="text-align: right;">
                      <p class="fontsize-20">{{ toFloat2(sensor.voltage) }}V</p>
                    </div>
                    <div class="col-1" />
                  </div>
                  <p v-if="sensor.isAlarm" class="fontsize-8 alarm">
                    {{ $t("ALARM_STR") }}
                  </p>
                </div>
              </div>
            </div>

            <NavigationBar />
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
  import NavigationBar from "../components/NavigationBar";
export default {
  name: "AllSensor",
  components: {
    NavigationBar,
  },
  methods: {
    toFloat2(val) {
      var num = val;
      if (typeof val === "string") {
        num = parseFloat(val);
      }

      return num.toFixed(2);
    },
    mainmenu() {
      this.$router.push({ path: "/main" });
    }
  },
  computed: {
    leftRow: function() {
      return this.sensors.filter(function(sensor) {
        return sensor.id <= 4;
      });
    },
    rightRow: function() {
      return this.sensors.filter(function(sensor) {
        return sensor.id > 4;
      });
    }
  },
  data() {
    return {
      sensors: [
        {
          id: 1,
          voltage: 0,
          isAlarm: true
        },
        {
          id: 2,
          voltage: 0,
          isAlarm: false
        },
        {
          id: 3,
          voltage: 12.03,
          isAlarm: false
        },
        {
          id: 4,
          voltage: 0,
          isAlarm: true
        },
        {
          id: 5,
          voltage: 0,
          isAlarm: false
        },
        {
          id: 6,
          voltage: 1.8,
          isAlarm: true
        },
        {
          id: 7,
          voltage: 0,
          isAlarm: false
        },
        {
          id: 8,
          voltage: 0,
          isAlarm: false
        }
      ]
    };
  }
};
</script>

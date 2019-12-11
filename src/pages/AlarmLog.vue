<template>
  <div class="AlarmLog">
    <q-page class="fixed-padding ">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-2"></div>
              <div class="col-10">
                <p class="fontsize-16">
                  {{ $t("ALARM_HISTORY_STR") }}
                </p>
              </div>
            </div>

            <div class="row screen-row">
              <div class="col-8">
                <p class="fontsize-16">
                  {{ $t("AH_TIME_STR") }}: {{ $t("AH_DESC_STR") }}
                </p>
              </div>
              <div class="col-4">
                <button
                  class="fontsize-12 cursor-pointer"
                  style="float: right; margin-right: 10px"
                >
                  <i class="fa fa-refresh" aria-hidden="true"></i>
                  {{ $t("AH_UPDATE_STR") }}
                </button>
              </div>
            </div>

            <div
              class="row screen-row alarm-content"
              style="height:260px;"
              :class="{ overflowscroll: showScroll }"
            >
              <p class="fontsize-10" v-for="item in alarms" :key="item.id">
                {{ item.timestamp }}&nbsp;{{ item.message }}
              </p>
            </div>

            <NavigationBar v-bind:iconClass="iconClass"
                           v-bind:label="label"
                           v-bind:path="path" />
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
  import NavigationBar from "../components/NavigationBar";
  export default {
    name: "Alarms",
    components: {
      NavigationBar,
    },
    methods: {},
    data() {
      return {
        alarmsCount: null,
        showScroll: false,
        iconClass: "fa fa-eraser",
        label: this.$t("AH_CLEAR_STR"),
        path: "#",      // TODO: Ajax call.
        alarms: [
          {
            id: 1,
            timestamp: "01/01/2003 00:01:14",
            message: "Too Many CAN BUS Errors"
          },
          {
            id: 2,
            timestamp: "01/01/2003 00:01:14",
            message: "CAN BUS Error 60"
          },
          {
            id: 3,
            timestamp: "01/01/2003 00:01:14",
            message: "CAN BUS Error 60"
          },
          {
            id: 4,
            timestamp: "01/01/2003 00:01:14",
            message: "CAN BUS Error 60"
          },
          {
            id: 5,
            timestamp: "01/01/2003 00:01:14",
            message: "CAN BUS Error 60"
          },
          {
            id: 6,
            timestamp: "01/01/2003 00:01:14",
            message: "CAN BUS Error 60"
          },
          {
            id: 7,
            timestamp: "01/01/2003 00:01:14",
            message: "CAN BUS Error 60"
          },
          {
            id: 8,
            timestamp: "01/01/2003 00:01:14",
            message: "CAN BUS Error 60"
          },
          {
            id: 9,
            timestamp: "01/01/2003 00:01:14",
            message: "CAN BUS Error 60"
          },
          {
            id: 10,
            timestamp: "01/01/2003 00:01:14",
            message: "CAN BUS Error 60"
          },
          {
            id: 11,
            timestamp: "01/01/2003 00:01:14",
            message: "CAN BUS Error 60"
          }
        ]
      };
    },
    mounted() {
      this.alarmsCount = this.alarms.length;
      if (this.alarmsCount > 10) {
        this.showScroll = true;
      }
    }
  };
</script>

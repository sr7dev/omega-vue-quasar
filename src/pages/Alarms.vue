<template>
  <div class="Alarms">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row screen-row">
              <div class="col-4">
                <p class="fontsize-18">
                  {{ $t("ALARMS_STR") }}
                </p>
              </div>
              <div class="col-8 fontsize-18">
                <button class="cursor-pointer" style="float: right; margin-right: 10px">
                  <i
                    class="fa fa-repeat"
                    aria-hidden="true"
                    style="margin-right: 12px"
                  ></i>
                  {{ $t("AL_RESET_STR") }}
                </button>
              </div>
            </div>

            <div class="row screen-row">
              <div class="col-5">
                <p class="fontsize-18">
                  {{ $t("AL_ACTIVE_STR") }}
                </p>
              </div>
              <div class="col-7">
                <button class="cursor-pointer" style="float: right; margin-right: 10px" @click="alarmlog">
                  <i
                    class="fa fa-file-text-o"
                    aria-hidden="true"
                    style="margin-right: 12px"
                  ></i>
                  {{ $t("VIEW_LOG_STR") }}
                </button>
              </div>
            </div>
            <div
              class="row screen-row alarm-content"
              :class="{ overflowscroll: showScroll }"
              style="max-height:260px;"
            >
              <p class="fontsize-10" v-for="item in alarms" :key="item">
                {{ item }}
              </p>
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
  export default {
    name: "Alarms",
    components: {
      NavigationBar,
    },
    methods: {
      alarmlog() {
        this.$router.push({ path: '/alarmlog' });
      },
    },
    data() {
      return {
        alarmsCount: null,
        showScroll: false,
        alarms: [
          "CAN Bus Error",
          "Max Alarm Count",
          "Max Alarm Count",
          "Max Alarm Count",
          "Max Alarm Count",
          "Max Alarm Count",
          "Max Alarm Count",
          "Max Alarm Count",
          "Max Alarm Count"
        ],
        next: "/alarmsetup",
      };
    },
    mounted() {
      this.alarmsCount = this.alarms.length;
      if (this.alarmsCount > 5) {
        this.showScroll = true;
      }
    }
  };
</script>

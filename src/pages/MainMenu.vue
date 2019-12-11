<template>
  <div class="MainMenu">
    <q-page>
      <div class="screen">
        <div class="content">
          <div class="q-pa-md" style="padding:10px">
            <div class="row content-row">
              <div class="col-2"></div>
              <div class="col-8 text-center">
                <button class="clear">
                  <p class="fontsize-18">
                    {{ $t("MAIN_MENU_STR") }}
                  </p>
                </button>
              </div>
              <div class="col-2"></div>
            </div>

            <div class="row content-row">
              <div class="col-6 left-menu-button">
                <button class="menu-button fontsize-8 cursor-pointer" @click="markers">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  {{ $t("MARK_CONFIG_STR") }}
                </button>
              </div>
              <div class="col-6">
                <button class="menu-button fontsize-8 cursor-pointer" @click="material">
                  <i class="fa fa-tree" aria-hidden="true"></i>
                  {{ $t("W_MATERIAL_STR") }}
                </button>
              </div>
            </div>

            <div class="row content-row">
              <div class="col-6 left-menu-button">
                <button class="menu-button fontsize-8 cursor-pointer" @click="sensors">
                  <i class="fa fa-podcast" aria-hidden="true"></i>
                  {{ $t("M_SENSORS_STR") }}
                </button>
              </div>
              <div class="col-6">
                <button class="menu-button fontsize-8 cursor-pointer" @click="options">
                  <i class="fa fa-wrench" aria-hidden="true"></i>
                  {{ $t("OPTIONS_STR") }}
                </button>
              </div>
            </div>

            <div class="row content-row">
              <div class="col-6 left-menu-button">
                <button class="menu-button fontsize-8 cursor-pointer" @click="calibrate">
                  <i class="fa fa-tint" aria-hidden="true"></i>
                  {{ $t("SEN_CAL_STR") }}
                </button>
              </div>
              <div class="col-6">
                <button class="menu-button fontsize-8 cursor-pointer" @click="alarms">
                  <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                  {{ $t("ALM_ALARMS_STR") }}
                </button>
              </div>
            </div>

            <div class="row content-row">
              <div class="col-6 left-menu-button">
                <button class="menu-button fontsize-8 cursor-pointer" @click="system">
                  <i class="fa fa-cogs" aria-hidden="true"></i>
                  {{ $t("M_SYSTEM_STR") }}
                </button>
              </div>
              <div class="col-6">
                <button class="menu-button fontsize-8 cursor-pointer" @click="report">
                  <i class="fa fa-list-alt" aria-hidden="true"></i>
                  {{ $t("REPORT_STR") }}
                </button>
              </div>
            </div>

            <div class="row content-row">
              <div class="col-6 left-menu-button ">
                <button class="menu-button fontsize-8 cursor-pointer" @click="version">
                  <i class="fa fa-file-text-o" aria-hidden="true"></i>
                  {{ $t("M_VERSION_STR") }}
                </button>
              </div>
              <div class="col-6">
                <button class="menu-button fontsize-8 cursor-pointer" @click="language">
                  <i class="fa fa-language" aria-hidden="true"></i>
                  {{ $t("M_LANGUAGE_STR") }}
                </button>
              </div>
            </div>

            <NavigationBar v-bind:showPrev="showPrev" v-bind:showHome="showHome" />
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
  import NavigationBar from "../components/NavigationBar";
export default {
    name: "MainMenu",
    components: {
      NavigationBar
    },
    data: function() {
      return {
        showPrev: false,
        showHome: true,
      };
    },
    methods: {
      markers() {
        this.$router.push({ path: "/markers" });
      },
      sensors() {
        this.$router.push({ path: "/sensors" });
      },
      calibrate() {
        this.$router.push({ path: "/calibrate" });
      },
      system() {
        this.$router.push({ path: "/system" });
      },
      version() {
        this.$router.push({ path: "/about" });
      },
      material() {
        this.$router.push({ path: "/material" });
      },
      options() {
        this.$router.push({ path: "/options" });
      },
      alarms() {
        this.$router.push({ path: "/alarms" });
      },
      report() {
        this.$router.push({ path: "/report" });
      },
      language() {
        this.$router.push({ path: "/language" });
      },
    }
};
</script>

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
                    {{ $t("SYS_MENU_STR") }}
                  </p>
                </button>
              </div>
              <div class="col-2"></div>
            </div>

            <div class="row content-row">
              <div class="col-4">&nbsp;</div>
              <div class="col-6">
                <button class="menu-button fontsize-14 cursor-pointer" @click="setClock">
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                  {{ $t("SET_CLOCK_STR") }}
                </button>
              </div>
            </div>

            <!-- Spacer -->
            <div class="row content-row">
              <div class="col-6">&nbsp;</div>
            </div>

            <div class="row content-row">
              <div class="col-4">&nbsp;</div>
              <div class="col-6">
                <button class="menu-button fontsize-14 cursor-pointer" @click="network">
                  <i class="fa fa-sitemap" aria-hidden="true"></i>
                  {{ $t("M_NET_STR") }}
                </button>
              </div>
            </div>

            <NavigationBar v-bind:showHome="showHome" />
          </div>
          </div>
      </div>
    </q-page>
  </div>
</template>

<script>
  import NavigationBar from "../components/NavigationBar";
export default {
    name: "SystemMenu",
    components: {
      NavigationBar
    },
    data: function() {
      return {
        showHome: true,
      };
    },
    methods: {
      setClock() {
        this.$router.push({ path: "/setclock" });
      },
      network() {
        this.$router.push({ path: "/networksetting" });
      },      
    }
};
</script>

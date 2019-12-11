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
                    {{ $t("SET_CLOCK_STR") }}
                  </p>
                </button>
              </div>
              <div class="col-2"></div>
            </div>

            

            <div class="row content-row fontsize-14">
              <div class="col-3 bold">Current Time</div>
              <div class="col-6">
                <div id="curTime"></div>
              </div>
            </div>

            <div class="row content-row fontsize-14">
              <div class="col-3 bold padding-top-10">Edit Time</div>
              <div class="col-6">
                <input class="fontsize-14 height-fit-content" type="datetime-local">
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
    name: "SetClock",
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

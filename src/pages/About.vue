<template>
  <div class="about">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row" style="margin-bottom: 5px;">
              <div class="col">
                <p class="fontsize-20">
                  {{ $t("ABOUT_STR") }}
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-5 left-label">
                <p class="fontsize-16">{{ $t("ABT_MODEL_STR") }}&nbsp;</p>
              </div>
              <div class="col-7">
                <p class="fontsize-16">&nbsp;{{ $t("string_omega") }}</p>
              </div>
            </div>

            <div class="row">
              <div class="col-5 left-label">
                <p class="fontsize-16">{{ $t("ABT_VER_STR") }}&nbsp;</p>
              </div>
              <div class="col-7">
                <p class="fontsize-16">&nbsp;{{ version }}</p>
              </div>
            </div>

            <div class="row row-column">
              <p class="fontsize-14">
                Wagner Electronics
              </p>
              <p class="fontsize-14">
                (541) 582-0541
              </p>
              <p class="fontsize-12">
                www.wagnermeters.com
              </p>
            </div>
            <NavigationBar  v-bind:next="next" />
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
  import NavigationBar from "../components/NavigationBar";
  export default {
    name: "About",
    components: {
      NavigationBar,
    },
    data() {
      return {
        version: "05.28",
        next: "",
      };
    },
    methods: {}
  };
</script>

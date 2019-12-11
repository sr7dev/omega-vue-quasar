<template>
  <div class="Home2">
    <q-page class="fixed-padding">
      <div class="screen">
        <div class="content">
          <div class="q-pa-md">
            <div class="row">
              <div class="col-4">
                <AlarmButton />
              </div>
              <div class="col-8">
                <button class="clear cursor-pointer" @click="material">
                  <p class="fontsize-18">
                    <span>{{ $t("MATERIAL_STR") }}</span>
                    {{ materialId }}
                  </p>
                  <!-- <i class="fa fa-pencil margin-left-10" aria-hidden="true"></i> -->
                </button>
              </div>
            </div>

            <div class="row">
              <div style="text-align: center; width: 100%;">
                <p class="fontsize-12">{{ $t("LAST_BD_STR") }}</p>
                <p class="fontsize-12">{{ $t("MKL_PEAK_STR") }}</p>
                <div class="row">
                  <div class="col-5"></div>
                  <button class="dash width-160 cursor-pointer" @click="allmc">
                    <a href="#">
                      <i
                        class="fa fa-tint"
                        aria-hidden="true"
                        style="margin-right: 12px"
                      ></i>
                    </a>
                    <a id="avgavgid" style="color: black">00.0 %</a>
                  </button>
                </div>
                <p class="fontsize-12">{{ $t("AVGH2_STR") }}</p>
                <div class="row">
                  <div class="col-5"></div>
                  <button class="dash width-160 cursor-pointer" @click="allmc">
                    <a href="#">
                      <i
                        class="fa fa-tint"
                        aria-hidden="true"
                        style="margin-right: 12px"
                      ></i>
                    </a>
                    <a id="peakavgid" style="color: black">00.0 %</a>
                  </button>
                </div>
                <p class="fontsize-12">
                  <span class="cursor-pointer" @click="markers">{{ $t("MARKH2_STR") }}</span
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
              </div>
            </div>

            <NavigationBar v-bind:next="next" />
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import AlarmButton from "../components/AlarmButton";
import NavigationBar from "../components/NavigationBar";
export default {
  name: "Home2",
  components: {
    AlarmButton,
    NavigationBar
  },
  data() {
    return {
      materialId: '0',
      next: '/material',
    };
  },
  methods: {
    material() {
      this.$router.push({ path: "/material" });
    },
    allmc() {
      this.$router.push({ path: "/allmc" });
    },
    markers() {
      this.$router.push({ path: "/markers" });
    },
  },
  mounted() {
    this.materialId = localStorage.getItem("material");
  }
};
</script>

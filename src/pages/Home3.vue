<template>
  <q-page>
    <div class="screen">
      <div class="content">
        <div class="q-pa-md full">
          <div class="row">
            <div class="col">
              <AlarmButton />
            </div>
            <div class="col">
              <p class="fontsize-12 min-line">{{ $t("FIRST_STR") }}</p>
              <p class="fontsize-12 min-line">{{ $t("LAST_STR") }}</p>
              <p class="fontsize-12 min-line">{{ $t("MEAN_STR") }}</p>
            </div>
            <div class="col">
              <p class="fontsize-12 min-line">{{ $t("RPT_STD_STR") }}</p>
            </div>
            <div class="col">
              <button
                class="fontsize-10 cursor-pointer"
                style="float: right; margin-right: 10px"
              >
                <i class="fa fa-eraser" aria-hidden="true"></i>
                {{ $t("W_BTN_CLEAR_STR") }}
              </button>
            </div>
          </div>

          <div class="row ">
            <div class="col socket">
              <div id="chart" ref="barchart"></div>
            </div>
          </div>

          <NavigationBar v-bind:iconClass="iconClass"
                         v-bind:label="label"
                         v-bind:path="path" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ApexCharts from "apexcharts";
import AlarmButton from "../components/AlarmButton";
import NavigationBar from "../components/NavigationBar";
export default {
  name: "Home3",
  components: {
    AlarmButton,
    NavigationBar
  },
  methods: {},
  mounted() {
    var i;

    this.options.xaxis.categories.push("<");
    this.series[0].data.push(0);
    for (i = 5; i <= 26; i++) {
      this.options.xaxis.categories.push(i);
      this.series[0].data.push(i);
    }
    this.options.xaxis.categories.push(">");
    this.series[0].data.push(0);

    new ApexCharts(this.$refs.barchart, {
      ...this.options,
      series: this.series
    }).render();
  },
  data() {
    return {
      iconClass: "fa fa-file-text-o",
      label: this.$t("M_REPORT_STR"),
      path: "/report",
      options: {
        chart: {
          id: "vuechart-example",
          type: "bar",
          width: 768,
          height: 270
        },
        xaxis: {
          categories: []
        },
        yaxis: {
          show: false
        },
        dataLabels: {
          enabled: false
        }
      },
      series: [
        {
          data: []
        }
      ]
    };
  }
};
</script>

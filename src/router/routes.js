// import { i18n } from "../boot/i18n";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    // beforeEnter(to, from, next) {
    //   const lang = to.params.lang;
    //   if (!["en", "es"].includes(lang)) return next("en");

    //   if (i18n.locale == lang) {
    //     return next();
    //   }

    //   // import(`i18n/${lang}`).then(msg => {
    //   //   i18n.setLocaleMessage(lang, msg.default || msg);
    //   //   i18n.locale = lang;
    //   //   return next();
    //   // });
    // },
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "about", component: () => import("pages/About.vue") },
      { path: "alarms", component: () => import("pages/Alarms.vue") },
      { path: "alarmlog", component: () => import("pages/AlarmLog.vue") },
      { path: "alarmsetup", component: () => import("pages/AlarmSetup.vue") },
      { path: "allvolt", component: () => import("pages/AllSensorVoltage.vue") },
      { path: "allmc", component: () => import("pages/AllMcPercentage.vue") },
      { path: "calculationresults", component: () => import("pages/CalculationResults.vue") },
      { path: "calibrationeditor", component: () => import("pages/CalibrationDataEditor.vue") },
      { path: "calibrationentry", component: () => import("pages/CalibrationDataEntry.vue") },
      { path: "dnssetup", component: () => import("pages/DnsSetUp.vue") },
      { path: "encodersetup", component: () => import("pages/EncoderSetup.vue") },
      { path: "home3", component: () => import("pages/Home3.vue") },
      { path: "home2", component: () => import("pages/Home2.vue") },
      { path: "language", component: () => import("pages/Language.vue") },
      { path: "main", component: () => import("pages/MainMenu.vue") },
      { path: "networksetting", component: () => import("pages/NetworkSetting.vue") },
      { path: "password", component: () => import("pages/Password.vue") },
      { path: "sensorsetup", component: () => import("pages/SensorSetup.vue") },
      { path: "setclock", component: () => import("pages/SetClock.vue") },
      { path: "system", component: () => import("pages/SystemMenu.vue") },
      { path: "numerickeyboard", component: () => import("pages/NumericKeyboard.vue") },
      { path: "options", component: () => import("pages/Options.vue") },
      { path: "touch", component: () => import("pages/TouchInput.vue") },
      { path: "markers", component: () => import("pages/Markers.vue") },
      { path: "markertest", component: () => import("pages/MarkerTest.vue") },
      // { path: "markerdelay", component: () => import("pages/MarkerDelay.vue") },
      // { path: "markeradvanced", component: () => import("pages/MarkerAdvanced.vue") },
      { path: "report", component: () => import("pages/Report.vue") },
      { path: "material", component: () => import("pages/Material.vue") },
      { path: "materialedit", component: () => import("pages/MaterialEdit.vue") },
      { path: "unicastsetup", component: () => import("pages/UnicastSetup.vue") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;

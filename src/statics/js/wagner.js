// Go FULLSCREEN
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullScreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

var rightnow; // time var
var chart; // global Chart
var stripchart; // global Chart
var initcomplete = 0;
var peakBins = null;
var avgBins = null;
var response = {
  cc_pieces: 0, // Global Response JSON Array
  cc_first: 0,
  cc_last: 0,
  cc_average: 0,
  cc_peak: 0,
  cc_stddev_peak: 0,
  cc_stddev_avg: 0,
  mm_average: 0,
  mm_peak: 0,
  mm_n_sen: 0
};

function postData(data) {
  $.ajax({
    type: 'post',
    url: 'http://192.168.0.23/post-data.php',
    contentType: 'application/json',
    data: JSON.stringify(data), // access in body
  }).done(function () {
    console.log('SUCCESS');
  }).fail(function (msg) {
    console.log('FAIL:', msg);
  }).always(function (msg) {
    console.log('ALWAYS:', msg);
  });
}

function requestData() {
  $.ajax({
    url: "http://192.168.0.23/server-data.php",
    data: {
      cc_pieces: response.cc_pieces,
      cc_first: response.cc_first,
      cc_last: response.cc_last,
      cc_average: response.cc_average,
      cc_peak: response.cc_peak,
      cc_stddev_avg: response.cc_stddev_avg,
      cc_stddev_peak: response.cc_stddev_peak,
      mm_average: response.mm_average,
      mm_peak: response.mm_peak,
      mm_n_sen: response.mm_n_sen
    },
    type: "GET",
    cache: false,
    success: function(point) {
      response = $.parseJSON(point);
      //alert(response);
      $("#nbrdsid").html(response.cc_pieces);
      //$("#nbrdsid").html(response.windowAverage);
      $("#firstbdid").html(response.cc_first);
      $("#lastbdid").html(response.cc_last);
      $("#amcid").html(response.mm_average.toFixed(1) + " %");
      $("#pmcid").html(response.mm_peak.toFixed(1) + " %");

      $("#avgavgid").html(response.cc_average.toFixed(1) + " %");
      $("#avgstdevid").html(response.cc_stddev_avg.toFixed(1) + " %");
      $("#peakavgid").html(response.cc_peak.toFixed(1) + " %");
      $("#peakstdevid").html(response.cc_stddev_peak.toFixed(1) + " %");

      $("#mark1valueid").html(response.cc_mark1.toFixed(1));
      $("#mark2valueid").html(response.cc_mark2.toFixed(1));
      $("#mark3valueid").html(response.cc_mark3.toFixed(1));
      $("#mark4valueid").html(response.cc_mark4.toFixed(1));

      $("#mark1typeid").html(response.mm_mark1_type ? "Dry" : "Wet");
      $("#mark2typeid").html(response.mm_mark2_type ? "Dry" : "Wet");
      $("#mark3typeid").html(response.mm_mark3_type ? "Dry" : "Wet");
      $("#mark4typeid").html(response.mm_mark4_type ? "Dry" : "Wet");

      $("#mark1modeid").html(response.mm_mark1_mode);
      $("#mark2modeid").html(response.mm_mark2_mode);
      $("#mark3modeid").html(response.mm_mark3_mode);
      $("#mark4modeid").html(response.mm_mark4_mode);

      $("#mark1enaid").html(response.mm_mark1_ena ? "Yes" : "No");
      $("#mark2enaid").html(response.mm_mark2_ena ? "Yes" : "No");
      $("#mark3enaid").html(response.mm_mark3_ena ? "Yes" : "No");
      $("#mark4enaid").html(response.mm_mark4_ena ? "Yes" : "No");

      $("#mark1levelid").html(response.mm_mark1_level.toFixed(1) + " %");
      $("#mark2levelid").html(response.mm_mark2_level.toFixed(1) + " %");
      $("#mark3levelid").html(response.mm_mark3_level.toFixed(1) + " %");
      $("#mark4levelid").html(response.mm_mark4_level.toFixed(1) + " %");

      rightnow = new Date();
      $("#curTime").html(
        rightnow.getMonth() +
          1 +
          "/" +
          rightnow.getDate() +
          "/" +
          rightnow.getFullYear() +
          " - " +
          rightnow.getHours() +
          ":" +
          rightnow.getMinutes()
      );

      peakBins = response.peakBins;
      avgBins = response.avgBins;

      // Update Chart Data
      // if(initcomplete)(stripchart.series[0]).addPoint([(new Date()).getTime(), response.mm_average.toFixed(1)], true, true);
      if (initcomplete) {
        // stripchart.series[0].addPoint([response.cc_pieces, response.mm_average], false, true);
        // stripchart.series[1].addPoint([response.cc_pieces, response.mm_peak], false, true);
        // stripchart.series[2].addPoint([response.cc_pieces, response.windowAverage], false, true);
        // stripchart.series[3].addPoint([response.cc_pieces, response.windowStdev], true, true);
        stripchart.series[0].addPoint(response.mm_average, false, true);
        stripchart.series[1].addPoint(response.mm_peak, false, true);
        stripchart.series[2].addPoint(response.windowAverage, false, true);
        stripchart.series[3].addPoint(response.windowStdev, true, true);

        createSensorBox(response.mm_n_sen, "22"); //set sensor data
        showData("avg");
      }
      // chart.series[0].setData(eval("[ "+point1.x1+","+point1.x2+","+point1.x3+" ]"),true);
    },
    complete: function () {
      window.setTimeout(function () { requestData(); }, 1000);
    },
    cache: false
  });
}


$(document).ready(function () {
  requestData();
  /*
  var fullscreen = document.getElementById("fullscreen");

  fullscreen.onclick = function () {
      if (!document.fullscreenElement) {
          openFullScreen();
      }
  }

  window.addEventListener('touchstart', function () {
      if (!document.fullscreenElement) {
        openFullScreen();
      }
  });
  */
  //window.setInterval(function () { requestData(); }, 1000);
});


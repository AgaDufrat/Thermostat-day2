$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#increase').click( function() {
    thermostat.up();
    updateTemperature();
  });

  $('#decrease').click( function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').click( function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#psm-on').click( function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  });

  $('#psm-off').click( function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  $('#city_submit').click(function() {
    var city = $('#new_city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city +  '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      var location_temp = data.main.temp;
      var location_city = data.name
      $('#location_city').text(location_city);
      $('#location_temp').text(location_temp);
    });
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  var location_temp = data.main.temp;
  var location_city = data.name
  $('#location_city').text(location_city);
  $('#location_temp').text(location_temp);
  });

  // $('select').change( function() {
  //   getWeather( $('select').val() );
  // });
  //
  // function getWeather(cityid) {
  //   $.ajax({
  //     url: "http://api.openweathermap.org/data/2.5/weather",
  //     type: "GET",
  //     dataType: "JSON",
  //     data: {
  //       id: cityid,
  //       units: "metric",
  //       APPID: "e5766314e7f43bd8e340de6c8459e0ab"
  //     },
  //     success: function (data) {
  //       updateCityTemperature(data);
  //     },
  //     error: function (data, textStatus, errorThrown) {
  //       //Do Something to handle error
  //       alert(textStatus);
  //     }
  //   });
  // };
  //
  // function updateCityTemperature(data) {
  //   $('#current-temperature').text(data.main.temp)
  // }

  // london id 2643743

  // api.openweathermap.org server name

  // Api key 81e2f5088f4d06b3466d354016c026a9


});

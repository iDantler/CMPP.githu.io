$(document).ready(function() {

    var daysItem = $("#days");
    var daysValue = $("#days h1");
    var daysTitle = $("#days h2");
  
    var hoursItem = $("#hours");
    var hoursValue = $("#hours h1");
    var hoursTitle = $("#hours h2");
  
    var minutesItem = $("#minutes");
    var minutesValue = $("#minutes h1");
    var minutesTitle = $("#minutes h2");
  
    var secondsItem = $("#seconds");
    var secondsValue = $("#seconds h1");
    var secondsTitle = $("#seconds h2");
  
    function update() {
      // Set the unit values in milliseconds.
      var msecPerSecond = 1000;
      var msecPerMinute = 1000 * 60;
      var msecPerHour = msecPerMinute * 60;
      var msecPerDay = msecPerHour * 24;
  
      // Set a date and get the milliseconds
      var currentDate = new Date();
      var targetDate = new Date('May 15, 2023 00:00:00');
      var interval = targetDate.getTime() - currentDate.getTime();
  
      // Calculate the days, hours, minutes, and seconds.
      var days = Math.floor(interval / msecPerDay);
      interval = interval - (days * msecPerDay);
  
      var hours = Math.floor(interval / msecPerHour);
      interval = interval - (hours * msecPerHour);
  
      var minutes = Math.floor(interval / msecPerMinute);
      interval = interval - (minutes * msecPerMinute);
  
      var seconds = Math.floor(interval / msecPerSecond);
  
      // Display the result
      daysValue.text(days);
      hoursValue.text(hours);
      minutesValue.text(minutes);
      secondsValue.text(seconds);
  
      // Update the title
      daysTitle.text(days == 1 ? "Día" : "Días");
      hoursTitle.text(hours == 1 ? "Hora" : "Horas");
      minutesTitle.text(minutes == 1 ? "Minuto" : "Minutos");
      secondsTitle.text(seconds == 1 ? "Segundo" : "Segundos");
    }
  
    // Call the update function every second
    setInterval(update, 1000);
  
  });
  
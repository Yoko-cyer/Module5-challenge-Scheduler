// when I visit this page

function startClock () {
  setInterval(function(){
    const now = moment().format("YYY-MM-DD: HH:mm:ss");
    $("#current-time").text(now)
  }, 1000);
};

//  should see a clock in the header

function createTimeblock(hour) {

  const row = $("<div>");

  const currentHour = Number(moment().format("H"));

  const isPast = hour < currentHour;

  const isCuerrent = hour === currentHour;

  const isFuture = hour > currentHour
  
  
  row.attr("class", "row");


}

$(document).on("click", ".save-button", function(event){
  const buttonClicked = $(event.target);

  const textarea = buttonClicked.parent().prev().children();
  const timeCol = buttonClicked.parent().prev().prev();
})
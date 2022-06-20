// when I visi this page

function startClock () {
  setInterval(function(){
    const now = moment().format("YY-MM-DD: HH:mm:ss");
    $("#current-time").text(now)
  }, 1000);
};


function createTimeblock(hour) {

  {/* <div class="row">
        <div class="time-col col-2">9:00</div>
        <div class="textarea-col col-8">
          <textarea name="" id="" rows="3"></textarea>
        </div>
        <div class="button-col col-2">
          <button class="btn btn-primary">Save</button>
        </div>
      </div> */}
  const row = $("<div>");

  const currentHour = Number(moment().format("H"));

  const isPast = hour < currentHour;
  
  const isPresent = hour === currentHour;
  
  const isFuture = hour > currentHour;
  
  let rowClass = "row";

  // if timeblock is in the future -- give it a 'future' class
  // if timeblock is in the past -- give it a 'past' class'
  // if timeblock is in the present -- give it a 'present' class'
  
  if(isPast){
    rowClass = rowClass + " past";
  }
  if(isPresent){
    rowClass = rowClass + " present";
  }
  if(isFuture){
    rowClass = rowClass + " future";
  }

  
  row.attr("class", "row");

  
  const timeCol = $("<div>");
  timeCol.attr("class", "time-col col-2");
  
  timeCol.text(hour + ":00");

  const textareaCol = $("<div>");
  textareaCol.attr("class", "textarea-col col-8");

  const textarea = $('<textare rows="3">');
  textareaCol.append(textarea);

  // with existing details from local  storage
  const existingNotes = localStorage.getItem(hour);
  textarea.val(existingNotes);

  const buttonCol = $("<div>");
  buttonCol.attr("class", "button-col col-2");

  const saveBtn = $('<button class="btn btn-primary save-button">');
  saveBtn.text("Save");

  buttonCol.append(saveBtn);

  row.append(timeCol, textareaCol, buttonCol);
  return row;

}
  


// I should see a clock in the header
$(function(){

  startClock();
  
  const timeBlockContainer = $(".container")
  // I should see a clock in the header 9-5 timeblock
  // with existing details from local storage
  
  for (let hour = 9; hour < 18; hour++) {
    const timeBlock = createTimeblock(hour);
  
    timeBlockContainer.append(timeBlock);
    
  }
});

$(document).on("click", ".save-button", function(event){
  // when user click on the save button of a particular time block
  // grab the user input
  // save to local storage
  const buttonClicked = $(event.target);
  
  const textarea = buttonClicked.parent().prev().children();
  const timeCol = buttonClicked.parent().prev().prev();
  const time = timeCol.text();
  const hour = time.slice(0, -3);
  
  const userInput = textarea.val();

  localStorage.setItem(hour, userInput);
  
})
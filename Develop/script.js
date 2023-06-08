

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var saveButtons = document.querySelectorAll(".saveBtn")

  for(let saveBtn of saveButtons){
    saveBtn.addEventListener("click", function(e){
      var key = e.target.parentElement.id
      var content = e.target.previousElementSibling.value
      localStorage.setItem(key,content)
      console.log(key)
    })
  }
  

  var textAreas = document.querySelectorAll(".description")
  for(i=0; i < textAreas.length; i++){
    var hour = textAreas[i].parentElement.id
    var hourContent = localStorage.getItem(hour)
    textAreas[i].textContent = hourContent
  }

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
 var now = dayjs().format("H")

  console.log(typeof now)

  var timeblocks = document.querySelectorAll(".time-block")
  console.log(timeblocks)

  for(i=0; i < timeblocks.length; i++){
    console.log(timeblocks[i].id, now, typeof timeblocks[i].id)
    if(timeblocks[i].id < now){
      timeblocks[i].classList.remove("present")
      timeblocks[i].classList.remove("future")
      timeblocks[i].classList.add("past")
    }
    if(timeblocks[i].id === now){
      timeblocks[i].classList.add("present")
      timeblocks[i].classList.remove("future")
      timeblocks[i].classList.remove("past")
    }
    if(timeblocks[i].id > now){
      timeblocks[i].classList.remove("present")
      timeblocks[i].classList.add("future")
      timeblocks[i].classList.remove("past")
    }
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

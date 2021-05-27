
var saveButton = document.querySelector(".btn");
var note = document.getElementById("note").value;

var today = moment();
$("#currentDay").text(today.format("dddd MMM Do"));







saveButton.addEventListener("click", function(){
    
    // var savedNote = localStorage.getItem("note");
    // note.textContent = savedNote;  

    
    localStorage.setItem("note", note);


    console.log(note);
});
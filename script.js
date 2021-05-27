
var saveButton = document.querySelector(".btn");
var note = document.getElementById("note").value;

var today = moment();
$("#currentDay").text(today.format("dddd MMM Do"));


// need to add conditional off of moment function to change the color of time blocks to indicate before, after, or current hour






saveButton.addEventListener("click", function(){
    
    // var savedNote = localStorage.getItem("note");
    // note.textContent = savedNote;  

    
    localStorage.setItem("note", note);


    console.log(note);
});
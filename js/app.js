console.log("Welcome to notes app");
showNotes();
//If user add a note,add it to the local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt"); //It is accessing text area by accessing its id addTxt
  let addTitle = document.getElementById("addTitle"); //It is accessing title area by accessing its id addTitle
  let notes = localStorage.getItem("notes"); //
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes); //here parsing notesObj which will convert object to array
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value,
  };
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj)); //here we have stringify notes obj such that in local storage we can see our notes in string format which was in array when we parsed it using json.Parse
  addTxt.value = ""; //this will make the text area blank after we click on add note
  //console.log(notesObj);
  addTitle.value = ""; //this will make the text area of title blank after we click on add note
  //console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"> ${element.title}</h5>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary 
                        ">Delete Note</button>
                        </div>
                       
                </div>`; //This will add a card when we add some note with note($index +1)it will append note from previous one also ${element } will populate element of text area also wil append with previous one,also in button we have added onclick in deleteNote(This.id) which will act whenevEr any user will click on delete button it will call delete function,also we have given that button id as index and this.id will help to fetch id of that button on which user has clicked
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html; //if notes length is not zero it will populate element from html
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`; //if initially nothing entered it will show this statement
  }
}

// Function to delete a note


 

function deleteNote(index) {
  //console.log('I am deleting',index);//it will return id of that delete node button which user has clicked
  var result = confirm("Are you sure you Want to delete🤨🤨🤨?\nOnce deleted cannot be Restored😢\nThanks!❤️❤️💕");
  
if (result) {
    

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1); //The splice() method adds and/or removes array elements.
  localStorage.setItem("notes", JSON.stringify(notesObj)); //This will update the local storage
  showNotes();
}
}


//Function to search

// let search = document.getElementById('searchTxt');
// search.addEventListener("input", function () {//we have added input event Listner wHich will be fired whenever user write anything in search text box
//   search.addEventListener("input", function () {//we have added input event Listner wHich will be fired whenever user write anything in search text box
//     let inputVal = search.value.toLowerCase();
//     //we have applied tolowerCase function in input val such that if user search text include lower case it will able to search.
//     console.log('Input event Fired', inputVal);
//     let noteCards = document.getElementsByClassName('noteCard');
//     Array.from(noteCards).forEach(function (element) {
//       let cardTxt = element.getElementsByTagName("p")[0].innerText;

//       if (cardTxt.includes(inputVal)) {
//         element.style.display = "block";
//       }
//       else {
//         element.style.display = "none";
//       }
//       //console.log(cardTxt)
//     })

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  // console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    // let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
    // let TittleText=element.getElementsByClassName("card-title").innerText.toLowerCase();
    let myObj = {
      cardTitle: element.getElementsByTagName("h5")[0].innerText.toLowerCase(),
      cardText: element.getElementsByTagName("p")[0].innerText.toLowerCase()
    }
    if (
      myObj.cardTitle.includes(inputVal) ||
      myObj.cardText.includes(inputVal)
    ) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    //console.log(cardTxt);
  });
})

// let search = document.getElementById('searchTxt');
// search.addEventListener('input', function () {
//     let inputVal = search.value.toLowerCase();
//     // console.log('input event fired', inputVal);

//     let noteCards = document.getElementsByClassName('noteCard');
//     Array.from(noteCards).forEach(function (element) {
//         let myObj = {
//             cardTitle: element.getElementsByTagName("h5")[0].innerText.toLowerCase(),
//             cardText: element.getElementsByTagName("p")[0].innerText.toLowerCase()
//         }
//         if (myObj.cardTitle.includes(inputVal) || myObj.cardText.includes(inputVal)) {
//             element.style.display = "block";
//         }
//         else {
//             element.style.display = "none";
//         }
//         // console.log(cardTxt);
//     });
// })
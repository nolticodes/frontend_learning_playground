
let notesTitle = [];
let notes = [];
let trashNotesTitle = [];
let trashNotes = []

let allNotes = {
    "notesTitles": [],
    "notes": [],
    "trashNotesTitles": [],
    "trashNotes": [],
}



// START
function init() {
    getTitleNotesFromLocalStorage();
    getNotesFromLocalStorage();
    renderNotes();
    getTrashTitleNotesFromLocalStorage();
    getTrashNotesFromLocalStorage();
    renderTrashNotes();
}


function moveNote (indexNote, startKey, destinationKey) {
    let trashNote = allNotes[startKey].splice(indexNote, 1);
    let trashTitleNote = allNotes[startKey + "Titles"].splice(indexNote, 1);
   
    allNotes[destinationKey].push(trashNote);
    allNotes[destinationKey + "Titles"].push(trashTitleNote);
}


function renderNotes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);  
    }
}

// function getNoteTemplate(indexNote) {
//     return `<p>+${notesTitle[indexNote]} ${notes[indexNote]} <button onclick="moveToTrash(${indexNote})">Papierkorb</button> </p> `
// }

function getNoteTemplate(indexNote) {
    return `<div class="notes_style">
                <div class="notes_style_header">
                    <h2>${allNotes.notesTitles[indexNote]}</h2>
                </div>
                
                <div class="notes_style_main">
                    <p>${allNotes.notes[indexNote]}</p>
                </div>
                <div class="notes_style_footer">
                    <button onclick="moveNote(${indexNote}, "notes", "trashNotes")" class="button_archive_delete">X</button>
                </div>
            </div>`
}


    

// 2. TRASH NOTES
function renderTrashNotes() {
    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);  
    }
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<div class="notes_style">
                <div class="notes_style_header">
                    <h2>${allNotes.trashNotesTitles[indexTrashNote]}</h2>
                </div>
                
                <div class="notes_style_main">
                    <p>${allNotes.trashNotes[indexTrashNote]}</p>
                </div>
                <div class="notes_style_footer">
                    <button onclick="deleteNote(${indexTrashNote})" class="button_archive_delete">X</button>
                </div>
            </div>`
}


// Add Notes
function addNote() {
    let noteInputRef = document.getElementById("note_input");
    let noteTitleInputRef = document.getElementById("note_title_input");

    if(noteInputRef.value != "" && noteTitleInputRef.value != ""){
        allNotes.notesTitles.push(noteTitleInputRef.value);
        allNotes.notes.push(noteInputRef.value);
    }
    saveTitleNotesToLocalStorage();
    saveNotesToLocalStorage();
    renderNotes();
    noteTitleInputRef.value = ""
    noteInputRef.value = ""
}


// NOTE TO ARCHIVE
function moveToTrash(indexNote) {
   let trashNote = notes.splice(indexNote, 1);
   let trashTitleNote = notesTitle.splice(indexNote, 1);
   
   trashNotes.push(trashNote);
   trashNotesTitle.push(trashTitleNote);
   
   saveTitleNotesToLocalStorage()
   saveNotesToLocalStorage();
   saveTrashTitleNotesToLocalStorage();
   saveTrashNotesToLocalStorage();

   renderNotes();
   renderTrashNotes();
}


// Delete Notes
function deleteNote(indexNote) {
   let trashNote = trashNotes.splice(indexNote, 1);
   let trashNoteTitle = trashNotesTitle.splice(indexNote, 1);

   saveTrashNotesToLocalStorage();
   saveTrashTitleNotesToLocalStorage();
   renderNotes();
   renderTrashNotes();
}


// SAVE NOTES 
// 1. NOTES
let myTitleLocalStorage = JSON.parse(localStorage.getItem("titleNotes"));
let myLocalStorage = JSON.parse(localStorage.getItem("notes"));
let myLocalTrashStorage = JSON.parse(localStorage.getItem("trashNotes"));
let myLocalTrashTitleStorage = JSON.parse(localStorage.getItem("trashTitleNotes"));


function saveNotesToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes))
}

function saveTitleNotesToLocalStorage() {
    localStorage.setItem("titleNotes", JSON.stringify(notesTitle))
}

function getNotesFromLocalStorage() {
    if(myLocalStorage === null){
        notes 
    }
    else {
        notes = myLocalStorage;
    }
} 

function getTitleNotesFromLocalStorage() {
    if(myTitleLocalStorage === null){
        notesTitle 
    }
    else {
        notesTitle = myTitleLocalStorage;
    }
} 


// 2. TRASH NOTES
function saveTrashNotesToLocalStorage() {
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes))
}

function saveTrashTitleNotesToLocalStorage() {
    localStorage.setItem("trashTitleNotes", JSON.stringify(trashNotesTitle))
}

function getTrashNotesFromLocalStorage() {
    if(myLocalTrashStorage === null){
        trashNotes 
    }
    else {
        trashNotes = myLocalTrashStorage;
    }
} 
function getTrashTitleNotesFromLocalStorage() {
    if(myLocalTrashTitleStorage === null){
        trashNotesTitle 
    }
    else {
        trashNotesTitle = myLocalTrashTitleStorage;
    }
} 
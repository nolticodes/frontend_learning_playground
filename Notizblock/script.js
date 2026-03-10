
let notesTitle = [];
let notes = [];
let trashNotesTitle = [];
let trashNotes = []

// START
function init() {
    getTitleNotesFromLocalStorage();
    getNotesFromLocalStorage();
    renderNotes();
    getTrashTitleNotesFromLocalStorage();
    getTrashNotesFromLocalStorage();
    renderTrashNotes();
}


// render Notes to HTML
// 1. NOTES
function renderNotes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);  
    }
}

function getNoteTemplate(indexNote) {
    return `<p>+${notesTitle[indexNote]} ${notes[indexNote]} <button onclick="moveToTrash(${indexNote})">Papierkorb</button> </p> `
}

// 2. TRASH NOTES
function renderTrashNotes() {
    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);  
    }
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ ${trashNotesTitle[indexTrashNote]} ${trashNotes[indexTrashNote]} <button onclick="deleteNote(${indexTrashNote})">Löschen</button> </p> `
}


// Add Notes
function addNote() {
    let noteInputRef = document.getElementById("note_input");
    let noteTitleInputRef = document.getElementById("note_title_input");

    if(noteInputRef.value != "" && noteTitleInputRef.value != ""){
        notesTitle.push(noteTitleInputRef.value);
        notes.push(noteInputRef.value);
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
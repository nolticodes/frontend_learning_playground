let allNotes = {
    notesTitles: [],
    notes: [],
    trashNotesTitles: [],
    trashNotes: [],
};


// START
function init() {
    getNotesFromLocalStorage();
    getTitleNotesFromLocalStorage();
    getTrashNotesFromLocalStorage();
    getTrashTitleNotesFromLocalStorage();

    renderNotes();
    renderTrashNotes();
}


// MOVE NOTE
function moveNote(indexNote, startKey, destinationKey) {
    let movedNote = allNotes[startKey].splice(indexNote, 1)[0];
    let movedTitleNote = allNotes[startKey + "Titles"].splice(indexNote, 1)[0];

    allNotes[destinationKey].push(movedNote);
    allNotes[destinationKey + "Titles"].push(movedTitleNote);

    saveAllNotesToLocalStorage();
    renderNotes();
    renderTrashNotes();
}


// RENDER NOTES
function renderNotes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function getNoteTemplate(indexNote) {
    return `<div class="notes_style">
                <div class="notes_style_header">
                    <h2>${allNotes.notesTitles[indexNote]}</h2>
                </div>
                
                <div class="notes_style_main">
                    <p>${allNotes.notes[indexNote]}</p>
                </div>
                <div class="notes_style_footer">
                    <button onclick="moveNote(${indexNote}, 'notes', 'trashNotes')" class="button_archive_delete">X</button>
                </div>
            </div>`;
}


// RENDER TRASH
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
            </div>`;
}


// ADD NOTE
function addNote() {
    let noteInputRef = document.getElementById("note_input");
    let noteTitleInputRef = document.getElementById("note_title_input");

    if (noteInputRef.value != "" && noteTitleInputRef.value != "") {
        allNotes.notesTitles.push(noteTitleInputRef.value);
        allNotes.notes.push(noteInputRef.value);
    }

    saveAllNotesToLocalStorage();
    renderNotes();

    noteTitleInputRef.value = "";
    noteInputRef.value = "";
}


// DELETE NOTE FROM TRASH
function deleteNote(indexNote) {
    allNotes.trashNotes.splice(indexNote, 1);
    allNotes.trashNotesTitles.splice(indexNote, 1);

    saveAllNotesToLocalStorage();
    renderTrashNotes();
}


// SAVE ALL
function saveAllNotesToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(allNotes.notes));
    localStorage.setItem("titleNotes", JSON.stringify(allNotes.notesTitles));
    localStorage.setItem("trashNotes", JSON.stringify(allNotes.trashNotes));
    localStorage.setItem("trashTitleNotes", JSON.stringify(allNotes.trashNotesTitles));
}


// LOAD NOTES
function getNotesFromLocalStorage() {
    let myLocalStorage = JSON.parse(localStorage.getItem("notes"));
    if (myLocalStorage !== null) {
        allNotes.notes = myLocalStorage;
    }
}

function getTitleNotesFromLocalStorage() {
    let myTitleLocalStorage = JSON.parse(localStorage.getItem("titleNotes"));
    if (myTitleLocalStorage !== null) {
        allNotes.notesTitles = myTitleLocalStorage;
    }
}

function getTrashNotesFromLocalStorage() {
    let myLocalTrashStorage = JSON.parse(localStorage.getItem("trashNotes"));
    if (myLocalTrashStorage !== null) {
        allNotes.trashNotes = myLocalTrashStorage;
    }
}

function getTrashTitleNotesFromLocalStorage() {
    let myLocalTrashTitleStorage = JSON.parse(localStorage.getItem("trashTitleNotes"));
    if (myLocalTrashTitleStorage !== null) {
        allNotes.trashNotesTitles = myLocalTrashTitleStorage;
    }
}
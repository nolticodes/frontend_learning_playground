// show notes

let notesTitle = ["BA", "Aufgabe"]
let notes = ["banana", "apple", "orange"];

let trashNotes = [];

function renderNotes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);  
    }
}

function getNoteTemplate(indexNote) {
    return `<p>+ ${notes[indexNote]} <button onclick="deleteNote(${indexNote})">Löschen</button> </p> `
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);  
    }
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ ${trashNotes[indexTrashNote]} <button onclick="deleteNote(${indexTrashNote})">Löschen</button> </p> `
}



// Add Notes

function addNote() {
    let noteInputRef = document.getElementById("note_input");
    let noteInput = noteInputRef.value;

    notes.push(noteInput);

    renderNotes();

    noteInputRef = ""
}




// Notizen löschen

function moveToTrash(indexNote) {
   let trashNote = notes.splice(indexNote, 1);
   trashNotes.push(trashNote);
   renderNotes();
   renderTrashNotes();
}

function deleteNote(indexNote) {
   let trashNote = trashNotes.splice(indexNote, 1);
   renderNotes();
   renderTrashNotes();
}


// Notizen archivieren 
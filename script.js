document.addEventListener("DOMContentLoaded", loadNotes);

function addNote() {
    let input = document.getElementById("noteInput");
    let noteText = input.value.trim();
    if (noteText === "") return;

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));

    input.value = "";
    loadNotes();
}

function loadNotes() {
    let notesList = document.getElementById("notesList");
    notesList.innerHTML = "";
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach((note, index) => {
        let li = document.createElement("li");
        li.textContent = note;
        li.onclick = () => removeNote(index);
        notesList.appendChild(li);
    });
}

function removeNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js")
        .then(() => console.log("Service Worker зарегистрирован"))
        .catch((error) => console.log("Ошибка регистрации Service Worker", error));
}
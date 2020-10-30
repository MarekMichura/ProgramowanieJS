let notes = [];

function getNotesFromLocalStorage() {
    const LS_elements = JSON.parse(localStorage.getItem('Notes'));
    notes = LS_elements;
}

function setNotesToLocalStorage() {
    localStorage.setItem('Notes', JSON.stringify(notes));
}

class createNewNote {
    constructor(title, context, colour = '#cccccc', pinned = false, date = new Date()) {
        this.title = title;
        this.context = context;
        this.colour = colour;
        this.pinned = pinned;
        this.createDate = date;
    }
}

getNotesFromLocalStorage();

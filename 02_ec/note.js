class NotesManager {
  static quantity = 0;
  static #notes = [];
  crate(data) {
    data.id =
      NotesManager.quantity.lenth === 0
        ? 1
        : NotesManager.#notes[NotesManager.#notes.length - 1].id + 1;
    data.type ? data.type : "to do";
    data.date || new Date();
    !data.text ? `ingrese texto` : NotesManager.#notes.push(data);
    NotesManager.#notes.push(data);
    NotesManager.quantity + 1;
  }
}

const notes = new NotesManager();
notes.create({ text: `mi primera nota` });
console.log(notes.read({}));

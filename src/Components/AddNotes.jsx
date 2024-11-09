// AddNote.js
import React, { useState } from "react";
import NoteCard from "./NoteCard";

const AddNote = () => {
  const [noteContent, setNoteContent] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);

  const handleTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setNoteContent(e.target.value);
  };

  // Add new note to the list
  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteTitle.trim() && noteContent.trim()) {
      setNotes([
        ...notes,
        { id: Date.now(), title: noteTitle, content: noteContent },
      ]);
      setNoteTitle("");
      setNoteContent("");
    }
  };

  // Update note content
  const handleUpdateNote = (id, newContent) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, content: newContent } : note))
    );
  };

  return (
    <div className="bg-gray-700 min-h-screen py-8">
      {/* Add Note Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md p-6 mb-8 transform transition-transform hover:scale-105 duration-200 ease-in-out"
      >
        <h2 className="text-xl font-semibold text-center mb-4">Add a New Note</h2>
        <input
          className="w-full p-3 mb-3 border-none rounded-md bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 text-sm"
          type="text"
          placeholder="Enter Note Title"
          value={noteTitle}
          onChange={handleTitleChange}
        />
        <textarea
          className="w-full h-20 p-3 mb-3 border-none rounded-md bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 text-sm resize-none"
          placeholder="Enter Note Content"
          value={noteContent}
          onChange={handleContentChange}
        />
        <button
          type="submit"
          className="w-full py-2 mt-3 text-base font-medium rounded-md shadow-sm bg-blue-600 hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transform hover:scale-105"
        >
          Add Note
        </button>
      </form>

      {/* Notes Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onUpdateNote={handleUpdateNote}
            />
          ))
        ) : (
          <p className="text-gray-600 text-center">No notes yet.</p>
        )}
      </div>
    </div>
  );
};

export default AddNote;

import React, { useState } from "react";

const NoteCard = ({ note, onUpdateNote, onDeleteNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(note.content);

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Handle content change for the note
  const handleContentChange = (e) => {
    setContent(e.target.value);
    onUpdateNote(note.id, e.target.value); // Update note content in the parent component
  };

  // Handle delete note
  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent triggering the toggle edit mode when deleting
    onDeleteNote(note.id); // Call delete function passed from the parent component
  };

  return (
    <div
      className="bg-gray-700 p-6 rounded-lg border border-gray-500 shadow-md hover:shadow-xl transition-all cursor-pointer relative"
      onClick={toggleEditMode}
    >
      {/* Clickable Title */}
      <h3 className="text-lg font-semibold text-blue-500 cursor-pointer">
        {note.title}
      </h3>

      {/* Display content or editable textarea */}
      {isEditing ? (
        <textarea
          className="w-full h-24 mt-4 p-4 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          value={content}
          onChange={handleContentChange}
        />
      ) : (
        <p className="mt-2 text-gray-300">{note.content}</p>
      )}

      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className="absolute top-4 right-4 text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </div>
  );
};

export default NoteCard;

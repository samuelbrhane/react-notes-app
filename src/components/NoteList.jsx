import React from "react";
import { Link } from "react-router-dom";

const NoteList = ({ note }) => {
  const { id, body } = note;
  return (
    <Link
      className="px-4 text-white py-2 border-b-2 border-blue-400 text-xl hover:bg-gray-500"
      to={`/note/${id}`}
    >
      {body}
    </Link>
  );
};

export default NoteList;

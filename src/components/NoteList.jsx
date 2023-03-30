import React from "react";

const NoteList = ({ note }) => {
  const { id, body } = note;
  return <div>{body}</div>;
};

export default NoteList;

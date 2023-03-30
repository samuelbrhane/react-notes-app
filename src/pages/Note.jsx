import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Note = () => {
  const params = useParams();
  const [noteData, setNoteData] = useState({});
  const { id } = params;

  // get single note data
  const getNoteData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/notes/${id}/`
    );
    setNoteData(data);
  };

  // fetch data
  useEffect(() => {
    getNoteData();
  }, [id]);

  return (
    <form>
      <textarea className="min-h-[350px] bg-transparent p-3 outline-none w-full">
        {noteData?.body}
      </textarea>
      <button
        type="submit"
        className="bg-green-400 rounded text-white w-full py-2 text-center font-bold text-xl"
      >
        Edit
      </button>
    </form>
  );
};

export default Note;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { NoteList } from "../components";

const Home = () => {
  const [notes, setNotes] = useState([]);

  // get all notes
  const getNotes = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/notes/`
    );
    setNotes(data);
  };

  // fetch data at first render
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <section className="min-h-[350px] w-full">
      <div className="flex flex-col">
        {notes?.map((note) => (
          <NoteList key={note.id} note={note} />
        ))}
      </div>
    </section>
  );
};

export default Home;

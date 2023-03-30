import React, { useEffect, useState } from "react";
import axios from "axios";
import { NoteList } from "../components";

const Home = () => {
  const [notes, setNotes] = useState([]);

  // fetch notes data
  useEffect(() => {
    const getNotes = async () => {
      const { data } = await axios.get("http://localhost:8000/api/notes/");
      setNotes(data);
    };

    getNotes();
  }, []);

  return (
    <section>
      {notes?.map((note) => (
        <NoteList key={note.id} note={note} />
      ))}
    </section>
  );
};

export default Home;

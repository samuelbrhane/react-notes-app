import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [notes, setNotes] = useState([]);

  // fetch notes data
  useEffect(() => {
    const getNotes = async () => {
      const { data } = await axios.get("http://localhost:8000/notes/");
      setNotes(data);
    };

    getNotes();
  }, []);

  console.log("notes: " + notes);

  return (
    <section>
      {notes?.map((note) => (
        <p key={note.id}>{note.body}</p>
      ))}
    </section>
  );
};

export default Home;

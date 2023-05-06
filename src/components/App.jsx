import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import CreateNote from '../components/CreateNote';
import Note from "../components/Note";





const App = () => {

  const [nota, setnota] = useState([]);

  const adaugaNotita = (newNota) => {

    setnota((prevNota) => {
      return [...prevNota, newNota];
    })


  }

  function stergeNota(id) {
    setnota((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <section>

      <Header />
      <CreateNote adauga={adaugaNotita} />
      {nota.map((noteItem, index) => {
        return (
          <Note key={index} id={index} titlu={noteItem.titlu} continut={noteItem.continut} sterge={stergeNota} />

        )
      })}
      <Footer />


    </section>
  );
}
export default App;



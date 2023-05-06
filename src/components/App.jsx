import React, { useState } from 'react';
//import Header from "../components/Header";
//import Footer from "../components/Footer";
//import CreateNote from '../components/CreateNote';
//import Note from "../components/Note";





const App = () => {

  //const [nota, setnota] = useState([]);

  //const adaugaNotita = (newNota) => {

  // setnota((prevNota) => {
  //   return [...prevNota, newNota];
  // })


  //}

  //function stergeNota(id) {
  //  setnota((prevNotes) => {
  //    return prevNotes.filter((noteItem, index) => {
  //      return index !== id;
  //    });
  //  });
  //}

  return (
    <section>
      <div class="card">
        <img src="https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRldmVsb3BlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        <div class="card_content">
          <h2 class="card_title">Lorem</h2>
          <p class="card_description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum porro dolores sapiente.</p>
        </div>
      </div>

      <div class="card card_dark">
        <img src="https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=" alt="" />
        <div class="card_content">
          <h2 class="card_title">Lorem</h2>
          <p class="card_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque amet obcaecati nihil.</p>
        </div>
      </div>




      {/* <Header/>
      <CreateNote adauga={adaugaNotita} />
      {nota.map((noteItem, index) => {
        return (
          <Note key={index} id={index} titlu={noteItem.titlu} continut={noteItem.continut} sterge={stergeNota} />

        )
      })}
    <Footer />*/}


    </section>
  );
}
export default App;



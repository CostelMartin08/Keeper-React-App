import React from 'react';

const Note = (props) => {

    const functieClick = () => {
        props.sterge(props.id);
    }

    return (
        <div className='note'>
            <h1>{props.titlu}</h1>
            <p>{props.continut}</p>
            <button onClick={functieClick}><i class="fa-solid fa-trash-can"></i></button>
        </div>
    );
}

export default Note;
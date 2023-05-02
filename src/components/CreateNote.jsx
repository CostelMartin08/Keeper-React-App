import React, { useState } from "react";


const CreateNote = (props) => {

    const [value, setvalue] = useState({
        titlu: "",
        continut: ""
    });


    const schimbat = (event) => {
        const { name, value } = event.target;

        setvalue((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        })

    }

    const submit = (event) => {
        props.adauga(value);
        setvalue(
            {
                titlu: "",
                continut: ""
            }
        )
        event.preventDefault();
    }


    return (

        <div>
            <form>
                <input onChange={schimbat} placeholder="Titlu" name="titlu" value={value.titlu} />
                <textarea onChange={schimbat} placeholder="Adauga" name="continut" value={value.continut} />
                <button type="submit" onClick={submit}><i class="fa-solid fa-plus"></i></button>
            </form>
        </div>
    );
}

export default CreateNote;
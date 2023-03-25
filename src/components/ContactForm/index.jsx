import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";

const ContactForm = () => {

    const formBase = {
        name: '',
        email: '',
        message: '',
    };

    const [form, setForm] = useState(formBase);

    const [id, setId] = useState();

    //evento enviar
    const submitHandler = (ev) => {
        ev.preventDefault();

        const db = getFirestore();
        const orderCollection = collection(db, 'orders');

        addDoc(orderCollection, form).then((snapshot) => {
            setForm(formBase)
            setId(snapshot.id)
        });
    };

    const inputChangeHandler = (ev) => {
        const {value, name} = ev.target;
        setForm({...form, [name]: value});
    };

    return (
    <div>
        {typeof id !== 'undefined' ?
            (<p> El formulario se ha enviado con el ID: {id}</p>) :
            ( '' )};
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='name'>Nombre</label>
                <input 
                    name='name'
                    id='name'
                    value={form.name}
                    onChange={inputChangeHandler}
                />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    type= 'email'
                    name='email'
                    id='email'
                    value={form.email}
                    onChange={inputChangeHandler}
                />
            </div>
            <div>
                <label htmlFor='message'>Mensaje</label>
                <textarea
                    name='message'
                    id='message'
                    value={form.message}
                    onChange={inputChangeHandler}
                >
                </textarea>
            </div>
            <button>Enviar</button>
        </form>
    </div>
)};

export default ContactForm;
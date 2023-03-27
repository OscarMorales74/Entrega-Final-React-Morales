import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";

const ContactForm = () => {

    const { cart, totalPrecio} = useCartContext();

    const formBase = {
        name: '',
        email: '',
        address: '',
        message: '',
        items: cart.map(producto => ({ id: producto.id, title: producto.title, precio: producto.precio, quantity: producto.quantity })),
        date: Date.now(),
        total: totalPrecio()
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
        setForm({...form, [name]: value,});
    };

    return (
    <div className="formulario">
        <h2 className="instruccionForm">Completa tus datos para terminar la compra</h2>
        <form className="containerForm" onSubmit={submitHandler}>
            <div>
                <label className="inputText" htmlFor='name'>Nombre</label>
                <input className="inputForm"
                    name='name'
                    id='name'
                    value={form.name}
                    onChange={inputChangeHandler} />
            </div>
            <div>
                <label className="inputText" htmlFor='email'>Email</label>
                <input className="inputForm"
                    type= 'email'
                    name='email'
                    id='email'
                    value={form.email}
                    onChange={inputChangeHandler} />
            </div>
            <div>
                <label className="inputText" htmlFor='address'>Dirección</label>
                <input className="inputForm"
                    name='address'
                    id='address'
                    value={form.address}
                    onChange={inputChangeHandler} />
            </div>
            <div>
                <label className="inputText" htmlFor='message'>Comentarios</label>
                <textarea className="inputForm"
                    name='message'
                    id='message'
                    value={form.message}
                    onChange={inputChangeHandler} ></textarea>
            </div>
            <button className="btnEnviarForm">Enviar</button>
        </form>;
        {typeof id !== 'undefined' ?
            (<div className="CompraConfirmada">
            <p> El formulario se ha enviado con el ID: {id}</p>
            <p> El total de tu compra es: $ {formBase.total}</p>
            <p> ¡Gracias por tu compra!</p>
            </div>) :
            ( '' )}
    </div>
)};

export default ContactForm;
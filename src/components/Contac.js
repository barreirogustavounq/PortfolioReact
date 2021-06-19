import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import $ from 'jquery'
import '../styles/Contact.css'

const Contact = () => {
    const [mail, setMail] = useState('')
    const [msj, setMsj] = useState('')
    const [tel, setTel] = useState('')
    const [name, setName] = useState('')
    const frmContact = { from_name: mail, message: msj, reply_to: name + " " + tel, };
    const [showMessage, setShowMessage] = useState(false);
    init("user_LjMLPU8PBQq8y8oJ7ZzM0");

    const sendmail = e => {
        e.preventDefault();
       

       emailjs.send("service_rc1gbjo", "template_288rqtj", frmContact)
           .then((response) => {
               console.log('SUCCESS!', response.status, response.text);
               $(document).ready(function () {
                $("form").fadeOut("slow");
                });
                
                setShowMessage(true);
           }, (err) => {
               console.log('FAILED...', err);
           });
    }

    const veryfyInputs = () => {
        return (
            msj === '' || mail === '' || name === '' || tel === ''
        )
    }

    return (
        <div class="mainDiv">
            <div class="divForm">
                {
                    !showMessage ?
                        <form class="contactForm">
                            <div class="input-field">
                                <i class="fas fa-user"></i>
                                <label for="nombre">Nombre</label>
                                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="nombre" maxlength="50" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{3,23}" title="Debe indicar su nombre correctamente" required />
                            </div>

                            <div class="input-field">
                                <i class="fas fa-mobile-alt"></i>
                                <label for="telefono">Teléfono</label>
                                <input type="number" name="telefono" value={tel} onChange={(e) => { setTel(e.target.value) }} maxlength="10" title="Debe indicar un telefono válido" required />
                            </div>

                            <div class="input-field">
                                <i class="fas fa-at"></i>
                                <label for="email">Email</label>
                                <input type="email" name="email" value={mail} onChange={(e) => { setMail(e.target.value) }} maxlength="100" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="Debe indicar un correo válido" required />
                            </div>

                            <div class="input-field">
                                <i class="fas fa-pen"></i>
                                <label for="mensaje">Mensaje</label>
                                <textarea name="mensaje" value={msj} onChange={(e) => { setMsj(e.target.value) }} length="140" required></textarea>
                            </div>

                            <div class="btn-block">
                                <button 
                                class="btn" 
                                type="submit" 
                                onClick={(e) => { sendmail(e) }} 
                                onSubmit={(e) => { sendmail(e) }}
                                disabled = {veryfyInputs()}><i class="fas fa-paper-plane"></i>ENVIAR</button>
                            </div>

                        </form>
                        :

                        <h1>GRACIAS, PRONTO RESPONDERE</h1>
                }
            </div>
        </div>
    );
}

export default Contact;
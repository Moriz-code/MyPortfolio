import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser'

import Footer from './Footer';

import location from '../Images/contact/location.png';
import mail from '../Images/contact/mail.png';
import phone from '../Images/contact/phone.png';
import facebook from '../Images/contact/facebook.png';
import linkedin from '../Images/contact/linkedin.png';
import sent from '../Images/contact/sent.png';

import { useHistory } from "react-router-dom";

const Contact = () => {

    const history = useHistory();
    const [inputs, setInputs] = useState({ user_name: '', user_email: '', message: '' });
    const [confirm, showConfirm] = useState(false);
    const [fail, showFail] = useState(false);

    const handleChange = (e) => {
        e.persist();
        setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
    }


    useEffect(() => {
        history.push("/contact");
    }, [history])


    const sendEmail = (e) => {
        e.preventDefault();

        let isFilled = !Object.values(inputs).every(o => o === '');
        if (!isFilled) return


        emailjs.sendForm('service_3ae8m2k', 'template_S696xMZq',e.target, 'user_2b8nQ7X1AQB3jU9oHbDOu')
        .then((result) => {
            showConfirm(true);
            setInputs(({ user_name: '', user_email: '', message: '' }));
        }, (error) => {
            showFail(true);
        });

    }

    return (<>
        <section id="contact" className="contact bounce-in-fwd">
            <div className="intro">
                <h2 className="main-title">Let's Talk</h2>
                <span className="fs16">You can contact me anytime</span>
                <p className="fs16">and don't be shy, add me on social networks</p>
            </div>
            <div className="content main-container">
                <div className="form">
                    <div className="form-content">
                        <div className="fields fs20">
                            <form className="contact-form" onSubmit={sendEmail}>
                                <input type="hidden" name="contact_number" />
                                <div>

                                    <label>Your Name</label>
                                    <input type="text" name="user_name" onChange={handleChange} value={inputs.user_name} />
                                </div>
                                <div>
                                    <label>Email Address</label>
                                    <input type="email" name="user_email" onChange={handleChange} value={inputs.user_email} />
                                    <span className="fs16">new Promise (I'll never share it with anyone);</span>
                                </div>
                                <div>

                                    <label>What's on your mind?</label>
                                    <textarea name="message" onChange={handleChange} value={inputs.message} />
                                </div>

                                <div>
                                    <button className="fs24 action-btn" type="submit" value="Send">
                                        Email me!
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>
                    <div className={confirm ? 'email-confirm' : 'display-none'}>
                        <img src={sent} alt="sent"/>
                        <span className="fs18">Got your E-mail, I will read it ASAP!</span>
                    </div>
                    { fail ? 
                    <div>
                        <span className="fs18 red txt"><br /> Something went wrong and the mail got lost on his way to my mailbox :( <br /> <br />  Try again or contact me via phone or social media!</span>
                    </div> : null }


                </div>

                <div className="social">
                    <div className="methods fs20">
                        <div>
                            <img src={phone} alt="phone" />
                            <span>+972 522937174</span>
                        </div>

                        <div>
                            <img src={location} alt="location"/>
                            <span>Tel-Aviv</span>
                        </div>

                        <div>
                            <img src={mail} alt="mail" />
                            <span><a href="mailto:morzavi1@gmail.com">Morzavi1@gmail.com</a></span>
                        </div>

                        <div className="network links">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mor.zeevi.7"> <img src={facebook} alt="facebook link" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mor-zeevi/"> <img src={linkedin} alt="linkdin link" /></a>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </section>
    </>)
}
export default Contact
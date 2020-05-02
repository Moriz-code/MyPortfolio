import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';

import location from '../Images/contact/location.png';
import mail from '../Images/contact/mail.png';
import phone from '../Images/contact/phone.png';
import facebook from '../Images/contact/facebook.png';
import linkedin from '../Images/contact/linkedin.png';

import { useHistory } from "react-router-dom";

const Contact = () => {

    const history = useHistory();


    useEffect(() => {
        history.push("/contact");
    }, [])


    return (<section id="contact" className="contact main-container bounce-in-top">
        <h2 className="main-title">Let's Talk</h2>
        <div className="content">
            <div className="form">
                <div class="fields fs20">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" />
                        <Form.Text className="fs16" className="text-muted">
                            new Promise (I'll never share it with anyone);
                </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>What's on your mind?</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                </div>
                <div className="clickable">

                    <button className="fs24 action-btn">Send</button>


                </div>
            </div>

            <div className="social">
                <div className="methods fs20">
                    <div>
                        <img src={phone} />
                        <span>+972 522937174</span>
                    </div>

                    <div>
                        <img src={location} />
                        <span>Tel-Aviv</span>
                    </div>

                    <div>
                        <img src={mail} />
                        <span>Morzavi1@gmail.com</span>
                    </div>

                </div>

                <div className="network links">
                    {/* <span>I'm here too:</span> */}

                    <a target="_blank" href="https://www.facebook.com/mor.zeevi.7"> <img src={facebook}></img></a>
                    <a target="_blank" href="https://www.linkedin.com/in/mor-zeevi/"> <img src={linkedin}></img></a>


                </div>
            </div>
        </div>
    </section>)
}
export default Contact
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';

import '../App.css'

const MyVerticallyCenteredModal = (props) => {
    const [emailSent, setEmailSent] = useState(false);
    

    

    const sendEmail = (e) => {
        e.preventDefault();

        // Generate a random number for the contact_number variable
        const contactNumber = Math.random() * 100000 | 0;

        // Send the email using email.js
        emailjs.sendForm('service_qea46jv', 'template_68gvv4g', e.target, 'dnRCPlrX1nwHbeygE')
            .then((response) => {
                console.log('Email sent successfully:', response);
                setEmailSent(true);
            })
            .catch((error) => {
                console.error('Email send failed:', error);
            });
    };

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    {emailSent ? (
                        <div>Email sent successfully!</div>
                    ) : (
                        <form id="contact-form" onSubmit={sendEmail}>
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    Contact Me!
                                </Modal.Title>
                            </Modal.Header>
                            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="johndoe@example.com" name="user_email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="John Doe" name="user_name" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Send your message!</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Type your message here!" name="message" required />
                            </Form.Group>

                            <Button
                                type="submit"
                                variant="dark"
                                className="send_btn"
                                style={{ color: 'black' }}
                                onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                                onMouseOut={(e) => e.currentTarget.style.color = 'black'}
                            >
                                Send
                            </Button>
                        </form>
                    )}
                </Modal.Body>

            </Modal>
        </>
    );
};

export default MyVerticallyCenteredModal;

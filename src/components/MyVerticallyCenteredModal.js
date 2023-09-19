import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';

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
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="johndoe@example.com" name="user_email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="John Doe" name="user_name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Send your message!</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Type your message here!" name="message" />
                            </Form.Group>

                            <Button type="submit">Send</Button>
                        </form>
                    )}
                </Modal.Body>

            </Modal>
        </>
    );
};

export default MyVerticallyCenteredModal;

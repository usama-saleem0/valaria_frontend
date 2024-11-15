import {React ,useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { RiMapPin2Fill, RiPhoneFill, RiMailFill, RiFacebookFill, RiInstagramLine, RiTwitterFill } from 'react-icons/ri';
import Header from '../Header/Header';
import Footerah from '../footerah/Footerah';

const Contactus = () => {
    const [Email_tab, setEmail_tab] = useState('');
    const [Email_Subject, setEmail_Subject] = useState('');
    const [Email_Message, setEmail_Message] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');



    const validateEmail = (input) => {
        // Regex for email validation
        const emailRegex = new RegExp(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
        );

        if (input === '') {
            setIsValidEmail(false);
            setErrorMessage('Field is required');
        } else if (!emailRegex.test(input)) {
            setIsValidEmail(false);
            setErrorMessage('A valid email is required (e.g. example@example.com)');
        } else {
            setIsValidEmail(true);
            setErrorMessage('');
        }
    };

    // Example function to handle email validation
    const handleEmailValidation = (Email_tab) => {
        validateEmail(Email_tab);
    };


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
    
        // Check if all fields are filled and email is valid
        if (Email_tab && Email_Subject && Email_Message && isValidEmail) {
            const mailtoLink = `mailto:${Email_tab}?subject=${encodeURIComponent(Email_Subject)}&body=${encodeURIComponent(Email_Message)}`;
    
            // Open default mail client with the constructed mailto link
            window.location.href = mailtoLink;
        } else {
            setErrorMessage('Please fill all fields and ensure the email is valid');
        }
    };

    
  return (
    <>
    <Header/>
     <section className="ratemystation-contact-sec">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="contact-form-station">
                            <Row>
                                <Col lg={6}>
                                    <div className="ratemystaion-contact-form">
                                        <h3>Contact Us</h3>
                                        <p>Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam. Et risus
                                            commodo natoque pulvinar eu, interdum. Viverra tortor hac sollicitudin dictum
                                            sit.
                                            Condimentum eget et commodo sapien porta felis amet pellentesque. </p>
                                        <ul>
                                            <li><RiMapPin2Fill /> <span>2972 Westheimer Rd. <br />
                                                    Santa Ana, Illinois 85486</span></li>
                                            <li><RiPhoneFill /> 1234-0293913</li>
                                            <li><RiMailFill /> info@form.com</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="contact-form-fields">
                                        <form action="">
                                            <div className="input-field">
                                                <label htmlFor="name">Email</label>
                                                <input type="text" id="name" name="name" placeholder="Type your name here..." value={Email_tab} onChange={(e) => {
                                                                setEmail_tab(e.target.value);
                                                                handleEmailValidation(e.target.value);

                                                            }} />
                                                            <p style={{ color: 'red' }}>{errorMessage}</p> {/* Display error message in red */}

                                            </div>
                                            <div className="input-field">
                                                <label htmlFor="email">Subject</label>
                                                <input type="email" id="email" name="email" placeholder="Type your email here..." value={Email_Subject} onChange={(e) => {
                                                                setEmail_Subject(e.target.value) }}
                                                               />
                                            </div>
                                            <div className="input-field">
                                                <label htmlFor="message">Message</label>
                                                <textarea id="message" name="message" placeholder="Type your Messages here..."  value={Email_Message} onChange={(e) => {
                                                                setEmail_Message(e.target.value)
                                                                e.target.style.borderColor = 'blue';

                                                            }}> </textarea>
                                            </div>
                                            <div className="contact-form-btn">
                                                <button type="submit" onClick={handleSubmit}>Send</button>
                                            </div>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="contact-latest-line">
                                <Col lg={12} className="p-0">
                                    <div className="contact-follow-topline">
                                        <Row>
                                            <Col lg={4}>
                                                <div className="contact-latest-updates">
                                                    <p>For all the latest updates and more:</p>
                                                </div>
                                            </Col>
                                            <Col lg={8}>
                                                <div className="contact-follow-like-btn">
                                                    <ul>
                                                        <li><RiFacebookFill /> Like us</li>
                                                        <li><RiInstagramLine /> Follow us</li>
                                                        <li><RiTwitterFill /> Follow us</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Footerah/>
    </>
  )
}

export default Contactus
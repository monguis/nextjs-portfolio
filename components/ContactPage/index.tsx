import { Button, Container, Form } from "react-bootstrap";
import styles from "../../styles/componentStyles/ContactPage/index.module.scss";

export const ContactPage: React.FC = () => {
    return <section>
        <Container>
            <h2>Let&apos;s Connect</h2>

            <p>I am very confident we can do things together</p>

            <div className={styles["form-container"]}>
           
                <Form action="https://formsubmit.co/5dea067bfa8bfe97c50f787e4fef3762" method="POST" className={styles["form-container__form"]}>
                <h3>I knew you&apos;d come dude</h3>
                <hr />
                <p>a paragraph explaining why I am awesome</p>
                    
                    <input type="text" name="_honey" style={{ display: "none" }}></input>
                    <input type="hidden" name="_autoresponse" value="Hi, Juan's here, I'll be in touch with you as soon as possible" />
                    

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="name-field">Full Name</Form.Label>
                        <Form.Control name="name" id="name-field" placeholder="John Doe" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="subject-field">Subject</Form.Label>
                        <Form.Control  name="_subject" id="subject-field" placeholder="John Doe" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="email-field">Email address</Form.Label>
                        <Form.Control name="email" id="email-field" type="email" placeholder="Email Address" required />

                        <Form.Text className="text-muted" style={{color:" #FDFFFCaa !important"}}>
                            I&apos;ll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="message-field" as="label">Message</Form.Label>

                        <Form.Control name="message" as="textarea" style={{ resize: "none" }} id="message-field" />


                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Contact Juan
                    </Button>
                </Form>
            </div>


        </Container>
    </section>
}
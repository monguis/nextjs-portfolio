import { NextPage } from "next";
import Head from "next/head";
import { ContactPage } from "../components/ContactPage";

export const Contact: NextPage = () => {
    return <>
        <Head>
            <title>Contact, Juan Castellanos Full Stack Web Developer</title>
        </Head>
        <ContactPage />
    </>
}

export default Contact;
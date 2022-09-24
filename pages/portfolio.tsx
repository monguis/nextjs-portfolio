import { NextPage } from "next";
import Head from "next/head";
import { ProjectsPage } from "../components/ProjectsPage";

export const PortfolioPage: NextPage = () =>
    <>
        <Head>
            <title>Projects Showcase, Juan Castellanos Full Stack Web Developer</title>
        </Head>
        <ProjectsPage />
    </>

export default PortfolioPage;
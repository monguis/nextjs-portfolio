import MenuBar from "./MenuBar";
import FooterComponent from "./FooterComponent";
import { ParallaxWrapper } from "../shared/ParallaxElement/Wrapper";
import { ScrollToTopButton } from "./ScrollToTopButton";


type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => <>
    <MenuBar />
    <div className="page-wrapper">
        <main id="main-content">
            {children}
            <ScrollToTopButton />
        </main>
    </div>
    <FooterComponent />
</>

export default Layout;
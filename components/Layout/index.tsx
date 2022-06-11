import MenuBar from "./MenuBar";
import FooterComponent from "./FooterComponent";
import { ParallaxWrapper } from "../shared/ParallaxElement/Wrapper";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => <ParallaxWrapper>
    <MenuBar />
    {children}
    <FooterComponent />
</ParallaxWrapper>

export default Layout;
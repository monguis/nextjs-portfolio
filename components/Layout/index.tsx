import MenuBar from "./MenuBar";
import FooterComponent from "./FooterComponent";

type LayoutProps = {
    children: React.ReactNode; // 👈️ type children
};

const Layout: React.FC<LayoutProps> = ({ children }) => <>
    <MenuBar />
    {children}
    <FooterComponent />
</>

export default Layout;
import Header from "./Header";
import { AboutMeSection } from "./AboutMeSection";
import { WhatIDidSection } from "./WhatIDidSection";
import { WhatIKnowSection } from "./WhatIKnow";

const HomePage: React.FC = () => <>
    <Header />
    <AboutMeSection />
    <WhatIKnowSection />
    <WhatIDidSection />
</>

export default HomePage;
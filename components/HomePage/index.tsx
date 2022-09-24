import Header from "./Header";
import { AboutMeSection } from "./AboutMeSection";
import { WhatIDidSection } from "./WhatIDidSection";
import { WhatIKnowSection } from "./WhatIKnow";
import { WhatIAccomplishedSection } from "./WhatIAccomplisedSection";

const HomePage: React.FC = () => <>
    <Header />
    <AboutMeSection />
    <WhatIKnowSection />
    <WhatIAccomplishedSection />
    <WhatIDidSection />
</>

export default HomePage;
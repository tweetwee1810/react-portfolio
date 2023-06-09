import React from "react";
import PageContent from "../components/PageContent";
import About from '../components/About';
import Portfolio from "../components/Portfolio";
import Contact from '../components/Contact';
import Resume from '../components/Resume';

function Page({currentPage}) {
const renderPage = () => {
    switch (currentPage.name) {
        case "about me": return <About />;
        case "portfolio": return <Portfolio />;
        case "contact": return <Contact />;
        case "resume": return <Resume />;
        default: return <About />;
            
    }
};

return (

    <section>
        <PageContent>{renderPage()}
        </PageContent>
    </section>

)
}

export default Page;
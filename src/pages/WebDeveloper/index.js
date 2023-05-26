import React, { useState } from 'react';
import { Header, About, Portfolio, Contact, Resume, Footer } from '../../components';
import "./style.css";

const WebDeveloper = () => {

    const [currentPage, setCurrentPage] = useState("About");

    return (
      <>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {/* if currentPage is equal to About, then go to About */}
        {currentPage === "About" && <About setCurrentPage={setCurrentPage}/>}
        {currentPage === "Portfolio" && <Portfolio />}
        {currentPage === "Contact" && <Contact />}
        {currentPage === "Resume" && <Resume />}
        <br></br>
        <Footer />
      </>
    );
}

export default WebDeveloper;
import React, { useEffect }  from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import TeamSection from "../Components/TeamSection/TeamSection"; 
import Footer from "../Components/Footer/Footer";


function Board() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className = "board-page">
            <NavBar />
            <TeamSection/>
            <Footer />
        </div>
    ) ;
}


export default Board ;

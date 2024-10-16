import React, { useEffect }  from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import AllBlogs from "../Components/blog-section/AllBlogs";
import Footer from "../Components/Footer/Footer";


function Blogs() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className = "events-page">
            <NavBar />
            <AllBlogs/>
            <Footer />
        </div>
    ) ;
}


export default Blogs ;
import React, { useEffect }  from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import Footer from "../Components/Footer/Footer";
import BlogDetail from "../Components/blog-section/BlogDetails";

function Blogs() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className = "events-page">
            <NavBar />
            <BlogDetail/>
            <Footer />
        </div>
    ) ;
}


export default Blogs ;
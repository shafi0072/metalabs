import ContactUs from "../ContactUs";
import Award from "./Award";
import Banner from "./Banner";
import Clients from "./Clients";
import FooterForm from "./FooterForm";
import Gallery from "./Gallery";
import Services from "./Services";



const HomeComponent = () => {
    return (
        <div>
            {/* banner section start */}
            <Banner></Banner>
            {/* banner section banner section end */}

            {/* gallery section start */}
            <Gallery></Gallery>
            {/* gallery section end */}

            {/* services section start */}
            <Services></Services>
            {/* services section end */}
            
            {/* award section start */}
            <Award></Award>
            {/* award section end */}

            {/* clients section start */}
            <Clients></Clients>
            {/* clients section end */}

            {/* contactUs section start */}
            <FooterForm></FooterForm>
            {/* contactUs section end */}
        </div>
    );
};

export default HomeComponent;
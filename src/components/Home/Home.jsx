import Masonry from "../Masonry/Masonry";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            
            <Navbar />

            <div className="max-w-[1000px] mx-auto">
                <Banner />
                <Masonry />               
            </div>

            <Footer/>
        </div>
    );
};

export default Home;

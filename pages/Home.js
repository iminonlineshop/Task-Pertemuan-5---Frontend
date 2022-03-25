import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movie from "../components/Movie/Movie";
import Navbar from "../components/Navbar/Navbar";

function Home() {
    return(
        <div>
            <Navbar />
            <Hero />
            <Movie />
            <AddMovieForm />
            <Footer />
        </div>
    );
}

// Export halaman
export default Home;
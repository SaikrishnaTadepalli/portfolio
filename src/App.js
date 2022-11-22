import Navbar from "./Components/Navbar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Education from "./Sections/Education";
import Skills from "./Sections/Skills";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import ContactBar from "./Components/ContactBar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
	return (
		<main className="main">
			<Navbar />
			<div className="app_section_container">
				<Home />
				<About />
				<Education />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
			</div>
			<ContactBar />
			<Footer />
		</main>
	);
}

export default App;

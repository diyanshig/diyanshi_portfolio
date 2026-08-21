import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Chatbot from "./sections/Chatbot";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#2F2F28]">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Chatbot />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;
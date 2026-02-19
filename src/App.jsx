import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import PatternBg from "./components/PatternBg";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PatternBg />
      <Nav />
      <main>
        <Hero />

        <Divider />
        <Projects />
        <Divider />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

function Divider() {
  return (
    <div className="relative z-10 mx-auto flex max-w-5xl items-center gap-4 px-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
      <svg
        className="h-4 w-4 text-copper/20"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <path d="M8 0l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
    </div>
  );
}

export default App;

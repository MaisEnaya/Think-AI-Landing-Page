import Header from './components/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero.jsx";

const Home = () => (
    <main className="pt-16">
        <Hero />


    <div className="h-screen bg-gray-800 text-white flex items-center justify-center">
        Page Content
    </div>
    <div className="h-screen bg-gray-700 text-white flex items-center justify-center">
        Scroll Down
    </div>
</main>
);

const Contact = () => (
    <div className="pt-20 px-6">
        <h1 className="text-2xl">Contact</h1>
        <p>Thanks for reaching out!</p>
    </div>
);

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}
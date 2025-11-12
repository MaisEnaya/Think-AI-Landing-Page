// src/App.jsx
import Header from './components/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import SellingPoints from './components/SellingPoints.jsx';
import { ShieldCheck, Cpu, MapPin } from 'lucide-react';
import CallToAction, {CTAClosing, CTAOpening} from "./components/CallToAction.jsx";
import AIFabric from "./components/AIFabric.jsx";
import AIFabricTagline from "./components/AIFabricTagline.jsx";
import Products from "./components/Products.jsx";
import ProductsDetails from "./components/ProductsDetails.jsx";
import OnlyWithThink from "./components/OnlyWithThink.jsx";
import Vision from "./components/Vision.jsx";
import Footer from "./components/Footer.jsx";
import ContactHero from "./components/ContactHero.jsx";
import Leadership from "./components/Leadership.jsx";
import Connect from "./components/Connect.jsx";

const mainSellingPoints = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-blue" />, // or text-blue-bright
        title: '4 Patents Pending',
        description: 'Pioneering new frontiers in AI technology with our innovative research and development.',
    },
    {
        icon: <Cpu className="h-8 w-8 text-blue" />, // or text-blue-bright
        title: 'Engineered for Sovereignty',
        description: 'Ensuring your data remains secure and under your control with our sovereign AI solutions.',
    },
    {
        icon: <MapPin className="h-8 w-8 text-blue" />, // or text-blue-bright
        title: 'Built in KSA',
        description: 'Proudly developed and engineered in the Kingdom of Saudi Arabia, driving local innovation.',
    },
];

const Home = () => (
    <main>
        <Hero />
        <SellingPoints
            points={mainSellingPoints}
            showLogo={false}
            logoUrl="/think-logo-white-glow.png" // ensure this exists in /public
            className="p-24 bg-grey"
        />

        <CTAOpening
        className={"p-24 max-w-720px"}
        />
        <AIFabric
        className={"px-24"}
        />
        <AIFabricTagline
        className={"px-24"}
        />
        <Products
            className={"px-24"}
        />
        <ProductsDetails
            className={"px-24"}
        />
        <OnlyWithThink
            className={"px-24"}
        />
        <Vision
            className={"px-24"}
        />
        <CTAClosing/>
        <Footer/>


</main>
);

const Contact = () => (
    <main>
        <ContactHero />
        <Leadership/>
        <Connect/>
        <Footer/>
    </main>
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
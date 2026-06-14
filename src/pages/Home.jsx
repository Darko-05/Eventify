import Header from "../components/Header"
import Footer from "../components/Footer"
import HomeContent from "../components/HomeContent"
import { Link } from "react-router-dom"

export default function Home() {

    return (<section className="flex flex-col min-h-screen">

        <Header />

        <HomeContent />
        
        <Footer />

    </section>

    )
}
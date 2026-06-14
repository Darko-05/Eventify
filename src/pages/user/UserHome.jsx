import UserHeader from "../../components/UserHeader"
import Footer from "../../components/Footer"
import HomeContent from "../../components/HomeContent"


export default function UserHome() {

    return (<section className="flex flex-col">

        <UserHeader />

        <HomeContent />
        
        <Footer />

           </section>)
}
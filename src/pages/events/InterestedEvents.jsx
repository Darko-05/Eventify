import FooterProfile from "../../components/FooterProfile"
import HeaderProfile from "../../components/SimpleHeader"



export default function InterestedEvents() {

    return <section className='flex flex-col min-h-screen'>

        <HeaderProfile />

            <div className="flex flex-grow min-w-[90%] mx-auto">

                <button className="cursor-pointer"><img src="/LeftArrow.png" alt="" className="absolute w-8 top-[73px]"/></button>
                <p className="text-2xl font-semibold mt-5 ml-12">Interested Events</p>

            </div>

        <FooterProfile />

    </section>


}
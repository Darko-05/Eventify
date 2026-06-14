import { Link } from "react-router-dom"
import HeaderProfile from "../../components/SimpleHeader"
import FooterProfile from "../../components/FooterProfile"



export default function ShareInterests() {

    return <section className="flex flex-col min-h-screen">

        <HeaderProfile />

            <div className="relative flex flex-col flex-grow min-w-[90%] h-fit mx-auto gap-y-4 pb-20">

                <button className="cursor-pointer"><img src="/LeftArrow.png" alt="" className="absolute top-10 mt-10  flex w-8 h-auto mt-auto "/></button>
                <p className="text-2xl font-semibold mt-5 ml-8">Share your interests with us</p>
                <p className="flex self-start ml-8">Choose your interests below to get personalized event suggestions</p>

                <h3 className="text-xl font-semibold mt-5 ml-8">Music</h3>

                <div className="flex flex-row text-sm font-light gap-3 ml-8">
  
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Concerts</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Music Festivals</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Music Workshops</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Dj Nights</p>

                </div>

                <hr className="border ml-8 px-3 mt-4"/>

                <h3 className="text-xl font-semibold mt-5 ml-8">Arts & Culture</h3>

                <div className="flex flex-row text-sm font-light gap-3 ml-8">
  
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Art Exhibitions</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Cultural Festivals</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Theater Plays</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Dance Performances</p>

                </div>

                <hr className="border ml-8 px-3 mt-4"/>

                <h3 className="text-xl font-semibold mt-5 ml-8">Food & Drink</h3>

                <div className="flex flex-row text-sm font-light gap-3 ml-8">
  
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Food Festivals</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Wine Tastings</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Cooking classes</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Beer Festivals</p>

                </div>

                <hr className="border ml-8 px-3 mt-4"/>

                <h3 className="text-xl font-semibold mt-5 ml-8">Sport &  Fitness</h3>

                <div className="flex flex-row text-sm font-light gap-3 ml-8">
  
                    <p className="border-2 rounded-xl px-2">Marathons</p>
                    <p className="border-2 rounded-xl px-2">Yoga Sessions</p>
                    <p className="border-2 rounded-xl px-2">Fitness Workshops</p>
                    <p className="border-2 rounded-xl px-2">Sporting Events</p>

                </div>

                <hr className="border ml-8 px-3 mt-4"/>

                <h3 className="text-xl font-semibold mt-5 ml-8">Sport &  Fitness</h3>

                <div className="flex flex-row text-sm font-light gap-3 ml-8">
  
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Marathons</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Yoga Sessions</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Fitness Workshops</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Sporting Events</p>

                </div>

                <hr className="border ml-8 px-3 mt-4"/>

                <h3 className="text-xl font-semibold mt-5 ml-8">Business & Networking</h3>

                <div className="flex flex-row text-sm font-light gap-3 ml-8">
  
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Conferences</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Seminars</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Workshops</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Networking Events</p>

                </div>

                <hr className="border ml-8 px-3 mt-4"/>

                <h3 className="text-xl font-semibold mt-5 ml-8">Family & Kids</h3>

                <div className="flex flex-row text-sm font-light gap-3 ml-8">
  
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Family-Friendly Events</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Children's Workshops</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Kid-Friendly Shows</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Educational Activities</p>

                </div>

                <hr className="border ml-8 px-3 mt-4"/>

                <h3 className="text-xl font-semibold mt-5 ml-8">Technologies</h3>

                <div className="flex flex-row text-sm font-light gap-3 ml-8">
  
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Tech Conferences</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Hackathons</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Startup Events</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Gadget Expos</p>

                </div>

                <hr className="border ml-8 px-3 mt-4"/>

                <h3 className="text-xl font-semibold mt-5 ml-8">Comedy & Entertainment</h3>

                <div className="flex flex-row text-sm font-light gap-3 ml-8">
  
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Stand-up Comedy</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Improv Nights</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Comedy Festivals</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Magic Shows</p>

                </div>

                <hr className="border ml-8 px-3 mt-4"/>

                <h3 className="text-xl font-semibold mt-5 ml-8">Charity & Causes</h3>

                <div className="flex flex-row text-sm font-light gap-3 ml-8">
  
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Fundraising Events</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Charity Galas</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Benefit Concerts</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Auctions & Fundraisers</p>

                </div>

                <hr className="border ml-8 px-3 mt-4"/>

                <h3 className="text-xl font-semibold mt-5 ml-8">Education & Learning</h3>

                <div className="flex flex-row text-sm font-light gap-3 ml-8">
  
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Lectures & Talks</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Workshops</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Educational Seminars</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Skills-Bulding Sessions</p>

                </div>

                <hr className="border ml-8 px-3 mt-4"/>

                <h3 className="text-xl font-semibold mt-5 ml-8">Travel & Adventures</h3>

                <div className="flex flex-row text-sm font-light gap-3 ml-8">
  
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">City Tours</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Adventure Travel</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Cultural Experiences</p>
                    <p className="border-2 border-[#6F6F6F] rounded-xl px-2">Cruise Vacations</p>

                </div>

                <hr className="border ml-8 px-3 mt-4"/>

                <Link to='/' className="flex self-end bg-[#2B293D] text-base text-white font-sans font-blod rounded-lg px-6 py-2 mt-10">Save my Interests</Link>

            </div>

        <FooterProfile />

    </section>
}
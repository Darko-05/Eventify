import { Link } from "react-router-dom"

export default function Footer() {

    return <section className="flex flex-col items-center justify-end px-4 bg-white">

        <div className="relative w-full mx-auto h-[50px] bg-[#2B293D] aspect-auto">

            <img src="/CreateEventCTA.png" alt="Footer img"/>
            <button className="absolute right-[32px] top-[90px] flex flex-row gap-2 font-bold bg-[#FFE047] p-[8px] px-6 rounded-md">Create Event</button>

            <div className="relative w-full mx-auto h-[120px] top-0 flex flex-col bg-[#FFE047] my-7">

                <h2 className="flex font-[montserrat] text-[#2D2C3C] text-lg font-bold my-4 mx-12">Subscribe to our Newsletter</h2>
                <p className=" font-sans text-sm mx-12 -my-2">Receive our weekly newsletter & updates with new events from <br />your favourite organizers & venues.</p>
                <input type="email" placeholder="Enter your e-mail address" id="email" className="absolute top-[35px] right-36 text-sm border border-black rounded-tl-md rounded-bl-md p-3 px-8"/>
                <button  className="absolute w-20 top-[35px] right-[64px] text-[#FFE047] bg-[#2B293D] py-[10px] rounded-tr-md rounded-br-md rounded-none">Submit</button>

            </div>

            <div className="relative flex flex-row flex-1 min-w-[1000px] mx-auto min-h-fit -top-7 bg-[#2B293D] my-auto gap-5 gap-x-20">
                
                <nav className="flex flex-col">
                    <h2 className="mx-10 py-6 font-[montserrat] text-white whitespace-nowrap">Company Info</h2>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">About Us</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Contact Us</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Careers</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">FAQs</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Terms of Service</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Privacy Policy</Link>
                </nav>

                <nav className="flex flex-col -mx-10"> 
                    <h2 className="flex flex-col mx-10 py-6 font-[montserrat] text-white">Help</h2>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Account Support</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Listing Events</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Event ticketing</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Ticket Purchase Terms & Conditions</Link>
                </nav>
                    
                <nav className="flex flex-col -mx-10">
                    <h2 className="flex flex-col mx-10 py-6 font-[montserrat] text-white">Categories</h2>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Concert and Gigs</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Festivals & Lifestyle</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Business & Networking</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Foods & Drinks</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Performing Arts</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Sports & Outdoors</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Exhibitions</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Workshops, Conferences & Classes</Link>
                </nav>
                
                <nav className="flex flex-col -mx-10">
                    <h2 className="flex flex-col mx-10 py-6 font-[montserrat] text-white">Follow us</h2>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Facebook</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Instagram</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Twitter</Link>
                    <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Youtube</Link>
                </nav>

                <nav className="flex flex-col">
                    <h2 className="flex flex-col mx-10 py-6 font-[montserrat] text-white">Download The App</h2>
                    <button onClick={() => window.location.href = 'https://play.google.com/store/apps'} className="w-[154px] mx-10 h-auto cursor-pointer"><img src="/play-store.png" alt="Telecharger sur PlayStore" className="w-[154px] h-auto" /></button>
                    <button onClick={() => window.location.href = 'https://www.apple.com/fr/app-store/'} className="w-[154px] h-auto cursor-pointer my-3 mx-10"><img src="/app-store.png" alt="Telecharger sur App-Store" className="w-[154px] h-auto" /></button>
                </nav>

            </div>

            <div className="relative min-w-[1000px] flex flex-col items-center bg-[#2B293D] pb-2 -mt-8 gap-y-10">

                <hr className='absolute border w-[950px] border-[#A9A9A980] mt-7' />
                <p className="text-[#A9A9A9] text-sm mt-9">&copy; 2023 Eventify. All rights reserved.</p>
                
            </div>

        </div>


    </section>
}
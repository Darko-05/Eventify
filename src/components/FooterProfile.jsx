import { Link } from "react-router-dom"


export default function FooterProfile() {
    
        return <section className="flex flex-col items-center justify-end px-4 bg-white">
    
            <div className="relative w-full mx-auto h-[50px] bg-[#2B293D] aspect-auto">
    
                <div className="relative flex flex-row flex-1 w-full mx-auto h-[300px] -top-7 bg-[#2B293D] my-auto gap-5 gap-x-20">
                    
                    <nav className="flex flex-col">
                        <h2 className="mx-10 py-6 font-[montserrat] text-white text-md">Company Info</h2>
                        <Link to='' className="text-[#A9A9A9] mx-10 text-sm">About Us</Link>
                        <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Contact Us</Link>
                        <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Careers</Link>
                        <Link to='' className="text-[#A9A9A9] mx-10 text-sm">FAQs</Link>
                        <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Terms of Service</Link>
                        <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Privacy Policy</Link>
                    </nav>
    
                    <nav className="flex flex-col -mx-10"> 
                        <h2 className="flex flex-col mx-10 py-6 font-[montserrat] text-white text-md">Help</h2>
                        <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Account Support</Link>
                        <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Listing Events</Link>
                        <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Event ticketing</Link>
                        <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Ticket Purchase Terms & Conditions</Link>
                    </nav>
                        
                    <nav className="flex flex-col -mx-10">
                        <h2 className="flex flex-col mx-10 py-6 font-[montserrat] text-white text-md">Categories</h2>
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
                        <h2 className="flex flex-col mx-10 py-6 font-[montserrat] text-white text-md">Follow us</h2>
                        <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Facebook</Link>
                        <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Instagram</Link>
                        <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Twitter</Link>
                        <Link to='' className="text-[#A9A9A9] mx-10 text-sm">Youtube</Link>
                    </nav>
    
                    <nav className="flex flex-col">
                        <h2 className="flex flex-col mx-10 py-6 font-[montserrat] text-white text-md text-nowrap">Download The App</h2>
                        <button onClick={() => window.location.href = 'https://play.google.com/store/apps'} className="w-[154px] mx-10 h-auto cursor-pointer"><img src="/play-store.png" alt="Telecharger sur PlayStore" className="w-[154px] h-auto" /></button>
                        <button onClick={() => window.location.href = 'https://www.apple.com/fr/app-store/'} className="w-[154px] h-auto cursor-pointer my-3 mx-10"><img src="/app-store.png" alt="Telecharger sur App-Store" className="w-[154px] h-auto" /></button>
                    </nav>
                    
                </div>

                <div className="relative w-full flex flex-col items-center bg-[#2B293D] pb-1 -mt-20">

                    <hr className='absolute border w-[950px] border-[#A9A9A980] mt-7' />
                    <p className="text-[#A9A9A9] text-sm mt-9">&copy; 2023 Eventify. All rights reserved.</p>

                </div>
    
            </div>
    
    
        </section>
}
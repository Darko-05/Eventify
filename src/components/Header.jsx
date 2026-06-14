import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


export default function Header() {

    return <section className='flex justify-start items-center flex-col px-4'>

        <div className='relative w-full mx-auto h-[50px] flex flex-row justify-center bg-[#2B293D] aspect-auto'>

            <img src="/Ticket.png" alt="Logo-Evently" className='absolute w-10 h-auto left-6 -rotate-6 py-1' />
            <h2 className='absolute left-[66px] top-2 font-black text-yellow-300 tracking-wide py-1'>Eventify</h2>

            <nav className="flex md:gap-10 md:items-stretch md:-ml-28">

                <Link to='' className='flex text-white items-center font-[montserrat] text-sm'>Home</Link>
                <Link to='' className='flex text-white items-center font-[montserrat] text-sm'>Event</Link>
                <Link to='' className='flex text-white items-center font-[montserrat] text-sm'>About</Link>
                <Link to='' className='flex text-white items-center font-[montserrat] text-sm'>Contact</Link>

            </nav>

            

            <div className="absolute top-[15px] right-0 flex justify-end gap-2">

                <Link to='/create-event' className='flex text-white px-4 font-[montserrat] text-sm'>Create Event</Link>
                <Link to="/login" className="flex text-white font-[montserrat] text-sm">Login</Link>
                <Link to="/register" className="flex text-black font-[montserrat] border border-[#FFE047] p-1 bg-[#FFE047] -my-2
                mx-4 rounded-lg">Sign up</Link>

            </div>

        </div>

        <div className='relative w-full mx-auto'>

            <img src="/home-img.jpg" alt="Image-concert" className="w-full h-[300px] object-cover object-bottom overflow-hidden brightness-75"/>

            <div className="absolute inset-0 justify-end items-end py-16 px-48">

                <p className="font-[montserrat] text-white text-2xl font-bold">Don't miss out!</p>
                <p className="font-[montserrat] text-white text-2xl font-bold text-nowrap">Explore the <span className="text-yellow-400">vibrant events</span> happening locally and globally.</p>

            <div className="relative flex items-center m-10">

                <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute text-gray-500 m-3"/>   
                <input type="search" placeholder="Search Events, Categories, Locations..." className="w-[500px] rounded-tr-none rounded-br-none outline-none p-[12px] px-10 text-sm rounded-tl-lg rounded-bl-lg" />
                <select name="Localisation" id="" className="border-l-2 border-x-gray-500 text-[#5A5A5A] w-[150px] p-3 outline-none bg-white text-sm rounded-tr-lg rounded-br-lg px-6">
                    <option value="">Mumbay</option>
                </select>
                <FontAwesomeIcon icon={faLocationDot} className="absolute text-blackgray-500 right-[335px]"/>

            </div>

        </div>

        </div>

    </section>
}
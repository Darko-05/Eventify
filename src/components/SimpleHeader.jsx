import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faTicket } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


export default function HeaderProfile() {

    return <section className='flex justify-start items-center flex-col bg-white px-4'>
    
            <div className='relative w-full mx-auto h-[50px] flex flex-row justify-center bg-[#2B293D] aspect-auto'>
                <img src="/Ticket.png" alt="Logo-Evently" className='absolute w-10 h-auto -top-1 left-6 -rotate-6 py-1' />
                <h2 className='absolute left-[66px] top-2 font-black text-yellow-300 tracking-wide py-1'>Eventify</h2>
    
                <nav className="flex gap-8 items-stretch -ml-28">
    
                <Link to='' className='flex text-white items-center font-[montserrat] text-sm'>Home</Link>
                <Link to='' className='flex text-white items-center font-[montserrat] text-sm'>Event</Link>
                <Link to='' className='flex text-white items-center font-[montserrat] text-sm'>About</Link>
                <Link to='' className='flex text-white items-center font-[montserrat] text-sm'>Contact</Link>
    
                </nav>
    
                <div className="absolute top-[15px] right-0 flex justify-end gap-10">
    
                    <Link to="/create-event" className='flex text-white px-4 font-[montserrat] text-sm'>Create Event</Link>

                    <h6 className="absolute top-[15px] mr-[147px] text-white font-[montserrat] text-xs">Tickets</h6>
                    <Link to=''><FontAwesomeIcon icon={faTicket} className="text-white mb-1 -rotate-12" /></Link>

                    <h6 className="absolute top-[15px] mr-[74px] text-white font-[montserrat] text-xs">Interested</h6>
                    <Link to=''><FontAwesomeIcon icon={faStar} className="text-white mb-1" /></Link>

                    <Link to="/userprofile" className="text-white font-[montserrat] text-sm">
                    <FontAwesomeIcon icon={faUser} className="text-white mx-6" /></Link>
                    <h6 className="absolute top-[16px] mr-3 text-white font-[montserrat] text-xs">Profile</h6>

                    <select name="Option Profile" id="" className="border-l-2 p-3 outline-none bg-white text-sm font-[montserrat] hidden" >
                        <option value="">Account Info</option> 
                        <option value="">Change Email</option>
                        <option value="">Password</option>           
                    </select>
            
                </div>
    
            </div>
    
        </section>
}
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'


export default function Order() {

    return <section className="flex flex-col items-center justify-center min-h-screen bg-slate-400">

        <div className="relative flex flex-col w-full max-w-[431px] h-[450px] bg-slate-300">

            <button className="cursor-pointer"><img src="/LeftArrow.png" alt="" className="absolute w-6 h-auto left-0 py-3"/></button>
            <p className="w-full text-lg font-medium p-2 pl-8 bg-white">Order Summary</p>

            <div className="relative flex flex-col w-[300px] h-[140px] self-center mt-12 border-t-4 border-[#4872C6] bg-white ">
 
                <p className="text-lg font-semibold text-blue-500 text-center mt-4">Standard Ticket</p>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-10 bg-slate-300 rounded-l-full z-10"></div>

                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-10 bg-slate-300 rounded-r-full z-10"></div>

                <p className='mt-10 ml-8'>Andrea Gomes</p>
                <p className='ml-8'>andreagomes@gmail.com</p>

                <p className="absolute right-0 bottom-4 bg-[#4872C6] px-3 text-white">Price</p>

            </div>

            <div className="relative flex flex-col gap-1 h-[150px] bg-white mt-auto border-t-4 border-t-[rgba(29,29,29,0.15)]">
                
                <p className="flex mx-20">Sub Total: </p>
                <p className="flex mx-20">Tax:</p>

                <hr className="border-2 border-[#6F6F6FB2] mx-20"/>


                <p className="flex mx-20 font-semibold">Order Total: <span className="absolute text-green-600 right-20">200$</span></p>

                <Link to='' className="absolute font-sans font-semibold bg-lime-600 text-white mx-10 my-1 w-[350px] text-center text-lg h-[40px] flex justify-center items-center bottom-0 rounded-sm gap-2"><FontAwesomeIcon icon={faLock} className="text-white text-lg" />Pay Now</Link>
                
            </div>

        </div>

    </section>

}
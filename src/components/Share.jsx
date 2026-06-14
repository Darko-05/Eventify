import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faWhatsapp,faXTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'



export default function Share() {

    return <section className="flex flex-col min-h-screen bg-slate-400 items-center justify-center">

        <div className="relative flex flex-col min-w-fit h-[200px] bg-white">

                <p className="w-full flex font-sans text-lg font-medium justify-center bg-white">Share with friends</p>
                <button className="absolute cursor-pointer right-0"><img src="/Closebutton.png" alt="" className="w-5 h-auto"/></button>
                <hr className="border-2 mt-2"/>

                <div className="flex flex-row items-center justify-center mt-8 gap-4">

                    <a href="#" target='_blank'><FontAwesomeIcon icon={faFacebook} className='text-blue-600 text-lg cursor-pointer'/></a>
                    <a href="#" target='_blank'><FontAwesomeIcon icon={faXTwitter} className='text-black text-lg cursor-pointer'/></a>
                    <a href="#" target='_blank'><FontAwesomeIcon icon={faWhatsapp} className='text-green-600 text-lg cursor-pointer'/></a>
                    <a href="#" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='text-blue-600 text-lg cursor-pointer'/></a>

                </div>

                <div className="flex flex-row w-[300px] h-[60px] mx-5 mt-5 border-2 justify-between">
 
                    <p className='m-1'>Event URL</p>
                    <FontAwesomeIcon icon={faCopy} className='text-slate-500 text-lg cursor-pointer mt-1'/>

                </div>

        </div>

    </section>
}
import { Link } from 'react-router-dom'
export default function Login() {

    return <section className='flex justify-center items-center min-h-screen bg-white px-4 overflow-hidden'>
                 
            <div className='relative w-full max-w-[900px] h-[500px] flex flex-row justify-center items-center bg-[#2B293D] aspect-auto'>
    
                <p className='absolute -top-[23px] left-0 text-slate-400 text-sm'>Sign in page</p>
                <img src="/Ticket.png" alt="Logo-Evently" className='absolute w-10 h-auto left-2 top-0 left-[15px] -rotate-6' />
                <h2 className='absolute left-[56px] top-3 font-black text-yellow-300 tracking-wide'>Eventify</h2>
                <p className='absolute left-[35px] top-[110px] text-white font-montserrat font-bold text-2xl'>Discover tailored <br /> events. <br />
                Sign up for personalized <br /> recommendations <br /> today!</p>
    
                <div className='absolute w-full max-w-[500px] h-full max-h-[500px] right-0 bg-slate-50 rounded-tl-3xl rounded-bl-3xl'>
    
                <p className='absolute text-2xl font-bold top-9 left-14 tracking-wide '>Login</p>
                <a href="#" className='absolute top-24 left-[60px] text-sm border border-solid border-[#A3A3A3] p-2 flex items-center gap-2 rounded-md hover:scale-105 hover:bg-transparent transition-transform duration-300 hover:text-black'><img src="/logo-google.png" alt="Logo Google" className='w-4 h-auto top-[5px] -left-5' />Login with Google</a>
                <a href="#" className='absolute text-sm flex items-center gap-2 top-[96px] left-[255px] border border-solid border-[#A3A3A3] p-2 rounded-md hover:scale-105 hover:bg-transparent transition-transform duration-300 hover:text-black'><img src="/logo-facebook.png" alt="Logo Facebook" className='w-4 h-auto' />Login with Facebook</a>
    
                <hr className='absolute top-[155px] left-[61px] border-[#6F6F6F4D] border-t-2 w-[167px]' />
                <h4 className='absolute top-[143px] left-[231px] font-sans text-[#A3A3A3]'>OR</h4>
                <hr className='absolute top-[155px] left-[255px] border-[#6F6F6F4D] border-t-2 w-[180px]' />
    
                <form action="get" method='' className='flex flex-col absolute top-[180px] left-[60px] justify-center items-start'>

                    <label htmlFor="email" className='text-md text-[#636363] py-1'>E-mail Adress</label>
                    <input type="email" name='email' id='email' placeholder='Enter your e-mail' className='font-sans text-sm text-[#ACACAC] p-2 px-4 border border-[#828282B2] w-[375px] rounded-md' />
                    <label htmlFor="password" className='text-md text-[#636363] py-1'>Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter password' className='font-sans text-sm text-[#ACACAC] p-2 px-4 border border-[#828282B2] w-[375px] rounded-md' />

                </form>
    
                    <Link to='/userhome' className='absolute top-[390px] left-[60px] w-[375px] bg-[#2B293D] text-white p-2 my-4'>Login</Link>     
    
                    <h4 className='absolute top-[455px] left-[62px] text-[#636363] text-sm'>Don't have an account ? <Link to="/register" className='text-black'>Sign up</Link></h4>
    
                </div>
    
            </div>
    
        </section>
}

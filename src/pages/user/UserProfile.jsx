import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"
import HeaderProfile from "../../components/SimpleHeader"
import FooterProfile from "../../components/FooterProfile"


export default function UserProfile() {

    return (<section className="min-h-screen flex flex-col">

        <HeaderProfile />

        <div className="relative flex flex-row min-w-[1319px] mx-auto">

            <div className="w-1/4 bg-[#EEEEEE] text-[#2D2C3C] font-[montserrat]">

                <h4 className="text-lg font-semibold m-4 mx-8">Account Settings</h4>

                <nav className="w-full flex flex-col text-sm">

                    <NavLink to='account-info' className={({ isActive }) => `py-2 px-8 ${ isActive ? 'bg-slate-50' : ''}`}>Account Info</NavLink>
                    <NavLink to='change-email' className={({ isActive }) => `py-2 px-8 ${ isActive ? 'bg-slate-50' : ''}`}>Change Email</NavLink>
                    <NavLink to='password' className={({ isActive }) => `py-2 px-8 ${ isActive ? 'bg-slate-50' : ''}`}>Password</NavLink>

                </nav>

            </div>

            <div className="flex flex-col flex-grow bg-white p-4">

                <Outlet/>
 
            </div>

        </div>

        <FooterProfile />

           </section>)
}
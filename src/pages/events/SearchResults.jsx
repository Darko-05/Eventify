import { Link } from "react-router-dom";
import FooterProfile from "../../components/FooterProfile"
import HeaderProfile from "../../components/SimpleHeader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


function EventFilter({imgUrl,eventCategorie,eventTitle,month,day,location,time,price,isFree}) {

    return <section className="w-full flex flex-row">

        <div className="relative w-[200px] h-[128px]">

            <img src={imgUrl} alt={eventTitle} className="w-[200px] h-[100px] rounded-lg"/>
            <p className="absolute bottom-7 font-montserrat bg-yellow-400 px-4 rounded-sm">{eventCategorie}</p>

        </div>

        <div className="flex flex-col font-montserrat w-[200px] h-[100px] ml-4 gap-y-1 text-sm ">

            <p>{eventTitle}</p>
            <p>{month}{day} | {location}</p>
            <p className="text-slate-500">{time}</p>
            <p className="flex flex-row text-[#287921]"><img src="/Vector.png" alt="Ticket" />{isFree ? "Free" : price}</p>

        </div>

    </section>

}

export default function SearchResults() {

    const events = [

    {
    imgUrl: "/prayernight.jpg",
    eventTitle: "Summer Music Festival",
    eventCategorie: "Concert",
    month: "Jul",
    day: "20",
    location: "Cotonou",
    time: "18:00",
    isFree: false,
    price: "5,000 CFA"
    },

    {
    imgUrl: "/prayernight.jpg",
    eventTitle: "Youth Prayer Night",
    eventCategorie: "Spiritual",
    month: "Jul",
    day: "21",
    location: "Porto-Novo",
    time: "22:00",
    isFree: true,
    price: ""
    },

    {
    imgUrl: "/prayernight.jpg",
    eventTitle: "Kingdom Business Talk",
    eventCategorie: "Conference",
    month: "Jul",
    day: "23",
    location: "Abomey-Calavi",
    time: "09:00",
    isFree: false,
    price: "10,000 CFA"
    },

    {
    imgUrl: "/prayernight.jpg",
    eventTitle: "Christian Art Showcase",
    eventCategorie: "Exhibition",
    month: "Jul",
    day: "24",
    location: "Parakou",
    time: "16:00",
    isFree: true,
    price: ""
    },

    {
    imgUrl: "/prayernight.jpg",
    eventTitle: "3-Day Fasting Retreat",
    eventCategorie: "Spiritual",
    month: "Jul",
    day: "25",
    location: "Ouidah",
    time: "08:00",
    isFree: false,
    price: "3,000 CFA"
    },

    {
    imgUrl: "/prayernight.jpg",
    eventTitle: "Faith Movie Night",
    eventCategorie: "Cinema",
    month: "Jul",
    day: "26",
    location: "Godomey",
    time: "19:00",
    isFree: true,
    price: ""
    },

    {
    imgUrl: "/prayernight.jpg",
    eventTitle: "Creative Worship Workshop",
    eventCategorie: "Training",
    month: "Jul",
    day: "27",
    location: "Dassa",
    time: "10:00",
    isFree: false,
    price: "7,000 CFA"
    },

    {
    imgUrl: "/prayernight.jpg",
    eventTitle: "Women of Destiny Conference",
    eventCategorie: "Conference",
    month: "Jul",
    day: "28",
    location: "Lokossa",
    time: "09:00",
    isFree: false,
    price: "Freewill Offering"
    },

    {
    imgUrl: "/prayernight.jpg",
    eventTitle: "Street Evangelism Outreach",
    eventCategorie: "Mission",
    month: "Jul",
    day: "29",
    location: "Akpakpa",
    time: "15:00",
    isFree: true,
    price: ""
    },

    {
    imgUrl: "/prayernight.jpg",
    eventTitle: "Holy Spirit Worship Night",
    eventCategorie: "Praise",
    month: "Jul",
    day: "30",
    location: "Calavi",
    time: "20:00",
    isFree: false,
    price: "2,000 CFA"
    }

    ];

    return <section className='flex flex-col min-h-screen'>

        <HeaderProfile />
 
            <div className="relative flex flex-col flex-grow min-w-[90%] mx-auto mb-32">
                
                <div className="relative flex min-w-[1319px] h-[250px] bg-[rgba(43,41,61,0.9)] items-center justify-center">

                    <p className="text-white text-2xl font-bold text-center tracking-wide">Explore a world of events. Find what excites you!</p>

                    <div className="absolute items-center bottom-10">
                    
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute text-gray-500 m-3"/>   
                        <input type="search" placeholder="Search Events, Categories, Locations..." className="w-[500px] rounded-tr-none rounded-br-none outline-none p-[12px] px-10 text-sm rounded-tl-lg rounded-bl-lg" />
                        <select name="Localisation" id="" className="border-l-2 border-x-gray-500 text-[#5A5A5A] w-[150px] p-3 outline-none bg-white text-sm rounded-tr-lg rounded-br-lg px-6">
                            <option value="">Mumbay</option>
                        </select>
                        <FontAwesomeIcon icon={faLocationDot} className="absolute text-blackgray-500 right-[130px] bottom-4"/>
                    
                    </div>
                    

                </div>

                <div className="relative flex flex-row w-full">

                    <div className="flex flex-col w-[250px] p-5 ml-6 border-r-2 border-slate-300">

                        <p className="font-semibold font-['montserrat'] text-xl">Filters</p>
                        <p className="font-semibold font-['montserrat'] text-normal mt-14">Price</p>

                        <div className="flex flex-col mt-4 gap-y-2">

                            <label htmlFor="price-free" className="font-light flex flex-row gap-2"><input id="price-free" type="checkbox" name="Price" value="Free"/>Free</label>
                            <label htmlFor="price-paid" className="font-light flex flex-row gap-2"><input id="price-paid" type="checkbox" name="Price" value="Paid"/>Paid</label>

                            <hr className="border border-slate-300 w-[200px] mt-3"/>

                        </div>

                        <p className="font-semibold font-['montserrat'] text-normal mt-10">Date</p>

                        <div className="flex flex-col mt-4 gap-y-2">

                            <label htmlFor="day-today" className="font-light flex flex-row gap-2"><input id="day-today" type="checkbox" name="Day" value="Today"/>Today</label>
                            <label htmlFor="day-tomorrow" className="font-light flex flex-row gap-2"><input id="day-tomorrow" type="checkbox" name="Day" value="Tomorrow"/>Tomorrow</label>
                            <label htmlFor="day-thisWeek" className="font-light flex flex-row gap-2"><input id="day-thisWeek" type="checkbox" name="Day" value="This Week"/>This Week</label>
                            <label htmlFor="day-thisWeekend" className="font-light flex flex-row gap-2"><input id="day-thisWeekeend" type="checkbox" name="Day" value="This Weekeend"/>This Weekeend</label>
                            <label htmlFor="" className="font-light flex flex-row gap-2"><input type="checkbox" name="Day" value=""/>Pick a Date</label>

                            <button className="flex text-blue-600 text-sm">More</button>
                            <hr className="border border-slate-300 w-[200px] mt-3"/>

                        </div>

                        <p className="font-semibold font-['montserrat'] text-normal mt-10">Category</p>

                        <div className="flex flex-col mt-4 gap-y-2">

                            <label htmlFor="type-AT" className="font-light flex flex-row gap-2"><input id="type-AT" type="checkbox" name="type" value="Adventure Travel"/>Adventure Travel</label>
                            <label htmlFor="type-AE" className="font-light flex flex-row gap-2"><input id="type-AE" type="checkbox" name="type" value="Art Exhibitions"/>Art Exhibitions</label>
                            <label htmlFor="type-AF" className="font-light flex flex-row gap-2"><input id="type-AF" type="checkbox" name="type" value="Auctions & Fundrasers"/>Auctions & Fundrasers</label>
                            <label htmlFor="type-BF" className="font-light flex flex-row gap-2"><input id="type-BF" type="checkbox" name="type" value="Beer Festivals"/>Beer Festivals</label>
                            <label htmlFor="type-BC" className="font-light flex flex-row gap-2"><input type="checkbox" id="type-BC" name="type" value="Benefits Concerts"/>Benefits Concerts</label>

                            <button className="flex text-blue-600 text-sm">More</button>
                            <hr className="border border-slate-300 w-[200px] mt-3"/>

                        </div>

                        <p className="font-semibold font-['montserrat'] text-normal mt-10">Format</p>

                         <div className="flex flex-col mt-4 gap-y-2">

                            <label htmlFor="format-CE" className="font-light flex flex-row gap-2"><input id="format-CE" type="checkbox" name="format" value="Community Engagement"/>Community Engagement</label>
                            <label htmlFor="format-CP" className="font-light flex flex-row gap-2"><input id="format-CP" type="checkbox" name="format" value="Concert & Performances"/>Concert & Performances</label>
                            <label htmlFor="format-C" className="font-light flex flex-row gap-2"><input id="format-C" type="checkbox" name="format" value="Concert"/>Concert</label>
                            <label htmlFor="format-EE" className="font-light flex flex-row gap-2"><input id="format-EE" type="checkbox" name="format" value="Exponential Events"/>Exponential Events</label>
                            <label htmlFor="format-FF" className="font-light flex flex-row gap-2"><input type="checkbox" id="format-FF" name="format" value="Festival & Fairs"/>Festival & Fairs</label>

                            <button className="flex text-blue-600 text-sm">More</button>
                            <hr className="border border-slate-300 w-[200px] mt-3"/>

                        </div>

                    </div>

                    <div className="flex flex-col w-full">

                        <div className="flex justify-end gap-x-4 right-0 m-8">

                            <label htmlFor="sort">Sort by:</label>
                            <select name="sort" id="sort" className="h-[30px] px-6 border border-slate-400 rounded-sm hover:border-0">
                                <option value="relevance">Relevance</option>
                            </select>

                        </div>   

                        <div className="grid grid-cols-2 ml-10 gap-y-16">

                            {events.map((event,index) => (<Link to='' key={index}><EventFilter key={index} {...event}/></Link>))}

                        </div>
                    
                    </div>

                </div>
               
            </div>

        <FooterProfile />

    </section>


}
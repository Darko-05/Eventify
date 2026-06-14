import { Link } from "react-router-dom"

function Categories({imgUrl,title}) {

    return <div className="flex flex-col items-center justify-center">

        <img src={imgUrl} alt={title} className="w-16 h-auto rounded-full"/>
        <p className="flex text-sm font-medium">{title}</p>

    </div>

}

export function Event({imgUrl,eventCategorie,title,month,day,location,time,price,isFree}) {

    return <div className="relative mx-auto">

        <img src={imgUrl} alt={title} className="w-[300px] h-[150px] rounded-lg"/>
        <p className="absolute top-[122px] bg-yellow-300 text-black text-sm font-['montserrat'] p-1 rounded-tr-sm rounded-br-sm">{eventCategorie}</p>

        <div className="grid grid-cols-2">

        <div className="relative flex flex-col items-start m-2">

            <p className="text-xl text-purple-800">{month}</p>
            <p className="absolute left-1 top-8 font-bold font-['montserrat']">{day}</p>

        </div>

        <div className="flex flex-col -ml-[135px]">

            <p className="font-medium font-['montserrat'] text-lg">{title}</p>
            <p className="text-sm font-['montserrat']">{location}</p>
            <p className="text-sm font-['montserrat']">{time}</p>
            <p className="text-sm font-['montserrat']"><span className="flex flex-row gap-1"><img src="/Vector.png" alt="Ticket" />{isFree ? "FREE" : price}</span></p>

        </div>

        </div>
 
    </div>

}

export default function HomeContent() {

    const EventCategories = [

        {
            imgUrl : "/Image-1.png",
            title : "Entertainment",
            path : ""
        },

        {
            imgUrl : "/Image-2.png",
            title : "Educational & Business",
            path : ""
        },

        {
            imgUrl : "/Image-4.png",
            title : "Cultural & Arts",
            path : ""
        },

        {
            imgUrl : "/Image-3.png",
            title : "Sports & Fitness",
            path : ""
        },

        {
            imgUrl : "/Image-5.png",
            title : "Technology & Innovation",
            path : ""
        },

        {
            imgUrl : "/Image-6.png",
            title : "Travel & Adventure",
            path : ""
        }

    ]

    const EventInfo = [

    {
        imgUrl : "/Image.png",
        eventCategorie : "Travel & Adventure",
        title : "Live Jazz Night",
        month : "Jul",
        day : "14",
        location : "Cotonou, Benin",
        time : "19:30",
        isFree : true,
        path : ""
    },

    {
        imgUrl : "/Image.png",
        eventCategorie : "Tech",
        title : "AI & Future Conference",
        month : "Aug",
        day : "03",
        location : "Abidjan, CI",
        time : "10:00",
        isFree : false,
        price : "$20",
        path : ""
    },

    {
        imgUrl : "/Image.png",
        eventCategorie : "Sport",
        title : "Beach Volleyball Finals",
        month : "Sep",
        day : "09",
        location : "Lomé, Togo",
        time : "16:00",
        isFree : false,
        price : "$5",
        path : ""
    },

    {
        imgUrl : "/Image1.png",
        eventCategorie : "Sport",
        title : "Beach Volleyball Finals",
        month : "Sep",
        day : "09",
        location : "Lomé, Togo",
        time : "16:00",
        isFree : false,
        price : "$5",
        path : ""
    },

    {
        imgUrl : "/Image1.png",
        eventCategorie : "Sport",
        title : "Beach Volleyball Finals",
        month : "Sep",
        day : "09",
        location : "Lomé, Togo",
        time : "16:00",
        isFree : false,
        price : "$5",
        path : ""
    },

    {
        imgUrl : "/Image1.png",
        eventCategorie : "Sport",
        title : "Beach Volleyball Finals",
        month : "Sep",
        day : "09",
        location : "Lomé, Togo",
        time : "16:00",
        isFree : false,
        price : "$5",
        path : ""
    }
]


    return (<section className="flex flex-col min-h-screen min-w-[90%] overflow-x-hidden">

        <main className="flex flex-col flex-grow w-full mx-auto mb-10 ml-6">

            <h2 className="text-xl font-['montserrat'] font-bold m-14">Explore Categories</h2>

            <div className="flex flex-row space-x-6 items-center justify-center -mt-8 gap-x-14">

            {
                EventCategories.map((i,index) => (<Link to={i.path || "#"} key={index} className="hover:scale-105 -ml-8"><Categories {...i}/></Link>))
            }

            </div>

            <h1 className="text-xl font-['montserrat'] font-bold m-14">Popular Event in Mumbay</h1>

            <div className="flex flex-row text-sm font-light gap-3 ml-14 -mt-10">
  
                <button className="border-2 border-[#6F6F6F] rounded-xl px-2">All</button>
                <button className="border-2 border-[#6F6F6F] rounded-xl px-2">Today</button>
                <button className="border-2 border-[#6F6F6F] rounded-xl px-2">Tomorrow</button>
                <button className="border-2 border-[#6F6F6F] rounded-xl px-2">The Weekend</button>
                <button className="border-2 border-[#6F6F6F] rounded-xl px-2">Free</button>

            </div>

            <div className="grid grid-cols-3 ml-14 mt-8">

                {
                    EventInfo.map((event,index) => (<Link key={index} to={event.path}><Event {...event} /></Link>))
                }

            </div>

            <button className="flex border-2 border-black w-[250px] py-1 items-center justify-center self-center mt-8">See More</button>

            <h1 className="text-xl font-['montserrat'] font-bold m-14">Discover Best Online Events</h1>

            <div className="grid grid-cols-3 ml-14">

                {
                    EventInfo.map((event,index) => (<Link key={index} to={event.path}><Event {...event} /></Link>))
                }

            </div>

            <button className="flex border-2 border-black w-[250px] py-1 items-center justify-center self-center mt-8">See More</button>

            <div className="relative flex h-72">

                <img src="/PersonalizedRecommendations.png" alt="" className="absolute w-full max-w-screen-lg mt-16 right-[190px]"/>
                <Link to='/share-interests' className="absolute top-[183px] left-[550px] p-2 text-center text-yellow-300 text-xl w-[200px] h-[53px] border-2 border-[#2D2C3C] bg-[#2D2C3C] rounded-lg">Get Started</Link>

            </div>

            <h1 className="text-xl font-['montserrat'] font-bold m-14">Trading Events Around The World</h1>

            <div className="grid grid-cols-3 ml-14">

                {
                    EventInfo.map((event,index) => (<Link key={index} to={event.path} className=""><Event {...event} /></Link>))
                }

            </div>

            <button className="flex border-2 border-black w-[250px] py-1 items-center justify-center self-center mt-8">See More</button>

        </main>

    </section>

    )
}
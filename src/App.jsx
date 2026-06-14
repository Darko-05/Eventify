import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserHome from './pages/user/UserHome'
import UserProfile from './pages/user/UserProfile'
import Password from './pages/user/Password'
import ChangeEmail from './pages/user/ChangeEmail'
import AccountInfo from './pages/user/AccountInfo'
import CreateEvent from './pages/events/CreateEvent'
import EventTitle from './pages/events/EventTitle'
import EventTitleType from './pages/events/EventTitle-1'
import EventTitleInfo from './pages/events/EventTitleInfo'
import SelectTickets from './components/SelectTickets'
import Share from './components/Share'
import Detail from './components/AttendeerDetails'
import Order from './components/OrderSummary'
import ShareInterests from './pages/events/ShareInterests'
import EventInfo from './components/EventInfo'
import SearchResults from './pages/events/SearchResults'
import InterestedEvents from './pages/events/InterestedEvents'


function App() {

  return (

    <>

    <BrowserRouter>

      <Routes>

        <Route path='/userprofile' element={<UserProfile />}>

          <Route index element={<AccountInfo/>} />
          <Route path='account-info' element={<AccountInfo/>} />
          <Route path='change-email' element={<ChangeEmail/>} />
          <Route path='password' element={<Password/>} />

        </Route>
        
        <Route path='/share-interests' element={<ShareInterests />} />
        <Route path='/order-summary' element={<Order />} />
        <Route path='/details' element={<Detail />} />
        <Route path='/share' element={<Share />} />
        <Route path='/select-tickets' element={<SelectTickets />} />
        <Route path='/event-title-1' element={<EventTitleType />}/>
        <Route path='/event-title-info' element={<EventTitleInfo />}/>
        <Route path='/create-event' element={<CreateEvent />} />
        <Route path='/event-title' element={<EventTitle />} />
        <Route path='/userhome' element={<UserHome />} />
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/event-info' element ={<EventInfo />} />
        <Route path='/search-result' element ={<SearchResults />} />
        <Route path='/favoris' element ={<InterestedEvents />} />

      </Routes>

    </BrowserRouter>

    </>

  )
  
}

export default App

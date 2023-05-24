import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assist/images/logo1.png'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ViewCompactOutlinedIcon from '@mui/icons-material/ViewCompactOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const Sidebar = ()=> { 
  return (
    <div className='shadow-md min-h-screen '>
      <div className="centerElement py-4">
        <img src={logo} alt="" className='w-10 h-10 rounded-full '/>

      </div>
      <hr />
      <section className='px-2 py-4'>
        <div className="p-2">
        <LinkContent data={  {text:"الرئيسية", to:'/', icon:<HomeIcon/>}  } />
          
        </div>
        <h4>قائمة</h4>
        <div className="p-2">
          <LinkContent data={  {text:"المستخدمون", to:'/users', icon:<GroupIcon/>}  } />
          <LinkContent data={  {text:"الشركات", to:'/companies', icon:<ViewCompactOutlinedIcon/>}  } />
          <LinkContent data={  {text:"الرحلات", to:'/tripes', icon:<ConfirmationNumberOutlinedIcon/>}  } />
          <LinkContent data={  {text:"التذاكر",to:'/tickets',icon:<BookmarksOutlinedIcon/>}  } />
        </div>

        <h4>مهمة</h4>
        <div className="p-2">
          <LinkContent data={  {text:"الاحصائيات", to:'', icon:<InsertChartIcon/>}  } />
          <LinkContent data={  {text:"الاشعارات", to:'', icon:<NotificationsNoneOutlinedIcon/>}  } />
        </div>
        <h4>صفحتي</h4>
        <div className="p-2">
          <LinkContent data={  {text:"الاعدادات", to:'', icon:<SettingsOutlinedIcon/>}  } />
          <LinkContent data={  {text:"حسابي",to:'',icon:<AccountCircleOutlinedIcon/>}  } />
          <LinkContent data={  {text:"تسجيل الخروج",to:'',icon:<LogoutOutlinedIcon/>}  } />
        </div>


      </section>
      
    </div>
  )
}
const LinkContent = ({data})=>{
  const {text,icon ,to } =data
  return(
    <NavLink to={to} className={({isActive})=> isActive? ' text-sm font-bold  text-textClr' : 'text-sm font-semibold  text-subTextClr'  } >
      <div className="flex gap-x-2 items-center mb-2">
        <span className='active:scale-110'>  {icon}</span>
        <span className=''>{text}</span>
      </div>
  </NavLink>

  )
    
}

export default Sidebar
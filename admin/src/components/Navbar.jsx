import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
  return (
   <div className=" py-4 flex items-center justify-between px-8">
        {/* <img src={logo} alt="" className='w-10 h-10 rounded-full '/> */}
        <div className=" rounded-md  border flex gap-x-1 items-center pl-2 f" >
          <input type="search" name="search" id="search" className='w-full h-full  radius1 px-2 py-[4px]' placeholder='ابحث ...' />
          <SearchOutlinedIcon />
        </div>
        <div className="flex items-center  justify-evenly gap-x-16">
          <div className="flex gap-x-2">
            <div className="w-6 h-6 rounded-full bg-bgClr2 ">
              <ModeNightOutlinedIcon/>
            </div>
            <div className="w-6 h-6 rounded-full bg-bgClr2 relative">
              <NotificationsNoneOutlinedIcon/>
              <span className="w-4 h-4 absolute -top-2 right-0 bg-red-600 text-white text-sm rounded-full flex justify-center items-center  ">2</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-bgClr2 relative">
              <ChatBubbleOutlineOutlinedIcon/>
              <span className="w-4 h-4 absolute -top-2 right-0 bg-red-600 text-white text-sm rounded-full flex justify-center items-center  ">2</span>
            </div>

          </div>
          <div className="w-8 h-8 rounded-full bg-bgClr2">
            <AccountCircleIcon  className="scale-125"/>

          </div>
        </div>

   </div>
  )
}

export default Navbar
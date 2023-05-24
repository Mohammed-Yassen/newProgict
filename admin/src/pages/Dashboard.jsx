import React from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar}   from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import Chart from '../components/Chart';
const Dashboard = () => {
  const progressContent = 
  <div className="flex-[2] shadow-md p-4 radius2 ">
    <div className="flex items-center justify-between">
      <h1 className='font-bold text-xl '>المجموع الكلي </h1>
      <MoreVertIcon />
    </div>
    <div className=" flex items-center justify-center flex-col gap-2 pt-8">
      <div className="w-36 h-36 ">
        <CircularProgressbar value={70} text={'70%'} strokeWidth={4} />
      </div>
      <p className="paragraph">مجموع المبيعات اليوم </p>
      <p className="font-bold text-base ">400 رس</p>
      <p className=""> ....</p>
    </div>
    <div className="flex justify-between items-center mt-4">
      <div className="text-center">
        <h3 className="paragraph">الهدف</h3>
        <div className='flex gap-x-1 mt-1'>
          <KeyboardArrowUpIcon className='rotate-180 text-danger ' />
          <h3 className="font-bold text-base text-danger ">12k</h3>
        </div>
      </div>
      <div className="text-center">
        <h3 className="paragraph">الاسبوع الماضي</h3>
        <div className='flex gap-x-1 mt-1'>
          <KeyboardArrowUpIcon className='rotate-180 ' />
          <h3 className="font-bold text-base ">12k</h3>
        </div>
      </div>
      <div className="text-center">
        <h3 className="paragraph">الشهر الماضي</h3>
        <div className='flex gap-x-1 mt-1'>
          <KeyboardArrowUpIcon className='rotate-180 ' />
          <h3 className="font-bold text-base ">12k</h3>
        </div>
      </div>
    </div>

  </div>;

  return (
    <article>
      <header className='grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-4 py-8 '>
        <Card  cardData={{title:'المسخدمون' , percent:20 ,number:100,direction:'users',linkContent:'مشاهدة كل المستخدمين',icon:<AccountCircleIcon />,iconStyle:'bg-danger/40'}}/>
        <Card  cardData={{title:'المسخدمون' , percent:20 ,number:100,direction:'users',linkContent:'مشاهدة كل المستخدمين',icon:<AccountCircleIcon />,iconStyle:'bg-danger/40'}}/>
        <Card  cardData={{title:'المسخدمون' , percent:20 ,number:100,direction:'users',linkContent:'مشاهدة كل المستخدمين',icon:<AccountCircleIcon />,iconStyle:'bg-danger/40'}}/>
        <Card  cardData={{title:'المسخدمون' , percent:20 ,number:100,direction:'users',linkContent:'مشاهدة كل المستخدمين',icon:<AccountCircleIcon />,iconStyle:'bg-danger/40'}}/>

      </header>
      <main className='py-4 flex gap-x-4'>
        {progressContent}

        <div className="flex-[3] shadow-md p-4 radius2">
           <h1 className='font-bold text-xl px-4 '> احصائيات اخر ستة أشهر</h1>
            <Chart />
        </div>
        
      </main>
      <div className="my-5 p-4 shadow-md radius2">
           <h1 className='font-bold text-xl px-4 '> احصائيات اخر ستة أشهر</h1>
      </div>

    </article>
  )
}
const Card = ({cardData})=>{
  const {title , percent ,number,direction,linkContent,icon,iconStyle } = cardData
  return(
    <div className="p-2 col-span-3 shadow-md radius1">
      <div className="flex items-center justify-between">
         <h4 className='font-bold text-sm text-subTextClr '>{title}</h4>
         <h4 className='text-clrAction2 text-sm font-semibold   '>{percent}% <KeyboardArrowUpIcon /> </h4>
      </div>
      <div className="">
         <h2 className='font-bold  text-lg py-1  '>{number}</h2>
      </div>
      <div className="flex items-center justify-between">
         <Link className='  text-xs underline   font-bold text-subTextClr' to={direction}> {linkContent}</Link>
         <h4 className={`${iconStyle} p-[2px] rounded-md`} > {icon}</h4>
      </div>
    </div>
  )
}
export default Dashboard
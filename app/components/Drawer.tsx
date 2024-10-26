import React from 'react'
import { GoChevronRight } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { GrTemplate } from "react-icons/gr";
import { CiStar } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { MdPeople } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineSupport } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { GoChevronLeft } from "react-icons/go";
import Jimbo from "../Jimbo.jpeg"
import Profile from "../Profile.jpeg"
import Image from 'next/image';

const Drawer = () => {
    return (
        <>
            <div className=' h-[63em] w-[50vh]  shadow-lg'>
                <div className='border-b-2 w-[100%] h-[21vh] flex space-y-[-8px] flex-col justify-center items-center relative'>
                    <Image className='' alt='' src={Jimbo} width={100} height={100} />
                    <p className='text-[#0157c6] text-[28px] font-bold italic'>Jimbo</p>

                    {/* Circle with Chevron icon */}
                    <div className='absolute right-[-18px] border-[1px] top-[50%] translate-y-[-50%] bg-white rounded-full p-2'>
                        <GoChevronLeft className='text-black' />
                    </div>
                </div>
                <div className='flex flex-col text-[#767f8d] font-DmSans h-[50em]'>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow'><span><IoHomeOutline /></span>Home</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow'><span><MdOutlineDashboardCustomize /></span>Dashboard</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow'><span><FaRegCalendarAlt /></span>Schedule</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow'><span><CiLocationArrow1 /></span>Leads</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow'><span><IoIosPeople /></span>Clients</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow'><span><GrNotes /></span>Quotes</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow'><span><CiSettings /></span>Jobs</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow'><span><LiaFileInvoiceDollarSolid /></span>Invoices</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow'><span><FaMoneyCheckAlt /></span>Payments</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow'><span><GoGraph /></span>Reports</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow'><span><GrTemplate /></span>Templates</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow'><span><CiStar /></span>Services</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow'><span><MdOutlineShoppingCart /></span>Purchases</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow'><span><CiShop /></span>Marketplace</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow'><span><MdPeople /></span>Users</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow border-t-2 '><span><CiBellOn /></span>Notifications</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow'><span><IoMdSettings /></span>Settings</p>
                    <p className='w-[100%] h-full flex items-center px-7 gap-[9px] flex-grow border-b-2'><span><HiOutlineSupport /></span>Support</p>
                </div>
                <div className='flex items-center h-[3em] font-serif mx-4 my-2 gap-2'>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden">
                        <Image className="w-full h-full object-cover" src={Profile} alt="" />
                    </div>

                    <p className='text-[12px] font-DmSans text-[#767f8d]'>Welcome back 👏 <br /><span className='text-[16px]'>Sarfy Soudagar</span></p>
                    <p className='mx-5'><IoIosArrowForward /></p>
                </div>
            </div>
        </>
    )
}

export default Drawer
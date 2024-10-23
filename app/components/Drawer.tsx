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
import profile from "../Profile.jpeg"
import Image from 'next/image';

const Drawer = () => {
    return (
        <>
            <div className=' h-[62em] w-[50vh] shadow-md'>
                <div className='border-b-2 w-[100%] h-[9em] flex space-y-[-8px] flex-col justify-center items-center'>
                    <Image className='' src={profile} width={100} height={100} />
                    <p className='text-blue-600 text-[28px] font-bold italic'>Jimbo</p>
                </div>
                <div className='font-sans flex flex-col  h-[48em]'>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow'><span><IoHomeOutline /></span>Home</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow'><span><MdOutlineDashboardCustomize /></span>Dashboard</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow'><span><FaRegCalendarAlt /></span>Schedule</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow'><span><CiLocationArrow1 /></span>Leads</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow'><span><IoIosPeople /></span>Clients</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow'><span><GrNotes /></span>Quotes</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow'><span><CiSettings /></span>Jobs</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow'><span><LiaFileInvoiceDollarSolid /></span>Invoices</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow'><span><FaMoneyCheckAlt /></span>Payments</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow'><span><GoGraph /></span>Reports</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow'><span><GrTemplate /></span>Templates</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow'><span><CiStar /></span>Services</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow'><span><MdOutlineShoppingCart /></span>Purchases</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow'><span><CiShop /></span>Marketplace</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow'><span><MdPeople /></span>Users</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow border-t-2 '><span><CiBellOn /></span>Notifications</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow'><span><IoMdSettings /></span>Settings</p>
                    <p className='w-[100%] h-full flex items-center px-5 gap-2 flex-grow border-b-2'><span><HiOutlineSupport /></span>Support</p>
                </div>
                <div className='flex items-center mx-3 my-2 gap-4'>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full">
                        <Image className='w-[100%] h-[100%]' src={profile} />
                    </div>
                    <p>Welcome back <br />Sarfy Soudagar</p>
                    <IoIosArrowForward />
                </div>
            </div>
        </>
    )
}

export default Drawer
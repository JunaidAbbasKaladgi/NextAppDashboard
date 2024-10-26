import React from 'react'
import { FaRegBell } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud , faCloudShowersHeavy , faCloudSun , faSun } from '@fortawesome/free-solid-svg-icons'
// import "global.css"

const Navbar = () => {
    return (
        <>
        <div className='bg-[#0157c6] font-DmSans  h-[8vh]  flex items-center justify-center text-white'>
            This is a placeholder for service messege by Jim's group national office.
        </div>
            <div className="navbar border-b-2 font-DmSans justify-between items-center bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl text-[#626262] hover:bg-white">Dashboard</a>
                </div>
                <div className="flex">
                    <ul className="menu gap-3 menu-horizontal">
                        <li className=''>
                            <div className="my-5 flex h-10 w-10 items-center justify-center rounded-lg bg-base-200">
                                <p className="text-xl"><FaRegBell /></p>
                            </div>
                        </li>
                        <li className='bg-[#0157c6] justify-center font-DmSans rounded-lg flex flex-row h-[11vh] w-[51vh]'>
                            <div className='text-white flex gap-4'>
                                <p className='w-1/7 flex flex-col gap-2 items-center justify-center'>MON<FontAwesomeIcon icon={faCloud} style={{ color: "#f7f7f7" }} /></p>
                                <p className='w-1/7 flex flex-col gap-[6px] items-center justify-center'>TUE<FontAwesomeIcon icon={faSun} style={{ color: "#FFD43B" }} /></p>
                                <p className='w-1/7 flex flex-col gap-2 items-center justify-center'>WED<FontAwesomeIcon icon={faCloudSun}  style={{ color: "#f7f7f7",transform: "scaleX(-1)" }} /></p>
                                <p className='w-1/7 flex flex-col gap-[10px] items-center justify-center'>THU<FontAwesomeIcon icon={faCloud} style={{ color: "#f7f7f7" }} /></p>
                                <p className='w-1/7 flex flex-col gap-[11px] items-center justify-center'>FRI<FontAwesomeIcon icon={faCloudShowersHeavy} style={{ color: "#f7f7f7" }} /></p>
                                <p className='w-1/7 flex flex-col gap-[12px] items-center justify-center'>SAT<FontAwesomeIcon icon={faCloudSun} style={{ color: "#f7f7f7",transform: "scaleX(-1)" }} /></p>
                                <p className='w-1/7 flex flex-col gap-[4px] items-center justify-center'>SUN<FontAwesomeIcon icon={faSun} style={{ color: "#FFD43B" }} /></p>
                            </div>
                        </li>
                        <li className=''>
                            <div className="my-2 flex h-14 w-14 hover:bg-[#7cd859] items-center justify-center rounded-full bg-[#31d451]">
                                <p className="text-3xl font-bold">+</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
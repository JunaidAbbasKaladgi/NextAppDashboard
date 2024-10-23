import React from 'react'
import { FaRegBell } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud , faCloudShowersHeavy , faCloudSun , faSun } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <>
            <div className="navbar h-[60] justify-between items-center bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Dashborad</a>
                </div>
                <div className="flex">
                    <ul className="menu gap-3 menu-horizontal">
                        <li className=''>
                            <div className="my-3 flex h-10 w-10 items-center justify-center rounded-lg bg-base-200">
                                <p className="text-xl"><FaRegBell /></p>
                            </div>
                        </li>
                        <li className='bg-blue-600 p-1 rounded-lg flex flex-row w-[50vh]'>
                            <div className='text-white flex gap-4'>
                                <p className='w-1/7 flex flex-col gap-2 items-center justify-center'>MON<FontAwesomeIcon icon={faCloud} style={{ color: "#f7f7f7" }} /></p>
                                <p className='w-1/7 flex flex-col gap-2 items-center justify-center'>TUE<FontAwesomeIcon icon={faSun} style={{ color: "#FFD43B" }} /></p>
                                <p className='w-1/7 flex flex-col gap-2 items-center justify-center'>WED<FontAwesomeIcon icon={faCloudSun}  style={{ color: "#f7f7f7",transform: "scaleX(-1)" }} /></p>
                                <p className='w-1/7 flex flex-col gap-2 items-center justify-center'>THU<FontAwesomeIcon icon={faCloud} style={{ color: "#f7f7f7" }} /></p>
                                <p className='w-1/7 flex flex-col gap-2 items-center justify-center'>FRI<FontAwesomeIcon icon={faCloudShowersHeavy} style={{ color: "#f7f7f7" }} /></p>
                                <p className='w-1/7 flex flex-col gap-2 items-center justify-center'>SAT<FontAwesomeIcon icon={faCloudSun} style={{ color: "#f7f7f7",transform: "scaleX(-1)" }} /></p>
                                <p className='w-1/7 flex flex-col gap-2 items-center justify-center'>SUN<FontAwesomeIcon icon={faSun} style={{ color: "#FFD43B" }} /></p>
                            </div>
                        </li>
                        <li className=''>
                            <div className="my-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-600">
                                <p className="text-xl">+</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
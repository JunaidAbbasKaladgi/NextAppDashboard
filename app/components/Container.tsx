import React from 'react'
import { GoChevronDown } from "react-icons/go";
import { IoMdDownload } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";



const Container = () => {
    return (
        <>
            <div className='h-[130vh] bg-[#f8f9fc]'>
                <div className='h-[7em] px-3 py-3'>
                    <div className="navbar h-[35px] bg-[#0157c6]">
                        <div className="flex-1">
                            <div className="form-control w-[52vh]">
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <input type="text" className="grow" placeholder="Search" />
                                </label>
                            </div>
                        </div>
                        <div className="flex">
                            <ul className="menu menu-horizontal">
                                <li className=''>
                                    <div role="button" className="btn m-1">Today<GoChevronDown /></div>
                                </li>
                                <li className=''>
                                    <div role="button" className="btn m-1">Save</div>
                                </li>
                                <li className=''>
                                    <div className="m-1 btn flex h-10 w-10 items-center justify-center rounded-lg bg-base-200">
                                        <p className="text-xl"><IoMdDownload /></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Summary Section */}
                    <div className='w-[100%] h-[117vh] font-DmSans overflow-auto'>

                        <p className='mx-[2px] mt-5 mb-1 text-[#606163] font-bold text-[20px]'>Summary</p>
                        <div className=' h-[9em] gap-4 px-[7px] w-[34em] grid grid-cols-2'>
                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg bg-white border-[1px]'>
                                <div className='w-[70%] px-2 py-2 h-[100%] flex flex-col gap-2'>
                                    <p className='text-xl text-[#656565]'>Money In</p>
                                    <p className=' text-[#0157c6] font-bold text-2xl'>$2,450</p>
                                    <p className='text-[11px] text-[#656565]'>(Invoices marked paid)</p>
                                </div>
                                <div className='w-[30%] flex justify-end mr-3 py-3'>
                                    <MdCheckBoxOutlineBlank />
                                </div>
                            </div>
                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg bg-white border-[1px]'>
                                <div className='w-[70%] px-2 py-2 h-[100%] flex flex-col gap-2'>
                                    <p className='text-xl text-[#656565]'>Money Out</p>
                                    <p className=' text-[#0157c6] font-bold text-2xl'>$200</p>
                                    <p className='text-[11px] text-[#656565]'>(Purchases/Expenses made)</p>
                                </div>
                                <div className='w-[30%] flex justify-end mr-3 py-3'>
                                    <MdCheckBoxOutlineBlank />
                                </div>
                            </div>
                        </div>

                        {/* Leads Section */}

                        <p className='mx-[5px] mt-2 mb-1 text-[#606163] font-bold text-[20px]'>Leads</p>
                        <div className=' h-[9em] gap-4 px-[7px] w-[34em] text-[#656565] grid grid-cols-2'>
                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg bg-white border-[1px]'>
                                <div className='w-[80%] px-2 py-2 h-[100%] flex flex-col gap-1'>
                                    <p className='text-[18px]'>Uncontacted Leads</p>
                                    <p className=' text-[#0157c6] font-bold text-2xl'>6</p>
                                </div>
                                <div className='w-[20%] flex justify-end mr-3 py-3'>
                                    <MdCheckBoxOutlineBlank />
                                </div>
                            </div>


                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg bg-white border-[1px]'>
                                <div className='w-[98%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] text-[13px] mx-2 flex items-end">Leads:Contacted vs Uncontacted</div>
                                    <div className='w-[100%] h-[75%] flex items-start px-6 gap-[15px] justify-center '>
                                        <div className='h-[100%] mt-4 w-[50%]'>
                                            <div
                                                className="relative flex items-center justify-center rounded-full"
                                                style={{
                                                    width: "75px",
                                                    height: "75px",
                                                    background: `conic-gradient(
                                                #165dff 0% 70%,   /* Blue for 70% */
                                                #ef4444 70% 100%  /* Red for the next 30% */
                                                )`,
                                                }}
                                            >
                                                <div className="absolute bg-white rounded-full flex text-[12px] flex-col justify-center items-center" style={{ width: "60px", height: "60px", }}>
                                                    <p className="text-[24px] font-semibold leading-none">24</p>
                                                    <p className="leading-none">Leads</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center gap-1 h-[100%] w-[50%] text-[13px]'>
                                            <div className='flex text-[12px] items-center gap-1'><span className='bg-blue-500 h-3 w-[2px]'></span> <p>Contacted 18</p></div>
                                            <div className='flex items-center text-[12px]  gap-1'><span className='bg-red-500 h-3 w-[2px]'></span> <p>Uncontacted 6</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[2%] flex justify-end mr-2 py-3 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                </div>
                            </div>
                        </div>

                        {/* Response time alert summary */}

                        <div className=' h-[35vh] bg-white gap-4 text-[#606163] mx-[7px] border-[#0095ff] rounded-lg border-[1px] w-[33em] grid grid-cols-2'>
                            <div className='w-[70vh] h-[100%] px-[7px]'>
                                <div className="w-[100%] h-[25%] text-[16px] mx-5 font-semibold  flex items-center">Response Time Alert Summary</div>
                                <div className='w-[100%] h-[75%] flex items-start ml-6 justify-center '>
                                    <div className='h-[100%] flex w-[100%] justify-end gap-10'>
                                        <div
                                            className="relative flex items-center justify-center rounded-full"
                                            style={{
                                                width: "140px",
                                                height: "140px",
                                                background: `conic-gradient(
                                            #ee6e26 0% 8.25%,         /* Orange for 8.25% */
                                            #e51b1b 8.25% 16.5%,  /* Light red (lightcoral) for the next 8.25% */
                                            #c20000 16.5% 21%,       /* Dark red for 4.5% */
                                            #2fb856 21% 83.5%,    /* Light green for 62.5% */
                                            #ffde59 83.5% 100%        /* Yellow for the final 16.5% */
                                            )`
                                            }}
                                        >
                                            <div className="absolute bg-white rounded-full flex text-[12px] flex-col justify-center items-center" style={{ width: "110px", height: "110px", }}>
                                                <p className="text-[24px] font-semibold leading-none">24</p>
                                                <p className="leading-none">Leads</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col mt-5 text-[13px]'>
                                            <div className='flex items-center gap-1'><span className='bg-green-500 h-3 w-[2px]'></span> <p className='flex gap-[58px]'><span className='flex items-center'><GoChevronLeft />30 mins </span> <span className='font-semibold'>62.50%</span></p></div>
                                            <div className='flex items-center gap-1'><span className='bg-yellow-500 h-3 w-[2px]'></span> <p className='flex gap-6'><span className='flex items-center'><GoChevronRight />30 to 60 mins </span> <span className='font-semibold'>16.50%</span></p></div>
                                            <div className='flex items-center gap-1'><span className='bg-orange-500 h-3 w-[2px]'></span> <p className='flex gap-8'><span className='flex items-center'><GoChevronRight />60 to 90 mins </span><span className='font-semibold'>8.25%</span></p></div>
                                            <div className='flex items-center gap-1'><span className='bg-red-500 h-3 w-[2px]'></span> <p className='flex gap-[29px]'><span className='flex items-center'><GoChevronRight />90 to 120 mins </span><span className='font-semibold'>8.25%</span></p></div>
                                            <div className='flex items-center gap-1'><span className='bg-red-900 h-3 w-[2px]'></span> <p className='flex gap-[64px]'><span className='flex items-center'><GoChevronRight />120 mins </span><span className='font-semibold'>4.50%</span></p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end mr-2 py-2 h-[100%]'>
                                <span><MdCheckBoxOutlineBlank /></span>
                            </div>
                        </div>

                        {/* Quotes section */}

                        <p className='mx-[5px] font-bold text-[#606163] text-[20px] mt-4 mb-1'>Quotes</p>
                        <div className=' h-[18em] px-[7px] gap-4 grid grid-cols-4'>
                            <div className='h-[20vh] flex border-[#0095ff] bg-white border-[1px] rounded-lg'>
                                <div className='w-[70%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] flex px-2 py-2 text-[#656565] items-start font-semibold">Quotes Generated</div>
                                    <div className='w-[100%] h-[75%] flex items-start px-2 gap-2 justify-center flex-col'>
                                        <p className='text-[#767f8d]'>Count<span className='mx-12 text-[#376594] font-semibold text-xl'>24</span></p>
                                        <p className='text-[#767f8d]'> Value<span className='mx-12 text-[#376594] font-semibold text-xl'>$2400</span></p>
                                    </div>
                                </div>
                                <div className='w-[30%] flex flex-col items-end mr-2 py-3 justify-betwee gap-16 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                    <GrNotes />
                                </div>
                            </div>
                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg bg-white border-[1px]'>
                                <div className='w-[70%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] flex px-2 py-2 items-start text-[#656565] font-semibold">Quotes Accepted</div>
                                    <div className='w-[100%] h-[75%] flex items-start px-2 gap-2 justify-center flex-col'>
                                        <p className='text-[#767f8d]'>Count<span className='mx-12 text-[#376594] font-semibold text-xl'>17</span></p>
                                        <p className='text-[#767f8d]'> Value<span className='mx-12 text-[#376594] font-semibold text-xl'>$1700</span></p>
                                    </div>
                                </div>
                                <div className='w-[30%] flex flex-col items-end mr-2 py-3 gap-16 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                    <GrNotes />
                                </div>
                            </div>
                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg border-[1px] bg-white'>
                                <div className='w-[80%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] flex px-2 items-end text-[#656565] font-semibold">Quotes Not Accepted</div>
                                    <div className='w-[100%] h-[75%] flex items-start px-2 gap-2 justify-center flex-col'>
                                        <p className='text-[#767f8d]'>Count<span className='mx-12 text-[#376594] font-semibold text-xl'>4</span></p>
                                        <p className='text-[#767f8d]'> Value<span className='mx-12 text-[#376594] font-semibold text-xl'>$500</span></p>
                                    </div>
                                </div>
                                <div className='w-[20%] flex flex-col items-end mr-2 py-3 gap-16 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                    <GrNotes />
                                </div>
                            </div>

                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg border-[1px] bg-white'>
                                <div className='w-[70%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] flex px-2 items-end text-[#656565] font-semibold">Quotes Expired</div>
                                    <div className='w-[100%] h-[75%] flex items-start px-2 gap-2 justify-center flex-col'>
                                        <p className='text-[#767f8d]'>Count<span className='mx-12 text-[#376594] font-semibold text-xl'>3</span></p>
                                        <p className='text-[#767f8d]'> Value<span className='mx-12 text-[#376594] font-semibold text-xl'>$600</span></p>
                                    </div>
                                </div>
                                <div className='w-[30%] flex flex-col items-end mr-2 py-3 gap-16 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                    <GrNotes />
                                </div>
                            </div>

                            {/* Quotes Accepted and Not Accepted */}

                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg border-[1px] mb-[25vh] bg-white'>
                                <div className='w-[99%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] text-[12px] py-1 m-1 text-[#868686] flex items-center">Quotes:Accepted vs Not Accepted vs Expired</div>
                                    <div className='w-[100%] h-[75%] flex px-6 gap-[11px] items-center '>
                                        <div className='h-[100%] mt-[7px] w-[50%]'>

                                            <div
                                                className="relative flex items-center justify-center rounded-full"
                                                style={{
                                                    width: "80px",  // Reduced size
                                                    height: "80px",  // Reduced size
                                                    background: `conic-gradient(
                                                #3b82f6 0% 60%,   /* Blue for 60% */
                                                #ef4444 60% 70%,  /* Red for the next 10% */
                                                #facc15 70% 100%  /* Yellow for the remaining 30% */
                                                )`,
                                                }}
                                            >
                                                <div className="absolute bg-white rounded-full flex text-[12px] flex-col justify-center items-center" style={{ width: "60px", height: "60px" }}> <p className='text-[24px] font-semibold leading-none'>24</p>Quotes </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center gap-1 h-[100%] w-[50%] text-[13px]'>
                                            <div className='flex items-center text-[11px] gap-1'><span className='bg-blue-500 h-3 w-[2px]'></span><p className='text-[#767f8d]'>Accepted 17</p></div>
                                            <div className='flex items-center text-[11px] gap-1'><span className='bg-red-500 h-3 w-[2px]'></span> <p className='text-[#767f8d]'>Not Accepted 4</p></div>
                                            <div className='flex items-center text-[11px] gap-1'><span className='bg-yellow-500 h-3 w-[2px]'></span> <p className='text-[#767f8d]'>Expired 3</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[1%] flex justify-end mr-2 py-2 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                </div>
                            </div>

                            {/* Qoutes visits Done or Not Done */}

                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg border-[1px] mb-[25vh] bg-white'>
                                <div className='w-[95%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] text-[12px] text-[#868686] mx-1 flex items-center">Quote visits:Done vs Not Done</div>
                                    <div className='w-[100%] h-[75%] flex items-start px-6 gap-6 justify-center '>
                                        <div className='h-[100%] mt-3 w-[50%]'>

                                            <div
                                                className="relative flex items-center justify-center rounded-full"
                                                style={{
                                                    width: "80px",  // Reduced size
                                                    height: "80px",  // Reduced size
                                                    background: `conic-gradient(
                                                #3b82f6 0% 55%,   /* Blue for 60% */
                                                #ef4444 55% 100%  /* Red for the next 10% */
                                                )`,
                                                }}
                                            >
                                                <div className="absolute bg-white rounded-full flex text-[12px] flex-col justify-center items-center" style={{ width: "60px", height: "60px", }}>
                                                    <p className="text-[24px] font-semibold leading-none">9</p>
                                                    <p className="leading-none">Quotes</p>
                                                    <p className="leading-none">Visits</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center gap-1 h-[100%] w-[50%] text-[13px]'>
                                            <div className='flex gap-1 text-[11px] items-center'><span className='bg-blue-500 h-3 w-[2px]'></span> <p className='text-[#767f8d]'>Done 5</p></div>
                                            <div className='flex  gap-1 text-[11px] items-center'><span className='bg-red-500 h-3 w-[2px]'></span> <p className='text-[#767f8d]'>Not Done 4</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[5%] flex justify-end mr-2 py-2 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                </div>
                            </div>
                        </div>


                        {/* jobs section */}
                        <p className='mx-[5px] font-bold text-[20px] text-[#606163] mt-3 mb-1'>Jobs</p>
                        <div className=' h-[18em] gap-4 w-[121vh] px-[7px] grid grid-cols-3'>

                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg bg-white border-[1px]'>
                                <div className='w-[70%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] flex px-2 items-end text-[#656565] font-semibold">Jobs</div>
                                    <div className='w-[100%] h-[75%] flex items-start px-2 gap-2 justify-center flex-col'>
                                        <p className='text-[#767f8d]'>Count<span className='mx-12 text-[#376594] font-semibold text-xl'>15</span></p>
                                        <p className='text-[#767f8d]'> Value<span className='mx-12 text-[#376594] font-semibold text-xl'>$1700</span></p>
                                    </div>
                                </div>
                                <div className='w-[30%] flex flex-col items-end mr-2 py-3 gap-16 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                    <CiSettings />
                                </div>
                            </div>

                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg bg-white border-[1px]'>
                                <div className='w-[70%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] flex px-2 items-end text-[#656565] font-semibold">Jobs Done</div>
                                    <div className='w-[100%] h-[75%] flex items-start px-2 gap-2 justify-center flex-col'>
                                        <p className='text-[#767f8d]'>Count<span className='mx-12 text-[#376594] font-semibold text-xl'>5</span></p>
                                        <p className='text-[#767f8d]'> Value<span className='mx-12 text-[#376594] font-semibold text-xl'>$1200</span></p>
                                    </div>
                                </div>
                                <div className='w-[30%] flex flex-col items-end mr-2 py-3 gap-16 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                    <CiSettings />
                                </div>
                            </div>

                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg border-[1px] bg-white'>
                                <div className='w-[70%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] flex px-2 items-end text-[#656565] font-semibold">Jobs Not Done</div>
                                    <div className='w-[100%] h-[75%] flex items-start px-2 gap-2 justify-center flex-col'>
                                        <p className='text-[#767f8d]'>Count<span className='mx-12 text-[#376594] font-semibold text-xl'>4</span></p>
                                        <p className='text-[#767f8d]'> Value<span className='mx-12 text-[#376594] font-semibold text-xl'>$500</span></p>
                                    </div>
                                </div>
                                <div className='w-[30%] flex flex-col items-end mr-2 py-3 gap-16 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                    <CiSettings />
                                </div>
                            </div>

                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg border-[1px] mb-[25vh] bg-white'>
                                <div className='w-[98%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] text-[12px]  mx-1 text-[#868686] flex items-center">Total jobs:Booked jobs vs Qoute Jobs</div>
                                    <div className='w-[100%] h-[75%] flex px-6 gap-[22px] justify-center '>
                                        <div className='h-[100%] mt-3 w-[50%]'>
                                            <div
                                                className="relative flex items-center justify-center rounded-full"
                                                style={{
                                                    width: "80px",  // Reduced size
                                                    height: "80px",  // Reduced size
                                                    background: `conic-gradient(
                                                        #16d2cf 0% 55%,  
                                                        #facc15 55% 100%   
                                                )`,
                                                }}
                                            >
                                                <div className="absolute bg-white rounded-full flex text-[12px] flex-col justify-center items-center" style={{ width: "60px", height: "60px" }}> <p className="text-[24px] font-semibold leading-none">15</p>
                                                    <p className="leading-none">Total</p>
                                                    <p className="leading-none">jobs</p></div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center gap-1 h-[100%] w-[50%] text-[13px]'>
                                            <div className='flex gap-1 text-[11px] items-center'><span className='bg-blue-500 h-3 w-[2px]'></span> <p className='text-[#767f8d]'>Booked jobs 9</p></div>
                                            <div className='flex  gap-1 text-[11px] items-center'><span className='bg-yellow-500 h-3 w-[2px]'></span> <p className='text-[#767f8d]'>Qoute jobs 9</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[2%] flex justify-end mr-2 py-2 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                </div>
                            </div>
                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg border-[1px] mb-[25vh] bg-white'>
                                <div className='w-[95%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] text-[12px] mx-1 text-[#868686] flex items-center">Booked jobs:Done vs Not Done</div>
                                    <div className='w-[100%] h-[75%] flex items-start px-6 gap-6 justify-center '>
                                        <div className='h-[100%] mt-3 w-[50%]'>

                                            <div
                                                className="relative flex items-center justify-center rounded-full"
                                                style={{
                                                    width: "80px",
                                                    height: "80px",
                                                    background: `conic-gradient(
                                                        #3b82f6 0% 55%,
                                                        #16d2cf 55% 100%   
                                                )`,
                                                }}
                                            >
                                                <div className="absolute bg-white rounded-full flex text-[12px] flex-col justify-center items-center" style={{ width: "60px", height: "60px", }}>
                                                    <p className="text-[24px] font-semibold leading-none">9</p>
                                                    <p className="leading-none">Booked</p>
                                                    <p className="leading-none">jobs</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center gap-1 h-[100%] w-[50%] text-[13px]'>
                                            <div className='flex gap-1 text-[11px] items-center'><span className='bg-blue-500 h-3 w-[2px]'></span> <p className='text-[#767f8d]'>Done 5</p></div>
                                            <div className='flex  gap-1 text-[11px] items-center'><span className='bg-[#16d2cf] h-3 w-[2px]'></span> <p className='text-[#767f8d]'>Not Done 4</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[5%] flex justify-end mr-2 py-2 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                </div>
                            </div>
                        </div>


                        {/* Invoice section */}
                        <p className='mx-[5px] font-bold text-[20px] text-[#606163] mt-3 mb-1'>Invoices</p>
                        <div className='h-[17em] px-[7px] gap-4 grid grid-cols-4'>
                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg border-[1px] bg-white'>
                                <div className='w-[70%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] flex px-2 text-[#656565] items-end font-semibold">Invoices Generated</div>
                                    <div className='w-[100%] h-[75%] flex items-start px-2 gap-2 justify-center flex-col'>
                                        <p className='text-[#767f8d]'>Count<span className='mx-12 text-[#376594] font-semibold text-xl'>5</span></p>
                                        <p className='text-[#767f8d]'> Value<span className='mx-12 text-[#376594] font-semibold text-xl'>$1200</span></p>
                                    </div>
                                </div>
                                <div className='w-[30%] flex flex-col items-end mr-2 py-3 gap-16 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                    <LiaFileInvoiceDollarSolid />
                                </div>
                            </div>
                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg border-[1px] bg-white'>
                                <div className='w-[70%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] flex px-2 text-[#656565] items-end font-semibold">Invoices Paid</div>
                                    <div className='w-[100%] h-[75%] flex items-start px-2 gap-2 justify-center flex-col'>
                                        <p className='text-[#767f8d]'>Count<span className='mx-12 text-[#376594] font-semibold text-xl'>3</span></p>
                                        <p className='text-[#767f8d]'> Value<span className='mx-12 text-[#376594] font-semibold text-xl'>$850</span></p>
                                    </div>
                                </div>
                                <div className='w-[30%] flex flex-col items-end mr-2 py-3 gap-16 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                    <LiaFileInvoiceDollarSolid />
                                </div>
                            </div>

                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg border-[1px] bg-white'>
                                <div className='w-[70%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] flex px-2 text-[#656565] items-end font-semibold">Invoices Paid</div>
                                    <div className='w-[100%] h-[75%] flex items-start px-2 gap-2 justify-center flex-col'>
                                        <p className='text-[#767f8d]'>Count<span className='mx-12 text-[#376594] font-semibold text-xl'>3</span></p>
                                        <p className='text-[#767f8d]'> Value<span className='mx-12 text-[#376594] font-semibold text-xl'>$850</span></p>
                                    </div>
                                </div>
                                <div className='w-[30%] flex flex-col items-end mr-2 py-3 gap-16 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                    <LiaFileInvoiceDollarSolid />
                                </div>
                            </div>

                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg border-[1px] bg-white'>
                                <div className='w-[70%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] flex px-2 text-[#656565] items-end font-semibold">Invoices Due</div>
                                    <div className='w-[100%] h-[75%] flex items-start px-2 gap-2 justify-center flex-col'>
                                        <p className='text-[#767f8d]'>Count<span className='mx-12 text-[#376594] font-semibold text-xl'>1</span></p>
                                        <p className='text-[#767f8d]'> Value<span className='mx-12 text-[#376594] font-semibold text-xl'>$200</span></p>
                                    </div>
                                </div>
                                <div className='w-[30%] flex flex-col items-end mr-2 py-3 gap-16 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                    <LiaFileInvoiceDollarSolid />
                                </div>
                            </div>
                            <div className='h-[20vh] flex border-[#0095ff] rounded-lg border-[1px] mb-[25vh] bg-white'>
                                <div className='w-[95%] h-[100%]'>
                                    <div className="w-[100%] h-[25%] text-[12px] text-[#656565] py-1 mx-1 flex items-center">Invoices:Paid vs Unpaid vs Overdue</div>
                                    <div className='w-[100%] h-[75%] flex items-start px-6 gap-7 justify-center '>
                                        <div className='h-[100%] mt-3 w-[50%]'>

                                            <div
                                                className="relative flex items-center justify-center rounded-full"
                                                style={{
                                                    width: "80px",  // Reduced size
                                                    height: "80px",  // Reduced size
                                                    background: `conic-gradient(
                                                #3b82f6 0% 60%,   /* Blue for 60% */
                                                #ef4444 60% 80%,  /* Red for the next 10% */
                                                #facc15 80% 100%
                                                )`,
                                                }}
                                            >
                                                <div className="absolute bg-white rounded-full flex text-[12px] flex-col justify-center items-center" style={{ width: "60px", height: "60px", }}>
                                                    <p className="text-[24px] font-semibold leading-none">9</p>
                                                    <p className="leading-none">Invoices</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center gap-1 h-[100%] w-[50%] text-[13px]'>
                                            <div className='flex gap-1 text-[11px] items-center'><span className='bg-blue-500 h-3 w-[2px]'></span> <p className='text-[#767f8d]'>Paid 3</p></div>
                                            <div className='flex  gap-1 text-[11px] items-center'><span className='bg-[#facc15] h-3 w-[2px]'></span> <p className='text-[#767f8d]'>Unpaid 1</p></div>
                                            <div className='flex  gap-1 text-[11px] items-center'><span className='bg-red-500 h-3 w-[2px]'></span> <p className='text-[#767f8d]'>Overdue 1</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[5%] flex justify-end mr-2 py-2 h-[100%]'>
                                    <span><MdCheckBoxOutlineBlank /></span>
                                </div>
                            </div>
                        </div>

                        {/* Client insights */}

                        <p className='mx-[5px] font-bold text-[20px] text-[#606163] mt-6 mb-1'>Client Insights</p>
                        <div className='h-[35vh] mx-[7px] text-[#656565]  bg-white flex border-[#0095ff] rounded-lg border-[1px] w-[32em]'>
                            <div className='w-[30%] gap-3 my-4 flex items-center flex-col h-[100%] '>
                                <p className='mt-1'>Client rating</p>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-orange-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-orange-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-orange-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-orange-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 ms-1 text-orange-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>

                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-orange-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-orange-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-orange-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-orange-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-orange-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-orange-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-orange-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-gray-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-orange-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-orange-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-gray-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-gray-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-orange-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-gray-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-gray-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-gray-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className='w-1/5 h-[100%] justify-center gap-2 items-center flex flex-col'>
                                <p className=''>Percentage</p>
                                <p>10%</p>
                                <p>50%</p>
                                <p>20%</p>
                                <p>10%</p>
                                <p>10%</p>
                            </div>
                            <div className='w-1/5 justify-center items-center gap-2 flex flex-col h-[100%] '>
                                <p className=''>Number</p>
                                <p>1</p>
                                <p>5</p>
                                <p>2</p>
                                <p>1</p>
                                <p>1</p>
                            </div>
                            <div className='w-1/5 justify-center items-center gap-2 flex flex-col h-[100%] '>
                                <p className=''>Service Value</p>
                                <p>$17000</p>
                                <p>$90000</p>
                                <p>$20000</p>
                                <p>$8000</p>
                                <p>$6000</p>
                            </div>
                            <div className='w-[10%] h-[100%] flex justify-end mr-2 py-2'>
                                <span><MdCheckBoxOutlineBlank /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Container
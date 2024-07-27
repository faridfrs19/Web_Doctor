import React from 'react'
import Navbar from '../../components/Navbar'
import dokter from '../../assets/dok.png'
import vector from '../../assets/Vector.png'
import vid from '../../assets/vid.png'

const HomePage = () => {
  return (
    <>
    <Navbar />
    {/* mobile first */}
    {/* <div className="p-4 bg-blue-500 text-white sm:p-6 md:p-8 lg:p-10 xl:p-12">
        Responsive Box
    </div>
    <br /> */}
    {/* desktop first */}
    {/* <div className="p-4 bg-red-500 text-white lg:p-10 md:p-8 sm:p-6">
        Responsive Box
    </div> */}
    <section>
    <div className="relative w-full h-screen sm:px-16 px-6 bg-slate-200">
        <div className='w-full h-screen sm:flex'>
        <div className="title sm:w-1/2 w-fulll sm:mt-[8rem] sm:pt-0 pt-8">
            <h1 className='sm:text-4xl text-5xl font-thin'>Providing Quality <span className='text-green-700'>Healthcare</span> for a <span className='text-green-600'>Brighter</span> and <span className='text-green-600'>Healthy</span> Future</h1>
            <p className='sm:mt-6 text-lg text-justify mt-4 text-slate-400'>At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals,
                cutting-edge technology, and compassionate approach make us a leader in the healthcare industry</p>
            <div className="vidio flex sm:gap-6 gap-[18rem] sm:mt-16 mt-6 mb-2">
                <div className='bg-green-700 px-6 py-1 rounded-md font-semibold text-slate-200'>Appointments</div>
                <div className='flex gap-3 font-medium items-center'>
                <div className='bg-green-700 rounded-full w-9 h-9'>
                <img className='mx-auto mt-2' src={vid} alt="" />
                </div>
                Watch Video</div>
            </div>
        </div>
        <div className="relative img-home sm:ms-20 ms-6 w-1/2">
            <img className="absolute top-0 sm:left-0 left-10 sm:w-[400px] sm:h-[520px] mx-auto sm:ms-10 ms-20 sm:mt-5 z-10" src={dokter} alt="dokter" />
            <img className="absolute sm:top-0 top-[4rem] sm:left-0 left-[6rem] sm:w-[460px] w-[400px] sm:h-[460px] h-[347px] ms-4 sm:mt-20 z-0" src={vector} alt="" />
        </div>
        </div>
    </div>
    </section>

    </>
  )
}

export default HomePage
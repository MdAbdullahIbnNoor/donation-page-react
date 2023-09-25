import React from 'react'

const Banner = () => {
    return (
        <div className="hero min-h-[700px] rounded-2xl bg-cover" style={{ backgroundImage: 'url("./images/banner.png")'}}>
            <div className="hero-overlay bg-opacity-90 bg-white bg-cover"></div>
            <div className="text-center text-neutral-content w-full ">
                <h2 className='text-5xl font-bold text-gray-800 mb-10'>I Grow By Helping People In Need</h2>
                <div className="flex justify-center items-center relative w-4/12 mx-auto z-30">
                    <input type="text" placeholder="Search..." className="input input-bordered input-info w-full text-black text-xl " />
                    <button className="h-12 w-28 btn-success absolute right-0 rounded-r-lg text-white px-4 font-medium">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
import React from 'react'

const Banner = ({handleChange, handleClick}) => {
    return (
        <div className="hero min-h-[400px] md:min-h-[700px] rounded-2xl bg-cover" style={{ backgroundImage: 'url("./images/banner.png")'}}>
            <div className="hero-overlay bg-opacity-90 bg-white bg-cover"></div>
            <div className="text-center text-neutral-content w-full ">
                <h2 className='text-3xl mx-5 md:text-5xl font-bold text-gray-800 mb-10'>I Grow By Helping People In Need</h2>
                <div className="flex justify-center items-center relative w-4/12 mx-auto z-30">
                    <input onChange={handleChange} type="text" placeholder="Search..." className="input border-0 input-bordered input-info h-10 md:h-14 w-56 md:w-[630px] text-black text-lg md:text-xl " />
                    <button onClick={handleClick} className="h-12 md:h-14 w-16 md:w-28 btn-success absolute -right-12 md:right-0 rounded-r-lg text-white px-2 md:px-4 font-medium">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
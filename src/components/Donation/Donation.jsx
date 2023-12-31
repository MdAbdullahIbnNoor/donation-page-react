import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredDonation } from '../../utility/localstorage';

const Donation = () => {

    const cards = useLoaderData();

    const {id} = cards

    const [donations, setDonations] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (cards.length > 0) {

            const donated = [];
            for (const id of storedDonationIds) {
                const card = cards.find(card => card.id === id);
                if (card) {
                    donated.push(card);
                }
            }
            setDonations(donated);
        }
    }, [cards])

    // console.log(donations);
    const getShowAllButton = () => {
        console.log(donations.length);
        if(dataLength === donations.length)
        {
            return 'hidden';
        }
        else if(donations.length < 4){
            return 'hidden'
        }
        return '';

    }




    return (
        <section className="text-gray-600 body-font ">
            <div className="container py-10 md:mx-auto grid lg:grid-cols-2 gap-5">
                {
                    donations.slice(0, dataLength).map(
                        card =>
                            <div key={card.id}
                                className="flex items-center md:mb-4 border-gray-200 flex-row gap-4 md:gap-10 rounded-xl pr-4 md:h-56 h-40" style={{
                                    backgroundColor: card.card_bg,
                                }}>
                                <img className="w-1/2 h-40 md:h-56 rounded-l-lg" src={card.picture} alt="" />
                                <div className="sm:text-left text-center md:space-y-1 sm:mt-0 w-2/3 flex flex-col justify-start items-start py-5 md:py-8">
                                    <div className="my-2 md:my-0">
                                        <button className="h-8 md:h-10 bg-emerald-500 px-3 py-1 btn-outline rounded-xl text-xs md:text-base md:font-bold" style={{
                                            backgroundColor: card.category_bg,
                                            color: card.text_button_bg,
                                        }}>{card.category}</button>
                                    </div>
                                    <h2 className="text-gray-900 md:text-xl text-left font-medium">
                                        {card.title}
                                    </h2>
                                    <p className="text-gray-500 mr-4 ml-0 font-medium text-left md:text-xl" style={{
                                        color: card.text_button_bg,
                                    }}> {card.price}$</p>

                                    <Link to={`/card/${card.id}`}>
                                    <button className='md:h-10 md:w-36 h-8 w-24 text-white font-semibold text-xs md:text-lg rounded-xl px-2' style={{
                                        backgroundColor: card.text_button_bg
                                    }}>
                                        View Details
                                    </button></Link>

                                </div>
                            </div>
                    )
                }
            </div>
            {/* <div className={dataLength === donations.length ? 'hidden' : dataLength < 4 ? 'hidden' : ''}></div> */}
            <div className={getShowAllButton()}>
                <button onClick={() => setDataLength(donations.length)} className="btn text-white bg-emerald-600 hover:bg-emerald-800 w-32 flex justify-center mx-auto my-8">Show All</button>
            </div>
        </section>
    )
}

export default Donation
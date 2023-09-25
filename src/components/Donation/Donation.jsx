import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonation } from '../../utility/localstorage';

const Donation = () => {

    const cards = useLoaderData();

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

    console.log(donations);




    return (
        <section className="text-gray-600 body-font ">
            <div className="container py-10 mx-auto grid lg:grid-cols-2 gap-5 ">
                {
                    donations.slice(0, dataLength).map(
                        card =>
                            <div key={card.id}
                                className="flex items-center mb-10 border-gray-200 sm:flex-row flex-col gap-10 rounded-xl" style={{
                                    backgroundColor: card.card_bg,
                                }}>
                                <img className="w-1/2 h-full rounded-l-lg" src={card.picture} alt="" />
                                <div className="sm:text-left text-center space-y-3 sm:mt-0 w-2/4 flex flex-col justify-start items-start">
                                    <div className="my-2">
                                        <button className="h-8 bg-emerald-500 px-3 py-1 btn-outline rounded-xl" style={{
                                            backgroundColor: card.category_bg,
                                            color: card.text_button_bg,
                                        }}>{card.category}</button>
                                    </div>
                                    <h2 className="text-gray-900 text-xl title-font font-medium">
                                        {card.title}
                                    </h2>
                                    <p className="text-gray-500 mr-4 ml-2 font-medium text-left text-xl" style={{
                                        color: card.text_button_bg,
                                    }}> {card.price}$</p>
                                    
                                    <button className='h-10 w-36 text-white font-semibold text-xl rounded-xl px-2' style={{
                                        backgroundColor: card.category_bg
                                    }}>
                                        View Details
                                    </button>

                                </div>
                            </div>
                    )
                }
            </div>
            <div className={dataLength === donations.length && 'hidden'}>
                <button onClick={() => setDataLength(donations.length)} className="btn text-white bg-emerald-600 hover:bg-emerald-800 w-32 flex justify-center mx-auto my-8">Show All</button>
            </div>
        </section>
    )
}

export default Donation
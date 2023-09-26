import { useLoaderData, useParams } from "react-router-dom"
import { useState } from "react";
import { saveDonation } from "../../utility/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardDetails = () => {

    const [isButtonClicked, setButtonClicked] = useState(false);

    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt)

    console.log(card);
    const { title, picture, description, extended_description, price, text_button_bg } = card;

    const notify = () => {
        saveDonation(idInt);
        toast.success("Donation Completed Successfully!!");
        setButtonClicked(true);
    }

    const categoryStyle = {
        backgroundColor: text_button_bg,
    };


    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 pb-24 items-center justify-center flex-col">
                <img
                    className="h-full w-full lg:mb-0 object-cover object-center rounded"
                    alt="hero"
                    src={picture}
                />
                <div className="hero-overlay h-16 md:h-24 w-full relative -top-16 md:-top-24 bg-opacity-70">
                    <button onClick={() => notify()} className="ml-3 md:ml-7 w-36 inline-flex text-gray-200 font-semibold border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg mt-3 md:mt-7" style={categoryStyle}>
                        {isButtonClicked ? `Donated` : `Donate ${price}$`}
                    </button>
                </div>

                <div className="text-left lg:w-full w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {title}
                    </h1>
                    <p className="mb-8 leading-relaxed font-semibold text-xl">
                        {description}
                    </p>
                    <p className="mb-8 leading-relaxed">
                        {extended_description}
                    </p>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default CardDetails
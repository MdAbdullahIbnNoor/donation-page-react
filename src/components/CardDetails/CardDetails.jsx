import { useLoaderData, useParams } from "react-router-dom"
import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const CardDetails = () => {

    // const [isButtonClicked, setButtonClicked] = useState(false);

    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(job => job.id === idInt)

    console.log(card);
    const { title, picture, category, description, extended_description, price, category_bg } = card;

    const categoryStyle = {
        backgroundColor: category_bg,
    };


    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 pb-24 items-center justify-center flex-col">
                <img
                    className="lg:w-full h-full md:w-3/6 w-5/6 lg:mb-0 object-cover object-center rounded"
                    alt="hero"
                    src={picture}
                />
                <div className="hero-overlay h-24 w-full relative -top-24 bg-opacity-70">
                    <button className="ml-7 w-36 inline-flex text-gray-200 font-semibold  border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg mt-7" style={categoryStyle}> 
                        Donate ${price}
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
        </section>
    );
};

export default CardDetails
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const CategoryList = ({isSearching, setIsSearching}) => {

    // console.log(isSearching);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])
    
    

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-2xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    Donation Category List
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Explore donation opportunities with all the information you need. Its your givings
                </p>
            </div>
            <div className="grid gap-7 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {
                    cards.filter((card => {
                        return isSearching === null ? card : card.category.includes(isSearching)
                    })).map((card, idx) => <Card key={idx} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default CategoryList
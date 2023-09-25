import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { id, title, picture, category, category_bg, card_bg, text_button_bg } = card;

    const cardStyle = {
        backgroundColor: card_bg,
    };

    const categoryStyle = {
        backgroundColor: category_bg,
        color: text_button_bg,
    };

    const titleStyle = {
        color: text_button_bg,
    };

    return (
        <Link to={`/card/${id}`}>
            <div className="card shadow-xl h-72">
                <figure className="h-2/3"><img className="w-full  object-cover" src={picture} alt="Shoes" /></figure>
                <div className="card-body rounded-b-xl" style={cardStyle}>
                    <div className="card-actions justify-start">
                        <div className="h-8 text-xm rounded-lg py-1 px-2 font-bold" style={categoryStyle}>{category}</div>
                    </div>
                    <div className="p-0">
                        <h2 className="card-title text-lg mb-1" style={titleStyle}>
                            {title}
                        </h2>
                    </div>
                </div>
            </div>
        </Link>
    )
};

export default Card;

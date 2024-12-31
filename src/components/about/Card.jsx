import React from 'react';
import { useSearchParams } from 'react-router';
import { CARDS_ITEMS } from '../../utils/helper';

const Cards = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = (card) => {
        setSearchParams({ card: card.replace(/ /g, '-') });
    };

    const selectedCard = searchParams.get('card');

    return (
        <div className="container row row-gap-4 mx-auto py-5">
            <h2 className=' text-black text-center'>Card Params</h2>
            {CARDS_ITEMS.map((card, i) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                    <div
                        onClick={() => handleClick(card.heading)}
                        className={`card p-2 ${selectedCard === card.heading.replace(/ /g, '-') ? 'bg-black' : ''}`}>
                        <h2 className={`text-center cursor-pointer ${selectedCard === card.heading.replace(/ /g, '-') ? 'text-white' : ''}`} >
                            {card.heading}
                        </h2>
                        <p className={`text-center cursor-pointer ${selectedCard === card.heading.replace(/ /g, '-') ? 'text-white' : ''}`}>
            {card.description}
        </p>
                    </div >
                </div >
            ))}
        </div >
    );
};

export default Cards;
import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import SingleCard from '../SingleCard/SingleCard';

const Card = () => {

    const [cards, setCards] = useState([])
    const [bookmark, setBookmark] = useState([])
    const [title, setTitle] = useState([])
    const [readtime, setReadtime] = useState('')

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    const handleAddToCard = (card) => {
        const newBookmark = [...bookmark, card]
        setBookmark(newBookmark);
        const showTitle = [title, card]
        setTitle(showTitle)
    }

    const handleAddToDuration = (readTime) => {
        const previousReadTime = JSON.parse(localStorage.getItem("readTime"))
        if (previousReadTime) {
            const totalReadTime = previousReadTime + readTime
            localStorage.setItem("readTime", totalReadTime)
            setReadtime(totalReadTime)
        } else {
            localStorage.setItem("readTime", readTime)
            setReadtime(readTime)
        }
    }

    return (
        <>
            <div className='grid md:grid-cols-3 gap-4 w-4/5 mx-auto my-10'>
                <div className='md:col-span-2  space-y-6'>
                    {
                        cards.map(card => <SingleCard
                            key={card.id}
                            card={card}
                            handleAddToCard={handleAddToCard}
                            handleAddToDuration={handleAddToDuration} />)
                    }
                </div>
                <div>
                    <Bookmark bookmark={bookmark} title={title} readtime={readtime} />
                </div>
            </div>
        </>
    );
};

export default Card;
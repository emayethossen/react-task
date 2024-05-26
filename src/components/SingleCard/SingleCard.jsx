import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const SingleCard = (props) => {
    const { name, title, image, published, duration, authorImg } = props.card
    const handleAddToCard = props.handleAddToCard
    const handleAddToDuration = props.handleAddToDuration

    const handleBookmark = () => {
        toast("Wow so easy!");
    }

    return (
        <div className='border rounded'>
            <img className='w-full rounded' src={image} alt="" />
            <div className='mt-3 p-4 space-y-6'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center space-x-3'>
                        <img className='w-10 h-10 rounded-full' src={authorImg} alt="" />
                        <div>
                            <h3 className='text-xl font-semibold'>{name}</h3>
                            <p>{published}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p> {duration} min read </p>
                        <button onClick={() => { handleBookmark(); handleAddToCard(props.card); }}>
                        <FontAwesomeIcon icon={faBookmark} />
                        </button>
                    </div>
                </div>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <div>
                    <button onClick={() => handleAddToDuration(duration)} className='underline text-error'>
                        Mark as read
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default SingleCard;
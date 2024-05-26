import React from 'react';

const BookmarkTitle = (props) => {
    const { singleTitle } = props
    return (
        <div className='bg-gray-200'>
            <p className='m-4 rounded text-lg font-semibold'>{singleTitle.title}</p>
        </div>
    );
};

export default BookmarkTitle;
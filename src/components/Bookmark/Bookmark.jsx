import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import BookmarkTitle from '../BookmarkTitle/BookmarkTitle';

const Bookmark = (props) => {
    const { bookmark, readtime, title } = props
    const [time, setTime] = useState(readtime)

    useEffect(() => {
        const getReadTime = localStorage.getItem("readTime")
        setTime(getReadTime);
    }, [readtime])

    return (
        <div className='sticky top-0'>
            <div className='mb-5 border-2'>
                <h3 className='text-xl text-center text-error p-4 font-semibold bg-slate-100'>Spent time on read: {time} </h3>
            </div>
            <div className='bg-slate-100 p-8'>
                <h3 className='text-xl font-semibold'>Bookmarked Blogs: {bookmark.length}</h3>
                <div>
                    {
                        title.map(singleTitle => <BookmarkTitle 
                            singleTitle={singleTitle}
                            key={singleTitle.id} /> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmark;
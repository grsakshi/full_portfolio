import React from 'react';

const Blog = props => (
    <div className='w-52 h-96 flex flex-col bg-black'>
        <img src={props.imageUrl} alt="blogpics" height='180' className='object-cover w-52 h-44' />

        <div className='h-52 w-52 text-gray-200 pt-10 text-left pl-2 overflow-hidden'>
            <span className='text-xxs'>{props.date}</span>
            <h3 className=' text-2xl font-bold text-gray-50 pb-2'>{props.title}</h3>
            <a href={props.link} className='text-xxs bg-gray-300 text-gray-900 font-bold rounded-lg px-2 py-1 shadow-md'>READ MORE</a>
        </div>
    </div>
);

export default Blog;
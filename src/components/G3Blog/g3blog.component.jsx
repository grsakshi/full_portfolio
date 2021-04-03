import React from 'react';
import './g3blog.style.css';

const G3Blog = props => (
    <div className='blog-component m-4 relative flex flex-col bg-white shadow-lg rounded-md'>
        <img src={props.imageUrl} alt="blogpics" className='object-cover w-64 h-32 md:w-80 md:h-40 rounded-t-md' />
        
        <div className='w-64 h-56 md:w-80 md:h-64 text-black p-2 text-left overflow-hidden'>
            <span className='font-bold text-xxs text-purple-600'>{props.date}</span>
            <h3 className='text-2xl font-bold text-black pb-4 leading-none'>{props.title}</h3>
            <div className='overflow-hidden h-20 md:h-28 text-sm text-gray-700 leading-tight tracking-wide'>
                {props.desc}
            </div>
            <a href={props.link} className='absolute bottom-4 text-xs text-purple-600 font-bold'>READ MORE &rarr;</a>
        </div>
    </div>
);

export default G3Blog;
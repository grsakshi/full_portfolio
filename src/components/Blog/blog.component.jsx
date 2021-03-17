import React from 'react';

const Blog = props => (
    <div className='w-52 md:h-96 h-90 flex flex-col bg-black'>
        <img src={props.imageUrl} alt="blogpics" height='180' className='md:h-44 h-36 object-cover object-center' />

        <div className='relative h-52 w-52 text-gray-200 text-left p-2'>
            <span className='text-xxs'>{props.date}</span>
            <h3 className=' text-2xl leading-8 font-bold font-body text-gray-50 pb-2'>{props.title}</h3>
            <a href={props.link} className='absolute bottom-4 left-6 text-sm text-blue-600 hover:text-blue-400 font-bold'>Read More &#8594;</a>
        </div>
    </div>
);

export default Blog;
import React from 'react';
import './card.styles.css';

const Card = props => (
    <div className='bg-gray-900 container h-80 md:w-72 md:h-96 card-container flex flex-col border border-1 border-gray-500 rounded-md p-4 cursor-pointer'>
        <div className='h-32 md:h-44 overflow-hidden'>
            <img src={props.imageUrl} alt="project-image" className='w-full h-full object-cover overflow-hidden'/>
        </div>
        <div className='p-2 text-left'>
            <h2 className='text-xl text-gray-100 font-bold pb-1'>{props.title}</h2>
            <p className='h-32 overflow-hidden text-sm font-body text-gray-300'>{props.description}</p>
            <a href={props.link} className='absolute bottom-4 left-6 text-sm text-blue-600 hover:text-blue-400 font-bold'>Read More &#8594;</a>
        </div>
    </div>
);

export default Card;

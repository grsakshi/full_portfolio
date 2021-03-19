import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './project.styles.css';
import Card from '../Card/card.component';

SwiperCore.use([Navigation, A11y]);

class ProjectSection extends React.Component{
    constructor(){
        super();

        this.state = {
            items: [
                {
                    id: 1,
                    title: 'Project1',
                    imageUrl: 'https://images.pexels.com/photos/1003914/pexels-photo-1003914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    description: 'Describing the project. Describing the project. Describing the project. Describing the project.',
                    link: ''
                },
                {
                    id: 2,
                    title: 'Project2',
                    imageUrl: 'https://wallpapercave.com/wp/wp2550666.jpg',
                    description: 'Describing the project. Describing the project.Describing the project.',
                    link: ''
                },
                {
                    id: 3,
                    title: 'Project3',
                    imageUrl: 'https://media.istockphoto.com/photos/villefranche-on-sea-in-evening-picture-id1145618475?k=6&m=1145618475&s=612x612&w=0&h=u6mv9zLy6WWdxnGxJ4i3bYOFQYJtxjmnkvgVoaGqf_U=',
                    description: 'Describing the project. Describing the project.Describing the project. Describing the project.',
                    link: ''
                },
                {
                    id: 4,
                    title: 'Project4',
                    imageUrl: 'https://i.pinimg.com/originals/2e/65/75/2e6575d405dea87b573cb0341deacca9.jpg',
                    description: 'Describing the project. Describing the project.Describing the project. Describing the project.',
                    link: ''
                }

            ]
        };
    }

    render(){
        const {items} = this.state;
        return(
            <React.Fragment>
                <div id='projects' className='p-4'>
                    <div className='font-body text-3xl flex flex-col items-center pb-2'>
                        PROJECTS
                        <span class='bg-gray-700 h-1 w-20 block mt-4'></span>
                    </div>
                    <div className='w-full justify-items-center align-middle items-center text-white py-6 px-2'> 
                        <Swiper 
                            id='main'
                            spaceBetween={20}
                            slidesPerView={2}
                            navigation
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {
                                items.map(({id, ...otherprops}) => (
                                    <SwiperSlide className='p-4' key={id}>
                                        <Card key={id} {...otherprops}/>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProjectSection;
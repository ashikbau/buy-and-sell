import React from 'react';
// import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/people1.jpeg';
import people2 from '../../../assets/people2.jpeg';
import people from '../../../assets/people.jpeg';
import Review from './Review';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1, 
            name: 'Steve Cold',
            img: people1,
            review: 'It had been awesome experiences to use this websites. Because I need to sell my car hurry. I sold my car within within an hour. Its really awesome!!',
            location: 'California'
        },
        {
            _id: 2, 
            name: 'Peter Wilson',
            img: people2,
            review: 'I am really to happly to use this website because I found a very good quality car by cheap price. I am really lucky to found that car.',
            location: 'California'
        },
        {
            _id: 3, 
            name: 'Winson Herry',
            img: people,
            review: 'To use this website really i fell good whenever i need to buy a car or sell a car it hass ben awesome.',
            location: 'California'
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className="text-4xl">What Our Users Says</h2>
                </div>
                <figure>
                    {/* <img className='w-24 lg:w-48' src={quote} alt="" /> */}
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;
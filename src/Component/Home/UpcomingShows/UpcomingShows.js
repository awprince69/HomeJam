import React from 'react';
import './UpcomingShows.css'
import pic1 from '../../../images/Benny-Dayal.jpg'
import pic2 from '../../../images/Vijay_Yesudasjpg.jpg'
import pic3 from '../../../images/Andrea-Jeremiah.jpg'
import pic4 from '../../../images/Shilpa-Rao.jpg'
import ShowCard from '../ShowCard/ShowCard';
import ticket from '../../../images/ticket.svg'
import Reviews from '../Reviews/Reviews';

const UpcomingShows = () => {
    const showsData = [
        {
            image: pic1,
            title: 'Flock',
            name: "Benny Dayal",
            ticket: ticket
        },
        {
            image: pic2,
            title: 'Bollywood',
            name: "Vijay Yesudas",
            ticket: ticket
        },
        {
            image: pic3,
            title: 'Flock',
            name: "Andrea Jeremiah",
            ticket: ticket
        },
        {
            image: pic4,
            title: 'Flock',
            name: "Shilpa Rao",
            ticket: ticket
        },
    ]
    return (
        <section className='showsContainer'>
            <div className='container text-white'>
                <div className='d-flex justify-content-between' style={{ paddingTop: '130px' }}>
                    <h1 className='titleText fontType1'> <span style={{ borderBottom: '3px solid blue', paddingBottom: '8px' }}>Up</span>coming Shows</h1>
                    <p className='text-warning fontType2'>View All</p>
                </div>
                <div className='mt-5'>
                    <div className='d-flex showCardContainer'>
                        {
                            showsData.map(show => <ShowCard key={show.name} show={show}></ShowCard>)
                        }
                    </div>
                </div>
                <div className='mt-5'>
                    <Reviews></Reviews>
                </div>
            </div>
        </section>
    );
};

export default UpcomingShows;
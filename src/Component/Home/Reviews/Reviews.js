import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import person1 from '../../../images/rpic1.jpg';
import person2 from '../../../images/rpic2.jpg';
import person3 from '../../../images/rpic3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import UsFlag from '../../../images/us-wave.png'
import ItalyFlag from '../../../images/italy-wave.png'

const Reviews = () => {
    const reviewData = [
        {
            pic: person1,
            name: 'Hellen Jummy',
            flag: UsFlag,
            address: 'PALOALTO,CA'
        },
        {
            pic: person2,
            name: 'Isaac Oluwatemilorun',
            flag: ItalyFlag,
            address: 'PALOALTO,CA'
        },
        {
            pic: person3,
            name: 'Hellen Jammy',
            flag: UsFlag,
            address: 'PALOALTO,CA'
        },
    ]
    return (
        <section>
            <div>
                <div className='d-flex justify-content-between'>
                    <h1 className='titleText fontType1'> <span style={{ borderBottom: '3px solid blue'}}>Rev</span>iews</h1>
                    <p> 1<span style={{color:'gray'}}>/12</span> &nbsp;  &nbsp; <FontAwesomeIcon icon={faArrowLeft} />  &nbsp;<FontAwesomeIcon icon={faArrowRight} /></p>
                </div>
                <div className='mt-5 reviewContainer'>
                    <div className='d-flex '>
                        {
                            reviewData.map(reviews => <ReviewCard key={reviews.name} reviews={reviews} ></ReviewCard>)
                        }
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Reviews;
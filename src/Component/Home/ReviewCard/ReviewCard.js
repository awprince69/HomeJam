import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({ reviews }) => {
    const { name, address, pic,flag } = reviews
    return (
        <div className='col-md-4 reviewCardContainer mr-4 mb-5'>
            <div className='d-flex align-items-center' style={{width: '20rem'}}>
                <img className='reviewImage'  src={pic} alt=""/>
                <div style={{marginLeft:'10px'}}>
                    <h6 className='fontType3'>{name}</h6>
                    <small className='fontType4' style={{color:'#E5C558'}}> <img src={flag} alt="" width='20'/> &nbsp; {address}</small>
                </div>
            </div>
            <div>
                <div className='card-body'>
                    <p className='card-text fontType2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, illum. Odit eveniet cupiditate at id iste officiis sint, nisi sed vero excepturi deleniti sunt ex libero laborum voluptatem quod accusantium?</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
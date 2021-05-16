import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './ShowCard.css'
const ShowCard = ({ show }) => {
    const { image, title, name, ticket } = show
    return (
        <div>
            <div className='col-md-3 mr-4'>
                <div className="card showCard " style={{ width: '15rem', backgroundColor: '#111229' }}>
                    <img src={image} className="card-img-top" alt="..." height='160px' />
                    <div className="card-body">
                        <p className="card-title fontType2"><small className='categoryText'>{title}</small></p>
                        <h4 className="fontType1">{name}</h4>
                        <div className="pt-4 d-flex justify-content-between">
                            <div>
                                <a href="#" className="card-link">More Info <FontAwesomeIcon icon={faArrowRight} /></a>
                            </div>
                            <div>
                                <a href="#" className="card-link ticket">
                                    <span style={{ marginLeft: '20px' }}>
                                        <img className='imageTicket' src={ticket} alt="" width='25' />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCard;
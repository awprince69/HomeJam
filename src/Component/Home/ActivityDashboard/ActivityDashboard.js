import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './ActivityDashboard.css'

const ActivityDashboard = () => {
    return (
        <div className='horizontalSlider'>
            <div className=' sliderContainer container'>
                <div className='item'>
                    <div className='dashboardCircle '>
                        <div className='activityText text-white text-center'>
                            <p style={{ color: 'blue' }}><FontAwesomeIcon icon={faHeart} /></p>
                            <p>0</p>
                            <p>Level</p>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='dashboardCircle'>
                        <div className='activityText text-white text-center'>
                            <p style={{ color: 'blue' }}><FontAwesomeIcon icon={faHeart} /></p>
                            <p>0</p>
                            <p>Level</p>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='dashboardCircle'>
                        <div className='activityText text-white text-center'>
                            <p style={{ color: 'blue' }}><FontAwesomeIcon icon={faHeart} /></p>
                            <p>0</p>
                            <p>Level</p>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='dashboardCircle'>
                        <div className='activityText text-white text-center'>
                            <p style={{ color: 'blue' }}><FontAwesomeIcon icon={faHeart} /></p>
                            <p>0</p>
                            <p>Level</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityDashboard;
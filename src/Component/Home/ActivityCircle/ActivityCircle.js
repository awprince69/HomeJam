import React from 'react';
import './ActivityCircle.css'


const ActivityCircle = ({ activity }) => {
    const { icon, background, count, level } = activity
    return (
        <div className='col-md-3 mr-5'>
            <div className={`dashboardCircle info-${background}`}>
                <div className='activityText text-white text-center mt-4'>
                    <p> <img src={icon} alt="" width='25' /> </p>
                    <p className='fontType1' style={{ fontSize: '24px' }}>{count}</p>
                    <p className='fontType2'>{level}</p>
                </div>
            </div>
        </div>
    );
};

export default ActivityCircle;
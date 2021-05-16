import React from 'react';
import './ActivityDashboard.css'
import ActivityCircle from '../ActivityCircle/ActivityCircle';
import event from '../../../images/event.svg'
import heart from '../../../images/heart.svg'
const ActivityDashboard = () => {
    const activityData = [
        {
            count: '456',
            icon: heart,
            level: 'Likes everyday',
            background:'circle'
        },
        {
            count: '745',
            icon: event,
            level: 'Online Events'
        },
        {
            count: '+10K',
            icon: event,
            level: 'Users'
        },
        {
            count: '+2',
            icon: event,
            level: 'Views every day'
        }
    ]
    return (
        <section className='container dashboard'>
            <div >
                <div className='d-flex circleContainer'>
                    {
                        activityData.map(activity => <ActivityCircle activity={activity}></ActivityCircle>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ActivityDashboard;
import React from 'react';
import YourComponent from './Demo';
import 'bootstrap/dist/css/bootstrap.min.css';
import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import { object } from '../utils/ImageObject';

const mockData = {
    data: [
        { date: '2024-06-13T08:00:00Z', file: one, activeWindow_owner: 'User1', activeWindow_title: 'Title1' },
        { date: '2024-06-13T09:00:00Z', file: two, activeWindow_owner: 'User2', activeWindow_title: 'Title2' },
        { date: '2024-06-13T10:00:00Z', file: three, activeWindow_owner: 'User3', activeWindow_title: 'Title3' },
        // Add more mock screenshots as needed
    ],
    activitiesData: [] // Populate as needed
};

const ParentComponent = () => {
    const [showModal, setShowModal] = React.useState(false);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <button onClick={handleToggleModal}>Open Modal</button>
            <YourComponent screenShot={object} timeZone="UTC" showModal={showModal} />
        </div>
    );
};

export default ParentComponent;
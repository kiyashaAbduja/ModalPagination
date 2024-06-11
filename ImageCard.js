// src/components/ImageCard.js
import React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';

class ImageCard extends React.Component {
    handleClick = () => {
        const { hour, index, openModal } = this.props;
        openModal(hour, index);
    };

    render() {
        const { image, startTime, endTime } = this.props;

        return (
            <Card onClick={this.handleClick} style={{ cursor: 'pointer' }}>
                <CardImg top src={image} alt="" />
                <CardBody>
                    <CardText>{startTime} - {endTime}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default ImageCard;

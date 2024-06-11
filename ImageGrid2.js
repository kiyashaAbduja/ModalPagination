// src/components/ImageGrid.js
import React, { Component } from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import four from '../assets/four.jpg';
import five from '../assets/five.jpg';
import six from '../assets/six.jpg';
import seven from '../assets/seven.jpg';
import eight from '../assets/eight.jpg';
import nine from '../assets/nine.avif';
import ten from '../assets/ten.jpg';
import eleven from '../assets/eleven.jpg';
import tweleve from '../assets/tweleve.webp';
import ImageCard from './ImageCard';
import { object } from '../utils/ImageObject';

class ImageGrid2 extends Component {
    state = {
        modalOpen: false,
        currentImage: null,
        currentHour: null,
        currentIndex: null,
    };

    openModal = (hour, index) => {
        this.setState({
            modalOpen: true,
            currentImage: object[hour][index].file,
            currentHour: hour,
            currentIndex: index
        });
    };

    closeModal = () => {
        this.setState({ modalOpen: false });
    };

    showNextImage = () => {
        const { currentHour, currentIndex } = this.state;
        let nextIndex = currentIndex + 1;
        let nextHour = currentHour;

        if (nextIndex >= Object.keys(object[currentHour]).length) {
            const hours = Object.keys(object);
            nextHour = hours[hours.indexOf(currentHour) + 1];
            if (!nextHour) {
                // If there's no next hour, wrap around to the first hour
                nextHour = hours[0];
            }
            nextIndex = 0;
        }
        if (object[nextHour] && object[nextHour][nextIndex]) {
            this.setState({
                currentImage: object[nextHour][nextIndex].file,
                currentHour: nextHour,
                currentIndex: nextIndex
            });
        }
    };

    showPrevImage = () => {
        const { currentHour, currentIndex } = this.state;
        let prevIndex = currentIndex - 1;
        let prevHour = currentHour;

        if (prevIndex < 0) {
            const hours = Object.keys(object);
            prevHour = hours[hours.indexOf(currentHour) - 1];
            if (!prevHour) {
                // If there's no previous hour, wrap around to the last hour
                prevHour = hours[hours.length - 1];
            }
            prevIndex = Object.keys(object[prevHour]).length - 1;
        }
        if (object[prevHour] && object[prevHour][prevIndex]) {
            this.setState({
                currentImage: object[prevHour][prevIndex].file,
                currentHour: prevHour,
                currentIndex: prevIndex
            });
        }
    };

    render() {
        return (
            <Container>
                {Object.keys(object).map(hour => (
                    <div key={hour} className="hour-section">
                        <h2>{`${hour}:00`}</h2>
                        <Row>
                            {Object.keys(object[hour]).map(index => (
                                <Col sm="2" key={index}>
                                    <ImageCard
                                        hour={hour}
                                        index={index}
                                        image={object[hour][index].file}
                                        startTime={object[hour][index].startTime}
                                        endTime={object[hour][index].endTime}
                                        openModal={this.openModal}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}
                {this.state.modalOpen && (
                    <Modal isOpen={this.state.modalOpen} toggle={this.closeModal}>
                        <ModalHeader toggle={this.closeModal}>Image</ModalHeader>
                        <ModalBody>
                            <img src={this.state.currentImage} alt="" className="modal-image" />
                            <Button color="primary" onClick={this.showPrevImage}>Previous</Button>
                            <Button color="primary" onClick={this.showNextImage}>Next</Button>
                        </ModalBody>
                    </Modal>
                )}
            </Container>
        );
    }
}

export default ImageGrid2;
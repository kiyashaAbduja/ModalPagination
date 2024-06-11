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

// const object = {
//     9: {
//         0: {
//             "startTime": '9:00',
//             "endTime": "9:05",
//             file: one
//         },
//         1: {
//             "startTime": '9:05',
//             "endTime": "9:10",
//             file: two
//         },
//         2: {
//             "startTime": '9:10',
//             "endTime": "9:15",
//             file: three
//         },
//         3: {
//             "startTime": '9:15',
//             "endTime": "9:20",
//             file: four
//         },
//         4: {
//             "startTime": '9:20',
//             "endTime": "9:25",
//             file: five
//         },
//         5: {
//             "startTime": '9:25',
//             "endTime": "9:30",
//             file: six
//         },
//         6: {
//             "startTime": '9:30',
//             "endTime": "9:35",
//             file: seven
//         },
//         7: {
//             "startTime": '9:35',
//             "endTime": "9:40",
//             file: eight
//         },
//         8: {
//             "startTime": '9:40',
//             "endTime": "9:45",
//             file: nine
//         },
//         9: {
//             "startTime": '9:45',
//             "endTime": "9:50",
//             file: ten
//         },
//         10: {
//             "startTime": '9:50',
//             "endTime": "9:55",
//             file: eleven
//         },
//         11: {
//             "startTime": '9:55',
//             "endTime": "10:00",
//             file: tweleve
//         },
//     },
//     10: {
//         0: {
//             "startTime": '10:00',
//             "endTime": "10:05",
//             file: one
//         },
//         1: {
//             "startTime": '10:05',
//             "endTime": "10:10",
//             file: two
//         },
//         2: {
//             "startTime": '10:10',
//             "endTime": "10:15",
//             file: three
//         },
//         3: {
//             "startTime": '10:15',
//             "endTime": "10:20",
//             file: four
//         },
//         4: {
//             "startTime": '10:20',
//             "endTime": "10:25",
//             file: five
//         },
//         5: {
//             "startTime": '10:25',
//             "endTime": "10:30",
//             file: six
//         },
//         6: {
//             "startTime": '10:30',
//             "endTime": "10:35",
//             file: seven
//         },
//         7: {
//             "startTime": '10:35',
//             "endTime": "10:40",
//             file: eight
//         },
//         8: {
//             "startTime": '10:40',
//             "endTime": "10:45",
//             file: nine
//         },
//         9: {
//             "startTime": '10:45',
//             "endTime": "10:50",
//             file: ten
//         },
//         10: {
//             "startTime": '10:50',
//             "endTime": "10:55",
//             file: eleven
//         },
//         11: {
//             "startTime": '10:55',
//             "endTime": "11:00",
//             file: tweleve
//         },
//     },
//     11: {
//         0: {
//             "startTime": '11:00',
//             "endTime": "11:05",
//             file: one
//         },
//         1: {
//             "startTime": '11:05',
//             "endTime": "11:10",
//             file: two
//         },
//         2: {
//             "startTime": '11:10',
//             "endTime": "11:15",
//             file: three
//         },
//         3: {
//             "startTime": '11:15',
//             "endTime": "11:20",
//             file: four
//         },
//         4: {
//             "startTime": '11:20',
//             "endTime": "11:25",
//             file: five
//         },
//         5: {
//             "startTime": '11:25',
//             "endTime": "11:30",
//             file: six
//         },
//         6: {
//             "startTime": '11:30',
//             "endTime": "11:35",
//             file: seven
//         },
//         7: {
//             "startTime": '11:35',
//             "endTime": "11:40",
//             file: eight
//         },
//         8: {
//             "startTime": '11:40',
//             "endTime": "11:45",
//             file: nine
//         },
//         9: {
//             "startTime": '11:45',
//             "endTime": "11:50",
//             file: ten
//         },
//         10: {
//             "startTime": '11:50',
//             "endTime": "11:55",
//             file: eleven
//         },
//         11: {
//             "startTime": '11:55',
//             "endTime": "12:00",
//             file: tweleve
//         },
//     },
//     12: {
//         0: {
//             "startTime": '12:00',
//             "endTime": "12:05",
//             file: one
//         },
//         1: {
//             "startTime": '12:05',
//             "endTime": "12:10",
//             file: two
//         },
//         2: {
//             "startTime": '12:10',
//             "endTime": "12:15",
//             file: three
//         },
//         3: {
//             "startTime": '12:15',
//             "endTime": "12:20",
//             file: four
//         },
//         4: {
//             "startTime": '12:20',
//             "endTime": "12:25",
//             file: five
//         },
//         5: {
//             "startTime": '12:25',
//             "endTime": "12:30",
//             file: six
//         },
//         6: {
//             "startTime": '12:30',
//             "endTime": "12:35",
//             file: seven
//         },
//         7: {
//             "startTime": '12:35',
//             "endTime": "12:40",
//             file: eight
//         },
//         8: {
//             "startTime": '12:40',
//             "endTime": "12:45",
//             file: nine
//         },
//         9: {
//             "startTime": '12:45',
//             "endTime": "12:50",
//             file: ten
//         },
//         10: {
//             "startTime": '12:50',
//             "endTime": "12:55",
//             file: eleven
//         },
//         11: {
//             "startTime": '12:55',
//             "endTime": "13:00",
//             file: tweleve
//         },
//     },
//     13: {
//         0: {
//             "startTime": '13:00',
//             "endTime": "13:05",
//             file: one
//         },
//         1: {
//             "startTime": '13:05',
//             "endTime": "13:10",
//             file: two
//         },
//         2: {
//             "startTime": '13:10',
//             "endTime": "13:15",
//             file: three
//         },
//         3: {
//             "startTime": '13:15',
//             "endTime": "13:20",
//             file: four
//         },
//         4: {
//             "startTime": '13:20',
//             "endTime": "13:25",
//             file: five
//         },
//         5: {
//             "startTime": '13:25',
//             "endTime": "13:30",
//             file: six
//         },
//         6: {
//             "startTime": '13:30',
//             "endTime": "13:35",
//             file: seven
//         },
//         7: {
//             "startTime": '13:35',
//             "endTime": "13:40",
//             file: eight
//         },
//         8: {
//             "startTime": '13:40',
//             "endTime": "13:45",
//             file: nine
//         },
//         9: {
//             "startTime": '13:45',
//             "endTime": "13:50",
//             file: ten
//         },
//         10: {
//             "startTime": '13:50',
//             "endTime": "13:55",
//             file: eleven
//         },
//         11: {
//             "startTime": '13:55',
//             "endTime": "14:00",
//             file: tweleve
//         },
//     }
// };

class ImageGrid extends Component {
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

    // showNextImage = () => {
    //     const { currentHour, currentIndex } = this.state;
    //     let nextIndex = currentIndex + 1;
    //     let nextHour = currentHour;

    //     if (nextIndex >= Object.keys(object[currentHour]).length) {
    //         nextIndex = 0;
    //         nextHour = currentHour + 1;
    //     }
    //     if (object[nextHour] && object[nextHour][nextIndex]) {
    //         this.setState({
    //             currentImage: object[nextHour][nextIndex].file,
    //             currentHour: nextHour,
    //             currentIndex: nextIndex
    //         });
    //     }
    // };
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
        } else {
            prevIndex = currentIndex - 1;
        }
        if (object[prevHour] && object[prevHour][prevIndex]) {
            this.setState({
                currentImage: object[prevHour][prevIndex].file,
                currentHour: prevHour,
                currentIndex: prevIndex
            });
        }
    };
    // showPrevImage = () => {
    //     const { currentHour, currentIndex } = this.state;
    //     let prevIndex = currentIndex - 1;
    //     let prevHour = currentHour;

    //     if (prevIndex < 0) {
    //         prevHour = currentHour - 1;
    //         prevIndex = Object.keys(object[prevHour]).length - 1;
    //     }
    //     if (object[prevHour] && object[prevHour][prevIndex]) {
    //         this.setState({
    //             currentImage: object[prevHour][prevIndex].file,
    //             currentHour: prevHour,
    //             currentIndex: prevIndex
    //         });
    //     }
    // };
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

export default ImageGrid;

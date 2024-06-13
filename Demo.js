import React, { Component } from 'react';
import { Modal, ModalBody, Button } from 'reactstrap';
import moment from 'moment-timezone';
import { PiCaretLeftFill, PiCaretRightFill } from 'react-icons/pi'; // Ensure you have these icons or use appropriate ones

class YourComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curentHour: 0,
            currentIndex: 0,
            absoluteIndex: 0,
            totalLength: 0,
            currentImage: null,
            selectedScreenShot: null,
            screenshotPreviewModalOpen: false,
            screenShotObject: {}, // Initialize as empty object
            hours: [], // Store the hours in an array
            hourIndex: 0, // Store the current hour index
        };
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);

        const { screenShot, timeZone } = this.props;
        if (screenShot.data && screenShot.data.length) {
            this.processScreenShots(screenShot.data, timeZone);
        }
    }

    componentDidUpdate(prevProps) {
        const { screenShot, timeZone } = this.props;
        if (screenShot.data !== prevProps.screenShot.data) {
            if (screenShot.data && screenShot.data.length) {
                this.processScreenShots(screenShot.data, timeZone);
            }
        }
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (this.state.screenshotPreviewModalOpen) {
            if (event.key === "ArrowRight") {
                this.showNextImage();
            } else if (event.key === "ArrowLeft") {
                this.showPrevImage();
            }
        }
    }

    toggleModal = () => {
        this.setState((prevState) => ({
            screenshotPreviewModalOpen: !prevState.screenshotPreviewModalOpen
        }));
    }

    // processScreenShots = (screenShotData, timeZone) => {
    //     const firstScreenShotTime = screenShotData[0].date;
    //     const lastScreenShotTime = screenShotData[screenShotData.length - 1].date;
    //     const startTime = parseInt(moment(firstScreenShotTime).tz(timeZone).format('HH'));
    //     const endTime = parseInt(moment(lastScreenShotTime).tz(timeZone).format('HH'));

    //     let screenShotObject = this.createScreenShotObject(startTime, endTime);
    //     this.mapScreenShotsToObject(screenShotObject, screenShotData);

    //     this.setState({
    //         screenShotObject,
    //         totalLength: screenShotData.length,
    //         currentImage: screenShotData[0].file,  // Initialize with the first image
    //         selectedScreenShot: screenShotData[0], // Initialize with the first screenshot object
    //     });
    // }
    processScreenShots = (screenShotData, timeZone) => {
        const firstScreenShotTime = screenShotData[0].date;
        const lastScreenShotTime = screenShotData[screenShotData.length - 1].date;
        const startTime = parseInt(moment(firstScreenShotTime).tz(timeZone).format('HH'));
        const endTime = parseInt(moment(lastScreenShotTime).tz(timeZone).format('HH'));

        let screenShotObject = this.createScreenShotObject(startTime, endTime);
        this.mapScreenShotsToObject(screenShotObject, screenShotData);

        const hours = Object.keys(screenShotObject);
        this.setState({
            screenShotObject,
            totalLength: screenShotData.length,
            currentImage: screenShotData[0].file,  // Initialize with the first image
            selectedScreenShot: screenShotData[0], // Initialize with the first screenshot object
            hours,
            hourIndex: 0,
        });

    }

    // createScreenShotObject = (startTime, endTime) => {
    //     const screenShotObject = {};
    //     for (let i = startTime; i <= endTime; i++) {
    //         screenShotObject[i] = [];
    //     }
    //     return screenShotObject;
    // }

    createScreenShotObject(startTime, endTime) {
        var screenShotObject = {};
        for (let i = endTime === 0 ? endTime : startTime; endTime === 0 ? i <= startTime : i <= endTime; i++) {
            let j = i < 10 ? `0${i}` : `${i}`;
            screenShotObject[i] = {};
            for (let k = 0; k < 12; k++) {
                let startMinute = k * 5;
                let endMinute = startMinute + 5;
                if (endMinute === 60) {
                    endMinute = 0;
                }
                screenShotObject[i][k] = {
                    starttime: `${j}:${startMinute < 10 ? `0${startMinute}` : startMinute}`,
                    endtime: `${j}:${endMinute < 10 ? `0${endMinute}` : endMinute}`,
                    screenshot: null,
                    activities: [],
                    manualRequestIndex: null,
                };
            }
        }
        return screenShotObject;
    }

    // createScreenShotObject(startTime, endTime) {
    //     var screenShotObject = {};
    //     for (
    //         let i = endTime === 0 ? endTime : startTime;
    //         endTime === 0 ? i <= startTime : i <= endTime;
    //         i++
    //     ) {
    //         let j = i < 10 ? 0${ i }: i;
    //         screenShotObject[i] = {
    //             0: {
    //                 starttime: ${ j }:00,
    //                     endtime: ${ j }:05,
    //                         screenshot: null,
    //                             activities: [],
    //                                 manualRequestIndex: null,
    //             },
    //     1: {
    //         starttime: ${ j }:05,
    //             endtime: ${ j }: 10,
    //                 screenshot: null,
    //                     activities: [],
    //                         manualRequestIndex: null,
    //             },
    //     2: {
    //         starttime: ${ j }: 10,
    //             endtime: ${ j }: 15,
    //                 screenshot: null,
    //                     activities: [],
    //                         manualRequestIndex: null,
    //             },
    //     3: {
    //         starttime: ${ j }: 15,
    //             endtime: ${ j }: 20,
    //                 screenshot: null,
    //                     activities: [],
    //                         manualRequestIndex: null,
    //             },
    //     4: {
    //         starttime: ${ j }: 20,
    //             endtime: ${ j }: 25,
    //                 screenshot: null,
    //                     activities: [],
    //                         manualRequestIndex: null,
    //             },
    //     5: {
    //         starttime: ${ j }: 25,
    //             endtime: ${ j }: 30,
    //                 screenshot: null,
    //                     activities: [],
    //                         manualRequestIndex: null,
    //             },
    //     6: {
    //         starttime: ${ j }: 30,
    //             endtime: ${ j }: 35,
    //                 screenshot: null,
    //                     activities: [],
    //                         manualRequestIndex: null,
    //             },
    //     7: {
    //         starttime: ${ j }: 35,
    //             endtime: ${ j }: 40,
    //                 screenshot: null,
    //                     activities: [],
    //                         manualRequestIndex: null,
    //             },
    //     8: {
    //         starttime: ${ j }: 40,
    //             endtime: ${ j }: 45,
    //                 screenshot: null,
    //                     activities: [],
    //                         manualRequestIndex: null,
    //             },
    //     9: {
    //         starttime: ${ j }: 45,
    //             endtime: ${ j }: 50,
    //                 screenshot: null,
    //                     activities: [],
    //                         manualRequestIndex: null,
    //             },
    //     10: {
    //         starttime: ${ j }: 50,
    //             endtime: ${ j }: 55,
    //                 screenshot: null,
    //                     activities: [],
    //                         manualRequestIndex: null,
    //             },
    //     11: {
    //         starttime: ${ j }: 55,
    //             endtime: ${ j }: 60,
    //                 screenshot: null,
    //                     activities: [],
    //                         manualRequestIndex: null,
    //             },
    // };

    mapScreenShotsToObject = (screenShotObject, screenShotData) => {
        screenShotData.forEach((shot, index) => {
            const hour = parseInt(moment(shot.date).format('HH'));
            if (screenShotObject[hour]) {
                screenShotObject[hour].push({
                    index: index,
                    screenshot: shot
                });
            }
        });
    }




    // showNextImage = () => {
    //     const { screenShotObject, curentHour, currentIndex, absoluteIndex, totalLength } = this.state;
    //     let nextIndex = currentIndex + 1;
    //     let nextHour = curentHour;
    //     let newAbsoluteIndex = absoluteIndex + 1;

    //     if (newAbsoluteIndex >= totalLength) {
    //         newAbsoluteIndex = 0; // Loop back to the first image
    //     }

    //     if (nextIndex >= (screenShotObject[curentHour] ? screenShotObject[curentHour].length : 0)) {
    //         const hours = Object.keys(screenShotObject);
    //         const currentHourIndex = hours.indexOf(curentHour.toString());
    //         nextHour = currentHourIndex + 1 < hours.length ? parseInt(hours[currentHourIndex + 1]) : parseInt(hours[0]);
    //         nextIndex = 0;
    //     }

    //     this.updateStateForImage(nextHour, nextIndex, newAbsoluteIndex);
    // };

    // showPrevImage = () => {
    //     const { screenShotObject, curentHour, currentIndex, absoluteIndex, totalLength } = this.state;
    //     let prevIndex = currentIndex - 1;
    //     let prevHour = curentHour;
    //     let newAbsoluteIndex = absoluteIndex - 1;

    //     if (newAbsoluteIndex < 0) {
    //         newAbsoluteIndex = totalLength - 1; // Loop back to the last image
    //     }

    //     if (prevIndex < 0) {
    //         const hours = Object.keys(screenShotObject);
    //         const currentHourIndex = hours.indexOf(curentHour.toString());
    //         prevHour = currentHourIndex - 1 >= 0 ? parseInt(hours[currentHourIndex - 1]) : parseInt(hours[hours.length - 1]);
    //         prevIndex = (screenShotObject[prevHour] ? screenShotObject[prevHour].length : 0) - 1;
    //     }

    //     this.updateStateForImage(prevHour, prevIndex, newAbsoluteIndex);
    // };



    // updateStateForImage = (hour, index, absoluteIndex) => {
    //     const { screenShotObject } = this.state;
    //     const screenshotData = screenShotObject[hour] && screenShotObject[hour][index];

    //     if (screenshotData) {
    //         this.setState({
    //             selectedScreenShot: screenshotData.screenshot,
    //             currentImage: screenshotData.screenshot.file,
    //             curentHour: hour,
    //             currentIndex: index,
    //             absoluteIndex
    //         });
    //     }
    // }

    // showNextImage = () => {
    //     const { screenShotObject, hours, hourIndex, absoluteIndex, totalLength } = this.state;
    //     let newHourIndex = hourIndex;
    //     let newIndex = absoluteIndex + 1;

    //     if (newIndex >= totalLength) {
    //         newIndex = 0; // Loop back to the first image
    //     }

    //     const currentHour = hours[hourIndex];
    //     const hourScreenshots = screenShotObject[currentHour];
    //     if (newIndex >= hourScreenshots.length) {
    //         newHourIndex = (hourIndex + 1) % hours.length;
    //     }

    //     this.updateStateForImage(hours[newHourIndex], newIndex, newIndex);
    // };

    // showPrevImage = () => {
    //     const { screenShotObject, hours, hourIndex, absoluteIndex, totalLength } = this.state;
    //     let newHourIndex = hourIndex;
    //     let newIndex = absoluteIndex - 1;

    //     if (newIndex < 0) {
    //         newIndex = totalLength - 1; // Loop back to the last image
    //     }

    //     const currentHour = hours[hourIndex];
    //     const hourScreenshots = screenShotObject[currentHour];
    //     if (newIndex < 0) {
    //         newHourIndex = (hourIndex - 1 + hours.length) % hours.length;
    //     }

    //     this.updateStateForImage(hours[newHourIndex], newIndex, newIndex);
    // };

    showNextImage = () => {
        const { screenShotObject, hours, hourIndex, absoluteIndex, totalLength } = this.state;
        let newHourIndex = hourIndex;
        let newIndex = absoluteIndex + 1;

        if (newIndex >= totalLength) {
            newIndex = 0; // Loop back to the first image
        }

        const currentHour = hours[hourIndex];
        const hourScreenshots = screenShotObject[currentHour];
        if (newIndex >= hourScreenshots.length) {
            newHourIndex = (hourIndex + 1) % hours.length;
        }

        this.updateStateForImage(hours[newHourIndex], newIndex, newIndex);
    };

    showPrevImage = () => {
        const { screenShotObject, hours, hourIndex, absoluteIndex, totalLength } = this.state;
        let newHourIndex = hourIndex;
        let newIndex = absoluteIndex - 1;

        if (newIndex < 0) {
            newIndex = totalLength - 1; // Loop back to the last image
        }

        const currentHour = hours[hourIndex];
        const hourScreenshots = screenShotObject[currentHour];
        if (newIndex < 0) {
            newHourIndex = (hourIndex - 1 + hours.length) % hours.length;
        }

        this.updateStateForImage(hours[newHourIndex], newIndex, newIndex);
    };

    // To show the next image when you click on "Next", you can update the `updateStateForImage` method as follows:
    // ```jsx
    // updateStateForImage = (hour, index, absoluteIndex) => {
    //     const { screenShotObject } = this.state;
    //     const hourScreenshots = screenShotObject[hour];
    //     const screenshotData = hourScreenshots && hourScreenshots[index];

    //     if (screenshotData && screenshotData.screenshot && screenshotData.screenshot.file) {
    //         this.setState({
    //             selectedScreenShot: screenshotData.screenshot,
    //             currentImage: screenshotData.screenshot.file,
    //             hourIndex: this.state.hours.indexOf(hour),
    //             currentIndex: index,
    //             absoluteIndex,
    //         });
    //     } else {
    //         // If screenshotData is null or invalid, move to the next image
    //         const nextIndex = index + 1;
    //         if (nextIndex < hourScreenshots.length) {
    //             this.updateStateForImage(hour, nextIndex, absoluteIndex + 1);
    //         } else {
    //             // If no more images are available, set currentImage to null
    //             this.setState({
    //                 currentImage: null,
    //             });
    //         }
    //     }
    // };
    updateStateForImage = (hour, index, absoluteIndex) => {
        const { screenShotObject } = this.state;
        // const hourScreenshots = screenShotObject[hour];
        // const screenshotData = hourScreenshots && hourScreenshots[index];
        const hourScreenshots = screenShotObject[hour];
        if (hourScreenshots && hourScreenshots.length > 0) {
            const screenshotData = hourScreenshots[index];
            // ...

            if (screenshotData && screenshotData.screenshot) {
                this.setState({
                    selectedScreenShot: screenshotData.screenshot,
                    currentImage: screenshotData.screenshot.file,
                    hourIndex: this.state.hours.indexOf(hour),
                    currentIndex: index,
                    absoluteIndex,
                });
            } else {
                // If screenshotData is null or invalid, move to the next image
                const nextIndex = index + 1;
                if (nextIndex < hourScreenshots.length) {
                    this.updateStateForImage(hour, nextIndex, absoluteIndex + 1);
                } else {
                    // If no more images are available, set currentImage to null
                    this.setState({
                        currentImage: null,
                    });
                }
            }
        }
    };
    render() {
        return (
            <div>
                <Button onClick={this.toggleModal}>Open Modal</Button>
                <Modal
                    modalClassName="image-viewer-modal"
                    className='modal-fullscreen'
                    isOpen={this.state.screenshotPreviewModalOpen}
                    toggle={this.toggleModal}
                >
                    <ModalBody className='modal-body-fulllscreen'>
                        <div className="modal-content-wrapper">
                            <div className='d-flex header text-white mt-0 pt-0 mb-2' style={{ fontSize: '20px' }}>
                                <p>
                                    <b>
                                        {this.state.selectedScreenShot &&
                                            this.state.selectedScreenShot.activeWindow_owner}
                                    </b>
                                    &nbsp;{' - '}
                                    {this.state.selectedScreenShot &&
                                        this.state.selectedScreenShot.activeWindow_title}
                                </p>
                                <Button color="secondary" onClick={this.toggleModal} className="modal-close-btn">
                                    &times;
                                </Button>
                            </div>

                            <div className='d-flex justify-content-center align-items-center'>
                                <div className="modal-prev-btn" title='Prev' onClick={this.showPrevImage}>
                                    <PiCaretLeftFill />
                                </div>
                                {this.state.currentImage && (
                                    <img
                                        className="img-fluid"
                                        style={{ width: '75.40%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', margin: '10px 20px', marginBottom: '0' }}
                                        alt={this.state.currentImage}
                                        src={this.state.currentImage}
                                    />
                                )}
                                <div className="modal-next-btn" title='Next' onClick={this.showNextImage}>
                                    <PiCaretRightFill />
                                </div>
                            </div>
                            <div className="pagination-text text-primary">
                                {this.state.absoluteIndex + 1} of {this.state.totalLength}
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default YourComponent;

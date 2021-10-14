import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'next/image'
import Link from 'next/link'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import styles from './Project.module.css'
SwiperCore.use([Navigation, Pagination, A11y]);
const project = () => {
    return ( 
        <>
        <div className="bg-gray-900">
        <div className={styles.container-1}>
                <Swiper
                className={styles.swiperBox}
                effect="fade"
                    spaceBetween={60}
                    slidesPerView={2}
                    navigation
                    pagination={{clickable: true}}
                    scrollbar={{draggable: true}}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                   
                >
                    <SwiperSlide className={styles.box}>
                    <Card style={{ width: '28rem', color:'#212529' }}>
                        <Card variant="top"><Image src="/assets/projectImg/Screenshot(20).png" alt="Online Presentation System"
                                            width={900}
                                            height={480}/></Card>
                        <Card.Body className="bg-dark">
                            <Card.Title className="text-light underline">PREZ Online Presentation System</Card.Title>
                            <Card.Text style={{ fontSize: '14px', color:'#ffffff'}}>
                            PREZ system is lagerest database in Presentation.Customer can download and view template
                            
                            </Card.Text>
                            <Link href="https://github.com/Thisarahetz/Online_gaming_site">
                            <Button variant="primary">Source code</Button>
                            </Link>
                        </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className={styles.box}>
                    <Card style={{ width: '28rem' }}>
                        <Card variant="top"><Image src="/assets/projectImg/Screenshot(31).png" alt="Buying and selling gaming account" 
                                            className={styles.Image}
                                            width={900}
                                            height={480}/></Card>
                        <Card.Body className="bg-dark">
                            <Card.Title className="text-light underline">Buying and selling gaming account</Card.Title>
                            <Card.Text style={{ fontSize: '14px',color: 'white'}}>
                           If you want to buy ranked gaming account or sale ranked account for you can use that site
                           </Card.Text>
                           <Link href="https://github.com/Thisarahetz/Online_gaming_site">
                            <Button variant="primary">Source code</Button>
                            </Link>
                        </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className={styles.box}>
                    <Card style={{ width: '28rem' }}>
                        <Card variant="top"><Image src="/assets/projectImg/image-one.png" alt="Shilpa education"
                                            width={900}
                                            height={480}/></Card>
                        <Card.Body className="bg-dark">
                            <Card.Title className="text-light underline">Shilpa education</Card.Title>
                            <Card.Text className="text-light" style={{ fontSize: '14px'}} >
                            Shilpa Education Institute Management System is created for an institute that is located.An education
                             
                            </Card.Text>
                            <Link href="https://github.com/Thisarahetz/Shilpa-eims-frontend">
                            <Button variant="primary">Source code</Button>
                            </Link>
                        </Card.Body>
                        </Card>
                    </SwiperSlide> 
                    <SwiperSlide className={styles.box}>
                    <Card style={{ width: '28rem' }}>
                        <Card variant="top"><Image src="/assets/projectImg/utracker.jpg" alt="Railway Booking Android Application"
                                            width={900}
                                            height={480}/></Card>
                        <Card.Body className="bg-dark">
                            <Card.Title className="text-light underline">Railway Booking Android Application</Card.Title>
                            <Card.Text style={{ fontSize: '14px' }} className="text-light">
                            Here this application is used to ticket booking,seat 
reserving, ticket checking, and reminding time schedule of Railway System

                            </Card.Text>
                            <Link href="https://github.com/Thisarahetz/srilanka-railway-app">
                            <Button variant="primary">Source code</Button>
                            </Link>
                        </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className={styles.box}>
                    <Card style={{ width: '28rem' }}>
                        <Card variant="top"><Image src="/assets/projectImg/NIE-Website-Redesign-Prototype.png" alt="Railway Booking Android Application"
                                            width={900}
                                            height={480}/></Card>
                        <Card.Body className="bg-dark">
                            <Card.Title className="text-light underline">NIE-Website-Redesign-Prototype</Card.Title>
                            <Card.Text style={{ fontSize: '14px' }} className="text-light">
                            We have redesigned (NIE) Sri Lanka website as a group project in Third Year
                             First Semester for Human Computer Interaction Module (SLIIT).

                            </Card.Text>
                            <Link href="https://www.behance.net/gallery/128582503/NIE-Website-Redesigned-Prototype">
                            <Button variant="primary">Source code</Button>
                            </Link>
                        </Card.Body>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </div>
            </div>
        </>
     );
}
 
export default project;
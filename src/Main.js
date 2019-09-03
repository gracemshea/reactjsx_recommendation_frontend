import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import ListItem from './ListItem';

class Recommendation extends React.Component {
    render() {
        return (
            <Container>
                <h1 className="title">Seller Recommendations Dashboard</h1>
                <Row>
                    <Col sm={8}>
                        <div className="photo-bg">
                            {/* <img src="https://as2.ftcdn.net/jpg/02/72/52/67/500_F_272526799_yLzlahhfduEFfYClsyLM9v1bFYQkfUgU.jpg"></img> */}
                            <h2>Placeholder Div: Seller's Dashboard Metrics</h2>
                            {/* <a href="#" className="btn btn-danger"> <i className="fa fa-star"></i> Overlay Button </a>
                            commenting this out for now */}
                        </div>
                    </Col>
                    <Col sm={4}>
                        <li><a href="#">Link #1</a></li>
                        <li><a href="#">Link #2</a></li>
                        <li><a href="#">Link #3</a></li>
                        <li><a href="#">Link #4</a></li>
                        <li><a href="#">Link #5</a></li>
                    </Col>
                </Row>
                <h2 className="title">Featured Recommendations</h2>
                <Row>
                    <Col sm={8}>
                        <div className="call-to-action">
                            {/* <a href="#" className="btn btn-warning btn-lg"><i className="fa fa-play"></i></a> */}
                        </div>
                        <div className="items">
                            <ListItem />
                        </div>
                    </Col>

                    <Col sm={4}>
                        <h3>Testimonials</h3>
                        <div>
                            <Carousel>
                                <Carousel.Item>
                                    <div>
                                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&crop=face&fit=crop&w=200&h=200&q=100"></img>
                                    </div>
                                    <Carousel.Caption>
                                        <h3>Sarah Coner</h3>
                                        <p>
                                            <i className="fa fa-quote-left"></i>
                                            I saw an immediate bump in my sales!
                                            <i className="fa fa-quote-right"></i>    
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div>
                                        <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&crop=face&fit=crop&w=200&h=200&q=80"></img>
                                    </div>
                                    <Carousel.Caption>
                                        <h3>James F.</h3>
                                        <p>
                                            <i className="fa fa-quote-left"></i>
                                            The recommendations were so easy to implement.
                                            <i className="fa fa-quote-right"></i>    
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div>
                                        <img src="https://images.unsplash.com/photo-1541943181603-d8fe267a5dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&crop=face&fit=crop&w=200&h=200&q=100"></img>
                                    </div>
                                    <Carousel.Caption>
                                        <h3>Arnika F.</h3>
                                        <p>    
                                            <i className="fa fa-quote-left"></i>
                                            I wish I followed these recommendations sooner!
                                            <i className="fa fa-quote-right"></i>    
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Recommendation;
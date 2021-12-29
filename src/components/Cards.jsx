import React from "react";
import {Card} from "react-bootstrap";
import comic from '../img/ComicBookGuy.png';
import {Container, Row, Col} from 'react-bootstrap';
const Cards = (props) => {
  return (
    // <div className="container">
    //   <Card  className="">
    //       <div className="row no-gutters">
    //           <div className="col-sm-12 col-md6">
    //     <Card.Img variant="top" src={comic} className="col-sm-12 col-md-12 w-50"/>
    //     </div>
    //     <div className=" col-sm-12 col-md-6">
    //     <Card.Body className="col-sm-12 col-md-6">
    //       <Card.Title>Card Title</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Text>
         
    //     </Card.Body>
    //     </div>
    //     </div>
    //   </Card>
    // </div>
    // <div className=" card my-5 container">
    //     <div className=" row no-gutters">
    //         <div className="col-md-4 text-center">
    //             <img src={comic} alt="personaje" />
    //         </div>
    //         <div className="col-md-8">
    //             <div className="card-body">
    //                 <h5 className="card-title text-center">Card Title</h5>
    //                 <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, quam!</p>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className="">
        <Container className="bg-light">
            <Row>
                <Col md={4} className="text-center">
                    <Card.Img className="w-100" variant="top" src={props.personaje.image} alt="personaje"/>
                </Col>
                <Col md={8} className="text-center">
                    <Card.Body>
                    <Card.Title>{props.personaje.character}</Card.Title>
                    <Card.Text>
                        {props.personaje.quote}
                    </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Cards;

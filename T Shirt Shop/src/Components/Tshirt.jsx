import React, {useState} from 'react';
import {Card , Button , Row, Col , Modal} from "react-bootstrap";

const Tshirt =({tshirt})=> {
    const[size,setSize]= useState('small');
    const[quantity,setQuantity]= useState(1);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Card style={{ width: '18rem', marginTop:"40px"}}>
  <Card.Img variant="top" src={tshirt.image} style={{cursor: 'pointer'}} onClick={handleShow} />
  <Card.Body>
    <Card.Title>{tshirt.name}</Card.Title>
    <hr/>
    <Card.Text>
      <Row>
          <Col md={6}>
              <h6> Size </h6>
              <select value={size}  onChange={e=>setSize(e.target.value)}>
                  {tshirt.size.map(size => (
                      <option >{size}</option>
                  ))}
              </select>
          </Col>
          <Col md={6}>
              <h6> Quantity </h6>
              <select value={quantity}  onChange={e=>setQuantity(e.target.value)}>
                {[...Array(10).keys()].map((v,i)=>(
                <option value ={i+1}>{i+1}</option>
                ))}
                  
              </select>
          </Col>
          
      </Row>
    </Card.Text>
    <Row>
        <Col md={6}> Price : {tshirt.prices[0][size] * quantity} /-Rs
        </Col>
        <Col md={6}>
            <Button className="bg-warning text-white"> Add To Cart

            </Button>
        </Col>
    </Row>
  </Card.Body>
</Card>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{tshirt.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
        <Card.Img variant="top" src={tshirt.image} style={{height:"600px"}}  />
        </div>
        <div>
            <h5>Description :</h5>
            <h6>{tshirt.description}</h6>
        </div>
        </Modal.Body>
        
      </Modal>
        </>
    );
};

export default Tshirt

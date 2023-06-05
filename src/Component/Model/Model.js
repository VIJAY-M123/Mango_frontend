import React from "react";
import { Card,Row,Col } from "reactstrap";
import "../Styles/Modal.css";

function Modal({ message, onYesClick, onNoClick }) {
  return (
    <div style={{marginTop:"-250px"}}>
      <Card className="Modal" 
                    >
      
        
        
        <Row>
          <Col>
          <p style={{color:"white"}}>{message}</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <button className="btnYes" onClick={onYesClick}>Yes</button>
          </Col>
          <Col>
          <button  className="btnNo"  onClick={onNoClick}>No</button>
          </Col>
        </Row>

      </Card>

    </div>
  );
}

export default Modal;
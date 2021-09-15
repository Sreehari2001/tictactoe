import React, {useState} from "react";


import Icon from "./components/icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"

const itemArray = new Array(9).fill('empty');


const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = ()=> {
    itemArray.fill("empty",0,9);
    setWinMessage("");
    setIsCross(false);
};

  const checkisWinner= () => {
    if(
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2]
    ){
      setWinMessage(`${itemArray[0]} won`)
    }
    else if(
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5]
    ){
      setWinMessage(`${itemArray[3]} won`)
    }
    else if(
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8]
    ){
      setWinMessage(`${itemArray[6]} won`)
    }
    else if(
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6]
    ){
      setWinMessage(`${itemArray[0]} won`)
    }
    else if(
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7]
    ){
      setWinMessage(`${itemArray[1]} won`)
    }
    else if(
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8]
    ){
      setWinMessage(`${itemArray[2]} won`)
    }
    else if(
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8]
    ){
      setWinMessage(`${itemArray[0]} won`)
    }
    else if(
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6]
    ){
      setWinMessage(`${itemArray[2]} won`)
    }
  }

  const changeItem = itemNumber => {
    if(winMessage){
      return toast(winMessage, {type:"success"})
    }
    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    }else{
      return toast("already Filled" , {type : "error"})
    }

    checkisWinner();
  }

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center"/>
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div>
              <h1 className = "text-success text-uppercase text-center">
                  {winMessage}
              </h1> 
              <Button color="success" className="mb-2" onClick={reloadGame}>
                Reload the Game
              </Button>
            </div>
          ) : (
            <h1 className="text-warning text-center">
              {isCross ? "Cross" : "Circle" } turns
            </h1>
          )}
          <div className="grid"> 
              {itemArray.map((item, index) => (
                <Card color="success" onClick={() => changeItem(index) }> 
                  <CardBody className="box">
                      <Icon name={item}/>
                  </CardBody>
                </Card>
              ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
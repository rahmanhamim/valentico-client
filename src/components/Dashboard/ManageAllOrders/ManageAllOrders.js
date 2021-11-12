import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./ManageAllOrders.css";

const ManageAllOrders = () => {
 const [orders, setOrders] = useState([]);

 useEffect(() => {
  fetch("http://localhost:5000/orders")
   .then((res) => res.json())
   .then((data) => setOrders(data));
 }, []);

 return (
  <div className="my-4">
   {orders.length === 0 && <p>You have no orders</p>}
   <Row xs={1} md={4} className="g-4">
    {orders.map((order) => (
     <Col key={order._id}>
      <Card className="h-100 p-2">
       <div className="px-3">
        <p className="my-0">
         <strong>Name:</strong> {order.name}{" "}
        </p>
        <p className="my-0">
         <strong>Email:</strong> {order.email}
        </p>
        <p>
         <strong>Phone:</strong> {order.phone}{" "}
        </p>
       </div>
       <div className="d-flex align-items-center">
        <Card.Img
         style={{ width: "50px" }}
         variant="top"
         src={order?.product?.img}
        />
        <Card.Title className="my-0 mx-1">
         {order?.product?.name} <br />{" "}
         <small className="text-muted">price: {order?.product?.price}</small>{" "}
        </Card.Title>
       </div>
       <Card.Body>
        <Card.Text>
         <small className="d-block fs-5">Status: {order?.status}</small>
         <button className="btn-confirm-order">Confirm Order</button>
         <button className="btn-manage-order">Cancel Order</button>
        </Card.Text>
       </Card.Body>
      </Card>
     </Col>
    ))}
   </Row>
  </div>
 );
};

export default ManageAllOrders;

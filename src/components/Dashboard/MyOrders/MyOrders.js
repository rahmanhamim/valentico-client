import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
 const { user } = useAuth();
 const [myOrders, setMyOrders] = useState([]);

 useEffect(() => {
  const url = `https://radiant-plains-03771.herokuapp.com/myorders?email=${user.email}`;
  fetch(url)
   .then((res) => res.json())
   .then((data) => setMyOrders(data));
 }, [user.email]);

 //  Handle cancel order
 const handleDelete = (id) => {
  const query = window.confirm("are you sure?");
  if (!query) {
   return;
  } else {
   const url = `https://radiant-plains-03771.herokuapp.com/orders/${id}`;
   fetch(url, {
    method: "DELETE",
   })
    .then((res) => res.json())
    .then((data) => {
     if (data.deletedCount) {
      alert("deleted");
     }
     const remaining = myOrders.filter((items) => items._id !== id);
     setMyOrders(remaining);
    });
  }
 };

 return (
  <div className="my-5">
   <h3> My Orders: </h3>
   {myOrders.length === 0 && (
    <p>
     You have no orders. <br /> click manage to mange your dashboard
    </p>
   )}
   <Row xs={1} md={4} className="g-4">
    {myOrders.map((order) => (
     <Col key={order._id}>
      <Card className="h-100 p-2">
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
         <button
          style={{ backgroundColor: "#FE7250", color: "white" }}
          className="btn-delete-order"
          onClick={() => handleDelete(order._id)}
         >
          Cancel Order
         </button>
        </Card.Text>
       </Card.Body>
      </Card>
     </Col>
    ))}
   </Row>
  </div>
 );
};

export default MyOrders;

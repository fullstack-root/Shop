import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader";
import Message from "../../Message";
import FormContainer from "../../FormContainer";
import {
  updateRenter,
  getRenterDetails,
} from "../../../actions/apartmentActions";
import { RENTER_UPDATE_RESET } from "../../../constants/apartmentConstants";

function RenterEditScreen() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [renter_name, setRenter_Name] = useState("");
  const [renter_id, setRenter_ID] = useState("");
  const [renter_email, setRenter_Email] = useState("");
  const [phone, setPhone] = useState("");
  const [room_number, setRoom_Number] = useState("");
  const [room_address, setRoom_Address] = useState("");
  const [max_capacity, setMax_Capacity] = useState("");
  const [isOccupied, setIsOccupied] = useState(false);

  const dispatch = useDispatch();

  const renterDetails = useSelector((state) => state.renterDetails);
  const { error, loading, renter } = renterDetails;

  const renterUpdate = useSelector((state) => state.renterUpdate);
  const {
    error: errorrenterUpdate,
    loading: loadingerenterUpdate,
    success: successrenterUpdate,
  } = renterUpdate;

  useEffect(() => {
    if (successrenterUpdate) {
      dispatch({ type: RENTER_UPDATE_RESET });
      navigate("/admin/apartment");
    } else {
      if (!renter.renter_name || renter.id !== Number(id)) {
        dispatch(getRenterDetails(id));
      } else {
        setRenter_Name(renter.renter_name);
        setRenter_ID(renter.renter_id);
        setRenter_Email(renter.renter_email);
        setPhone(renter.phone);
        setRoom_Number(renter.room_number);
        setRoom_Address(renter.room_address);
        setMax_Capacity(renter.max_capacity);
        setIsOccupied(renter.isOccupied);
      }
    }
  }, [dispatch, id, successrenterUpdate, navigate, renter]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateRenter({
        id: id,
        renter_name,
        renter_id,
        renter_email,
        phone,
        room_number,
        room_address,
        max_capacity,
        isOccupied,
      })
    );
  };

  return (
    <div>
      <Link to="/admin/apartment">Go Back</Link>

      <FormContainer>
        <h1>Book A Room</h1>
        {loadingerenterUpdate && <Loader />}
        {errorrenterUpdate && (
          <Message variant="danger">{errorrenterUpdate}</Message>
        )}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="renter_name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={renter_name}
                onChange={(e) => setRenter_Name(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="renter_id">
              <Form.Label>Thai ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ID"
                value={renter_id}
                onChange={(e) => setRenter_ID(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="renter_email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={renter_email}
                onChange={(e) => setRenter_Email(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Group controlId="phone">
              <Form.Control
                type="text"
                label="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Label>Room Number</Form.Label>
            <Form.Group controlId="room_number">
              <Form.Control
                type="text"
                label="room_number"
                value={room_number}
                onChange={(e) => setRoom_Number(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Label>Room Address</Form.Label>
            <Form.Group controlId="room_address">
              <Form.Control
                type="text"
                label="room_address"
                value={room_address}
                onChange={(e) => setRoom_Address(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Label>Max Capacity</Form.Label>
            <Form.Group controlId="max_capacity">
              <Form.Control
                type="text"
                label="max_capacity"
                value={max_capacity}
                onChange={(e) => setMax_Capacity(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Label>Is Occupied? </Form.Label>
            <Form.Group controlId="isOccupied">
              <Form.Check
                type="checkbox"
                label="Is Occupied"
                checked={isOccupied}
                onChange={(e) => setIsOccupied(e.target.checked)}
              ></Form.Check>
            </Form.Group>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </div>
  );
}

export default RenterEditScreen;

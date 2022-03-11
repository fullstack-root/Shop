import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Table, Col, Row, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "../../Loader";
import Message from "../../Message";
import { listRenters } from "../../../actions/apartmentActions";

const RentersScreen = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const renterList = useSelector((state) => state.renterList);
  const { error, loading, renter } = renterList;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listRenters());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <div>
      <h1> Renters </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col>
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>Renter Name</th>
                  <th>Renter ID</th>
                  <th>Renter Email</th>
                  <th>Renter Phone</th>
                  <th>Renter Number</th>
                  <th>Renter Address</th>
                  <th>Max Capacity</th>
                  <th>Is Booked? </th>
                </tr>
              </thead>
              <tbody>
                {renter.map((renter) => (
                  <tr key={renter.renter_name}>
                    <td>{renter.renter_name}</td>
                    <td>{renter.renter_id}</td>
                    <td>{renter.renter_email}</td>
                    <td>{renter.phone}</td>
                    <td>{renter.room_number}</td>
                    <td>{renter.room_address}</td>
                    <td>{renter.max_capacity}</td>
                    <td>
                      {!renter.isOccupied ? (
                        <LinkContainer
                          to={`/admin/apartment/renter/${renter.id}`}
                        >
                          <Button variant="success" className="w-100">
                            Book Room
                          </Button>
                        </LinkContainer>
                      ) : (
                        <LinkContainer
                          to={`/admin/apartment/renter/${renter.id}`}
                        >
                          <Button variant="danger" className="w-100">
                            Change Booking  
                          </Button>
                        </LinkContainer>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </div>
  );
};
export default RentersScreen;

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'

const SearchBox = () => {

  const [keyword, setKeyword] = useState('')

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if(keyword) {
        navigate(`/?keyword=${keyword}`)
    }else{
        navigate('/')
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex mb-1">
      <Form.Control
        type="text"
        name="q"
        className="mb-2"
        placeholder="Box Under Maintainance"
        onChange={(e) => setKeyword(e.target.value)}
      ></Form.Control>

      <Button type="submit" variant="primary" className="mb-2 rounded">
      <i className="fas fa-search"></i>
      </Button>
    </Form>
  );
};

export default SearchBox;

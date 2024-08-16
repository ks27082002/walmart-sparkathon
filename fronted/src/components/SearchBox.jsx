import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { searchProduct, clearSearch } from "../slices/searchProductSlice";
import "./SearchBox.css"; // Import custom CSS for additional styling

function SearchBox() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const searchProductHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(searchProduct(input));
    }
  };

  const clearSearchHandler = () => {
    dispatch(clearSearch());
    setInput("");
  };

  return (
    <Form onSubmit={searchProductHandler} className="d-flex search-box">
      <InputGroup>
        <Form.Control
          size="md" // Increased size for better accessibility
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search anything at Walmart..."
          className="search-input"
        />
        {input && (
          <Button
            type="button"
            variant="light"
            onClick={clearSearchHandler}
            className="clear-btn"
          >
            <FaTimes />
          </Button>
        )}
        <Button type="submit" variant="warning" className="search-btn">
          <FaSearch />
        </Button>
      </InputGroup>
    </Form>
  );
}

export default SearchBox;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Badge,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";
import SearchBox from "./SearchBox";
import "./Header.css"; // Import custom CSS
import { ReactComponent as WallmartIcon } from "../assets/wallmart-icon.svg"; // Import SVG as a React component

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
      toast.success("Logout successful");
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  const reorderItemsHandler = () => {
    // Handle reordering items logic here
    console.log("Reorder my items");
    // Redirect or perform any necessary actions
  };

  return (
    <Navbar
      bg="bright-blue"
      variant="dark"
      expand="md"
      collapseOnSelect
      className="fixed-top z-2 bright-blue-navbar"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="bright-yellow-text d-flex align-items-center">
            <WallmartIcon
              style={{ height: "30px", width: "auto" }}
              alt="Wall Mart"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto m-2 bright-yellow-text d-flex align-items-center">
            <SearchBox />
            <Button
              type="button"
              variant="light"
              onClick={reorderItemsHandler}
              className="reorder-btn ms-2"
            >
              <div className="reorder-text">
                Reorder <br /> My Items
              </div>
            </Button>
            <LinkContainer to="/cart">
              <Nav.Link>
                <FaShoppingCart style={{ marginRight: "5px" }} />
                Cart
                {cartItems.length > 0 && (
                  <Badge
                    pill
                    bg="warning"
                    style={{ marginLeft: "5px" }}
                    className="text-dark"
                  >
                    <strong>
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    </strong>
                  </Badge>
                )}
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown
                title={`Hello👋, ${userInfo.name}`}
                id="username"
                className="bright-yellow-text"
              >
                <LinkContainer to="/profile">
                  <NavDropdown.Item className="bright-yellow-text">
                    Profile
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item
                  onClick={logoutHandler}
                  className="bright-yellow-text"
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser style={{ marginRight: "5px" }} />
                  Sign In
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

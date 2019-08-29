import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../img/logo.png";
import { connect } from "react-redux";
import { logoutUser } from "../actions";

const Bar = styled.div`
width: 100%;
border-radius: 0;
display: flex;
justify-content: space-between;
align-items: center;
height: 70px;
background: rgba(0, 163, 255, 0.8);
padding: 0 20px;
align-content: space-between;
border: 1px solid rgba(0, 163, 255, 0.8);
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
`;

const H1 = styled.h1`
color: white;
text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  width: 275px;
  justify-content: space-between;
`;

function NavBar(props) {
  return (
    <Bar>
      <Link to="/welcome" style={{ textDecoration: "none" }}>
        <H1>HappilyEver</H1>
      </Link>
      <img style={{ width: "100px" }} src={Logo} alt={"HappilyEver Logo"} />
      <Nav>
        <Link to="/welcome" style={{ marginLeft: "10px", color: "white", textShadow: "1px 1px rgba(0, 0, 0, 0.5)", textDecoration: "none" }}>
          Welcome
        </Link>
        <Link to="/add" style={{ marginLeft: "10px", color: "white", textShadow: "1px 1px rgba(0, 0, 0, 0.5)", textDecoration: "none"  }}>
          Add a Wedding
        </Link>
        <Link to="/weddings" style={{ marginLeft: "10px", color: "white", textShadow: "1px 1px rgba(0, 0, 0, 0.5)", textDecoration: "none"  }}>
          View Weddings
        </Link>
        <Link to="/" style={{ marginLeft: "10px", color: "white", textShadow: "1px 1px rgba(0, 0, 0, 0.5)", textDecoration: "none"  }}>
          About Us
        </Link>
        {props.isLogged ? (
          <Link
            onClick={props.logoutUser}
            to="/login"
            style={{ marginLeft: "10px", color: "white", textShadow: "1px 1px rgba(0, 0, 0, 0.5)", textDecoration: "none"  }}
          >
            Logout
          </Link>
        ) : (
          <Link to="/login" style={{ marginLeft: "10px", color: "white", textShadow: "1px 1px rgba(0, 0, 0, 0.5)", textDecoration: "none"  }}>
            Login
          </Link>
        )}
      </Nav>
    </Bar>
  );
}

const mapStateToProps = state => {
  console.log(state);

  return {
    isLogged: state.loginReducer.isLogged
  };
};

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavBar);

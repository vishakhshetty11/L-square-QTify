import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Logo from "./Logo";
import Search from "./Search";
import "./Header.css";

function Header({ searchData }) {
  return (
    <nav className="navbar">
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button className="feedbackButton" >Give Feedback</Button>
    </nav>
  );
}

export default Header;

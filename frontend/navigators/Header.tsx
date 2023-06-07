import PropTypes from "prop-types";
import React from "react";
import { Appbar } from "react-native-paper";

const Header = ({ title }) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

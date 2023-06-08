import PropTypes from "prop-types";
import React from "react";
import { Appbar, Text } from "react-native-paper";
import AppbarContent from "react-native-paper/lib/typescript/src/components/Appbar/AppbarContent";

const Header = ({ title }) => {
  return (
    <Appbar.Header style={{ backgroundColor: "black", marginTop: 0 }}>
      <Appbar.BackAction onPress={() => {}} color="white"/>
      <Appbar.Content title={title} color="white" />
    </Appbar.Header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

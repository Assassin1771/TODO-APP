import React from "react";
import { Box, Heading, IconButton } from "@chakra-ui/react";
// import { FaSun } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Box display="flex" p={6}>
        <Heading
          bgGradient="linear(to-l,red.500,yellow.200,pink.300)"
          bgClip="text"
        >
          TODO APP
        </Heading>
      </Box>
    </div>
  );
};

export default Header;

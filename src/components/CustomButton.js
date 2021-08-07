import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomButton = ({ icon, color, submitHandler, type }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <StyledButton
      onClick={() => {
        submitHandler(type);
      }}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => {
        setIsMouseOver(false);
      }}
    >
      <StyledBackground
        initial={{ scale: 1, rotate: 0 }}
        animate={{ scale: isMouseOver ? 1.2 : 1, rotate: isMouseOver ? 90 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ backgroundColor: color }}
      />
      <IconSpace>
        <StyledIcon
          icon={icon}
          style={{ fontSize: isMouseOver ? "40px" : "30px" }}
        />
      </IconSpace>
    </StyledButton>
  );
};

const StyledButton = styled(motion.div)`
  display: inline-block;
  position: relative;
  width: 70px;
  height: 70px;
  cursor: pointer;
`;

const StyledBackground = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  border-radius: 20%;
`;

const IconSpace = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  visibility: visible;

  svg {
    font-size: 30px;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  transition: all 0.3s ease;
`;

export default CustomButton;

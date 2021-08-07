import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  faCheckCircle,
  faQuestionCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

import { addGuest, getSpecificGuest, updateGuest } from "../utils/Firebase";
import CustomButton from "./CustomButton";

const Header = ({ fetchData }) => {
  const [inputText, setInputText] = useState("");
  const [guestId, setGuestId] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const guestId = localStorage.getItem("guestId");
      if (guestId !== null) {
        let guest = await (await getSpecificGuest(guestId)).data();

        setGuestId(guestId);
        setInputText(guest.name);
      }
    };
    checkUser();
  }, []);

  const submitHandler = async (answer) => {
    if (inputText === "") {
      alert("Nie testuj strony tylko się wpisz :|");
      return;
    }

    if (guestId !== null) {
      await updateGuest(guestId, inputText, answer);
    } else {
      const id = uuidv4();
      await addGuest(id, inputText, answer);
      localStorage.setItem("guestId", id);
      setGuestId(id);
    }

    await fetchData();
  };

  return (
    <Jumbo>
      <h1>Wbijasz wariacie?</h1>
      <h2>Podpisz się tutaj</h2>
      <input
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <ButtonSpace>
        <CustomButton
          icon={faCheckCircle}
          color="#47954e"
          submitHandler={submitHandler}
          type="yes"
        />
        <CustomButton
          icon={faQuestionCircle}
          color="#B89152"
          submitHandler={submitHandler}
          type="maybe"
        />
        <CustomButton
          icon={faTimesCircle}
          color="#9E2C26"
          submitHandler={submitHandler}
          type="no"
        />
      </ButtonSpace>
    </Jumbo>
  );
};

const Jumbo = styled.div`
  margin-bottom: 1rem;

  h1 {
    font-size: 5rem;
    font-family: "Dancing Script", cursive;
    margin-bottom: 2rem;
  }

  input {
    width: 40%;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 2rem;

    @media screen and (max-width: 700px) {
      width: 70%;
    }
  }
`;

const ButtonSpace = styled.div`
  position: relative;
  margin: 0.8rem 0;
  left: 35%;
  width: 30%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 700px) {
    left: 20%;
    width: 60%;
  }
`;

export default Header;

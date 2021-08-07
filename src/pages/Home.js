import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Header from "../components/Header";
import GuestList from "../components/GuestList";
import { getGuests } from "../utils/Firebase";

const Home = () => {
  const [guests, setGuests] = useState([]);

  const fetchData = async () => {
    const guestsData = await getGuests();

    let guestsArray = [];

    guestsData.forEach((doc) => {
      guestsArray.push(doc.data());
    });
    setGuests(guestsArray);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <HomePage>
      <Header fetchData={fetchData} />
      <Description>
        <h4>
          Ogólnie na ten moment plan taki, że (21.08) robimy grilla nad Starą
          Odrą, a potem wbijamy na mieszkanko na gierki. Trochę prowiantu
          zapewnię, ale polecam sobie ogarnąć co tam chcesz ;)
        </h4>
        <h4>
          Zapewniam też nocleg każdemu kto potrzebuje, ale polecam wziąć coś na
          czym będziesz spać.
        </h4>
      </Description>
      <ListSpace
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <GuestList
          inviteeAnswer="yes"
          title="Oni będą :D"
          guests={guests.filter((g) => g.answer === "yes")}
        />
        <GuestList
          inviteeAnswer="maybe"
          title="Oni może będą :l"
          guests={guests.filter((g) => g.answer === "maybe")}
        />
        <GuestList
          inviteeAnswer="no"
          title="Ich nie będzie D:"
          guests={guests.filter((g) => g.answer === "no")}
        />
      </ListSpace>
    </HomePage>
  );
};

const HomePage = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  max-width: 1500px;

  h2 {
    margin-bottom: 0.7rem;
  }
`;

const ListSpace = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Description = styled.div`
  width: 55%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 3rem;

  h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }
`;

export default Home;

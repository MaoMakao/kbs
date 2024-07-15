import React from "react";
import styled from "styled-components";
import ServiceBlock from "./ServiceBlock";
import { services } from "./services";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;


const Main: React.FC = () => {
  const handleServiceClick = (serviceId: number) => {
    // Логика перенаправления на страницу записи на урок
    console.log(`Redirect to booking page for service with id ${serviceId}`);
  };

  return (
    <HomePageContainer>
      {services.map((service) => (
        <ServiceBlock
          key={service.id}
          title={service.title}
          description={service.description}
          onClick={() => handleServiceClick(service.id)}
        />
      ))}
    </HomePageContainer>
  );
};

export default Main;

import React from "react";
import styled from "styled-components";

interface ServiceBlockProps {
  title: string;
  description: string;
  onClick: () => void;
}

const ServiceBlockContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
`;

const ServiceBlock: React.FC<ServiceBlockProps> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <ServiceBlockContainer onClick={onClick}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ServiceBlockContainer>
  );
};

export default ServiceBlock;

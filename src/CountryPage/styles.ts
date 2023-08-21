import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: 100%;

  min-height: 100vh;

  background-color: ${(props) => props.theme.colors.backgroundColor};
`;

export const Header = styled.div`
  padding: 2rem 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.elementColor};
`;

export const Top = styled.div`
  padding: 2rem 10rem;

  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 800;

  color: ${(props) => props.theme.colors.textColor};
`;

export const Button = styled.button`
  padding: 1rem;

  width: 125px;

  font-size: 1.4rem;
  font-weight: 600;

  background-color: ${(props) => props.theme.colors.elementColor};
  color: ${(props) => props.theme.colors.textColor};

  border: none;
  border-radius: 0.5rem;

  cursor: pointer;

  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.textColor};
    color: ${(props) => props.theme.colors.backgroundColor};
  }

  span {
    font-size: 1.4rem;
    margin-right: 0.8rem;
  }
`;

export const CountryCard = styled.div`
  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: none;
  border-radius: 0.5rem;

  background-color: ${(props) => props.theme.colors.elementColor};
`;

export const CardContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 2rem;
`;

export const CardImg = styled.img`
  width: 100%;
  max-height: 300px;
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const CardTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 800;

  padding: 0.6rem 0;

  color: ${(props) => props.theme.colors.textColor};
`;

export const CardInfo = styled.p`
  font-size: 1.4rem;

  font-weight: 600;

  color: ${(props) => props.theme.colors.textColor};

  opacity: 0.8;

  span {
    font-size: 1.4rem;
    font-weight: 300;
  }
`;

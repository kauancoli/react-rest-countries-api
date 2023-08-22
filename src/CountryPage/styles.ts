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

  a {
    text-decoration: none;
  }
`;

export const CountryCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3rem 10rem;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;

  max-width: 1000px;
  max-height: 650px;
`;

export const CardInfo = styled.div`
  color: ${(props) => props.theme.colors.textColor};

  max-width: 350px;

  div {
    font-size: 1.4rem;

    font-weight: 600;
  }

  span {
    font-size: 1.4rem;
    font-weight: 300;
  }
`;

export const CardTitle = styled.p`
  font-size: 4rem;
  font-weight: 800;

  padding: 0.6rem 0;

  color: ${(props) => props.theme.colors.textColor};
`;

export const CardText = styled.p`
  font-size: 1.4rem;
  font-weight: 600;

  padding: 0.6rem 0;

  color: ${(props) => props.theme.colors.textColor};

  button {
    padding: 0.5rem;

    width: 50px;

    margin-left: 1rem;
    margin-top: 1rem;

    font-size: 1.4rem;
    font-weight: 600;

    background-color: ${(props) => props.theme.colors.elementColor};
    color: ${(props) => props.theme.colors.textColor};

    border: none;
    border-radius: 0.5rem;

    user-select: none;
  }
`;

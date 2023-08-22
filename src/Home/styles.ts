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

export const Filter = styled.div`
  padding: 2rem 10rem;

  display: flex;
  justify-content: space-between;
`;

export const CountryList = styled.div`
  padding: 2rem 4rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 4rem;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 800;

  color: ${(props) => props.theme.colors.textColor};
`;

export const Button = styled.button`
  padding: 1rem;

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
`;

export const Select = styled.select`
  padding: 1rem;

  width: 220px;

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

  option {
    font-size: 1.4rem;
    font-weight: 300;
  }
`;

export const Input = styled.input`
  padding: 1rem;

  width: 550px;

  font-size: 1.4rem;
  font-weight: 600;

  background-color: ${(props) => props.theme.colors.elementColor};
  color: ${(props) => props.theme.colors.textColor};

  border: none;
  border-radius: 0.5rem;

  transition: background-color 0.3s ease, color 0.3s ease;

  &:focus {
    background-color: ${(props) => props.theme.colors.textColor};
    color: ${(props) => props.theme.colors.backgroundColor};
  }

  @media (max-width: 1000px) {
    width: 400px;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const CountryCard = styled.div`
  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: none;
  border-radius: 0.5rem;

  cursor: pointer;

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

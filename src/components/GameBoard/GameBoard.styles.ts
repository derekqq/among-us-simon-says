import styled from 'styled-components';

export const Button = styled.div`
  font-size: 3.2rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border: 2.5px solid #ffffff;
  border-radius: 5px;
  background: transparent;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  max-width: 200px;
  align-self: flex-end;
`;

export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  aligin-items: center;
`;

export const Wrapper = styled(Container)`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

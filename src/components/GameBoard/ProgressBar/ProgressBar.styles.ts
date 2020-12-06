import styled from 'styled-components';

export const ProgressGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 0px 5px;
  grid-template-areas:
    '. . . . .'
    '. . . . .';
`;

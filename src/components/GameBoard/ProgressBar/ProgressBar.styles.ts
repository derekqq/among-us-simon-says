import styled from 'styled-components';

export const ProgressGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 50px;
  gap: 5px 15px;
  grid-template-areas:
    '. . . . .'
    '. . . . .';
`;

export const ProgressItem = styled.div<{ active: boolean }>`
  background: ${(props) =>
    props.active
      ? 'radial-gradient(circle, rgba(152,152,152,1) 1%, rgba(0,0,0,1) 79%)'
      : 'radial-gradient(circle, rgba(9, 189, 45, 1) 1%, rgba(0, 0, 0, 1) 70%)'};
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

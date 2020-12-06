import styled from 'styled-components';

export const BoxContainer = styled.div`
  max-width: 350px;
  width: 100%;
  background: #a4a3a3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  box-shadow: 0px 0px 10px 14px rgba(0, 0, 0, 0.75);
  margin-top: 30px;

  height: 350px;
`;

export const ScreenGrid = styled.div`
  padding: 3px;
  background: #000;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 50px;
  gap: 3px 3px;
  grid-template-areas:
    '. . . . '
    '. . . . '
    '. . . . '
    '. . . . ';
`;

export const ScreenItem = styled.div<{ active: boolean | undefined }>`
  background: #000;
  width: 50px;
  height: 50px;
`;

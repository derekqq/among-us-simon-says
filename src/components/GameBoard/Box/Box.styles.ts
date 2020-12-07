import styled from 'styled-components';

export const BoxContainer = styled.div`
  max-width: 300px;
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

export const KeyboardGrid = styled(ScreenGrid)<{ active: boolean | undefined }>`
  pointer-events: ${(props) => (props.active ? 'auto' : 'none')};
  background: transparent;
  gap: 5px 5px;
`;

export const KeyboardItem = styled.div`
  background-image: radial-gradient(circle farthest-corner at 10% 20%, gray 0%, rgb(5, 5, 5) 82.8%);
  border: 1px solid black;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

export const WinnerWrapper = styled.div`
  background: #000;
  border: 3px solid #ffffff;
  padding: 5rem;
  margin-top: 2rem;
`;

export const WinnerHeader = styled.p`
  font-size: 10rem;
  font-weight: bold;
`;

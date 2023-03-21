import styled from "styled-components";

const StyledButton = styled.button`
  height: 40px;
  width: 200px;
  border-radius: 10px;
  border: none;
  background-color: ${({ isOn, isReset }) =>
    isOn ? "red" : isReset ? "pink" : "green"};
  
  margin-top: ${({ isReset }) => (isReset ? "30px" : "10px")};
`;

export default StyledButton;    
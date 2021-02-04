import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
import "../styles/Toggler.scss"

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: none;
  color: ${({ theme }) => theme.buttonText};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  width: 120px;
  height: 50px;
  }
`;

const Toggle = ({theme,  toggleTheme }) => {
    return (
      <span className="topSpan">
        <Button className="toggler" onClick={toggleTheme} >
          Switch Theme
        </Button>
      </span>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
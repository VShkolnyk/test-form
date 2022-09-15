import React from 'react';
import styled from 'styled-components'

interface ButtonProps {
  background?: string;
  color?: string;
  children: string;
  onClick?: any;
  disabled?: boolean;
}

const StyledButtons = styled.button`
  background: ${(props: ButtonProps) => props.disabled ? '#B2B2B2' : props.background || '#3E71F4'};
  color: ${(props: ButtonProps) => props.color || '#3E71F4'};
  border-radius: 25px;
  margin-top: 20px;
  padding: 10px 20px;
  border: ${(props: ButtonProps) => props.disabled ? '2px solid #B2B2B2' : '2px solid #3E71F4'};
  cursor: pointer;
`

const Buttons = (props: ButtonProps) => {
  return <StyledButtons {...props}/>
};

export default Buttons;

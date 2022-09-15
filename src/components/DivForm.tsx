import React from 'react';
import styled from 'styled-components'

interface FormDivProps {
  height?: string;
}

const StyledDivForm = styled.div`
  background: white;
  border-radius: 15px;
  max-width: 50%;
  min-width: 300px;
  width: 600px;
  height: ${({height}: FormDivProps) => height || '40vh'};
  box-shadow: 3px 3px 25px #b7b4b4;
  margin: 10px;
  padding: 20px;
`

const DivForm = (props: any) => {
  return <StyledDivForm {...props}/>
};

export default DivForm;

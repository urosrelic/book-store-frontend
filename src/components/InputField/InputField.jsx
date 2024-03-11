/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const customInputFieldStyles = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '15px',
};

const defaultInputStyles = {
  width: '100%',
  fontSize: '1rem',
  textColor: '#fff',
  padding: '20px',
  background: 'transparent',
  borderColor: '#17242a',
};

const defaultLabelStyles = {
  width: '100%',
  fontSize: '1rem',
  textColor: '#fff',
  padding: '0 5px',
  background: 'transparent',
};

const InputGroup = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: ${({ styles }) => styles?.inputWidth || defaultInputStyles.width};
  font-size: ${({ styles }) =>
    styles?.inputFontSize || defaultInputStyles.fontSize};
  color: ${({ styles }) =>
    styles?.inputTextColor || defaultInputStyles.textColor};
  padding: ${({ styles }) =>
    styles?.inputPadding || defaultInputStyles.padding};
  background: ${({ styles }) =>
    styles?.inputBgColor || defaultInputStyles.background};
  border: 1.2px solid
    ${({ styles }) =>
      styles?.inputBorderColor || defaultInputStyles.borderColor};
  outline: none;
  border-radius: 5px;

  &:focus ~ label,
  &.has-value ~ label {
    top: 0;
    font-size: ${({ styles }) =>
      styles?.fontSize ? `calc(${styles.fontSize} * 0.8)` : '0.8rem'};
    background: #3aafa9;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: ${({ styles }) =>
    styles?.labelFontSize || defaultLabelStyles.fontSize};
  padding: ${({ styles }) =>
    styles?.labelPadding || defaultLabelStyles.padding};
  pointer-events: none;
  transition: 0.3s;
  background: ${({ styles }) =>
    styles?.labelBackground || defaultLabelStyles.background};
`;

const ErrorDiv = styled.label`
  margin-top: 10px;
  color: red;
`;

export const InputField = ({
  id,
  labelName,
  name,
  type,
  value,
  required,
  onChange,
  // styles // TODO ADD STYLES PROP
  errorMessage,
}) => {
  const handleInputChange = (e) => {
    onChange(e);
  };

  return (
    <div className='custom-input-field' style={customInputFieldStyles}>
      <InputGroup>
        <StyledInput
          id={id}
          name={name}
          type={type}
          value={value}
          data-1p-ignore
          onChange={handleInputChange}
          required={required}
          className={value ? 'has-value' : ''}
        />
        <StyledLabel htmlFor={id}>{labelName}</StyledLabel>
      </InputGroup>
      {errorMessage && <ErrorDiv> {errorMessage}</ErrorDiv>}
    </div>
  );
};

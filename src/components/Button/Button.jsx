import styled from 'styled-components';

const defaultButtonStyles = {
  width: '100%',
  height: '50px',
  padding: '0 5px',
  fontSize: '1rem',
  textColor: '#fff',
  background: '#17242a',
  outline: 'none',
  border: 'none',
  borderRadius: '5px',
};

const defaultHoverEffects = {
  hoverBackground: '#101a1f',
  hoverTextColor: '#3aafa9',
};

const ButtonDiv = styled.div`
  width: ${({ styles }) => styles?.width || defaultButtonStyles.width};
  height: ${({ styles }) => styles?.height || defaultButtonStyles.height};
  padding: ${({ styles }) => styles?.padding || defaultButtonStyles.padding};
  font-size: ${({ styles }) =>
    styles?.fontSize || defaultButtonStyles.fontSize};
  color: ${({ styles }) => styles?.textColor || defaultButtonStyles.textColor};
  background: ${({ styles }) =>
    styles?.background || defaultButtonStyles?.background};
  outline: ${({ styles }) => styles?.outline || defaultButtonStyles.outline};
  border: ${({ styles }) => styles?.border || defaultButtonStyles.border};
  border-radius: ${({ styles }) =>
    styles?.borderRadius || defaultButtonStyles.borderRadius};
  transition: background 0.3s, color 0.3s; /* Add transition for a smooth hover effect */

  &:hover {
    background: ${({ styles }) =>
      styles?.hoverBackground || defaultHoverEffects.hoverBackground};
    color: ${({ styles }) =>
      styles?.hoverTextColor || defaultHoverEffects.hoverTextColor};
  }
`;

export const Button = ({ type, styles, children, onClick }) => {
  return (
    <ButtonDiv as='button' type={type} styles={styles} onClick={onClick}>
      {children}
    </ButtonDiv>
  );
};

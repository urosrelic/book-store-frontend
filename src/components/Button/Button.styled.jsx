import styled from 'styled-components';

const defaultButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '50px',
  padding: '0 5px',
  fontSize: '1rem',
  textColor: '#fff',
  background: '#17242a',
  outline: 'none',
  border: 'none',
  borderRadius: '5px',
  childrenMarginLeft: '5px',
  childrenMarginRight: '5px',
};

const defaultHoverEffects = {
  hoverBackground: '#101a1f',
  hoverTextColor: '#3aafa9',
};

const ButtonDiv = styled.div`
  display: ${({ styles }) => styles?.display || defaultButtonStyles.display};
  align-items: ${({ styles }) =>
    styles?.alignItems || defaultButtonStyles.alignItems};
  justify-content: ${({ styles }) =>
    styles?.justifyContent || defaultButtonStyles.justifyContent};
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
  cursor: pointer;
  transition: background 0.3s, color 0.3s; /* Add transition for a smooth hover effect */

  &:hover {
    background: ${({ styles }) =>
      styles?.hoverBackground || defaultHoverEffects.hoverBackground};
    color: ${({ styles }) =>
      styles?.hoverTextColor || defaultHoverEffects.hoverTextColor};
  }

  /* Apply styles to all children */
  & > * {
    margin-left: ${({ styles }) =>
      styles?.childrenMarginLeft || defaultButtonStyles.childrenMarginLeft};
    margin-right: ${({ styles }) =>
      styles?.childrenMarginRight || defaultButtonStyles.childrenMarginRight};
  }
`;

export const Button = ({ type, styles, children, onClick }) => {
  return (
    <ButtonDiv as='button' type={type} styles={styles} onClick={onClick}>
      {children}
    </ButtonDiv>
  );
};

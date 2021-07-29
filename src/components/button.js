import styled from 'styled-components'

const StyledButton = styled.button`
  cursor: pointer;
  display: inline-block;
  min-height: 20px;
  outline: 0;
  vertical-align: baseline;
  margin: 0 0.25em 0 0;
  text-transform: none;
  text-shadow: none;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  user-select: none;
  line-height: 1.5715;
  position: relative;
  font-weight: 400;
  white-space: nowrap;
  border: 1px solid transparent;
  box-shadow: 0 2px #00000004;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryText};
`

function Button({ variant, children, ...buttonProps }) {
  return (
    <StyledButton variant={variant} {...buttonProps}>
      {children}
    </StyledButton>
  )
}

export { Button }

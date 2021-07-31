import { forwardRef } from 'react'
import { css } from '@emotion/react'
import { darken, rem } from 'polished'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'

const baseStyle = ({ theme }) => {
  const transition = theme.transitions.standard

  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
    margin: 0;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    border-style: solid;
    border-radius: ${rem(10)};
    padding: 8px 12px;
    box-sizing: border-box;
    font-size: ${rem(14)};
    transition: opacity ${transition}ms, color ${transition}ms,
      background-color ${transition}ms, border-color ${transition}ms;
  `
}

const buttonVariants = [
  'primary',
  'secondary',
  'tertiary',
  'error',
  'warning',
  'success',
]

const variantStyle = ({ variant, theme }) => {
  const colors = buttonVariants.includes(variant)
    ? theme.colors[variant]
    : {
        background: theme.colors.gray[200],
        text: theme.colors.body.text,
      }

  return css`
    border: 1px solid ${colors.background};
    background-color: ${colors.background};
    color: ${colors.text};

    :hover {
      border: 1px solid ${darken(0.1, colors.background)};
      background-color: ${darken(0.1, colors.background)};
    }

    :active {
      border: 1px solid ${darken(0.2, colors.background)};
      background-color: ${darken(0.2, colors.background)};
    }
  `
}

const sizeStyle = ({ size, theme }) => {
  if (size === 'large') {
    return css`
      padding: 12px 18px;
      font-size: ${rem(15)};
    `
  }

  if (size === 'small') {
    return css`
      padding: 4px 10px;
      font-size: ${rem(13)};
    `
  }
}

const blockStyle = ({ block }) => {
  return (
    block &&
    css`
      width: 100%;
    `
  )
}

const StyledButton = styled('button', {
  shouldForwardProp: (prop) => isPropValid(prop),
})(baseStyle, variantStyle, sizeStyle, blockStyle)

const Button = forwardRef(
  (
    { type = 'button', variant, block = false, size, children, ...props },
    ref,
  ) => {
    return (
      <StyledButton
        ref={ref}
        size={size}
        variant={variant}
        block={block ? 1 : 0}
        type={type}
        {...props}
      >
        {children}
      </StyledButton>
    )
  },
)

export { Button }

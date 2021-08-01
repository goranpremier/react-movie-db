import styled from '@emotion/styled'
import { css } from '@emotion/react'
import isPropValid from '@emotion/is-prop-valid'

const baseStyle = ({ theme }) => {
  return css`
      color: ${theme.colors.body.text}
      overflow-wrap: break-word;
    `
}

const sizeStyle = ({ as, theme }) => {
  const config = theme.typography[as]
  return (
    config &&
    css`
      font-family: ${config.fontFamily};
      font-size: ${config.fontSize};
      line-height: ${config.lineHeight};
      font-weight: ${config.fontWeight};
      letter-spacing: ${config.letterSpacing};
    `
  )
}

const italicStyle = ({ italic }) => {
  return (
    italic &&
    css`
      font-style: italic;
    `
  )
}

function Tag({ size: TagName, ...props }) {
  return <TagName {...props} />
}

const Typography = styled(Tag, {
  shouldForwardProp: (prop) => isPropValid(prop),
})(baseStyle, sizeStyle, italicStyle)

function H1(props) {
  return <Typography as="h1" {...props} />
}

function H2(props) {
  return <Typography as="h2" {...props} />
}

function H3(props) {
  return <Typography as="h3" {...props} />
}

function H4(props) {
  return <Typography as="h4" {...props} />
}

function H5(props) {
  return <Typography as="h5" {...props} />
}

function H6(props) {
  return <Typography as="h6" {...props} />
}

function P(props) {
  return <Typography as="p" {...props} />
}

export { H1, H2, H3, H4, H5, H6, P }

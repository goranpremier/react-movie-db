import styled from '@emotion/styled'

function parseValue(value, defaultValue) {
  if (!value) {
    value = defaultValue
  }

  if (typeof value === 'number') {
    return `${parseInt(value)}px`
  }

  return value
}

const getMaxWidth = (props) => {
  const maxWidth = parseValue(props.maxWidth, 1200)
  const gutter = getGutter(props)

  return `calc(${maxWidth} - ${gutter} - ${gutter})`
}

const getGutter = (props) => {
  return parseValue(props.gutter, 12)
}

const Container = styled.div`
  max-width: ${getMaxWidth};
  margin: 0 auto;
  padding: 0 ${getGutter};
`

export { Container }

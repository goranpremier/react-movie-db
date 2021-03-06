import '@reach/menu-button/styles.css'
import { css, Global, useTheme } from '@emotion/react'
import { defaultTheme } from './default'

function GlobalStyle() {
  const theme = useTheme()
  return (
    <Global
      styles={css`
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        menu,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        main,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font-family: ${theme.typography.fontFamily};
          vertical-align: baseline;
        }
        html,
        body {
          min-width: 100%;
          max-width: 100%;
        }
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        main,
        menu,
        nav,
        section {
          display: block;
        }
        *[hidden] {
          display: none;
        }
        body {
          line-height: 1;
          background: ${theme.colors.body.background};
          color: ${theme.colors.body.text};
          font-weight: ${theme.typography.fontWeightRegular};
          font-size: ${theme.typography.fontSize};
        }
        menu,
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        * {
          box-sizing: border-box;

          :focus {
            outline: none;
          }
        }
        .fixed-body {
          position: fixed;
          overflow-y: scroll;
          height: 100vh;
        }
      `}
    />
  )
}

export { defaultTheme, GlobalStyle }

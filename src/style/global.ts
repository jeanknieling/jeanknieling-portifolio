import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe, input, textarea,
h1, h2, h3, h4, h5, h6, hr, p, blockquote, button, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  box-sizing: border-box;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  text-decoration: none;
  border: none;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

html {
  /* 1rem = 16px (User Agent) = 100% (User Agent) */
  font-size: 62.5%; /* 10px */

  @media (max-width:600px) {

    font-size: 55%;
  }
}

body {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.6rem;
  color: white;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root {
  --blue-3: #021b79;
  --blue-2: #0444aa;
  --blue-1: #0575e6;
  --blue-0: #0055ff;
  
  --black-2: rgba(0,0,0,1);
  --black-1: rgba(0,0,0,0.5);
  --black-0: rgba(0,0,0,0.3);

  --gray: #333;
  
  --white: #f2f2f2; 
}
`;

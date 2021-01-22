// import React, { useState } from 'react';
// import { createGlobalStyle, ThemeProvider } from 'styled-components';


// import { styleReset } from 'react95';
// // pick a theme of your choice
// import { Themes } from '../pages-part/Themes'
// // original Windows95 font (optionally)
// import ms_sans_serif from "file-loader!react95/dist/fonts/ms_sans_serif.woff2";
// import ms_sans_serif_bold from "file-loader!react95/dist/fonts/ms_sans_serif_bold.woff2";
// import { AppStarer } from '../pages-part/AppStarer';
// import { AppWindow } from '../pages-part/AppWindow';

// const GlobalStyles = createGlobalStyle`
//   @font-face {
//     font-family: 'ms_sans_serif';
//     src: url('${ms_sans_serif}') format('woff2');
//     font-weight: 400;
//     font-style: normal
//   }
//   @font-face {
//     font-family: 'ms_sans_serif';
//     src: url('${ms_sans_serif_bold}') format('woff2');
//     font-weight: bold;
//     font-style: normal;
//   }
//   body {
//     font-family: 'ms_sans_serif';
// 	}
//   ${styleReset}
// `;

// export const App = () => {
// 	const [themeKey, setThemeKey] =	useState('original')

//   return (<div className="relative">
// 		<GlobalStyles />
// 		<ThemeProvider theme={Themes[themeKey]}>
// 			<AppStarer onProvdeThemeKey={setThemeKey}></AppStarer>
// 			<AppWindow></AppWindow>
// 		</ThemeProvider>
// 	</div>);
// };

// export default App

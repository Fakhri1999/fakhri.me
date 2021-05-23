import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Tisa Sans Pro';
        src: url('./fonts/tisa/TisaSansPro-Bold.eot');
        src: local('Tisa Sans Pro Bold'), local('TisaSansPro-Bold'),
            url('./fonts/tisa/fontsTisaSansPro-Bold.eot?#iefix') format('embedded-opentype'),
            url('./fonts/tisa/TisaSansPro-Bold.woff2') format('woff2'),
            url('./fonts/tisa/TisaSansPro-Bold.woff') format('woff'),
            url('./fonts/tisa/TisaSansPro-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
      }
      @font-face {
        font-family: 'Tisa Sans Pro Med';
        src: url('./fonts/tisa/TisaSansPro-MediumItalic.eot');
        src: local('Tisa Sans Pro Medium Italic'), local('TisaSansPro-MediumItalic'),
            url('./fonts/tisa/TisaSansPro-MediumItalic.eot?#iefix') format('embedded-opentype'),
            url('./fonts/tisa/TisaSansPro-MediumItalic.woff2') format('woff2'),
            url('./fonts/tisa/TisaSansPro-MediumItalic.woff') format('woff'),
            url('./fonts/tisa/TisaSansPro-MediumItalic.ttf') format('truetype');
        font-weight: 500;
        font-style: italic;
      }
      `}
  />
);

export default Fonts;

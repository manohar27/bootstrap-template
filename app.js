import ReactDomServer from 'react-dom/server';
import React from 'react';
import App from './src/index.js';

let getReactMarkUp = ReactDomServer.renderToString(<App />);

export default getReactMarkUp;

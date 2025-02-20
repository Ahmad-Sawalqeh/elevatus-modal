import React from 'react';
import { render } from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './app';

const Root = () => {
    return (
        <App />
    )
}

render(<Root />, document.getElementById("root"));
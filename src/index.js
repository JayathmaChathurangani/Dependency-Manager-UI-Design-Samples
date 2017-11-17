import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import './index.css';
import App from './App';
import ViewByProduct  from './Components/Views/ViewByProduct';
import ViewByLibrary  from './Components/Views/ViewByLib';
import Welcome  from './Components/Views/Welcome';

import registerServiceWorker from './registerServiceWorker';

const Root = () => (

    <Router history={hashHistory}>
      <Route path="/" component={App}>

        <IndexRoute component={Welcome} />
        <Route path="viewbyproduct" component={ViewByProduct} />
        <Route path="viewbylibrary" component={ViewByLibrary} />
      </Route>
    </Router>

)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import PolicyDoc from './components/PolicyDoc';
import FetchData from './components/FetchData';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/policy-doc' component={PolicyDoc} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>
);

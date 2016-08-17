import './styles/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './Component/AppHeader';
import AppNav from './Component/AppNav';
import DataProvider from './Data';
import ShopList from './Component/ShopList';

const App = () => (
    <div>
        <AppHeader
            leftIcon="search"
            rightText="登录"
            title={DataProvider.userLocation} />

        <AppNav foodEntry={DataProvider.foodEntry} />
        <ShopList shop={DataProvider.shop} />
    </div>
);

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
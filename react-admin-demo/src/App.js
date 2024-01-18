import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, Layout, MenuItemLink } from 'react-admin';
import { Route as RouterRoute } from 'react-router-dom'; // react-router-dom에서 Route import
import jsonServerProvider from 'ra-data-json-server';
import MyCustomPage from './page/MyCustomPage';
import SecondCustomPage from './page/SecondCustomPage'; // 두 번째 사용자 정의 페이지 추가
import ThirdCustomPage from './page/ThirdCustomPage'; // 세 번째 사용자 정의 페이지 추가

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const CustomMenu = ({ onMenuClick, logout }) => (
    <div>
        <MenuItemLink to="/my-custom-page" primaryText="My Custom Page" onClick={onMenuClick} />
        <MenuItemLink to="/second-custom-page" primaryText="Second Custom Page" onClick={onMenuClick} /> {/* 두 번째 메뉴 추가 */}
        <MenuItemLink to="/third-custom-page" primaryText="Third Custom Page" onClick={onMenuClick} /> {/* 세 번째 메뉴 추가 */}
        <MenuItemLink to="/users" primaryText="Users" onClick={onMenuClick} />
    </div>
);

const CustomLayout = (props) => <Layout {...props} menu={CustomMenu} />;

const App = () => (
    <Admin dataProvider={dataProvider} layout={CustomLayout}>
        <Resource name="users" list={ListGuesser} edit={EditGuesser} />
        <RouterRoute path="/my-custom-page" component={MyCustomPage} /> {/* react-router-dom의 Route 사용 */}
        <RouterRoute path="/second-custom-page" component={SecondCustomPage} /> {/* 두 번째 페이지 추가 */}
        <RouterRoute path="/third-custom-page" component={ThirdCustomPage} /> {/* 세 번째 페이지 추가 */}

    </Admin>
);

export default App;
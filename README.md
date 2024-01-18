# react-admin
react-admin을 활용한 프로젝트

# npm 버전 최신화
npm install -g npm@latest    
# 프로젝트 초기화
npx create-react-app react-admin-demo
cd react-admin-demo

# react- admin 설치
npm install react-admin

# App.js 수정 start
import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
<Admin dataProvider={dataProvider}>
<Resource name="users" list={ListGuesser} edit={EditGuesser} />
</Admin>
);

export default App;
# App.js 수정 end 

# error 발생   Module not found: Error: Can't resolve 'ra-data-json-server' in 'C:\Users\kkb57\IdeaProjects\react-admin\react-admin-demo\src'
npm install ra-data-json-server


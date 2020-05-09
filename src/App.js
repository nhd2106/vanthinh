import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import UserLayout from './layout/UserLayout';
import HomePage from './layout/HomePage';
import DanhSachSanPham from './layout/DanhSachSanPham';
import ProductDetail from './layout/ProductDetail';


function App() {
  return (
    <div >
      <Switch>
        <UserLayout>
          <Switch>
            
          <Route path="/productList" component={DanhSachSanPham}/>
          <Route path="/productDetail" component={ProductDetail}/>
          <Route path="/" component={HomePage}/>
          </Switch>
        </UserLayout>
      </Switch>
    </div>
  );
}

export default App;

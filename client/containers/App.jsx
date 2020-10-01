import React from 'react';
import { Provider } from 'react-redux';
import Category from '../components/category'
import Product from '../components/product'
import store from '../store';

const App = (props) => {
    return (<Provider store={store}>
        <div className='container'>
            <Category preCat = {props.category}/>
            <Product  preProd = {props.products}/>
        </div>
    </Provider>
)}
export default App
import React from 'react';
import { Provider } from 'react-redux';
import Category from '../components/category'
import Product from '../components/product'
import store from '../store';
const App = () => (
    <Provider store={store}>
        <div className='container'>
            <Category/>
            <Product/>
        </div>
    </Provider>
)
export default App
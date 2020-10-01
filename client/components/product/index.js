import React, { useState,useEffect} from 'react';
import {connect} from 'react-redux';
import product_req from '../../actions/product';
import Prod from './card'
const Product = (props) => {
    const [pages,setPages] = useState([]);
    const {num_pages} = props;
    let page_t = []
    useEffect(()=>{
    let page_t=[]
    for(let i = 1; i <= num_pages; i++)
    {
        
        page_t.push(<button className={props.page_n==i-1?'page-prod btn selc':'page-prod btn'} onClick={()=>{
            props.page_selec(i-1);
            props.prod_req({id:props.selectedCategory,page:i-1,changeCat:false})
        }}>{i}</button>)   
    }
    setPages(page_t)
    },[props.num_pages])

    useEffect(()=>{
        props.prod_req({id:props.selectedCategory,page:0,changeCat:true});
    },[props.selectedCategory]);
    return (
    props.loading?<div className='text-center text-dark mt-5 dflex'><div className='spinner-border'></div><h3>Loading</h3></div>:(
    <div className='row mt-5'>
        {props.products.length?
        props.products.map(e=><Prod obj={e}/>):<div className='col-md-12 jumbotron bg-white text-muted text-center'><h4>No Products</h4></div>}
        {props.products.length?<div className='col-md-12 mb-5'> {pages}</div>:null}
    </div>)
    )
}
const mapStateToP = (state,ownProps) => {
    return ownProps.preProd?{state,products:ownProps.preProd}:state

}
const mapDispatchToP = (dispatch) => {
    return {
        page_selec : (page_n) => {
            dispatch(
                {
                    type:"PAGE_SELECT",
                    payload:page_n
                }
            )
        }
        ,
        prod_req : (id) => {
            dispatch(product_req(id))
        }
    }
}
export default connect(mapStateToP,mapDispatchToP)(Product);
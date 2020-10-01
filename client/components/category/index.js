import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import category_req from '../../actions/category';
import CatIco from './icon'
const Category = (props) => {
    const [flg,toggle] = useState(true);
    useEffect(()=>{
        props.categ_req();
    },[])
    return (
    <div className='row bg-cat text-light'>
        <div className='col-md-12 mb-2'>
        <h4 className='head-cat float-left mt-3 mb-3'>Categories</h4>
        <button onClick={()=>{toggle(!flg)}} className='tg-btn-cat float-right'>{flg?"SEE MORE":"SEE LESS"}</button>
        </div>
        {props.categories.slice(0,flg?4:props.categories.length).map(e=>(<CatIco obj={e}/>))}
    </div>
    )
}
const mapStateToP = (state,ownProps) => {
        return ownProps.preCat?{state,categories:ownProps.preCat}:state
}
const mapDispatchToP = (dispatch) => {
    return {
        categ_req : () => {
            dispatch(category_req())
        }
    }
}
export default connect(mapStateToP,mapDispatchToP)(Category);
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
const CatIc = (props) => {
    const {obj} = props;
    const colors = ["#1abc9c","#3498db","#e67e22","#2c3e50"];
    return (
        <div className='col-md-3 text-center' onClick={()=>{props.select_id(obj.id)}}>
            {obj.image!==''?
            <div className='img-cat'>
                <img width='100%' src={obj.image} alt={obj.name}/>
    </div>:<div className='avatar' style={{background:colors[Math.floor(obj.id%4)]}} >{obj.name[0]}</div>}
            <p className={props.selectedCategory===obj.id?'ctTxt selc':'ctTxt'}>{obj.name}</p>
        </div>
    )
}
const mapStateToP = (state) => {
    return state
}
const mapDispatchToP = (dispatch) => {
    return {
        select_id : (id) => {
            dispatch({
                type:"CAT_SELECT",
                payload:id
            })
        }
    }
}
export default connect(mapStateToP,mapDispatchToP)(CatIc);
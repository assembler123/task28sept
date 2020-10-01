import React, {useState} from 'react';
const Card = (props) => {
    const [priceIn,setPrice] = useState(0) ;
    const {mrp,selling_price} = props.obj.price_stock[priceIn];
    return (
    <div className='col-md-6 prod-card'>
    <div className='d-flex prod-space'>
    <div className='img-prod'>
        <img src={props.obj.image_url?props.obj.image_url:"https://via.placeholder.com/120"} width='auto'></img>
    </div>
    <div>
    <p className='prod-dname'>{props.obj.product_name} {mrp!==selling_price?<span className='badge badge-danger'>{Math.ceil((mrp-selling_price)/100)} % Off</span>:null}</p>
    {props.obj.price_stock.length>1?(<select style={{marginBottom:'1rem'}} className='custom-select-sm' onChange={e=>{
        setPrice(e.target.value)
    }}>
    {props.obj.price_stock.map((el,i)=><option value={i}>{el.name}</option>)}
    </select>):<p className='prod-var'>{props.obj.price_stock[0].name}</p>}
<p className='prod-price'>{mrp!==selling_price?<del className='text-muted'>&#8377;{mrp}</del>:null} <span style={{fontWeight:600,color:'#e74c3c'}}>&#8377;{selling_price}</span></p>
    </div>
    </div>
    </div>
    )
}
export default Card;
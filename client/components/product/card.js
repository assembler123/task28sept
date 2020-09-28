import React, {useState} from 'react';
const Card = (props) => {
    const [price,setPrice] = useState(props.obj.price_stock[0].mrp) 
    return (
    <div className='col-md-6 prod-card'>
    <div className='d-flex prod-space'>
    <div className='img-prod'>
        <img src={props.obj.image_url} width='auto'></img>
    </div>
    <div>
    <p className='prod-dname'>{props.obj.product_name}</p>
    {props.obj.price_stock.length>1?(<select style={{marginBottom:'1rem'}} className='custom-select-sm' onChange={e=>{
        setPrice(e.target.value)
    }}>
    {props.obj.price_stock.map(el=><option value={el.mrp}>{el.name}</option>)}
    </select>):<p className='prod-var'>{props.obj.price_stock[0].name}</p>}
    <p className='prod-price'>&#8377;{price}</p>
    </div>
    </div>
    </div>
    )
}
export default Card;
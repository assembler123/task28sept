import axios from 'axios';
const root_api = "https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&"
const prodrequest_init = (changeCat) => {
    return {
        type: 'PROD_INIT',
        payload: changeCat
    }
}
const prodrequest_failed = (err) => {
    return {
        type: 'PROD_FAILED',
        payload: err
    }
}

const prodrequest_success = (data) => {
    return {
        type: 'PROD_SUCCESS',
        payload: data
    }
}
const prodrequest = (params) => {
    return (dispatch) => {
        dispatch(prodrequest_init(params.changeCat))
        axios.get(root_api+'page='+params.page+'&category_id='+params.id).then(res => {
            return dispatch(prodrequest_success(res.data))
        }).catch(err => {
            return dispatch(prodrequest_failed(err.message.split(' ').pop()))
        })
    }
}
export default prodrequest;
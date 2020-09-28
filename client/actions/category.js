import axios from 'axios';
const root_api = "https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop"
const category_request_init = () => {
    return {
        type: 'CAT_INIT'
    }
}
const category_request_failed = (err) => {
    return {
        type: 'CAT_FAILED',
        payload: err
    }
}

const category_request_success = (data) => {
    return {
        type: 'CAT_SUCCESS',
        payload: data
    }
}
const category_request = (params) => {
    return (dispatch) => {
        dispatch(category_request_init())
        axios.get(root_api).then(res => {
            return dispatch(category_request_success(res.data.category))
        }).catch(err => {
            return dispatch(category_request_failed(err.message.split(' ').pop()))
        })
    }
}
export default category_request;
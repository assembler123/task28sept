const init = {
    categories:[],
    selectedCategory:0,
    products:[],
    num_pages:0,
    page_n:0,
    loading:false
}
const dataReducer=(state = init,action)=>{
    let st = Object.assign({},state);
    switch(action.type)
    {
        case "CAT_INIT":
            st.loading = true
            return st;
        case "PAGE_SELECT":
            st.page_n = action.payload;
            return st;
        case "CAT_SUCCESS":
            st.loading = true
            st.categories = action.payload;
            return st;
        case "CAT_FAILED":
            st.loading = false;
            st.err = action.payload
            return st;
        case "CAT_SELECT":
            st.selectedCategory = action.payload;
            return st;
        case "PROD_INIT":
            st.products = [];
            st.loading = true;
            st.num_pages = 0;
            if(action.payload)
            {
                st.page_n = 0;
            }
            return st;
        case "PROD_SUCCESS":
            st.products = action.payload.products;
            st.loading = false;
            st.num_pages = action.payload.num_pages;
            return st;
        case "PROD_FAILED":
            st.products = [];
            st.err = action.payload;
            return st;            
        default:
            return st;
    }
}
export default dataReducer;
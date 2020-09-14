import myTypes from './types'

const initialState = {
    loading : false , 
    articles : [] ,
    error : "",
    current_news_index: -1
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case myTypes.FETCH_ARTICLES_REQUEST: return{
            ...state,
            loading : true
        }

        case myTypes.FETCH_ARTICLES_SUSSESS: return{
            ...state, 
            loading : false, 
            articles : action.payload,
            error : ''
        }

        case myTypes.FETCH_ARTICLE_FAILURE: return{
            ...state , 
            loading : false, 
            error : action.payload
        }

        case myTypes.UPDATE_NEWS_CURRENT_INDE: 
        //console.log(state.current_news_index)
        return{
            ...state,
            current_news_index: action.payload
        }

        default: return state
    }
}

export default reducer
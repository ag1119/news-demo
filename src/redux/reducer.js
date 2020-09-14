import myTypes from './types'
import news_catagories from '../news_catagories'

const initialState = {
    loading : false , 
    articles : [] ,
    error : "",
    current_news_index: -1,
    news_catagory: news_catagories.BITCOIN
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

        case myTypes.UPDATE_NEWS_CURRENT_INDEX: return{
            ...state,
            current_news_index: action.payload
        }
        
        case myTypes.UPDATA_NEWS_ARTICLES: return{
            ...state,
            news_catagory: action.payload
        }

        default: return state
    }
}

export default reducer
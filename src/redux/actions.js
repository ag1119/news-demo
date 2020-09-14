import axios from 'axios'
import myTypes from './types'
import apis from '../apis'
import news_catagories from '../news_catagories'

const fetchArticlesRequest = () => {
    return{
        type : myTypes.FETCH_ARTICLES_REQUEST,
    }
}

const fetchArticlesSuccess = (articles) => {
    return{
        type : myTypes.FETCH_ARTICLES_SUSSESS,
        payload : articles
    }
} 

const fetchArticlesFailure = (error) => {
    return{
        type: myTypes.FETCH_ARTICLE_FAILURE,
        payload : error
    }
}

export const updateNewsCurrentIndex = (index) => {
    return{
        type: myTypes.UPDATE_NEWS_CURRENT_INDEX,
        payload: index
    }
}

export const updateNewsArticles = (catagory) => {
    return{
        type: myTypes.UPDATA_NEWS_ARTICLES,
        payload: catagory
    }
}

const fetchArticles = (catagory) => {
    return (dispatch) =>  {
            dispatch(fetchArticlesRequest());
            let api_url = ""
            switch(catagory){
                case news_catagories.BITCOIN:
                    api_url = apis.bitcoin_api;
                    break;
                case news_catagories.BUSINESS:
                    api_url = apis.business_api;
                    break;
                case news_catagories.TECH_CRUNCH:
                    api_url = apis.tech_crunch_api;
                    break;
                case news_catagories.WALL_STREET:
                    api_url = apis.wall_street_api;
                    break;
                default: api_url = apis.bitcoin_api
            }
            axios.get(api_url)
            .then(res => {
                const articles = res.data.articles;
                //console.log(articles)
                dispatch(fetchArticlesSuccess(articles))
                dispatch(updateNewsCurrentIndex(0))
            }).catch(error => {
                dispatch(fetchArticlesFailure(error.message))
            })
        }
}

export default fetchArticles;
import React from 'react'
import {connect} from 'react-redux'

function News(props) {
    return (
        props.index === -1 ? (<h2>Loading...</h2>) : 
        (<div className="News">
            <h1>{props.title}</h1>
            <img src={props.imageUrl} alt=""/>
            <p>{props.content}</p>
        </div>)
    )
}

const mapStateToProps = state => {
    const article = state.articles ? state.articles[state.current_news_index] : {}
    return{
        title: (article?article.title:""),
        imageUrl: (article?article.urlToImage:""),
        content: (article?article.content:""),
        index: state.current_news_index
    }
}
export default connect(mapStateToProps , null) (News)

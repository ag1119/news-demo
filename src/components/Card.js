import React, {useState} from 'react'
import {connect} from 'react-redux'
import {updateNewsCurrentIndex} from '../redux/actions'

function Card(props) {
    return (
        <div className = "List-item">
            <h3 onClick = {props.updateNewsCurrentIndex}>{props.article_title}</h3>
            <p>{props.article_desc}</p>
        </div>
    )
}

const mapStateToProps = (state , ownProps) => {
    const article = state.articles[ownProps.index]
    return{
        article_title: article.title,
        article_desc: article.description
    }
}

const mapDispatchToProps = (dispatch , ownProps) => {
    return{
        updateNewsCurrentIndex: () => dispatch(updateNewsCurrentIndex(ownProps.index))
    }
}

export default connect(mapStateToProps , mapDispatchToProps) (Card)

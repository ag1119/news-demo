import React,{useEffect} from 'react'
import fetchArticles from '../redux/actions'
import {connect} from 'react-redux'
import news_catagories from '../news_catagories'
import Card from './Card'

function Articles({data , fetchAllArticles}) {
    useEffect(() => {
        fetchAllArticles(news_catagories.BITCOIN)},[])
    return (
        data.loading ? 
        (<h2>Loading...</h2>) : 
        (data.articles.map( (article , index) => <Card index = {index}/> ))
    )
}

const mapStateToProps = state => {
    return{
        data: state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchAllArticles: (catagory) => dispatch(fetchArticles(catagory))
    }
}

export default connect(mapStateToProps , mapDispatchToProps) (Articles)

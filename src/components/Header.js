import React from 'react'
import {connect} from 'react-redux'
import {updateNewsArticles} from '../redux/actions'
import news_catagories from '../news_catagories'

function Header(props) {
    return (
    <header className="App-header">
        <h2 className=".h21">Daily </h2>
        <h2>Hunt</h2>
        <div className="News-categories">
          <span onClick = { () => props.updateNewsArticles(news_catagories.BITCOIN) }>Bitcoin</span>
          <span onClick = { () => props.updateNewsArticles(news_catagories.BUSINESS) }>Business</span>
          <span onClick = { () => props.updateNewsArticles(news_catagories.TECH_CRUNCH) }>Tech Crunch</span>
          <span onClick = { () => props.updateNewsArticles(news_catagories.WALL_STREET) }>Wall Street</span>
        </div>
    </header>
    )
}

const mapDispatchToprops = dispatch => {
  return{
    updateNewsArticles: (catagory) => dispatch(updateNewsArticles(catagory))
  }
}

export default connect(null , mapDispatchToprops) (Header)

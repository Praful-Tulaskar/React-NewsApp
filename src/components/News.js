import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  

  constructor() {
    super();
    console.log("hello i am constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    console.log("component did mount runs")
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=49b168c4eec64682bef06aa37066dfe6&page=1&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults
    })
  }

  handleClickPrevious = async() => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=49b168c4eec64682bef06aa37066dfe6&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles
    })

  }

  handleClickNext = async() => {
    console.log("next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=49b168c4eec64682bef06aa37066dfe6&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles
    })
  }
  }


  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h1>NewsDaily: Top Headlines</h1>
        <div className='row my-4'>
          {this.state.articles.map((element) => {
            return <div className='col-md-4 my-3' key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="d-grid gap-5 d-md-flex justify-content-md-between">
          <button disabled = {this.state.page <= 1}className="btn btn-dark me-md-2" type="button" onClick={this.handleClickPrevious}>Previous</button>
          <button className="btn btn-dark" type="button" onClick={this.handleClickNext}>Next</button>
        </div>
      </div>
    )
  }
}

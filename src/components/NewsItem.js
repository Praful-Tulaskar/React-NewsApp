import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl ? imageUrl : "https://www.livemint.com/lm-img/img/2023/05/29/600x338/EconomyPixabay_1683518454636_1685366660345.jpg"} className="card-img-top" alt="/" height={150}/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

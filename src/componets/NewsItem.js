import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt,channelName } = this.props;
    return (
      <div>
        <div className="card" >
          <img src={imageUrl} className="card-img-top" alt={title} />
          <div className="card-body">
        <span className="badge text-bg-danger my-2">{channelName}</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <br />
            <footer className="blockquote-footer">By <cite title="Source Title">{!author ? "Unknown" : author}</cite></footer>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more</a>
            <br />
            <small className="text-body-secondary">Last updated {new Date(publishedAt).toLocaleString()}</small>
          </div>
        </div>
      </div>
    )
  }
}


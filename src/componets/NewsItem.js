import React from 'react'

const NewsItems = (props) => {

    return (
      <div style={{marginTop:"50px"}}>
        <div className="card" >
          <img src={props.imageUrl} className="card-img-top" alt={props.title} />
          <div className="card-body">
        <span className="badge text-bg-danger my-2">{props.channelName}</span>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <br />
            <footer className="blockquote-footer">By <cite title="Source Title">{!props.author ? "Unknown" : props.author}</cite></footer>
            <a href={props.newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more</a>
            <br />
            <small className="text-body-secondary">Last updated {new Date(props.publishedAt).toLocaleString()}</small>
          </div>
        </div>
      </div>
    )
}

export default NewsItems
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export default class News extends Component {

  static defaultProps = {
    country: 'ua',
    pageSize: 20,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    }
  }
  async updateNews() {
    this.setState({ loading: true });
    try {
      // this.props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      const response = await fetch(url);
      this.props.setProgress(10);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const parsedData = await response.json();
      this.props.setProgress(50);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      });
      this.props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }
  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=1f48c0a282fd4ee393073eeb97467dcc&page=${nextPage}&pageSize=${this.props.pageSize}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const parsedData = await response.json();
      this.setState(prevState => ({
        articles: [...prevState.articles, ...parsedData.articles],
        totalResults: parsedData.totalResults,
        page: nextPage,
        loading: false,
      }));
    } catch (error) {
      console.error("Error fetching more news:", error);
      this.setState({ loading: false });
    }
  };

  render() {
    const { articles, totalResults } = this.state;

    return (
      <div className="container">
        <InfiniteScroll
          dataLength={articles.length}
          next={this.fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
          style={{ overflow: 'hidden' }}
        >
          <div className="row">
            {articles && articles.length > 0 ? (
              articles.filter(element => element.title && element.description && element.urlToImage).map((element) => (
                <div className="col-md-4 my-4" key={element.url}>
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} channelName={element.source.name} />
                </div>
              ))
            )
              : (
                <>
                <p>No articles found.</p>
                <Spinner/>
                </>
                
              )
            }
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}

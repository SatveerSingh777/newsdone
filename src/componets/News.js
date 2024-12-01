import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



const News = (props) =>{

  const [Articles, setArticles] = useState([])
  const [TotalResult, setTotalResult] = useState(0)
  const [Page, setPage] = useState(1)

  const updateNews =async ()=> {
    // setLoading(true);
    try {
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${Page}&pageSize=${props.pageSize}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      props.setProgress(50);
      const parsedData = await response.json();

      props.setProgress(100);
      setArticles( parsedData.articles);
      setTotalResult( parsedData.totalResults);


    } catch (error) {
      console.error("Error fetching news:", error);

    }
  }

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [])
  
  const fetchMoreData = async () => {
    const nextPage = Page + 1;
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=1f48c0a282fd4ee393073eeb97467dcc&page=${nextPage}&pageSize=${props.pageSize}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const parsedData = await response.json();

      setArticles([...Articles, ...parsedData.articles]);
      setTotalResult( parsedData.totalResults);
      setPage(nextPage)

    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };

    

    return (
      <div className="container">
        <InfiniteScroll
          dataLength={Articles.length}
          next={fetchMoreData}
          hasMore={Articles.length < TotalResult}
          loader={<Spinner />}
          style={{ overflow: 'hidden' }}
        >
          <div className="row">
            {Articles && Articles.length > 0 ? (
              Articles.filter(element => element.title && element.description && element.urlToImage).map((element) => (
                <div className="col-md-4 my-4" key={element.url}>
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} channelName={element.source.name} />
                </div>
              ))
            )
              : (
                <>
                <Spinner/>
                </>
                
              )
            }
          </div>
        </InfiniteScroll>
      </div>
    )
  }


News.defaultProps = {
  country: 'ua',
  pageSize: 20,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
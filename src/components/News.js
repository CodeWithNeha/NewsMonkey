import React, { useEffect, useState } from 'react'

import Spinner from './Spinner';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const  News = (props)=> {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResult, setTotalResult] = useState(0);
    const capital=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1)
    }
    const  updateNews = async()=>{
        props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
       setLoading(true);
        let data = await fetch(url); // fetch api
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(60);
        setArticles(parseData.articles);
        setTotalResult(parseData.totalResult);
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(() => {
     document.title= `${capital(props.category)} - NewsMonkey`;
      updateNews();
    }, []);
    
     const handleNext = async()=>{
        console.log("Next");
       setPage(page + 1);
       updateNews();
        
    }
    const handlePrevious= async()=>{
        console.log("Previous");
        setPage(page - 1);
        updateNews();
    }
    const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        let data = await fetch(url); // fetch api
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
        setTotalResult(parseData.totalResult);
    }
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{margin:'35px 0px', marginTop:'90px'}}>NewsMonkey - Top {capital(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResult}
          loader={<Spinner/>}
            >
                <div className="row">
                {articles.map((element)=>{
                    return(
                        <div className="col-md-4" key={element.url} >
                    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
                    )
                })}
                  
                </div>
                </InfiniteScroll>  
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={page<=1} type = "button" className="btn btn-dark" onClick={handlePrevious}> &larr; Previous</button>
                    <button  disabled={page>totalResults/props.pageSize} type = "button" className="btn btn-dark" onClick={handleNext}> Next &rarr;</button>
                </div> */}
            </div>
        )
    }
 News.defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News;

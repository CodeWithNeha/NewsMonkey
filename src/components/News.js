import React, { Component } from 'react'
import Spinner from './Spinner';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {

    static defaultProps={
        country:'in',
        pageSize:8,
        category:'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    } 
    constructor(){
        super();
        console.log("Hello Constructor News Component")
        this.state = {
            articles: [], 
            loading: true,
            page:1
        }
    }
    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2480341fde894b9388e6f9959ac8b7be&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({
            loading:true
        })
        let data = await fetch(url); // fetch api
        let parseData = await data.json();
        this.setState({articles: parseData.articles, totalResults: parseData.totalResults, loading: false})
    }
    async componentDidMount(){
        this.updateNews();
   }
     handleNext = async()=>{
        console.log("Next");
       this.setState({page: this.state.page + 1});
       this.updateNews();
        
    }
    handlePrevious= async()=>{
        console.log("Previous");
        this.setState({page: this.state.page - 1});
        this.updateNews();
    }
   
    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{margin:'35px 0px'}}>NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return(
                        <div className="col-md-4" key={element.url} >
                    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
                    )
                })}
                    
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type = "button" className="btn btn-dark" onClick={this.handlePrevious}> &larr; Previous</button>
                    <button  disabled={this.state.page>this.state.totalResults/this.props.pageSize} type = "button" className="btn btn-dark" onClick={this.handleNext}> Next &rarr;</button>
                </div>
            </div>
        )
    }
}
 

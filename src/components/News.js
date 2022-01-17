import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor(){
        super();
        console.log("Hello Constructor News Component")
        this.state = {
            articles: [], 
            loading: false,
            page:1,
            totalResults: 0
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2480341fde894b9388e6f9959ac8b7be&page=1&pageSize=20"
        let data = await fetch(url); // fetch api
        let parseData = await data.json();
        this.setState({articles: parseData.articles, totalResults: parseData.totalResults})

   }
     handleNext = async()=>{
        console.log("Next");
        if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2480341fde894b9388e6f9959ac8b7be&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url); // fetch api
        let parseData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles
        })
        }
        
    }
    handlePrevious= async()=>{
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2480341fde894b9388e6f9959ac8b7be&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url); // fetch api
        let parseData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles
        })
    }
   
    render() {
        return (
            <div className="container my-3">
                <h1>NewsMonkey - Top Headlines</h1>
              
                <div className="row">
                {this.state.articles.map((element)=>{
                    return(
                        <div className="col-md-4" key={element.url} >
                    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                    )
                })}
                    
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type = "button" className="btn btn-dark" onClick={this.handlePrevious}> &larr; Previous</button>
                    <button  disabled={this.state.page>this.state.totalResults/20} type = "button" className="btn btn-dark" onClick={this.handleNext}> Next &rarr;</button>
                </div>
            </div>
        )
    }
}
 

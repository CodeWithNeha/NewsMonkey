import { getByTitle } from '@testing-library/dom'
import React, { Component } from 'react'

export default class NewsItem extends Component {
  
    render() {
       let {title, description,imageUrl,newsUrl,author, date,source} = this.props;
        return (
            <div className="my-3">
              <div className="card">
                  <div style={{display:'flex',
                justifyContent:'flex-end',
                right: '0',
                position:'absolute'
                }}>
                  <span className="badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
                  </div>
                    <img src={!imageUrl?"https://c.ndtvimg.com/2022-01/shb79h9g_taliban-musical-instrument_625x300_16_January_22.jpg":imageUrl} className="card-img-top" alt="... "/>
                     <div className="card-body">
                        <h5 className="card-title">{title}
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                    </div>
            </div>
        )
    }
}

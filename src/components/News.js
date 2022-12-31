import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsApp - Top headlines</h2>
        <div className="row">
          <div className="col-md-3 mx-3">
            <NewsItem title="my title" description="my Description" imgUrl="https://images.wsj.net/im-589547/social"/>
          </div>
          <div className="col-md-3 mx-3">
            <NewsItem title="my title" description="my Description"/>
          </div>
          <div className="col-md-3 mx-3">
            <NewsItem title="my title" description="my Description"/>
          </div>
        </div>
      </div>
    )
  }
}

export default News

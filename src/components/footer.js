import React, { Component } from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          title: 'Cable TV Blackout in The Twelve Colonies',
          date: 'Tuesday, September 16 2014'
        },
        {
          title: 'Earth Appears Not to be Where it Was Before',
          date: 'Tuesday, September 16 2014'
        },
        {
          title: 'Cloud 9 Closed for Renovation',
          date: 'Tuesday, September 16 2014'
        }
      ],
      calendar: [
        {
          title: 'Caprican Bake Sale',
          date: 'Tuesday, September 16 2014'
        },
        {
          title: 'Annual Sixes and Eights Mixer',
          date: 'Tuesday, September 16 2014'
        },
        {
          title: '2015 Raptor Maintenance and Repair Conference',
          date: 'Tuesday, September 16 2014'
        }
      ]
    }
  }
  renderFooterItem(item) {
    return (
      <div className="news-entry">
        <h2 className="news-title"><a href="#">{item.title}</a></h2>
        <span className="news-date"><i className="icon-calendar"></i>{item.date}</span>
      </div>
    )
  }
  render() {
    return (
      <div className="footer container">
        <div className="col-sm-4">
          <h1>In The News</h1>
          {this.state.news.map((newsItem) => {
            return this.renderFooterItem(newsItem)
          })}
        </div>
        <div className="col-sm-4">
          <h1>Event Calendar</h1>
          {this.state.calendar.map((calendarItem) => {
            return this.renderFooterItem(calendarItem)
          })}
        </div>
        <div className="col-sm-4">
          <h1>So Say We All</h1>
          <img src="/public/images/footer.jpg" width="100%"/>
          <h2>When is it appropriate to high-five a commander?</h2>
        </div>
      </div>
    )
  }
}

import React from 'react'
import moment from 'moment'

export default function NewsDetail({ selectedNews }) {
    const loadDefaultImage = (e) => {
        e.target.src = '/placeholder.png'
    }

    const changeDateFormat = (date) => {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }

    return (
        <div className="news-content">
            <img className="focused-news"
                src={selectedNews.urlToImage || '/placeholder.png'}
                onError={loadDefaultImage}
            />
            <div className="news-text">
                <h4 className="news-title">{selectedNews.title}</h4>
                <p className="news-date">{changeDateFormat(selectedNews.publishedAt)}</p>
                <hr></hr>
                {selectedNews.description ?
                    <p className="news-description">{selectedNews.description}</p> :
                    <p className="no-description">Description Unavailable</p>
                }
                <a href={selectedNews.url} className="news-link">
                    View more...
            </a>
            </div>
        </div>
    )
}
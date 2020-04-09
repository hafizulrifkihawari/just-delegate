import React, { useState, useEffect } from 'react'
import ItemsCarousel from 'react-items-carousel';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'

import NewsDetail from './NewsDetail'

import '../assets/styles/carousel.css'

export default function Carousel({ news }) {
    const [selectedNews, setSelectedNews] = useState('')
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const handleOnDragStart = (e) => e.preventDefault()

    const selectNews = async (news, i) => {
        await setSelectedNews(news)
    }

    const loadDefaultImage = (e) => {
        e.target.src = '/placeholder.png'
    }

    useEffect(() => {
        setSelectedNews(news[0])
    }, [])

    return (
        <>
            <NewsDetail selectedNews={selectedNews} />
            <div className="carousel">
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={4}
                    gutter={20}
                    alwaysShowChevrons
                    infiniteLoop
                    rightChevron={
                        <RightCircleOutlined className="carousel-button" />
                    }
                    leftChevron={
                        <LeftCircleOutlined className="carousel-button" />
                    }
                    chevronWidth={50}
                >
                    {news.map((el, i) => {
                        return (
                            <div key={i}>
                                <img
                                    onError={loadDefaultImage}
                                    src={el.urlToImage || '/placeholder.png'}
                                    style={{ width: '100%', maxHeight: '150px', paddingRight: '10px' }}
                                    onDragStart={handleOnDragStart}
                                    onClick={() => selectNews(el, i)}
                                />
                                <p className="carousel-title">{el.title}</p>
                            </div>
                        )
                    })}
                </ItemsCarousel>
            </div>
        </>
    )
}
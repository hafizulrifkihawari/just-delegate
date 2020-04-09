import { shallow, configure } from "enzyme";
import React from "react";
import moment from 'moment'
import renderer from "react-test-renderer";

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Section from '../components/Section'
import Carousel from '../components/Carousel'
import NewsDetail from '../components/NewsDetail'

import ReactFullPage from '@fullpage/react-fullpage'
import ItemsCarousel from 'react-items-carousel';
import Link from "next/link";

const mockNews = [
    {
        "author": "Investor's Business Daily",
        "title": "Dow Jones Futures: Coronavirus Stock Market Rally Lacks Two Key Qualities; Analyzing Apple, Amazon, Microsoft, Nvidia - Investor's Business Daily",
        "description": "Dow Jones futures: The coronavirus stock market rally had a strong day, but growth stocks are lagging and breakouts lacking. Apple and Amazon are in focus.",
        "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-coronavirus-stock-market-rally-apple-amazon-microsoft-nvidia-analyzed/",
        "urlToImage": "https://www.investors.com/wp-content/uploads/2019/01/Stock-GrowthGreen-01-adobe.jpg",
        "publishedAt": "2020-04-09T04:24:41Z",
        "content": "Dow Jones futures fell modestly early Thursday, along with S&amp;P 500 futures and Nasdaq futures, as investors await a key OPEC meeting over emergency production cuts. The coronavirus stock market rally rebounded Wednesday amid improving Covid-19 forecasts. … [+10023 chars]"
    }
]

const mockUncompleteNews = [
    {
        "author": "Investor's Business Daily",
        "title": "Dow Jones Futures: Coronavirus Stock Market Rally Lacks Two Key Qualities; Analyzing Apple, Amazon, Microsoft, Nvidia - Investor's Business Daily",
        "description": null,
        "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-coronavirus-stock-market-rally-apple-amazon-microsoft-nvidia-analyzed/",
        "urlToImage": null,
        "publishedAt": "2020-04-09T04:24:41Z",
        "content": "Dow Jones futures fell modestly early Thursday, along with S&amp;P 500 futures and Nasdaq futures, as investors await a key OPEC meeting over emergency production cuts. The coronavirus stock market rally rebounded Wednesday amid improving Covid-19 forecasts. … [+10023 chars]"
    }
]

describe("Testing components", () => {
    describe("Navbar component", () => {
        const component = shallow(
            <Navbar />
        )

        test("Navbar component is exist", () => {
            expect(component.exists()).toBe(true)
        })

        test("Should show 'News' as Navbar Brand", () => {
            expect(component.find("#navbar-brand").text()).toEqual("News")
        })

        test("Should show 'Business' as Navbar Link", () => {
            expect(component.find("#navbar-business-link").text()).toEqual("Business")
        })

        test("Should show 'Technology' as Navbar Link", () => {
            expect(component.find("#navbar-technology-link").text()).toEqual("Technology")
        })

        test("Should show three Link Component on Navbar", () => {
            expect(component.find(Link)).toHaveLength(3)
        })
    })

    describe("Content component", () => {
        const component = shallow(
            <Content />
        )

        test("Content component is exist", () => {
            expect(component.exists()).toBe(true)
        })

        test("Should show ReactFullPage Component", () => {
            expect(component.find(ReactFullPage)).toHaveLength(1)
        })

    })

    describe("Section component", () => {
        const component = shallow(
            <Section news={mockNews} country="UNITED STATES" />
        )

        test("Section component is exist", () => {
            expect(component.exists()).toBe(true)
        })

        test("'section' class is exist", () => {
            expect(component.find(".section").exists()).toBe(true)
        })

        test("<div> with class 'country' is exist", () => {
            expect(component.find(".country").exists()).toBe(true)
        })

        test("Should show country name", () => {
            expect(component.find("#country-text").text()).toEqual("UNITED STATES")
        })
    })

    describe("Carousel component", () => {
        describe("News loaded with completed data", () => {
            let component = shallow(
                <Carousel news={mockNews} />
            )

            test("Content component is exist", () => {
                expect(component.exists()).toBe(true)
            })

            test("<div> with class 'carousel' is exist", () => {
                expect(component.find(".carousel").exists()).toBe(true)
            })

            test("Should show ItemsCarousel Component", () => {
                expect(component.find(ItemsCarousel)).toHaveLength(1)
            })

            test("<div> with class 'clickable' is exist", () => {
                expect(component.find(".clickable").exists()).toBe(true)
            })

            test("<div> with class 'clickable' is able to be clicked", () => {
                expect(component.find(".clickable").simulate("click")).toHaveLength(1)
            })

            test("<div> with class 'img-content' is exist", () => {
                expect(component.find(".img-content").exists()).toBe(true)
            })

            test("Should renders image with src correctly", () => {
                expect(component.find("img").prop("src")).toEqual(mockNews[0].urlToImage)
            })

            test("Should renders news title on carousel", () => {
                expect(component.find(".carousel-title").text()).toEqual(mockNews[0].title)
            })
        })


        describe("News loaded with uncomplete data", () => {
            let component = shallow(
                <Carousel news={mockUncompleteNews} />
            )

            test("Should renders image with src placeholder", () => {
                expect(component.find("img").prop("src")).toEqual("/placeholder.png")
            })
        })
    })

    describe("NewsDetail component", () => {
        describe("NewsDetail loaded with complete data", () => {
            const component = shallow(
                <NewsDetail selectedNews={mockNews[0]} />
            )

            test("Section component is exist", () => {
                expect(component.exists()).toBe(true)
            })

            test("<img> with 'focused-news' class is exist", () => {
                expect(component.find(".focused-news").exists()).toBe(true)
            })

            test("<div> with 'news-content' class is exist", () => {
                expect(component.find(".news-content").exists()).toBe(true)
            })

            test("Should renders news title on <h1> element", () => {
                expect(component.find(".news-title").text()).toEqual(mockNews[0].title)
            })

            test("Should renders image with src correctly", () => {
                expect(component.find("img").prop("src")).toEqual(mockNews[0].urlToImage)
            })

            test("Should renders horizontal line", () => {
                expect(component.find("hr").exists()).toBe(true)
            })

            test("Should renders news date published on <p> element", () => {
                const date = moment(new Date(mockNews[0].publishedAt)).format('MMMM Do YYYY, h:mm:ss a')

                expect(component.find(".news-date").text()).toEqual(date)
            })

            test("Should renders news description on <p> element", () => {
                expect(component.find(".news-description").text()).toEqual(mockNews[0].description)
            })

            test("Should renders <a> element to contain 'View more...' text", () => {
                expect(component.find(".news-link").text()).toEqual("View more...")
            })

            test("Should renders <a> element to contain href correctly", () => {
                expect(component.find(".news-link").prop("href")).toEqual(mockNews[0].url)
            })
        })

        describe("News loaded with uncomplete data", () => {
            let component = shallow(
                <NewsDetail selectedNews={mockUncompleteNews[0]} />
            )

            test("Should renders image with src placeholder", () => {
                expect(component.find("img").prop("src")).toEqual("/placeholder.png")
            })

            test("Should renders 'Description Unavailable' into the <p> element", () => {
                expect(component.find(".no-description").text()).toEqual("Description Unavailable")
            })
        })
    })
});
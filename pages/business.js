import React from 'react'
import fetch from 'isomorphic-unfetch'
import NavbarMenu from '../components/Navbar'
import Content from '../components/Content'

export default function Business({ businessID, businessSG, businessUS }) {
    return (
        <div>
            <NavbarMenu activePage="/business" />
            <Content
                ID={businessID}
                SG={businessSG}
                US={businessUS}
            />
        </div>
    )
}

Business.getInitialProps = async ctx => {
    const resIDNews = await fetch(process.env.ID_BUSINESS_URL)
    const businessID = await resIDNews.json()

    const resSGNews = await fetch(process.env.SG_BUSINESS_URL)
    const businessSG = await resSGNews.json()

    const resUSNews = await fetch(process.env.US_BUSINESS_URL)
    const businessUS = await resUSNews.json()

    return {
        businessID: businessID.articles,
        businessSG: businessSG.articles,
        businessUS: businessUS.articles
    }
}
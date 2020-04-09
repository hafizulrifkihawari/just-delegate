import React from 'react'
import fetch from 'isomorphic-unfetch'
import NavbarMenu from '../components/Navbar'
import Content from '../components/Content'

export default function Technology({ technologyID, technologySG, technologyUS }) {
    return (
        <div>
            <NavbarMenu activePage="/technology" />
            <Content
                ID={technologyID}
                SG={technologySG}
                US={technologyUS}
            />
        </div>
    )
}

Technology.getInitialProps = async ctx => {
    const resIDNews = await fetch(process.env.ID_TECHNOLOGY_URL)
    const technologyID = await resIDNews.json()

    const resSGNews = await fetch(process.env.SG_TECHNOLOGY_URL)
    const technologySG = await resSGNews.json()

    const resUSNews = await fetch(process.env.US_TECHNOLOGY_URL)
    const technologyUS = await resUSNews.json()

    return {
        technologyID: technologyID.articles,
        technologySG: technologySG.articles,
        technologyUS: technologyUS.articles
    }
}
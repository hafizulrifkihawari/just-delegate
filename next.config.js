require('dotenv').config()
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    env: {
        ID_BUSINESS_URL: process.env.ID_BUSINESS_URL,
        SG_BUSINESS_URL: process.env.SG_BUSINESS_URL,
        US_BUSINESS_URL: process.env.US_BUSINESS_URL,
        ID_TECHNOLOGY_URL: process.env.ID_TECHNOLOGY_URL,
        SG_TECHNOLOGY_URL: process.env.SG_TECHNOLOGY_URL,
        US_TECHNOLOGY_URL: process.env.US_TECHNOLOGY_URL,
    },
})
import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Carousel from './Carousel'
import '../assets/styles/content.css'

export default function Content({ ID, SG, US }) {
    return (
        <ReactFullpage
            navigation
            render={comp =>
                <>
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <div className="country">
                                <p>INDONESIA</p>
                            </div>
                            <Carousel news={ID} />
                        </div>
                    </ReactFullpage.Wrapper>
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <div className="country">
                                <p>SINGAPORE</p>
                            </div>
                            <Carousel news={SG} />
                        </div>
                    </ReactFullpage.Wrapper>
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <div className="country">
                                <p>UNITED STATES</p>
                            </div>
                            <Carousel news={US} />
                        </div>
                    </ReactFullpage.Wrapper>
                </>
            }
        />
    )
}
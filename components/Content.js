import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Section from './Section'

export default function Content({ ID, SG, US }) {
    return (
        <ReactFullpage
            navigation
            render={comp =>
                <div>
                    <Section news={ID} country="INDONESIA" />
                    <Section news={SG} country="SINGAPORE" />
                    <Section news={US} country="UNITED STATES" />
                </div>
            }
        />
    )
}
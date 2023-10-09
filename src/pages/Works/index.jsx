import React, { useEffect, useState } from 'react'
import { Card } from 'antd'
import ItemMap from '../../components/TattoIdea';

const OurWork = () => {
    return (
        <div className='container'>
            <Card className='works-container'>
                <ItemMap />
            </Card>
        </div>
    )
}

export default OurWork;
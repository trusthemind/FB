import React, { useEffect, useState } from 'react'
import { Card } from 'antd'
import ItemMap from '../../components/TattoIdea';
import PageEntry from '../../components/PageEntry';

const OurWork = () => {
    return (
        <>
            <PageEntry title={"Our works"}/>
            <div className='container'>
                <Card className='works-container'>
                    <ItemMap />
                </Card>
            </div>
        </>
    )
}

export default OurWork;
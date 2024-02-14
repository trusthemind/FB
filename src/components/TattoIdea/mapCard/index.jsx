import React, { useState, useEffect } from "react";
import { tattosURL } from "../../../services/constantUrl";
import { Image, Card, Pagination } from "antd";
import {isHttpOrHttps} from "../../../services/RegEx"

function MapCard({ array }) {
    const [page, setPage] = useState({ pageNumber: 0, pageArray: [], pageSize: 15 });

    const paginationChange = (currentPage) => {
        setPage({ ...page, pageNumber: currentPage });
    };
    
    useEffect(() => {
        setPage({ ...page, pageNumber: 1, pageArray: array });
    }, [array])
    
    const slicePage = () => {
        const start = (page.pageNumber - 1) * page.pageSize;
        const end = start + page.pageSize;
        return array.slice(start, end);
    }
    const content = slicePage();

    return (
        <>
            <Card className="photoCard">
                {content.map((item,index) =>
                    <Image
                        key={index}
                        className="card-item"
                        src={!isHttpOrHttps(item.url) ? tattosURL + item?.url : item?.url}
                    />
                )}
            </Card>
            <Pagination total={array.length} pageSize={page.pageSize} current={page.pageNumber} showLessItems={true}
                showSizeChanger={false} onChange={paginationChange} />
        </>
    )
}
export default MapCard;
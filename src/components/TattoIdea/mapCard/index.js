import { tattosURL } from "../../../services/constantUrl";
import { Image, Card, Pagination } from "antd";

function MapCard({ array }) {
    return (<>
        <Card className="photoCard">
            {array?.slice(0, 21).map((item) =>
                <Image
                    key={item.id}
                    className="card-item"
                    src={tattosURL + item?.url}
                />
            )}
        </Card>
        <Pagination total={array.length} defaultCurrent={1} pageSize={25} />
    </>
    )
}
export default MapCard;
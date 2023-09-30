import Card from "antd/es/card/Card";
import { PageNotFound } from "../../components/SVG/404";
function Error() {
    return (
        <Card className="error-page">
            <PageNotFound/>
            <h1>This page not found</h1>
        </Card>
    );
}

export default Error;
import { Card } from "antd";
import { getMessages } from "../../firebase";

function TestimonialsComponent() {
    console.log(getMessages())
    return (
        <Card>
            "Allget"
        </Card>
    );
}

export default TestimonialsComponent;
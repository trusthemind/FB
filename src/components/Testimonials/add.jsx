import { Card, Input, Button } from "antd";
import "./style.scss"
const { TextArea } = Input;

function AddTestimonial() {
    return (
        <Card className="add-card">
            <h1>Addd</h1>
            <TextArea />
            <Button>Add</Button>
        </Card>
    );
}

export default AddTestimonial;
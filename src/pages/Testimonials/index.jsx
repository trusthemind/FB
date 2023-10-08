import React from "react";
import AddTestimonial from "../../components/Testimonials/add";
import TestimonialsComponent from "../../components/Testimonials";
import PageEntry from "../../components/PageEntry";
import { Card } from "antd";
import "./style.scss"

function Testimonials() {
    return (<>
        <PageEntry title={"Testimonals"} text={"Here you can share ur opinion"}/>
        <div className="container">
            <Card className="testimonals-container">
                <TestimonialsComponent />
                <AddTestimonial />
            </Card>
        </div>
    </>
    );
}

export default Testimonials;
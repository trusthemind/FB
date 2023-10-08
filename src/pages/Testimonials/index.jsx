import React from "react";
import AddTestimonial from "../../components/Testimonials/add";
import TestimonialsComponent from "../../components/Testimonials";
import PageEntry from "../../components/PageEntry";
import Card from "antd/es/card/Card";
import "./style.scss"

function Testimonials() {
    return (<>
        <PageEntry />
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
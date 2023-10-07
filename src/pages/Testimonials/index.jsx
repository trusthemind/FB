import React from "react";
import AddTestimonial from "../../components/Testimonials/add";
import TestimonialsComponent from "../../components/Testimonials";

function Testimonials() {
    return (
        <div className="container">
            <TestimonialsComponent />
            <AddTestimonial />
        </div>
    );
}

export default Testimonials;
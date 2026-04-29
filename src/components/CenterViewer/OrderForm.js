import React from "react";
import './OrderForm.css';

const OrderForm = (props) => {
    return (
        <section className="orderform">
            <heading>{"$" + props.stickerPrice}</heading>
            <iframe
                title="HOV order form"
                src="https://docs.google.com/forms/d/e/1FAIpQLScyg8SQhbtmTDekvr4Q6vnO9IT9DQvBfaswy9IAcpZapin_-A/viewform?embedded=true" 
                style={{ border: 0, width: '100%', height: '100%' }}
            >
                Loading…
            </iframe>
        </section>
    );
};

export default OrderForm;

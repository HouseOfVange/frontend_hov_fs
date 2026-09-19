import React from "react";
import 'components/CenterViewer/OrderForm';

const OrderForm = (props) => {
    return (
        <section className="orderform">
            <header>{"$" + props.stickerPrice}</header>
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

import React, { useState } from "react";
import 'components/CenterViewer/OrderForm';

const OrderForm = (props) => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const clearOrderForm = () => {
        props.updateOrderFormData('name', '');
        props.updateOrderFormData('contact', '');
        props.updateOrderFormData('the_time_to_buy_is_now', null);
        props.updateOrderFormData('desire', '');
        props.updateOrderFormData('understand_that_hov_cost_money', null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await props.postOrder(
                props.orderFormData.name, 
                props.orderFormData.contact, 
                props.orderFormData.the_time_to_buy_is_now, 
                props.orderFormData.desire, 
                props.orderFormData.understand_that_hov_cost_money
            );
            console.log('show the thank you component')
            clearOrderForm();
        } catch (error) {
            console.error("Could not submit order:", error);
        } finally {
            setIsSubmitting(false);
        };
    };

    return (
        <section>
            <header>The current price point is {"$" + props.stickerPrice}</header>

            <form onSubmit={handleSubmit} className="order-form">
                <div>
                    <label htmlFor="name">What is your name?</label>
                    <input
                        type="text"
                        id="name"
                        value={props.orderFormData.name}
                        onChange={(e) => props.updateOrderFormData('name', e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="contact">What is the best way to contact you?</label>
                    <input
                        ype="text"
                        id="contact"
                        value={props.orderFormData.contact}
                        onChange={(e) => props.updateOrderFormData('contact', e.target.value)}
                        required
                    />
                </div>

                <fieldset>
                    <legend>True or false, "The time to buy is now!"?</legend>
                        <div>
                            <input 
                            type="radio"
                            id="ttbin-true" 
                            name="ttbin" 
                            value="true"
                            required
                            checked={props.orderFormData.the_time_to_buy_is_now === true}
                            onChange={(e) => props.updateOrderFormData('the_time_to_buy_is_now', true)}
                            />
                            <label htmlFor="ttbin-true">True</label>
                        </div>
                        
                        <div>
                            <input 
                            type="radio" 
                            id="ttbin-false"
                            name="ttbin"
                            value="false" 
                            required
                            checked={props.orderFormData.the_time_to_buy_is_now === false}
                            onChange={(e) => props.updateOrderFormData('the_time_to_buy_is_now', false)}
                            />
                            <label htmlFor="ttbin-false">False</label>
                        </div>
                </fieldset>

                <div>
                    <label htmlFor="desire">
                        What do you want from HOV?
                    </label>
                    <input
                        type="text"
                        id="desire"
                        value={props.orderFormData.desire}
                        onChange={(e) => props.updateOrderFormData('desire', e.target.value)}
                        required
                    />
                </div>
                
                <fieldset>
                    <legend>Do you understand that HOV products cost money?</legend>
                        <div>
                            <input 
                            type="radio" id="understand_that_hov_cost_money-true" name="understand_that_hov_cost_money" 
                            value="true"
                            required
                            checked={props.orderFormData.understand_that_hov_cost_money === true}
                            onChange={(e) => props.updateOrderFormData('understand_that_hov_cost_money', true)}/>
                            <label htmlFor="understand_that_hov_cost_money-true">Yes</label>
                        </div>
                        <div>
                            <input 
                            type="radio"
                            id="understand_that_hov_cost_money-false"
                            name="understand_that_hov_cost_money"
                            value="false"
                            required
                            checked={props.orderFormData.understand_that_hov_cost_money === false}
                            onChange={(e) => props.updateOrderFormData('understand_that_hov_cost_money', false)}
                            />
                            <label htmlFor="understand_that_hov_cost_money-false">No</label>
                        </div>
                </fieldset>
                
                <button 
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            
            </form>
        </section>
    );
};

export default OrderForm;

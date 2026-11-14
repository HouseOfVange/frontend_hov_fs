import React, { useState } from "react";
import 'components/CenterViewer/OrderForm';

const OrderForm = (props) => {

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [the_time_to_buy_is_now, setThe_time_to_buy_is_now] = useState();
    const [desire, setDesire] = useState('');
    const [understand_that_hov_cost_money, setUnderstand_that_hov_cost_money] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        props.postOrder(name, contact, the_time_to_buy_is_now, desire, understand_that_hov_cost_money);
        setName('');
        setContact('');
        setThe_time_to_buy_is_now();
        setDesire('');
        setUnderstand_that_hov_cost_money();
        setIsSubmitting(false);
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contact">What is the best way to contact you?</label>
                    <input
                        ype="text"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
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
                    onChange={(e) => setThe_time_to_buy_is_now(true)}
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
                    onChange={(e) => setThe_time_to_buy_is_now(false)}
                    />
                    <label htmlFor="ttbin-false">False</label>
                </div>
                </fieldset>


                {/* What do you want from HOV? */}
                <div>
                    <label htmlFor="desire">
                        What do you want from HOV?
                    </label>
                    <input
                        type="text"
                        id="desire"
                        value={desire}
                        onChange={(e) => setDesire(e.target.value)}
                        required
                    />
                </div>
                
                {/* Do you understand that HOV products cost money? */}
                <fieldset>
                    <legend>Do you understand that HOV products cost money?</legend>
                        <div>
                            <input 
                            type="radio" id="understand_that_hov_cost_money-true" name="understand_that_hov_cost_money" 
                            value="true"
                            required
                            onChange={(e) => setUnderstand_that_hov_cost_money(true)}/>
                            <label htmlFor="understand_that_hov_cost_money-true">Yes</label>
                        </div>
                        <div>
                            <input 
                            type="radio"
                            id="understand_that_hov_cost_money-false"
                            name="understand_that_hov_cost_money"
                            value="false"
                            required
                            onChange={(e) => setUnderstand_that_hov_cost_money(false)}
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

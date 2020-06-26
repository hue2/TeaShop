import React from 'react';
import { QuantityProps } from './Types';

export const QuantitySelect = (props : QuantityProps) => {
    return (
        <div className="float-right">
            {
                <select className="amt-selector" name="amount"
                    onChange={(event) =>  {
                        console.log(event.target);
                        props.onPriceChange(+event.target.value, event.target[event.target.selectedIndex].getAttribute("data-price"))
                        }
                    } 
                    value={props.selectedPriceId}>
                    {props.quantity.map(item => (
                        <option value={item.priceId} key={item.priceId} data-price={item.price}>
                            {item.quantity}
                        </option>
                    ))}
                </select>             
            }
            {
                <select className="qty-selector" 
                    onChange={(event) => props.onQtyChange(+event.target.value)} 
                    value={props.selectedQuantity}>
                    <option value={-1} disabled>Quantity</option>
                    {[1, 2, 3, 4, 5, 6].map(item => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>             
            }
            <br />
            <br />
            <div className="float-right maroon m-right-10">
                <p>{`$${props.selectedPrice}`}</p>
            </div>
        </div>
    )
}
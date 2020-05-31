import React from 'react';
import { QuantityProps } from './Types';

export const QuantitySelect = (props : QuantityProps) => {
    return (
        <div className="float-right">
            {
                <select className="amt-selector">
                    {props.quantity.map(item => (
                        <option value={item.priceId} key={item.priceId}>
                            {item.quantity}
                        </option>
                    ))}
                </select>             
            }
            {
                <select className="amt-selector" defaultValue={-1}>
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
            <div className="float-right">
                <p>Total: </p>
            </div>
        </div>
    )
}
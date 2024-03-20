import React from "react";
import "../styles/products.scss";

const Product = ({ data, dispatch }) => {
    const handleRemove = () => {
        dispatch({
            type: "REMOVE_TOOL",
            payload: data,
        });
    };
    if (!data)
        return (
            <div className="product">
                <button className="add-button">+</button>
            </div>
        );
    else
        return (
            <div className="product">
                <img
                    className="product-logo"
                    src={data.image}
                    alt={data.label}
                />
                <text className="product-name">{data.label}</text>
                <button onClick={handleRemove} className="remove-button">
                    &#10060; Remove
                </button>
            </div>
        );
};

export const Products = ({ state, dispatch }) => {
    const { tools } = state;

    return (
        <div className="wrapper">
            <div className="products-container">
                {tools.map((tool) => (
                    <Product key={tool.value} data={tool} dispatch={dispatch} />
                ))}
                {tools.length < 4 &&
                    Array(4 - tools.length)
                        .fill(null)
                        .map((n) => <Product dispatch={dispatch} />)}
            </div>
            <div>{state.tools.length} Products Added</div>
        </div>
    );
};

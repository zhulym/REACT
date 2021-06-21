import React from "react";

const Instructions = ({ data = [] }) => {
    return (
        <section className="instructions">
            <h4>{title}</h4>
            {steps.map((s, i) => (
                <p key={i}>{s}</p>
            ))}
        </section>
    );
}

export default Instructions
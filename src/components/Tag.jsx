/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Tag.css";

const Tag = (props) => {
    // console.log("props", props);
    return (
        <button className="tag">{props.tagName}</button>
    );
};

export default Tag;
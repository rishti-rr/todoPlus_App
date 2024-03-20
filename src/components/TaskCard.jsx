/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/pics/trash.png";

const TaskCard = ({ title, tags, handleDelete, index }) => {
    return (
        <article className='task_card'>
              <p className='task_text'>{title}
              </p>
              <div className="task_card_bottom_line">
                <div className="task_card_tags">
                {tags.map((tag, index) => (
                        <Tag key={index} tagName={tag} selected />
                    ))}
                    {/* <Tag tagName="HTML"/>
                    <Tag tagName="CSS"/> */}
                </div>
                <div className="task_delete"
                     onClick={() => handleDelete(index)}>
                    <img src={deleteIcon} className='delete_icon' alt="" />
                </div>
              </div>
        </article>
    );
};

export default TaskCard;
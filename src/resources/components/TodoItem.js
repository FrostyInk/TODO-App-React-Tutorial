import React from "react";

function TodoItem(data) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  return (
    <div className="todoItem">
      <input
        type="checkbox"
        onChange={() => data.handleChange(data.item.id)}
        checked={data.item.completed}
      />
      <p style={data.item.completed ? completedStyle : null}>
        {data.item.text}
      </p>
    </div>
  );
}

export default TodoItem;

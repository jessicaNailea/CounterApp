import React from "react";

const formatCount = (count) => {
  return count === 0 ? "Zero" : count;
};

const getBadgeClasses = (count) => {
  let classes = "badge m-2 badge-";
  classes += count == 0 ? "warning" : "primary";
  return classes;
};

const Counter = (props) => {
  const { counter, onIncrement, onDelete, onDecrement } = props;
  return (
    <div className="row">
      <div className="col-1 div">
        <span className={getBadgeClasses(counter.value)}>
          {formatCount(counter.value)}
        </span>
      </div>
      <div className="col">
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={counter.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Counter;

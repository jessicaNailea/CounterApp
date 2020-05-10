import React, { Component } from "react";
import Counter from "./counter";

const Counters = (props) => {
  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={props.onReset}>
        Reset
      </button>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={props.onIncrement}
          onDelete={props.onDelete}
          onDecrement={props.onDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;

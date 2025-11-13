import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  let content = "";
  if (count > 0) {
    content = <span>Count is positive!!</span>;
  }
  else if (count < 0) {
    content = <span>Count is Negative!!</span>;
  } else {
    content = <span>Count is back to zero!!</span>;
  }

  return (
    <div>
      <button onClick={() => increment()}>Add</button>
      <span>{count}</span>
      <button onClick={() => decrement()}>Minus</button>
      <button onClick={() => reset()}>Reset</button>
      {content}
    </div>
  );
}

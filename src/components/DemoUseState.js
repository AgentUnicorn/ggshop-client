import React from 'react'
import { useEffect, useState } from "react";

export default function DemoUseState() {
  {/* Khai bao bien, function */}
  const [count, setCount] = useState(0);

  {/* set function */}
  const incrementCount = () => setCount(count + 1);

  return (
    <div>
      <p>Current Count : {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  )
}


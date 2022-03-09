import React from 'react';
import { useEffect, useState } from "react";

export default function DemoUserEffect() {
  // Khai bao bien va function
  const [fullName, setFullName] = useState({name:'JavaScript',group:999});

  // user Effect
  useEffect(() => {
    setFullName ({name:'React',group:4});
  }, []);

  return (
    <div>
      <h1>Name: {fullName.name}</h1>
      <h1>Group: {fullName.group}</h1>
    </div>
  )
}

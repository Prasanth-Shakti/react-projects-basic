import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const min = time.getMinutes().toString().padStart(2, "0");
  const sec = time.getSeconds().toString().padStart(2, "0");
  const ampm = hours > 12 ? "PM" : "AM";
  return (
    <div>
      <span style={{ margin: 50 }}>{`${hours}:${min}:${sec} ${ampm}`}</span>
    </div>
  );
}

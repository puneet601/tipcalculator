import { useState } from "react";
export default function App() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  function handleReset() {
    setBill("");
    setTip1(0);
    setTip2(0);
  }
  const tip = (tip1 + tip2) / 2;
  const final = (bill * tip) / 100;
  return (
    <div>
      <h3>How much was the bill</h3>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <Tip tip={tip1} onTip={(val) => setTip1(val)}>
        <h3>How did you like the service?</h3>
      </Tip>
      <Tip tip={tip2} onTip={(val) => setTip2(val)}>
        <h3>How did your friend like the service?</h3>
      </Tip>
      <h3>
        {bill &&
          (tip !== null
            ? `You have to pay $ ${final}`
            : `You have to pay $ ${final}($ ${bill} + $ ${tip})`)}
      </h3>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function Tip({ tip, onTip, children }) {
  return (
    <div>
      {children}
      <select value={tip} onClick={(e) => onTip(Number(e.target.value))}>
        <option value="0">"It was dissatisfactory(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
      </select>
    </div>
  );
}

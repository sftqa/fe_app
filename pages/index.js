import { useState } from "react";

export default function IndexPage() {
  const [word, setWord] = useState("");
  const [transformed, setTransformed] = useState("");

  const transform = (type) => {
    fetch(`/api/transform/${type}?word=${word}`)
      .then((res) => res.json())
      .then(({ error, result }) => {
        if (error) return setTransformed(error);
        setTransformed(result);
      });
  };

  const transformLower = () => transform('lower');
  const transformUpper = () => transform('upper');

  return (
    <div>
        <input onChange={e => setWord(e.target.value)} value = {word}></input>
        <button onClick={transformLower}>transform lower</button>
        <button onClick={transformUpper}>transform upper33333</button>
        <h2>Result: hahaha</h2>
    </div>
  )
}

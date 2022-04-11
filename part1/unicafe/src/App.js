import { useState } from "react";

const Header = ({ header }) => <h1>{header}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticsLine = ({ text, counter }) => (
  <p>
    {text} {counter}
  </p>
);

const Statistics = (props) => {
  if (props.counter[0] + props.counter[1] + props.counter[2] === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>good </td>
          <td>{props.counter[0]}</td>
        </tr>
        <tr>
          <td>neutral </td>
          <td>{props.counter[1]}</td>
        </tr>
        <tr>
          <td>bad </td>
          <td>{props.counter[2]}</td>
        </tr>
        <tr>
          <td>all </td>
          <td>{props.counter[0] + props.counter[1] + props.counter[2]}</td>
        </tr>
        <tr>
          <td>average </td>
          <td>{(props.counter[0] * 1 + props.counter[2] * -1) * 0.1}</td>
        </tr>
        <tr>
          <td>positive </td>
          <td>
            {(props.counter[0] /
              (props.counter[0] + props.counter[1] + props.counter[2])) *
              100 +
              "%"}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header header={"give feedback"} />
      <Button handleClick={handleGood} text={"good"} />
      <Button handleClick={handleNeutral} text={"neutral"} />
      <Button handleClick={handleBad} text={"bad"} />
      <Header header={"statistics"} />
      <Statistics counter={[good, neutral, bad]} />
    </div>
  );
};

export default App;

//average good * 1 + bad * -1) * 0.1
//positive good / (good + neutral + bad)) * 100 + "%"
//      <StatisticsLine text={"good"} counter={props.counter[0]} />
//<StatisticsLine text={"neutral"} counter={props.counter[1]} />
//<StatisticsLine text={"bad"} counter={props.counter[2]} />
//<StatisticsLine
// text={"all"}
//counter={props.counter[0] + props.counter[1] + props.counter[2]}
///>
//<StatisticsLine
// text={"average"}
// counter={(props.counter[0] * 1 + props.counter[2] * -1) * 0.1}
///>
//<StatisticsLine
// text={"positive"}
// counter={
//  (props.counter[0] /
//   (props.counter[0] + props.counter[1] + props.counter[2])) *
//    100 +
//  " %"7
//7 }
//>

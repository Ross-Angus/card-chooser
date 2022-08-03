import React from "react";

const Results = (props) => {
  const restartHander = () => {
    props.setCurrentCard(0);
  };

  return (
    <>
      <table>
        <caption>Results</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Logo</th>
            <th scope="col">Type</th>
            <th scope="col">Description</th>
            <th scope="col">Answer</th>
          </tr>
        </thead>
        <tbody>
          {props.answers.map((answer) => (
            <tr key={answer.name} className={answer.userAnswer === answer.type ? 'correct' : 'incorrect'}>
              <th scope="row">
                <a href={answer.url} target="_blank" rel="noopener noreferrer">
                  {answer.name}
                </a>
              </th>
              <td><img src={answer.logo} alt={answer.name}/></td>
              <td>{answer.type === 'js' ? 'JavaScript' : 'Cryptocurrency'}</td>
              <td>{answer.description}</td>
              <td className="text-center">{answer.userAnswer === answer.type ? '✔' : '×'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-center">
        <button onClick={restartHander}>Start again</button>
      </p>
    </>
  );
};

export default Results;

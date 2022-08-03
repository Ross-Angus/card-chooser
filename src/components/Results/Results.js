import React from "react";

const Results = (props) => {
  console.log(props.answers[0]);

  return (
    <table>
      <caption>Results</caption>
      <thead>
        <tr>
          <th scope="col">Logo</th>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Description</th>
          <th scope="col">Answer</th>
        </tr>
      </thead>
      <tbody>
        {props.answers.map((answer) => (
          <tr key={answer.name} className={answer.userAnswer === answer.type? 'correct' : 'incorrect'}>
            <td><img src={answer.logo} alt={answer.name}/></td>
            <td>
              <a href={answer.url} target="_blank" rel="noopener noreferrer">
                {answer.name}
              </a>
            </td>
            <td>{answer.type}</td>
            <td>{answer.description}</td>
            <td>{answer.userAnswer === answer.type? '✔' : '×'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Results;

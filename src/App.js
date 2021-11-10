import './App.css';
import Question from './components/Question';
import QuestionsData from './qJson.json';

function App() {
  let questionLength = QuestionsData.questions.length;
  let count = 1;

  return (
    <div className="App">
      {QuestionsData.questions.map((item, key) => (
        <div key={key}>
          <Question number={count} title={item.question} a={item.a} b={item.b} c={item.c} d={item.d} right={item.right} />
          <div className="hidden-number">
            {count >= questionLength ? count = questionLength : count++}
          </div>

        </div>
      ))}
    </div>
  );
}

export default App;

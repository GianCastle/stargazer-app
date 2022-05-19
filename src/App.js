import { useState } from 'react';
import Header from './components/Header';
import TopicSearch from './components/TopicSearch';
import TopicsResults from './components/TopicsResults';


function App() {
  const [state, setState] = useState('react');
  const onCriteriaChangeHandler = (event) => setState(event.target.value);

  return (
    <div className='app'>
      <Header />
      <TopicSearch state={state} onCriteriaChangeHandler={onCriteriaChangeHandler} />
      <TopicsResults criteria={state} setSelectedcriteria={setState} />
    </div>
  );
}

export default App;

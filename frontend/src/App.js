import './App.css';
import Form from './components/Form';

const handleSubmit = (values) => alert(JSON.stringify(values));
const initialValues = {};

function App() {
  return (
    <div className="App">
      <h1>Form Chat</h1>
      <Form handleSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  );
}

export default App;

const handleSubmit = values => alert(JSON.stringify(values))
const initialValues = {}

import Form from './ components/Form';

function App() {
  return (
    <div className="App">
     <h1>Chat Form</h1>
     <Form handleSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  );
}

export default App;

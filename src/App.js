import InputField from './components/InputField'
import UploadField from './components/UploadField'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          <InputField />
          <UploadField />
        </p>
        
      </header>
    </div>
  );
}

export default App;

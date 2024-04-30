import "./App.css";
import SearchForm from "./components/SearchForm";
import NewItemForm from "./components/NewItemForm";
import Transaction from "./components/Transaction";

function App() {
  return (
    <div className="App">
      <header className="title">
        <h2>The Royal Bank of Flatiron</h2>
      </header>
      <div className="form-container">
        <SearchForm />
      </div>
      <NewItemForm />
      <Transaction />
    </div>
  );
}

export default App;

import "./App.css";
import { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import NewItemForm from "./components/NewItemForm";
import Transaction from "./components/Transaction";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const onSubmitHandler = (formState) => {
    setTransactions((prev) => [...prev, { ...formState }]);
  };

  useEffect(() => {
    if (searchTerm.length === 0) {
      setFilteredTransactions(transactions);
    } else {
      setFilteredTransactions(
        transactions.filter((transaction) =>
          transaction.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, transactions]);
  return (
    <div className="App">
      <header className="title">
        <h2>The Royal Bank of Flatiron</h2>
      </header>
      <div className="form-container">
        <SearchForm
          value={searchTerm}
          onChange={(evt) => setSearchTerm(evt.target.value)}
        />
      </div>
      <NewItemForm onSubmit={onSubmitHandler} />
      <Transaction transactions={filteredTransactions} />
    </div>
  );
}

export default App;

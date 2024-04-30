import { useEffect, useState } from "react";
import TransactionList from "./TrasactionList";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/transactions")
      .then((r) => r.json())
      .then((transc) => setTransactions(transc))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <table>
        <tr>
          <th>DATE</th>
          <th>CATEGORY</th>
          <th>DESCRIPTION</th>
          <th>AMOUNT</th>
        </tr>
        {/* trs */}
        {transactions.map((transaction, index) => {
          return (
            <TransactionList
              index={index}
              date={transaction.date}
              category={transaction.category}
              description={transaction.description}
              amount={transaction.amount}
              key={transaction.id}
            />
          );
        })}
      </table>
    </>
  );
}
export default Transactions;

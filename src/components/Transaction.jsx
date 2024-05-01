import TransactionList from "./TrasactionList";
import PropTypes from "prop-types";

function Transactions({ transactions }) {
  return (
    <>
      <table>
        <tr>
          <th>DATE</th>
          <th>DESCRIPTION</th>
          <th>CATEGORY</th>
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

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
};

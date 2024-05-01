import PropTypes from "prop-types";

TransactionList.propTypes = {
  index: PropTypes.number,
  category: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.number,
};

export default function TransactionList({
  index,
  category,
  date,
  description,
  amount,
}) {
  const isEven = index % 2 === 0;
  return (
    <tr className={isEven ? "even" : ""}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

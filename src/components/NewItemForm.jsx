import { useState } from "react";
import PropTypes from "prop-types";

export default function NewItemForm({ onSubmit }) {
  const [submitState, setSubmitState] = useState({
    date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
    description: "",
    category: "",
    amount: 0,
  });

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    onSubmit(submitState);
    setSubmitState({
      date: evt.target.date.value,
      description: evt.target.description.value,
      category: evt.target.category.value,
      amount: evt.target.amount.value,
    });
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setSubmitState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form id="new-item-form" onSubmit={onSubmitHandler}>
      <div className="form-inputs">
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          data-date-inline-picker="true"
          value={submitState.date}
          onChange={onChangeHandler}
          name="date"
        ></input>
        <input
          placeholder="Description.."
          className="text-input"
          id="description"
          value={submitState.description}
          onChange={onChangeHandler}
          name="description"
        ></input>
        <input
          placeholder="Category..."
          className="text-input"
          id="category"
          value={submitState.category}
          onChange={onChangeHandler}
          name="category"
        ></input>
        <input
          type="number"
          placeholder="Amount..."
          id="amount"
          value={submitState.amount}
          onChange={onChangeHandler}
          name="amount"
        ></input>
      </div>

      <button id="fa-plus">Add Tansaction</button>
    </form>
  );
}

NewItemForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

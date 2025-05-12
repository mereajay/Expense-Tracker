import { useEffect, useState } from "react";
import axios from "axios";

const ExpenseList = ({ fetchExpenses }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`/api/expenses/${id}`);
    fetchExpenses();
  };

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          <p>{expense.title} - ${expense.amount} - {expense.date}</p>
          <button onClick={() => handleDelete(expense.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;

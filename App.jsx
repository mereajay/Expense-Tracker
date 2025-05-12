import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import axios from "axios";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const response = await axios.get("/api/expenses");
    setExpenses(response.data);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm fetchExpenses={fetchExpenses} />
      <ExpenseList expenses={expenses} fetchExpenses={fetchExpenses} />
    </div>
  );
};

export default App;


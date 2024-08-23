// import logo from "./logo.svg";
//import ExpenseItem from "./component/ExpenseItem/ExpenseItem";
import NewExpense from "./component/NewExpense/NewExpense";
import Expenses from "./component/Expenses/Expenses";
import "./App.css";

function App() {
  const expenses = [
    {
      id: "1",
      title: "Toyota Crown",
      amount: 5000,
      date: new Date(2024, 1, 14),
    },
    {
      id: "2",
      title: "Toyota Land Cruiser",
      amount: 6000,
      date: new Date(2024, 5, 15),
    },
    {
      id: "3",
      title: "Volx Wagen",
      amount: 10000,
      date: new Date(2024, 6, 1),
    },
    {
      id: "4",
      title: "Toyota VX",
      amount: 25000,
      date: new Date(2024, 7, 10),
    },
    {
      id: "5",
      title: "Macede Benz",
      amount: 50000,
      date: new Date(2024, 8, 18),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses data={expenses} />
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

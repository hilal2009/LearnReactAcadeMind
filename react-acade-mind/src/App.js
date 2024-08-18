// import logo from "./logo.svg";
import ExpenseItem from "./component/ExpenseItem/ExpenseItem";
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
      <h2>Let's get started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      ></ExpenseItem>
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

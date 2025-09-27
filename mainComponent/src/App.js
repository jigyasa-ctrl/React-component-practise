import logo from './logo.svg';
import './App.css';
import TicTacToe from './Components/TicTacToe';
import NextedComments from "./Components/NestedComments"
import VirtualisedList from "./Components/VirtualizedList"
import Breadcrumb from "./Components/Breadcrumb"

function App() {
  return (
    <div className="App">
      {/* <TicTacToe /> */}
      {/* <NextedComments /> */}
      {/* <VirtualisedList /> */}
      <Breadcrumb />
    </div>
  );
}

export default App;

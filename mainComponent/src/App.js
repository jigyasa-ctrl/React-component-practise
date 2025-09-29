import logo from './logo.svg';
import './App.css';
import TicTacToe from './Components/TicTacToe';
import NextedComments from "./Components/NestedComments"
import VirtualisedList from "./Components/VirtualizedList"
import Breadcrumb from "./Components/Breadcrumb"
import ThrottleComp from "./Components/useThrottle"
import DebounceComp from "./Components/DebounceComp"

function App() {
  return (
    <div className="App">
      {/* <TicTacToe /> */}
      {/* <NextedComments /> */}
      {/* <VirtualisedList /> */}
      {/* <Breadcrumb /> */}
      {/* <ThrottleComp /> */}
      <DebounceComp />
    </div>
  );
}

export default App;

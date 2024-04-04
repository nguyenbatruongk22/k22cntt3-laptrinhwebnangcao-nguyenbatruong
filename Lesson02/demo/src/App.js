// import logo from './logo.svg';
import './App.css';
import Class_NguyenBaTruong from './components/Class_NguyenBaTruong';
import Func_JSX_NguyenBaTruong from './components/Func_JSX_NguyenBaTruong';
function App() {
  return (
    <div className="App">
       <h1>Demo JSX</h1>
       {/* function component demo  */} 
       <Func_JSX_NguyenBaTruong />
       <Func_JSX_NguyenBaTruong fullName="Nguyen Ba Truong Anh" age="20" />

       <Class_NguyenBaTruong />
       <hr/>
       <Class_NguyenBaTruong info="Hoc ReactJS" time="11" />

    </div>
  );
}

export default App;

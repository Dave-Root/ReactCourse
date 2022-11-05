import './App.css';
import Increment from "./components/Hooks/Increment";
import Request from "./components/Http/Request";


function App() {
    return (
        <div className="content">
            <Increment/>
            <Request/>
        </div>
    );
}

export default App;

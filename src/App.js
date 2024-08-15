import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  // const title = "Welcome to the new blog";
  //  react converts this to a string before it outputs it 
  //  the only thing it cant directly output is objects 
  // const likes = 500;
  // const link = "http://www.google.com"
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

//  Export so we can use it for the files
export default App;

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
function App() {
	return (
		<div className="App">
			<Header />
			<Navbar/>
			<Main />
			<Footer/>
		</div>
	);
}

export default App;

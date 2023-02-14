import React from "react";
import About from "./components/About";
import Info from "./components/Info";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Info />
				<About />
				<Interests />
				<Footer />
			</header>
		</div>
	);
}

export default App;

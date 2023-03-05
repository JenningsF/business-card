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
			</header>
			<body className="App-body">
				<About />
				<Interests />
			</body>
			<footer className="App-footer">
				<Footer />
			</footer>
		</div>
	);
}

export default App;

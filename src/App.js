import "./styles/index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<>
				<h1>Hello There m8</h1>
				<Switch>
					<Route exact path="/">
						<a href="/about">about</a>
					</Route>
					<Route exact path="/about">
						<h1>About</h1>
						<a href="/">Home</a>
						<a href="/about/yeye">about/gang</a>
					</Route>
					<Route path="/about/:gang">
						<h1>hello</h1>
					</Route>
				</Switch>
			</>
		</Router>
	);
};

export default App;

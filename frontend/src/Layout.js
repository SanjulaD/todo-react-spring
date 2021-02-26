import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
import Error from './components/Error'
import TodoSection from './screens/TodoSection';
import Header from './components/Header';
import Login from './components/Login';
import Logout from './components/Logout';

const Layout = () => {
    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/welcome/:id" component={Welcome}/>
                    <Route exact path="/todos" component={TodoSection}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/logout" component={Logout}/>
                    <Route component={Error}/>
                </Switch>
            </Router>
        </>
    )
}

export default Layout

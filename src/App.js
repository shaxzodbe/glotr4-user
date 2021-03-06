import React from 'react'
import Layout from "./components/Layout";
import {Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageCTA from "./pages/PageCTA";
import PageFour from "./pages/PageFour";
import PageZero from "./pages/PageZero";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/page-zero">
                    <PageZero/>
                </Route>
                <Route path="/page-one">
                    <PageOne/>
                </Route>
                <Route path="/page-two">
                    <PageTwo/>
                </Route>
                <Route path="/page-three">
                    <PageThree/>
                </Route>
                <Route path="/page-four">
                    <PageFour/>
                </Route>
                <Route path="/page-cta">
                    <PageCTA/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;

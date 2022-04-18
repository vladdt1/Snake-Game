import React, {FC} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {routes} from './list'
import Layout from '../layout/Layout'

const Routes:FC = () => {
    return(
        <Router>
            <Switch>
                {routes.map(route => {
                    return (
                        <Route
                            path={route.path}
                            exact={route.exact}
                            key={`route ${route.path}`}
                        >
                            <Layout >
                                <route.component />
                            </Layout >

                        </Route>
                    )
                })}
                {/*<Route component={Error404} /> */}
            </Switch>
        </Router>
    )
}

export default Routes
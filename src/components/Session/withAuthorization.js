import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import AuthUserContext from './context'
import { compose } from 'recompose'
import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'

const withAuthorization = condition => Component => {
    class WithAuthorization extends Component {
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push(ROUTES.SIGN_IN)
                    }
                },
            )
        }
        componentWillUnmount() {
            this.listener()
        }

        render() {
            return (
                <AuthUserContext.Consumer>
                    <Component {...this.props} />
                </AuthUserContext.Consumer>
            )
        }
    }

    return compose(
        withRouter,
        withFirebase,
    )(WithAuthorization)
}

export default withAuthorization
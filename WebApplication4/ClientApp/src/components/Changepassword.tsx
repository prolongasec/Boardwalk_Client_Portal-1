﻿import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import homepageLayout from './Layout';
import Accountsidebar from './Accountsidebar';
import NavMenu from './NavMenu';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as AccountsStore from '../store/Accounts';

var nodemailer = require('nodemailer');
type AccountsProps =
    AccountsStore.AccountsState// ... state we've requested from the Redux store
    & typeof AccountsStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{}>;
class Changepassword extends React.PureComponent<AccountsProps> {

    render() {
        return (
            <React.Fragment>
                <NavMenu />
                <div className='row'>
                    <div className='col-4'>
                        <Accountsidebar />
                    </div>
                    <div className='col-8'>
                        <div>
                            New Password:
                            <form action="/" method="get">
                                 < input id="newpwd" type="password" name="password" />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                        <br />
                        <br />
                        <div>
                            Verification Code:
                            <form action="/" method="get">
                                <input id="inputcode" type="text" name="inputcode" />
                                <input id="sendcode" type="button" value="sendcode" onClick={verificationcode} />
                                <input id="checkcode" type="button" value="checkcode" onClick={checkverfy} />
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
var num = 0;
function checkverfy() {
    var userinput = (document.getElementById("inputcode") as HTMLInputElement).value;
    alert(parseInt(userinput) == num);
}
function verificationcode() {
    let str = "";
    for (var i = 0; i < 4; i++) {
        str += Math.round(Math.random() * 9);
    }
    num = Math.round(parseInt(str));

    alert(num);
}

export default connect(
    (state: ApplicationState) => state.Policies, // Selects which state properties are merged into the component's props
    AccountsStore.actionCreators // Selects which action creators are merged into the component's props
)(Changepassword as any);


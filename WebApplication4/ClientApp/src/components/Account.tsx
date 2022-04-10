import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import homepageLayout from './Layout';
import Accountsidebar from './Accountsidebar'
import NavMenu from './NavMenu';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as AccountsStore from '../store/Accounts';
import { CustomAccordion } from './Accordion';

type AccountsProps =
    AccountsStore.AccountsState// ... state we've requested from the Redux store
    & typeof AccountsStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;

class Account extends React.PureComponent<AccountsProps> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestAccounts(startDateIndex);
    }
    private showAccounts() {
        console.log(this.props.Account);
        return (
            <div>
                {this.props.Account.map((d: AccountsStore.Accounts) =>
                    <div>
                        <CustomAccordion key={d.id} title={"Account Number: " + d.accountNumber.toString()}
                            content={<div>
                                <p>Business: {d.businessName}</p>
                                <p>Insurer: {d.currentInsurer}</p>
                                <p>Description: {d.description}</p>
                                <p>Full Time: {d.fullTime}</p>
                                <p>Part Time: {d.partTime}</p>
                            </div>} />
                        <br />
                    </div>
                )}
            </div>
        );
    }
    public render() {

        return (
            <React.Fragment>
                <NavMenu />
                <div className='row'>
                    <div className='col-4'>
                        <Accountsidebar />
                    </div>
                    <div className='col-8'>
                        {this.showAccounts()}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default connect(
    (state: ApplicationState) => state.Accounts, // Selects which state properties are merged into the component's props
    AccountsStore.actionCreators
)(Account as any);

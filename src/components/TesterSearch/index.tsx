import * as React from 'react';
import { connect } from 'react-redux';
import { SearchContainer, InputContainer, Input, ErrorBox } from './styled';
import { DATABASE, dbFindUser } from 'src/common/utils';
import {
    addTesterToTheTeam,
    setAdderOrSearcherType,
    IAddTesterToTheTeam,
    ISetAdderOrSearcherType
} from 'src/redux-store/actions';
import { ADDER_SEARCHER_TYPES } from '../AddSearchBox/utils';
import { IStoreSignature } from 'src/redux-store/utils';

interface IActions {
    addTesterToTheTeam: IAddTesterToTheTeam;
    setAdderOrSearcherType: ISetAdderOrSearcherType;
}
interface IState {
    username: string;
    loading: boolean;
    userNotFounderrorMessage: string | null;
    popOver: boolean;
}
class TesterSearch extends React.Component<
    IStoreSignature &
        IActions & { onErrorStateChange?: (error: string) => void },
    IState
> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            loading: false,
            userNotFounderrorMessage: null,
            popOver: false
        };
    }
    componentWillUpdate = (
        { onErrorStateChange }: any,
        { userNotFounderrorMessage }: IState
    ) => {
        if (userNotFounderrorMessage !== this.state.userNotFounderrorMessage) {
            if (onErrorStateChange) {
                onErrorStateChange(userNotFounderrorMessage);
            }
        }
    };

    render() {
        const { userNotFounderrorMessage, loading } = this.state;
        const errorCN = userNotFounderrorMessage ? ' with-error' : '';
        const popOverCalss = this.state.popOver ? ' pop-over' : '';
        return (
            <SearchContainer
                className={
                    'search-container not-hoverable' + errorCN + popOverCalss
                }
            >
                {loading ? this.renderLoading() : this.renderInput()}
            </SearchContainer>
        );
    }

    private renderLoading = () => {
        return <div>Loading</div>;
    };

    private renderInput = () => {
        const { username } = this.state;
        return [
            <InputContainer key={'input'} className="input-container">
                <Input
                    list="testers-names"
                    name="names"
                    placeholder="enter a user name"
                    value={username}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    onFocus={() => {
                        this.setState({ popOver: true });
                    }}
                />
                <span className="close" onClick={this.onCloseClicked}>
                    &#xd7;
                </span>
            </InputContainer>,
            this.renderDataListOrErrorMessage()
        ];
    };

    private renderDataListOrErrorMessage = () => {
        const { userNotFounderrorMessage } = this.state;
        return userNotFounderrorMessage !== null ? (
            <ErrorBox className="error-message" key={'error-box'}>
                <span>Team member not found</span>
                <span>
                    Maybe she/he is not in your{' '}
                    <span className="underlined">team?</span>
                </span>
            </ErrorBox>
        ) : (
            <datalist id="testers-names" key={'datalist'}>
                {this.renderDataListOptions()}
            </datalist>
        );
    };

    private renderDataListOptions = () => {
        return DATABASE.filter(dbUser => {
            const { testersList } = this.props;
            if (!testersList || testersList.length === 0) {
                return true;
            }
            const tester = testersList.find(t => t.id === dbUser.id);
            return tester ? false : true;
        }).map(({ id, username, role }) => (
            <option key={id} value={username}>
                {role}
            </option>
        ));
    };

    private onCloseClicked = () => {
        if (this.state.username === '') {
            this.props.setAdderOrSearcherType(ADDER_SEARCHER_TYPES.ADD);
        } else {
            this.setState({ username: '', userNotFounderrorMessage: null });
        }
    };

    private onChange = (e: any) => {
        this.setState({
            username: e.target.value,
            userNotFounderrorMessage: null
        });
    };

    private onKeyPress = async (e: any) => {
        if (e.charCode === 13) {
            this.setState(
                {
                    loading: true
                },
                this.search
            );
        }
    };

    private search = async () => {
        try {
            console.log('search');
            const user = await dbFindUser(this.state.username);
            this.setState(
                {
                    popOver: false,
                    loading: false,
                    username: ''
                },
                () => {
                    this.props.addTesterToTheTeam(user);
                }
            );
        } catch (error) {
            console.error(error);
            this.setState({
                loading: false,
                userNotFounderrorMessage: error.message
            });
        }
    };
}

const mapStateToProps = ({ testersList }: IStoreSignature) => ({ testersList });

const mapDispatchToProps = { addTesterToTheTeam, setAdderOrSearcherType };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TesterSearch);

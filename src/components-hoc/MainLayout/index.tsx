import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { MAX_TO_SHOW } from 'Components/TeamBox';
import { routesPathes } from 'Components/Routes';
import { COLORS } from 'Common/constants-css';
import { IStoreSignature } from 'ReduxStore/interfaces';
import { expandTestersList, IExpandTesterList } from 'ReduxStore/actions';
import {
    BorderTopContainer,
    Main,
    TitleBox,
    Title,
    ShowAll,
    TeamIcon
} from './styled';

class MainLayout extends React.Component<
    IStoreSignature & {
        expandTestersList: IExpandTesterList;
    } & RouteComponentProps
> {
    public render() {
        const { location } = this.props;
        const teamIconText =
            location.pathname === routesPathes.teamMemberPage
                ? 'home'
                : 'team page';
        return (
            <Main>
                <BorderTopContainer color={COLORS.$cc_green_middle}>
                    <TitleBox className="not-hoverable">
                        <Title>your team members list</Title>
                        <TeamIcon onClick={this.goToList}>
                            {teamIconText}
                        </TeamIcon>
                    </TitleBox>
                    {this.props.children}
                    {this.renderShowAllButton()}
                </BorderTopContainer>
            </Main>
        );
    }

    private renderShowAllButton = () => {
        const { testersList, testersListIsExpanded, location } = this.props;

        const hide = location.pathname === routesPathes.teamMemberPage;
        if (hide || !testersList || testersList.length <= MAX_TO_SHOW) {
            return null;
        }

        const text = testersListIsExpanded ? 'collapse' : 'show all';
        const arrowClassName = testersListIsExpanded
            ? 'arrow-top'
            : 'arrow-bottom';

        return (
            <ShowAll
                onClick={() =>
                    this.props.expandTestersList(!testersListIsExpanded)
                }
            >
                {text}
                <span className={'arrow ' + arrowClassName}>&#x2039;</span>
            </ShowAll>
        );
    };
    private goToList = () => {
        const { location, history } = this.props;
        if (location.pathname === routesPathes.teamMemberPage) {
            history.push(routesPathes.home);
        } else {
            history.push(routesPathes.teamMemberPage);
        }
    };
}

const mapStateToProps = ({
    testersList,
    testersListIsExpanded
}: IStoreSignature) => ({
    testersList,
    testersListIsExpanded
});

const mapDispatchToProps = { expandTestersList };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { pure: false }
)(withRouter(MainLayout));

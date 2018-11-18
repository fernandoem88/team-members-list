import * as React from 'react';
import { connect } from 'react-redux';
import TesterItem from 'Components/TesterItem';
import AddSearchBox from 'Components/AddSearchBox';
import { IStoreSignature } from 'ReduxStore/interfaces';
import { ITesterInfo, ReactStandarProps } from 'Common/interfaces';
import { ContentBox } from './styled';

export const MAX_TO_SHOW = 3;
class TeamBox extends React.Component<ReactStandarProps & IStoreSignature> {
    render() {
        return (
            <ContentBox className="testers-list">
                <AddSearchBox />
                {this.redenrTesters()}
            </ContentBox>
        );
    }
    private redenrTesters = () => {
        const { testersList } = this.props;
        return (
            testersList &&
            this.filterTesterToShow(testersList).map((user, index, self) => {
                return (
                    <TesterItem
                        key={user.id}
                        {...user}
                        className="tester-card"
                    />
                );
            })
        );
    };

    private filterTesterToShow = (testersList: ITesterInfo[]) => {
        const { testersListIsExpanded } = this.props;
        return testersList.length <= MAX_TO_SHOW || testersListIsExpanded
            ? testersList
            : testersList.filter((t, i) => i < MAX_TO_SHOW);
    };
}

const mapStateToProps = ({
    testersList,
    testersListIsExpanded = false
}: IStoreSignature) => ({ testersList, testersListIsExpanded });

export default connect(mapStateToProps)(TeamBox);

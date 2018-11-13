import * as React from 'react';
import { connect } from 'react-redux';
import { ContentBox } from './styled';
import TesterItem from '../TesterItem';
import AddSearchBox from '../AddSearchBox';
import { IStoreSignature } from 'src/redux-store/utils';
import { ITesterInfo, ReactStandarProps } from 'src/common/interfaces';

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

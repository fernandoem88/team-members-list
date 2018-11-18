import * as React from 'react';
import { connect } from 'react-redux';
import Roller from 'Components/Roller';
import { ITesterInfo } from 'Common/interfaces';
import { DATABASE, generateRandomColor } from 'Common/utils';
import { IStoreSignature } from 'ReduxStore/interfaces';
import { AdderBox, CenterInParent } from './styled';

export class InfiniteRoller extends React.Component<
    { testersList: ITesterInfo[] },
    { currentChildIndex: number }
> {
    private rollingTimeoutId: NodeJS.Timeout;
    private colors: string[] = [];
    constructor(props: any) {
        super(props);
        this.state = {
            currentChildIndex: 0
        };
    }

    componentWillMount = () => {
        this.colors = DATABASE.map(generateRandomColor);
    };

    componentDidMount = () => {
        setTimeout(this.toggleRoller, 1000);
    };
    componentWillUnmount = () => {
        clearTimeout(this.rollingTimeoutId);
    };

    render() {
        return (
            <CenterInParent className="center-in-parent">
                {this.renderRoller()}
            </CenterInParent>
        );
    }

    private renderRoller = () => {
        return (
            <Roller
                containerStyle={{
                    minHeight: '4rem',
                    margin: '1.6rem auto',
                    width: '100%'
                }}
                nextChildIndex={this.state.currentChildIndex}
                duration={800}
                onRollingDone={this.onRollingDone}
            >
                {this.renderCards()}
            </Roller>
        );
    };

    private renderCards = () => {
        const { testersList } = this.props;
        return testersList.length === 0 ? (
            <div className="no-members">no memebers found</div>
        ) : (
            this.props.testersList.map((user, index, arr) => {
                return (
                    <Roller.Child key={index}>
                        <AdderBox
                            key={index}
                            style={{ background: this.colors[index] }}
                        >
                            ({index + 1}) {user.username}
                        </AdderBox>
                    </Roller.Child>
                );
            })
        );
    };

    private toggleRoller = () => {
        const nextIndex =
            (this.state.currentChildIndex + 1) % this.props.testersList.length;
        this.setState({
            currentChildIndex: nextIndex
        });
    };

    private onRollingDone = (index: number) => {
        // console.log(`the child with index ${index} is rolled up`);
        this.rollingTimeoutId = setTimeout(this.toggleRoller, 1000);
    };
}

const mapReducers = ({ testersList }: IStoreSignature) => ({ testersList });

export default connect(mapReducers)(InfiniteRoller);

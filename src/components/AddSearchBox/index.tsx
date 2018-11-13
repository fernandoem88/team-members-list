import * as React from 'react';
import { connect } from 'react-redux';
import Roller from '../Roller';
import AddTester from '../AddTester';
import TesterSearch from '../TesterSearch';
import { IStoreSignature } from 'src/redux-store/utils';
import { ADDER_SEARCHER_TYPES, IAddSearchProps } from './utils';
import { setAdderOrSearcherType } from 'src/redux-store/actions';

class AddSearchBox extends React.Component<
    IAddSearchProps,
    { currentChildIndex: number; status: ADDER_SEARCHER_TYPES; zIndex: number }
> {
    private rollerChildNames = [
        ADDER_SEARCHER_TYPES.ADD,
        ADDER_SEARCHER_TYPES.SEARCH
    ];
    constructor(props: any) {
        super(props);
        this.state = {
            currentChildIndex: 0,
            status: this.getInitialStatusType(),
            zIndex: 1
        };
    }
    componentWillMount = () => {
        const { adderSearcherType, setAdderOrSearcherType: cb } = this.props;

        if (adderSearcherType !== ADDER_SEARCHER_TYPES.ADD && cb) {
            cb(ADDER_SEARCHER_TYPES.ADD);
        }
    };

    componentWillReceiveProps = (nextProps: IAddSearchProps) => {
        const { adderSearcherType } = nextProps;
        const nextChildIndex = adderSearcherType
            ? this.rollerChildNames.indexOf(adderSearcherType)
            : -1;
        if (
            nextChildIndex >= 0 &&
            nextChildIndex !== this.state.currentChildIndex
        ) {
            const status = adderSearcherType
                ? adderSearcherType
                : this.state.status;
            this.setState({
                currentChildIndex: nextChildIndex,
                status
            });
        }
    };

    render() {
        const { zIndex } = this.state;
        return (
            <Roller
                duration={600}
                nextChildIndex={this.state.currentChildIndex}
                containerStyle={{ minHeight: '7.2rem', zIndex }}
                onRollingDone={this.onRollingDone}
            >
                <Roller.Child
                    rollerChildname={ADDER_SEARCHER_TYPES.ADD}
                    style={{ minHeight: '7.2rem' }}
                >
                    <AddTester />
                </Roller.Child>
                <Roller.Child rollerChildname={ADDER_SEARCHER_TYPES.SEARCH}>
                    <TesterSearch onErrorStateChange={this.setZIndex} />
                </Roller.Child>
            </Roller>
        );
    }

    // private getInitialIndex = () => {
    //     return this.rollerChildNames.indexOf(this.getInitialStatusType());
    // };
    private getInitialStatusType = () => {
        const { adderSearcherType = ADDER_SEARCHER_TYPES.ADD } = this.props;
        return adderSearcherType;
    };

    private setZIndex = (error: any) => {
        if (error) {
            if (this.state.zIndex === 1) {
                // to be on top on the "remove user" tooltip
                this.setState({ zIndex: 4 });
            }
        } else {
            if (this.state.zIndex !== 1) {
                this.setState({ zIndex: 1 });
            }
        }
    };

    private onRollingDone = (index: number, rollerChildName?: string) => {
        // console.log(
        //     `the child ${rollerChildName} with index ${index} is rolled up`
        // );
    };
}

const mapStateToProps = ({ adderSearcherType }: IStoreSignature) => ({
    adderSearcherType
});

const mapDispatchToProps = { setAdderOrSearcherType };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddSearchBox);

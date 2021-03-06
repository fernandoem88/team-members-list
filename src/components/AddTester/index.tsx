import * as React from 'react';
import { connect } from 'react-redux';
import { ADDER_SEARCHER_TYPES } from 'Components/AddSearchBox/interfaces';
import { ItemBox } from 'Components/common-styled';
import { setAdderOrSearcherType } from 'ReduxStore/actions';
import { AddIcon, AddText } from './styled';

export interface IAddTester {
    setAdderOrSearcherType?: (payload: ADDER_SEARCHER_TYPES) => any;
}

class AddTester extends React.Component<IAddTester> {
    render() {
        return (
            <ItemBox>
                <AddIcon onClick={this.showSearchBox}>&#43;</AddIcon>
                <AddText>Add team member to this test</AddText>
            </ItemBox>
        );
    }
    private showSearchBox = () => {
        // console.log('showSearchBox');
        const { setAdderOrSearcherType: cb } = this.props;
        if (cb) {
            cb(ADDER_SEARCHER_TYPES.SEARCH);
        }
    };
}

const mapDispatch = {
    setAdderOrSearcherType
};

export default connect(
    null,
    mapDispatch
)(AddTester);

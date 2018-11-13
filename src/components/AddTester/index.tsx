import * as React from 'react';
import { ItemBox } from '../common-styled';
import { AddIcon, AddText } from './styled';
import { connect } from 'react-redux';
import { setAdderOrSearcherType } from 'src/redux-store/actions';
import { ADDER_SEARCHER_TYPES } from '../AddSearchBox/utils';

export class AddTester extends React.Component<{
    setAdderOrSearcherType: (payload: ADDER_SEARCHER_TYPES) => any;
}> {
    render() {
        return (
            <ItemBox>
                <AddIcon onClick={this.showSearchBox}>&#43;</AddIcon>
                <AddText>Add team member to this test</AddText>
            </ItemBox>
        );
    }
    private showSearchBox = () => {
        console.log('showSearchBox');
        this.props.setAdderOrSearcherType(ADDER_SEARCHER_TYPES.SEARCH);
    };
}

const mapDispatch = {
    setAdderOrSearcherType
};

export default connect(
    null,
    mapDispatch
)(AddTester);

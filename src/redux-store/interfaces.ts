import { ADDER_SEARCHER_TYPES } from 'Components/AddSearchBox/interfaces';
import { ITesterInfo } from 'Common/interfaces';

// enums
export enum ACTION_TYPES {
    ADD_MORE_TESTERS_TO_THE_TEAM = 'ADD_MORE_TESTERS_TO_THE_TEAM',
    ADD_TESTER_TO_THE_TEAM = 'ADD_TESTER_TO_THE_TEAM',
    EXPEND_TESTERS_LIST = 'EXPEND_TESTERS_LIST',
    REMOVE_TESTER_FROM_THE_TEAM = 'REMOVE_TESTER_FROM_THE_TEAM',
    SET_ADDER_OR_SEARCHER_TYPE = 'SET_ADDER_OR_SEARCHER_TYPE'
}

// interfaces
export interface IActionSignature {
    type: ACTION_TYPES;
    payload: any;
}

export interface IStoreSignature {
    adderSearcherType?: ADDER_SEARCHER_TYPES;
    testersList?: ITesterInfo[];
    testersListIsExpanded?: boolean;
}

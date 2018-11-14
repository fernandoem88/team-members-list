import { ACTION_TYPES, IActionSignature } from '../utils';
import { ADDER_SEARCHER_TYPES } from 'src/components/AddSearchBox/interfaces';
import { ITesterInfo } from 'src/common/interfaces';

export type ISetAdderOrSearcherType = (
    payload: ADDER_SEARCHER_TYPES
) => IActionSignature;
export const setAdderOrSearcherType: ISetAdderOrSearcherType = payload => {
    console.log('setAdderOrSearcherType');
    return { payload, type: ACTION_TYPES.SET_ADDER_OR_SEARCHER_TYPE };
};

export type IAddTesterToTheTeam = (payload: ITesterInfo) => IActionSignature;
export const addTesterToTheTeam: IAddTesterToTheTeam = payload => {
    console.log('addTesterToTheTeam');
    return { type: ACTION_TYPES.ADD_TESTER_TO_THE_TEAM, payload };
};

export type IAddMoreTestersToTheTeam = (
    payload: ITesterInfo[]
) => IActionSignature;
export const addMoreTestersToTheTeam: IAddMoreTestersToTheTeam = payload => {
    console.log('addTesterToTheTeam');
    return { type: ACTION_TYPES.ADD_MORE_TESTERS_TO_THE_TEAM, payload };
};

export type IRemoveTesterFromTheTeam = (id: number) => IActionSignature;
export const removeTesterFromTheTeam: IRemoveTesterFromTheTeam = payload => {
    console.log('removeTesterFromTheTeam');
    return { type: ACTION_TYPES.REMOVE_TESTER_FROM_THE_TEAM, payload };
};

export type IExpandTesterList = (payload: boolean) => IActionSignature;
export const expandTestersList: IExpandTesterList = payload => {
    console.log('expandTestersList');
    return { type: ACTION_TYPES.EXPEND_TESTERS_LIST, payload };
};

import { IActionSignature, ACTION_TYPES } from '../utils';
import { ADDER_SEARCHER_TYPES } from 'src/components/AddSearchBox/utils';
import { ITesterInfo } from 'src/common/interfaces';

/**
 * @description
 */
export const adderSearcherType = (
    status: ADDER_SEARCHER_TYPES = ADDER_SEARCHER_TYPES.ADD,
    { payload, type }: IActionSignature
) => {
    return type === ACTION_TYPES.SET_ADDER_OR_SEARCHER_TYPE ? payload : status;
};

/**
 * @description This reducer returns the list of the tester adding one or more tester to the list.
 */
export const testersList = (
    status: ITesterInfo[] = [],
    { payload, type }: IActionSignature
) => {
    switch (type) {
        case ACTION_TYPES.ADD_TESTER_TO_THE_TEAM:
            return status.find(u => u.id === payload.id)
                ? status
                : [payload, ...status];
        case ACTION_TYPES.ADD_MORE_TESTERS_TO_THE_TEAM:
            return payload.concat(status);
        case ACTION_TYPES.REMOVE_TESTER_FROM_THE_TEAM:
            return status.filter(t => t.id !== payload);
        default:
            return status;
    }
};
/**
 *
 * @param status current status of the testers list
 * @param params
 */
export const testersListIsExpanded = (
    status: boolean = false,
    { payload, type }: IActionSignature
) => {
    return type === ACTION_TYPES.EXPEND_TESTERS_LIST ? payload : status;
};

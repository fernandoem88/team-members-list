import { IStoreSignature } from 'ReduxStore/interfaces';
import { ISetAdderOrSearcherType } from 'ReduxStore/actions';

export enum ADDER_SEARCHER_TYPES {
    ADD = 'adder',
    SEARCH = 'searcher'
}

export interface IAddSearchProps extends IStoreSignature {
    adderSearcherType?: ADDER_SEARCHER_TYPES;
    setAdderOrSearcherType?: ISetAdderOrSearcherType;
}

export interface IAddSearchState {
    currentChildIndex: number;
    status: ADDER_SEARCHER_TYPES;
    zIndex: number;
}

import {
    IAddTesterToTheTeam,
    ISetAdderOrSearcherType
} from 'ReduxStore/actions';
import { IStoreSignature } from 'ReduxStore/interfaces';

export interface IActions {
    addTesterToTheTeam: IAddTesterToTheTeam;
    setAdderOrSearcherType: ISetAdderOrSearcherType;
}
export interface IState {
    username: string;
    loading: boolean;
    userNotFounderrorMessage: string | null;
    popOver: boolean;
}

export type ITesterSearchProps = IStoreSignature &
    IActions & { onErrorStateChange?: (error: string) => void };

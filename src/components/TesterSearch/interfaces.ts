import {
    IAddTesterToTheTeam,
    ISetAdderOrSearcherType
} from 'src/redux-store/actions';
import { IStoreSignature } from 'src/redux-store/utils';

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

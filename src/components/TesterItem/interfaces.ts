import { ITesterInfo, ReactStandarProps } from 'Common/interfaces';
import { IStoreSignature } from 'ReduxStore/interfaces';
import { IRemoveTesterFromTheTeam } from 'ReduxStore/actions';

export type ITesterItemProps = ReactStandarProps &
    IStoreSignature & {
        removeTesterFromTheTeam?: IRemoveTesterFromTheTeam;
    } & ITesterInfo;

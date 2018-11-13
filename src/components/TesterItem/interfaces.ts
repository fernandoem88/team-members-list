import { ITesterInfo, ReactStandarProps } from 'src/common/interfaces';
import { IStoreSignature } from 'src/redux-store/utils';
import { IRemoveTesterFromTheTeam } from 'src/redux-store/actions';

export type ITesterItemProps = ReactStandarProps &
    IStoreSignature & {
        removeTesterFromTheTeam?: IRemoveTesterFromTheTeam;
    } & ITesterInfo;

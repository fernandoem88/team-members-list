import { ReactElement } from 'react';
import { ReactStandarProps } from 'Common/interfaces';

export type IRollerChild = ReactElement<ReactStandarProps & IRollerChildProps>;

export interface IRollerProps {
    nextChildIndex?: number | null;
    containerStyle?: React.CSSProperties;
    duration: number;
    onRollingDone?: (index: number | null, rollerChildname?: string) => void;
    children?: IRollerChild | IRollerChild[];
}
export interface IRollerState {
    previousChildIndex: number | null;
    currentChildIndex: number | null;
    nextChildIndex: number | null;
}

export interface IRollerChildProps {
    rollerChildname?: string;
}

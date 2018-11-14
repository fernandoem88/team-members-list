import styled from 'styled-components';
import { reactCssObjectToStandardCssString } from 'src/common/utils';
import { IRollerChildProps } from './interfaces';

const IRollerContainer = styled.div<{ containerStyle?: React.CSSProperties }>``;
export const RollerContainer = styled(IRollerContainer)`
    position: relative;
    text-align: center;
    &.rolling {
        overflow: hidden;
    }
    ${props => reactCssObjectToStandardCssString(props.containerStyle)};
`;

const IRollerChild = styled.div<IRollerChildProps>``;
export const RollerChild = styled(IRollerChild)`
    &:not(.current-rolling-item) {
        position: absolute;
    }
    width: 100%;
    ${RollerContainer}.rolling & {
        pointer-events: none;
    }
`;

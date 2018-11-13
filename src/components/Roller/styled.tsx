import styled from 'styled-components';
import { reactCssObjectToStandardCssString } from 'src/common/utils';
import { IRollerChildProps } from './utils';
import { COLORS } from 'src/common/constants-css';

const IRollerContainer = styled.div<{ containerStyle?: React.CSSProperties }>``;
export const RollerContainer = styled(IRollerContainer)`
    position: relative;
    text-align: center;
    &.rolling {
        overflow: hidden;
        /* border-right: solid 1px ${COLORS.$cc_grey_light}; */
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

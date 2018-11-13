import styled from 'styled-components';
import { COLORS, SPACING } from 'src/common/constants-css';

export const BoxWithColoredBorderTop = styled.div<{ color: string }>`
    border: solid 0.1rem ${COLORS.$cc_grey_light};
    border-top: solid 0.3rem ${props => props.color};
    background: ${COLORS.$cc_white};
    padding: 1.2rem;
    margin-bottom: 2.4rem;
`;

const itemBoxContentHeight = 4; // rem
const itemBoxTopAndBottomPadding = SPACING.$sp_lg;
const iconLeftAndRightPadding = SPACING.$sp_md;
const itemBoxHeight = itemBoxContentHeight + 2 * itemBoxTopAndBottomPadding;
/**
 *  @description This box's height is 7.2rem with padding 1.6rem 0
 */
export const ItemBox = styled.div`
    position: relative;
    height: ${itemBoxHeight}rem;
    line-height: ${itemBoxContentHeight}rem;
    /* border: solid 1px black; */
    padding: ${itemBoxTopAndBottomPadding}rem 0;
    text-align: center;
    background: ${COLORS.$cc_white};
    &:hover:not(.not-hoverable) {
        background: ${COLORS.$cc_green_light};
    }

    display: grid;
    grid-template-columns: ${itemBoxContentHeight +
            2 * iconLeftAndRightPadding}rem 1fr;
`;

export const ItemIcon = styled.span`
    position: relative;
    width: 4rem;
    height: 4rem;
    background: ${COLORS.$cc_green_light};
    color: ${COLORS.$cc_green_dark};
    margin: auto;
    border-radius: 50%;
    font-size: 2rem;
    cursor: pointer;
    ${ItemBox}:hover & {
        background: ${COLORS.$cc_white};
    }
`;

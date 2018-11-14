import styled, { keyframes } from 'styled-components';
import { COLORS } from 'src/common/constants-css';
import { ItemIcon, ItemBox } from '../common-styled';

const enterKeyframe = keyframes`
    0% { transform: translateY(-1rem); opacity: 0}
    20% { transform: translateY(-.5rem); opacity: .6}
    100% {transform: translateY(0%); opacity: 1}
`;
const exitKeyframe = keyframes`
    0% { transform: translateY(0%); opacity: 1}
    20% { transform: translateY(-1rem); opacity: .4}
    100% {transform: translateY(-2rem); opacity: 0}
`;

export const Card = styled(ItemBox)`
    animation-timing-function: ease;
    animation-fill-mode: backwards;
    animation: ${enterKeyframe} 500ms;
    &.exiting {
        animation-fill-mode: forwards;
        animation: ${exitKeyframe} 200ms;
    }
    &:hover {
        &::before, &::after {
            animation-timing-function: ease;
            animation-fill-mode: backwards;
            animation: ${enterKeyframe} 200ms;
            z-index: 3;
        }
        &::before {
            content: 'Remove user';
            position: absolute;
            background: ${COLORS.$cc_white};
            width: 10rem;
            height: 2.4rem;
            padding: 0.2rem;
            line-height: 2rem;
            color: black;
            font-size: 1.2rem;
            top: -1.6rem;
            left: 0;
            /* border: solid 1px ${COLORS.$cc_grey_light}; */
            box-shadow: 0 3px 3px ${COLORS.$cc_grey_light};
            border-radius: 3px;
        }
        &::after {
            content: '.';
            color: transparent;
            position: absolute;
            width: 0; 
            height: 0; 
            border-left: .8rem solid transparent;
            border-right: .8rem solid transparent;
            border-top: .8rem solid ${COLORS.$cc_white};
            top: 0.8rem;
            left: 2.2rem;
        }
    }
`;
export const TesterCloseIcon = styled(ItemIcon)`
    ${Card}:hover & {
        color: ${COLORS.$cc_orange};
        border: solid 1px ${COLORS.$cc_orange};
        line-height: 3.8rem;
        background: ${COLORS.$cc_white};
    }
`;

const ImgStyle = styled.img`
    font-size: 1rem;
`;
export const TesterImage = ItemIcon.withComponent(ImgStyle);

export const UserRoleAndName = styled.span`
    position: relative;
    display: block;
    height: 100%;
    & > * {
        display: block;
        position: relative;
        height: 2rem;
        line-height: 2rem;
        text-align: left;
        color: ${COLORS.$cc_green_dark};
    }
    & .role {
        font-size: 1.2rem;
    }
    & .username {
        font-size: 1.6rem;
        font-weight: 600;
    }
    & .external-mark {
        color: ${COLORS.$cc_orange};
        margin-left: 0.2rem;
        font-size: 1.6rem;
        font-weight: 600;
    }
`;

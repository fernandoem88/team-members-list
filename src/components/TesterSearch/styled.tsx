import styled from 'styled-components';
import { COLORS, SPACING } from 'Common/constants-css';
import { ItemBox } from 'Components/common-styled';

export const SearchContainer = styled(ItemBox)`
    display: block;
    background: ${COLORS.$cc_white};
    min-height: 7.2rem;
    border: solid 1px ${COLORS.$cc_grey_light};

    &.pop-over {
        position: absolute;
        width: 100%;
        box-shadow: 0 0 10px ${COLORS.$cc_grey_light};
        transition: height 0.2s;
    }
    &.with-error {
        height: 12rem;
    }
`;

export const InputContainer = styled.div`
    position: relative;
    height: 3rem;
    margin: 0 ${SPACING.$sp_md}rem;
    & span.close {
        position: absolute;
        color: ${COLORS.$cc_orange};
        right: 0;
        bottom: 0.7rem;
        height: 1.6rem;
        font-size: 1.6rem;
        line-height: 1.6rem;
        cursor: pointer;
    }
`;

export const Input = styled.input`
    position: absolute;
    left: 0;
    top: 0;
    border: none;
    border-bottom: solid 1px ${COLORS.$cc_green_middle};
    height: 100%;
    width: 100%;
    &:focus {
        border: none;
        outline: none;
        box-shadow: 0 0 0;
        border-bottom: solid 1px ${COLORS.$cc_green_middle};
    }
    &::-webkit-calendar-picker-indicator {
        display: none;
    }
`;
export const ErrorBox = styled.span`
    position: relative;
    display: inline-block;
    height: 6rem;
    padding: 1.6rem 1rem;
    line-height: 1.2rem;
    font-size: 10px;
    text-align: center;
    margin: auto;
    & > * {
        display: block;
        width: 100%;
        text-align: left;
    }
    & > :first-child {
        font-size: 12px;
        color: ${COLORS.$cc_green_middle};
        font-weight: 600;
    }
    & .underlined {
        text-decoration: underline;
        text-decoration-color: ${COLORS.$cc_orange};
    }
`;

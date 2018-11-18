import styled from 'styled-components';
import { SPACING, DEVICE_WIDTH_TYPES, COLORS } from 'Common/constants-css';
import { BoxWithColoredBorderTop } from 'Components/common-styled';

export const Main = styled.div`
    /* mobile style under MD */
    position: absolute;
    text-align: center;
    padding: ${SPACING.$sp_lg}rem;
    padding-top: 3rem;
    height: 100vh;
    width: 100vw;
    margin: auto;

    @media (min-width: ${DEVICE_WIDTH_TYPES.MD.min}px) {
        /* tablette, laptop, ...*/
        padding: 3rem;
    }
`;

export const BorderTopContainer = styled(BoxWithColoredBorderTop)`
    position: relative;
    padding: ${SPACING.$sp_standare}rem;
    /* background: yellow; */
    margin: auto;
    width: 100%;
    max-width: 60rem;
`;

export const TitleBox = styled.div`
    position: relative;
    display: grid;
    height: 1.6rem;
    line-height: 1.6rem;
    grid-template-columns: 1fr 7rem;
    /* border: solid 1px red; */
    & > :nth-child(1) {
        text-align: left;
    }
    @media (min-width: ${DEVICE_WIDTH_TYPES.MD.min}px) {
        height: 2.4rem;
        line-height: 2.4rem;
    }
`;

export const Title = styled.span`
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
    @media (min-width: ${DEVICE_WIDTH_TYPES.MD.min}px) {
        font-size: 2.4rem;
    }
`;

export const TeamIcon = styled.div`
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    padding: 0 0.2rem;
    &:hover {
        background: ${COLORS.$cc_green_light};
    }
`;

export const ShowAll = styled.div`
    position: absolute;
    height: ${SPACING.$sp_standare}rem;
    line-height: ${SPACING.$sp_standare}rem;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${COLORS.$cc_green_light};
    text-transform: uppercase;
    cursor: pointer;
    & .arrow {
        display: inline-block;
        text-align: center;
        height: ${SPACING.$sp_standare}rem;
        width: ${SPACING.$sp_standare}rem;
        line-height: ${SPACING.$sp_standare}rem;
    }

    & .arrow-bottom {
        transform: rotate(-90deg);
    }
    & .arrow-top {
        transform: rotate(90deg);
    }
`;

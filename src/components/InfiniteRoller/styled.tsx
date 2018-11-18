import styled from 'styled-components';
import { IRollerChildProps } from 'Components/Roller/interfaces';
import { COLORS, SPACING } from 'Common/constants-css';

const IAdderBox = styled.div<IRollerChildProps>``;
export const AdderBox = styled(IAdderBox)`
    margin: auto;
    color: ${COLORS.$cc_white};
    text-align: center;
    width: 100%;
    height: 4rem;
    line-height: 4rem;
`;

export const CenterInParent = styled.div`
    position: relative;
    margin-top: ${SPACING.$sp_lg}rem;
    border: solid 1px ${COLORS.$cc_grey_light};
    height: 15rem;
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
    & > div {
        position: relative;
        max-width: 20rem;
    }
    & .no-members {
        background: red;
        color: ${COLORS.$cc_white};
        font-weight: 600;
        letter-spacing: 2;
        padding: 1rem 0;
    }
`;

import styled from 'styled-components';

import { SPACING, DEVICE_WIDTH_TYPES } from 'src/common/constants-css';

export const ContentBox = styled.div`
    /* mobile -> one column */
    position: relative;
    padding-top: ${SPACING.$sp_lg}rem;
    width: 100%;

    @media (min-width: ${DEVICE_WIDTH_TYPES.MD.min}px) {
        /* tablette, laptop...*/
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

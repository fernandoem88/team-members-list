import styled from 'styled-components';
import { COLORS, SPACING, DEVICE_WIDTH_TYPES } from 'src/common/constants-css';
import { ItemIcon } from '../common-styled';

export const AddIcon = styled(ItemIcon)`
    color: ${COLORS.$cc_green_middle};
`;

export const AddText = styled.span`
    padding-right: ${SPACING.$sp_md}rem;
    text-align: left;
    color: ${COLORS.$cc_green_middle};
    font-weight: 600;
    @media (min-width: ${DEVICE_WIDTH_TYPES.MD.min}px) {
        line-height: 2rem;
    }
`;

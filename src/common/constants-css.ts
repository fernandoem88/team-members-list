/**
 * standard values in px
 */
export const DEVICE_WIDTH_TYPES = {
    XS: { max: 575, name: 'xs' },
    SM: { min: 575, max: 767, name: 'sm' },
    MD: { min: 768, max: 998, name: 'md' },
    LG: { min: 999, max: 1299, name: 'lg' },
    XL: { min: 1300, max: 1599, name: 'xl' },
    XXL: { min: 1600, name: 'xxl' }
};

export const COLORS = {
    $cc_green_dark: '#183c37',
    $cc_green_light: '#def5e9',
    $cc_green_middle: '#008782',
    $cc_grey_light: '#eeeeee', // for background
    $cc_grey_middle: '#9e9e9e', // for borders
    $cc_orange: '#ff9e70',
    $cc_white: '#ffffff'
};
/**
 * Values are in rem => 1rem = 10px
 */
export const SPACING = {
    $sp_standare: 2.5, // bootstrap
    $sp_lg: 1.6, // dark green
    $sp_md: 1, // light green
    $sp_sm: 0.8 // orange
};

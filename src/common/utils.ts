import { ITesterInfo } from './interfaces';

export const DATABASE: ITesterInfo[] = [
    {
        username: 'Max Mustermann',
        role: 'Admin',
        picture: 'avatar-default.png',
        id: 1
    },
    {
        username: 'Erika Mustermann',
        role: 'Internal',
        picture: 'avatar-default.png',
        id: 2
    },
    {
        username: 'Minta J\u00e1nos',
        role: 'Internal',
        picture: 'avatar-default.png',
        id: 3
    },
    {
        username: 'Minta Kata',
        role: 'External',
        picture: 'avatar-default.png',
        id: 4
    },
    {
        username: 'Jin-Soo Kwon',
        role: 'Internal',
        picture: 'avatar-default.png',
        id: 5
    },
    {
        username: 'Sun-Hwa Kwon',
        role: 'Internal',
        picture: 'avatar-default.png',
        id: 6
    },
    {
        username: 'Desmond Hume',
        role: 'Admin',
        picture: 'avatar-default.png',
        id: 7
    },
    {
        username: 'Duncan Idaho',
        role: 'External',
        picture: 'avatar-default.png',
        id: 8
    },
    {
        username: 'Georgia Lass',
        role: 'External',
        picture: 'avatar-default.png',
        id: 9
    },
    {
        username: 'Betty Rhomer',
        role: 'Internal',
        picture: 'avatar-default.png',
        id: 10
    }
];
/**
 * @description Returns a promise that resolves  a ITesterInfo type or rejects an Error with 404_not_found name
 * @param username the username of the user to find
 */
export const dbFindUser = (username: string) => {
    return new Promise<ITesterInfo>(
        (resolve: (t: ITesterInfo) => void, reject: (err: Error) => void) => {
            setTimeout(() => {
                const tester = DATABASE.find(
                    d =>
                        d.username.toLowerCase() ===
                        username.toLocaleLowerCase().trim()
                );
                if (tester) {
                    resolve(tester);
                } else {
                    const error = new Error();
                    error.message = `Team member  with name ${username} not found`;
                    error.name = '404_not_found';
                    reject(error);
                }
            }, 1000);
        }
    );
};

/**
 *
 * @param str string to convert to a dash-case.
 */
export const toDashCase = (str: string) => {
    return str.replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase());
};

export const reactCssObjectToStandardCssString = (reactCss?: {}) => {
    if (!reactCss) {
        return '';
    }
    return Object.keys(reactCss).reduce((cssString, property) => {
        return cssString + `${toDashCase(property)}: ${reactCss[property]};`;
    }, '');
};

export const generateRandomColor = (): string => {
    const eeeeeeNumber = parseInt('eeeeee', 16);
    const colorNumber = Math.floor(Math.random() * eeeeeeNumber); // index * colorBlockNumber;
    const color = colorNumber.toString(16);
    const zeros = new Array(6 - color.length).fill('0').join('');
    return '#' + color + zeros;
};

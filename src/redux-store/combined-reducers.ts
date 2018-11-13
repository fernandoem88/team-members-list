import { combineReducers } from 'redux';
import {
    adderSearcherType,
    testersList,
    testersListIsExpanded
} from './reducers';

export default combineReducers({
    adderSearcherType,
    testersList,
    testersListIsExpanded
});

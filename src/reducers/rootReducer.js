import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import numAjaxRequestsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    numAjaxRequestsInProgress
});

export default rootReducer;
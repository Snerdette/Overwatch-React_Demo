import * as actionTypes from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import { initiateAjaxRequest } from './ajaxStatusActions';

//Action Creators
export function loadAuthorsSuccess(authors) {
    return {
        type: actionTypes.LOAD_AUTHORS_SUCCESS,
        authors
    };
}

export function loadAuthors() {
    return dispatch => {
        dispatch(initiateAjaxRequest());
        return authorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw (error);
        });
    };
}

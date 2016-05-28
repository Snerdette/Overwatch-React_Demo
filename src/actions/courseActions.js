import * as actionTypes from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { initiateAjaxRequest, ajaxRequestError } from './ajaxStatusActions';

//Action Creators
export function loadCoursesSuccess(courses) {
    return {
        type: actionTypes.LOAD_COURSES_SUCCESS,
        courses
    };
}

export function createCourseSuccess(course) {
    return {
        type: actionTypes.CREATE_COURSE_SUCCESS,
        course
    };
}

export function updateCourseSuccess(course) {
    return {
        type: actionTypes.UPDATE_COURSE_SUCCESS,
        course
    };
}

export function loadCourses() {
    return dispatch => {
        dispatch(initiateAjaxRequest());
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw (error);
        });
    };
}

export function saveCourse(course) {
    return (dispatch, getState) => {
        dispatch(initiateAjaxRequest());
        return courseApi.saveCourse(course).then( course => {
            course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
        }).catch( error => {
            dispatch(ajaxRequestError());
            throw (error);
        });
    };
}
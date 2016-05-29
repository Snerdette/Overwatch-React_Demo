import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
    it('Should handle creating courses', () => {
       //set up
        const store = createStore(rootReducer, initialState);
        const course = {
            title: 'Test Code'
        };

        //action
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        //assert
        const actualResult = store.getState().courses[0];
        const expectedResult = {
            title: 'Test Code'
        };

        expect(actualResult).toEqual(expectedResult);
    });
});

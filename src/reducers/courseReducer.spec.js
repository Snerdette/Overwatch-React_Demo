import expect from 'expect';
import courseReducer from './courseReducer';
import * as courseActions from '../actions/courseActions';


describe('Course Reducer', () => {
    it('Should add course when passed CREATE_COURSE_SUCCESS', () => {
        //set up
        const initialState = [
            {title: 'A'},
            {title: 'B'}
        ];

        const newCourse = {title: 'C'};

        const action = courseActions.createCourseSuccess(newCourse);

        //perform
        const newState = courseReducer(initialState, action);

        //assertion
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });

    it('Should update course when passed UPDATE_COURSE_SUCCESS', () => {
        //set up
        const initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'},
            {id: 'C', title: 'C'}
        ];

        const newCourse = {id: 'B', title: 'New Title'};

        const action = courseActions.updateCourseSuccess(newCourse);

        //perform
        const newState = courseReducer(initialState, action);
        const updatedCourse = newState.find(a => a.id == newCourse.id);
        const untouchedCourse = newState.find(a => a.id == 'A' );

        //assertion
        expect(updatedCourse.title).toEqual('New Title');
        expect(untouchedCourse.title).toEqual('A');
        expect(newState.length).toEqual(3);
    });
});
import expect from 'expect';
import * as courseActions from './courseActions';
import * as actionTypes from './actionTypes';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

//Test ASYNC Action
describe('Course Actions', () => {
   describe('createCourseSuccess', () => {
      it('Should create a CREATE_COURSE_SUCCESS action', () => {
          //arrange
          const course = {id: 'test-code', title: 'test-title' };
          const expectedAction = {
              type: actionTypes.CREATE_COURSE_SUCCESS,
              course
          };

          //action
          const action = courseActions.createCourseSuccess(course);

          //assert
          expect(action).toEqual(expectedAction);
      });
   });
});

//Test THUNK
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('ASYNC Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('Should create INITIATE_AJAX_REQUEST and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        //Nock set up example
        //nock('http://example.com')
        //    .get('/courses')
        //    .reply(200, { body: { course: [{id: 1, firstName: 'Cory', lastName: 'House'}]}})

        const expectedActions = [
            {type: actionTypes.INITIATE_AJAX_REQUEST},
            {type: actionTypes.LOAD_COURSES_SUCCESS, body : {course: [{id: 'test-code', title: 'Test Code'}]}}
        ];

        const store = mockStore({courses: []}, expectedActions);
        store.dispatch(courseActions.loadCourses()).then(()=> {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(actionTypes.INITIATE_AJAX_REQUEST);
            expect(actions[1].type).toEqual(actionTypes.LOAD_COURSES_SUCCESS);
            done();
        });
    });
});

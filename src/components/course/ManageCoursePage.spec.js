import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';
//import ManageCoursePage from './ManageCoursePage';
//import { Provider } from 'react-redux';
//import configureStore from '../../store/configureStore';


describe('Manage Course Page', () => {
    const context = {router: {}};
    const props = {
        authors: [],
        router: {},
        actions: { saveCourse: () => {
            return Promise.resolve();
        }},
        course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };

    it('Sets error message when trying to save empty title', () => {
        //const wrapper = mount(<Provider store = {store}><ManageCoursePage/></Provider>);
        const wrapper = mount(<ManageCoursePage {...props}/>, { context });
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');

    });
});
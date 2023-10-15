import React from 'react';
import renderer from 'react-test-renderer';

import App, { createPerson } from './App';

test('Testing createPerson function: creates a person with name=Hendrix, age=20, hasBrainDamage=false', () => {
    expect(createPerson('Hendrix', 20, false)).toStrictEqual({
        name: 'Hendrix',
        age: 20,
        hasBrainDamage: false
    });
});

describe('<App />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree.children.length).toBe(1);
    });
});
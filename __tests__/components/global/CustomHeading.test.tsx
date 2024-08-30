import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomHeading from '../../../src/components/global/CustomHeading';
import { goBack } from '../../../src/utils/NavigationUtil';

// Mock the goBack function
jest.mock('../../../src/utils/NavigationUtil', () => ({
    goBack: jest.fn(),
}));

describe('CustomHeading test' , ()=> {

    it('Heading should render correctly ' , ()=> {

        const {getByText} = render(<CustomHeading title={'Title'} />);
        expect(getByText('Title')).toBeTruthy();
    })

    it('should call goBack when btn is pressed ' , ()=> {
        const {getByTestId} = render(<CustomHeading title='Test' />);
        const backBtn = getByTestId('back-button');

        fireEvent.press(backBtn);
        expect(goBack).toHaveBeenCalled();
    })

})





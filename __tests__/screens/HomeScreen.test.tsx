import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../../src/screens/home/HomeScreen';
import { navigate } from '../../src/utils/NavigationUtil'; // Ensure this path is correct

jest.mock('../../src/utils/NavigationUtil', () => ({
    navigate: jest.fn(),
}));

// Mock console.log to suppress error output during test
jest.spyOn(console, 'log').mockImplementation(() => {});

describe('HomeScreen', () => {
    it('renders correctly', () => {
        const { getByText } = render(<HomeScreen />);
        const textElement = getByText('Home Screen');
        expect(textElement).toBeTruthy();
    });

    it('renders Header component', () => {
        const { getByText } = render(<HomeScreen />);
        
        // Checking if the Header component renders its text correctly
        const headerTextElement = getByText('Home Screen');
        expect(headerTextElement).toBeTruthy();
      });

    it('navigates to ProductScreen when button is pressed', () => {
        const { getByText } = render(<HomeScreen />);
        const buttonElement = getByText('Go to Product');

        fireEvent.press(buttonElement);

        // Updated assertion to match the exact arguments passed to `navigate`
        expect(navigate).toHaveBeenCalledWith('ProductScreen', { message: 'Hello from HomeScreen!' });
    });



});

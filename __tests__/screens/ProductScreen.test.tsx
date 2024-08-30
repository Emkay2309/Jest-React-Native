import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import ProductScreen from '../../src/screens/product/ProductScreen';
import { goBack } from '../../src/utils/NavigationUtil'; // Ensure this path is correct

jest.mock('../../src/utils/NavigationUtil', () => ({
    goBack: jest.fn(),
}));

describe('ProductScreen', () => {
    const mockRoute = {
        params: {
            message: 'Test message',
        },
    };

    it('renders correctly', () => {
        const { getByText } = render(<ProductScreen route={mockRoute} />);
        const textElement = getByText('Product Screen');
        const messageElement = getByText('Test message');
        const check = getByText('check');

        expect(check).toBeTruthy();
        expect(textElement).toBeTruthy();
        expect(messageElement).toBeTruthy();
    });

    it('calls goBack when the Back button is pressed', () => {
        const { getByText } = render(<ProductScreen route={mockRoute} />);
        const buttonElement = getByText('Back');

        fireEvent.press(buttonElement);

        expect(goBack).toHaveBeenCalled();
    });
});



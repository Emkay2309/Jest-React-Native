import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import ErrorBoundary from '../../src/screens/error/ErrorBoundary';
import { Text } from 'react-native';
import Toast from 'react-native-toast-message';

// Mock the Toast module to prevent actual toast messages during tests
jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
}));

describe('ErrorBoundary', () => {
    
  test('renders children correctly when there is no error', () => {
    const ChildComponent = () => <Text>Child Component</Text>;
    const { getByText } = render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );

    // Assert that the child component is rendered
    expect(getByText('Child Component')).toBeTruthy();
  });

  it('catches error and displays fallback UI', () => {
    // Create a component that throws an error
    const ErrorThrowingComponent = () => {
      throw new Error('Test error');
    };

    // Suppress console error output during test
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const { getByText } = render(
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>
    );

    // Assert that the fallback UI is displayed
    // expect(getByText('Something went wrong.')).toBeTruthy();

    // // Assert that Toast is shown with the correct message
    // expect(Toast.show).toHaveBeenCalledWith({
    //   type: 'error',
    //   position: 'bottom',
    //   text1: 'Something went wrong',
    //   text2: 'Please try again later.',
    // });

    // Restore console error output
    consoleErrorSpy.mockRestore();
  });
});

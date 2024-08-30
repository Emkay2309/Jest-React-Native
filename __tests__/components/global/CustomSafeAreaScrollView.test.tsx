import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import CustomSafeAreaScrollView from '../../../src/components/global/CustomSafeAreaViewScroll';


describe('CustomAreaScrollView', () => {

    it('Should render children correctly', () => {
        const { getByText } = render(
            <CustomSafeAreaScrollView>
                <Text>Test children</Text>
            </CustomSafeAreaScrollView>
        );

        expect(getByText('Test children')).toBeTruthy();
    });

    it('should apply style', () => {
        const customStyle = { backgroundColor: 'red' };
        const { getByTestId } = render(
            <CustomSafeAreaScrollView style={customStyle}>
                <Text>Text</Text>
            </CustomSafeAreaScrollView>
        );

        const container = getByTestId('safe-area-view');
        expect(container.props.style).toContainEqual(customStyle);
    })

});

// describe('CustomSafeAreaScrollView', () => {
//     it('should render children correctly', () => {
//         const { getByText } = render(
//             <CustomSafeAreaScrollView>
//                 <Text>Test Child</Text>
//             </CustomSafeAreaScrollView>
//         );

//         expect(getByText('Test Child')).toBeTruthy();
//     });

//     it('should apply custom styles', () => {
//         const customStyle = { backgroundColor: 'red' };
//         const { getByTestId } = render(
//             <CustomSafeAreaScrollView style={customStyle}>
//                 <Text>Test Child</Text>
//             </CustomSafeAreaScrollView>
//         );

//         const container = getByTestId('safe-area-view');
//         expect(container.props.style).toContainEqual(customStyle);
//     });
// });

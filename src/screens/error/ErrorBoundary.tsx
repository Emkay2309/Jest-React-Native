import { Text, View } from 'react-native'
import React, { ErrorInfo, Component, ReactNode, Children } from 'react'
import Toast from 'react-native-toast-message';

interface ErrorBoundaryState {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children: ReactNode;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(error);
        Toast.show({
            type: 'error',
            position: 'bottom',
            text1: 'Something went wrong',
            text2: 'Please try again later.',
        });
    }

    render() {
        if(this.state.hasError) {
            return (
                <View >
                    <Text >Something went wrong.</Text>
                </View>
            );
        }

        return (
            <View>
                {this.props.children}
            </View>
        )
    }
}

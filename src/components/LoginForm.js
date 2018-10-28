import React from 'react';
import { Button, Card, CardSection } from './common';
import { TextInput } from 'react-native';

class LoginForm extends React.Component {
    state = { text: 'Provide input' }
    render() {
        return(
            <Card>
                <CardSection>
                    <TextInput
                        value={this.state.text} 
                        onChangeText={text => this.setState({ text })}
                        style={{ height: 20, width: 100 }} 
                    />
                </CardSection>
                <CardSection />
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
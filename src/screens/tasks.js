import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default Tasks = ({ navigation }) => {
    return(
        <View style = {{
            width: '100%', height: '100%',
        }}>
            {/* Add Float Button */}
            <TouchableOpacity 
                onPress = {() => navigation.navigate('Add Task')}
                style = {{
                    position: 'absolute', bottom: 30, right: 20,
                    width: 60, height: 60, borderRadius: 30,
                    backgroundColor: '#54AEFF',
                    elevation: 5,
                    justifyContent: 'center', alignItems: 'center',
                }}
            >
                <Text style = {{
                    color: 'white', fontSize: 35,
                }}>+</Text>
            </TouchableOpacity>
        </View>
    );
}
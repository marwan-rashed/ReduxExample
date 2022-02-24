import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';

export default Tasks = ({ navigation }) => {
    const tasks = useSelector(state => state.tasks);
    console.log(tasks);

    return(
        <View style = {{
            width: '100%', height: '100%',
        }}>
            {/* Tasks */}
            <ScrollView style = {{
                width: '100%', height: '100%',
                margin: 10,
            }}>
                {
                    tasks.map((task) => (
                        <View key = {task.id}>
                            <Text>{task.title}</Text>
                            <Text>{task.description}</Text>
                        </View>
                    ))
                }
            </ScrollView>

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
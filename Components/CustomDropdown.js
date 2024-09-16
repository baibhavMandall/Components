import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const CustomDropdown = (props) => {
  const roles = props.data;
  const [myRole, setRole] = useState('Select your role');
  const [focus, setFocus] = useState(false);

  const updateRole = (role) => setRole(role.name);
  const updateFocus = () => setTimeout(() => setFocus(!focus), 250);

  const handlePress = (role) => {
    updateRole(role);
    updateFocus();
  };

  useEffect(() => {
    props.getData(myRole);
  },[myRole])

  return (
      <View>
        <TouchableOpacity
          style={[styles.Dropdown, props.customDropdownStyle]}
          onPress={updateFocus}
        >
          <Text style={[props.customTextStyle]}>{myRole}</Text>
          {focus ? (
            <AntDesign name="up" size={30} color="black" />
          ) : (
            <AntDesign name="down" size={30} color="black" />
          )}
        </TouchableOpacity>

        {focus ? (
          <View style={[styles.dropdownArea, props.customDropdownAreStyle]}>
            <FlatList
              data={roles}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => handlePress(item)}
                    style={[styles.items, props.customItemStyle]}
                  >
                    <Text style={[{ fontSize: 18 }, props.customDropdownTextStyle]}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
              scrollEnabled={props.ScrollEnabled}
            />
          </View>
        ) : null}
      </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  Dropdown: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 10,
  },
  dropdownArea: {
    width: 250,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
  },
  items: {
    width: '80%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    alignSelf: 'center',
  },
});

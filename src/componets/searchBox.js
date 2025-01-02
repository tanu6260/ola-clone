import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constans';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const SearchBox = ({
  placeholder,
  editable,
  disabled,
  onPresssearch,
  onChangeText,
  value,
  searchinputstyle,
  menuIcon,
  searchContainer
}) => {
  return (
    <View
      style={[styles.mainContainer, searchContainer]}
    >
      {menuIcon &&
        <TouchableOpacity activeOpacity={0.5} style={styles.iconContainer}>
          <Entypo name="menu" size={28} color={COLORS.black} />
        </TouchableOpacity>
      }


      <TouchableOpacity onPress={onPresssearch} activeOpacity={0.6} style={styles.search} disabled={disabled}>

        <FontAwesome name="search" size={20} color={COLORS.black} style={{ paddingHorizontal: SIZES.width * 0.02 }} />
        <TextInput
          editable={editable}
          placeholder={placeholder}
          style={[styles.searchinput, searchinputstyle]}
          placeholderTextColor={COLORS.gray1}
          onChangeText={onChangeText}
          value={value}
          returnKeyType='search'
          numberOfLines={1}
        />

      </TouchableOpacity>

    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: 35,
    borderColor: COLORS.gray,
    alignSelf: 'center',

    alignItems: 'center',
    gap: 10
  },

  iconContainer: {
    width: SIZES.width * 0.14,
    height: SIZES.width * 0.14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.width * 0.07,
    backgroundColor: COLORS.white,
    elevation: 1.5,

  },
  search: {
    backgroundColor: COLORS.white,
    resizeMode: 'stretch',
    tintColor: COLORS.primary,
    flexDirection: 'row',
    width: SIZES.width * 0.8,
    elevation: 1.5,
    alignItems: 'center',
    borderRadius: SIZES.width * 0.045,

  },
  searchinput: {
    width: SIZES.width * 0.7,
    fontFamily: FONTS.medium,
    fontSize: 14,
    marginBottom: -3,
    color: COLORS.black,
  },
});

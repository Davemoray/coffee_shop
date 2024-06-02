import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BORDERRADIUS, COLORS, SPACING } from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";

interface BGIconProps {
  name: any;
  color: string;
  size: number;
  //BGColor: string;
}
const BGIcon = ({ name, color, size }: BGIconProps) => {
  return (
    <View style={styles.IconBG}>
      <Ionicons name={name} color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  IconBG: {
    height: SPACING.space_32,
    width: SPACING.space_36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BORDERRADIUS.radius_8,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  BG: {
    backgroundColor: COLORS.primaryOrangeHex,
  },
});

export default BGIcon;

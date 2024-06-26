import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SPACING } from "../theme/theme";
import LinearGradient from "react-native-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

interface GradientBGIconProps {
  name: any;
  color: string;
  size: number;
}

const GradientBGIcon: React.FC<GradientBGIconProps> = ({
  name,
  color,
  size,
}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.LinearGradientBG}>
        <Ionicons name={name} color={color} size={size} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: "hidden",
  },
  LinearGradientBG: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GradientBGIcon;

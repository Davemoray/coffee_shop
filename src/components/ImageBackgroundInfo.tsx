import {
  ImageProps,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";
import {
  IBeans,
  ICoffeeBean,
  IDrop,
  IHeart,
  ILocation,
  IStar,
} from "../assets/svg";

interface ImageBackgroundInfoProps {
  EnableBackHandler: boolean;
  imagelink_portrait: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  BackHandler?: any;
  ToggleFavourite: any;
}

const ImageBackgroundInfo = ({
  EnableBackHandler,
  imagelink_portrait,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  BackHandler,
  ToggleFavourite,
}: ImageBackgroundInfoProps) => {
  const [isFavorite, setIsFavorite] = useState(favourite);
  console.log(`fav : ${favourite}`);

  return (
    <SafeAreaView style={styles.SafeArea}>
      <View>
        <ImageBackground
          source={imagelink_portrait}
          style={styles.ItemBackgroundImage}
        >
          {EnableBackHandler ? (
            <View style={styles.ImageHeaderBarContainerWithBack}>
              <TouchableOpacity
                onPress={() => {
                  BackHandler();
                }}
              >
                <Ionicons
                  name="arrow-back"
                  color={COLORS.primaryLightGreyHex}
                  size={FONTSIZE.size_28}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setIsFavorite(!isFavorite);
                  ToggleFavourite(favourite, type, id);
                }}
              >
                <View>
                  <IHeart
                    fill={
                      isFavorite
                        ? COLORS.primaryRedHex
                        : COLORS.primaryLightGreyHex
                    }
                  />
                </View>
                {/* <Ionicons
                name="heart"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_28}
              /> */}
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.ImageHeaderBarContainerWithBack}>
              <TouchableOpacity
                onPress={() => ToggleFavourite(favourite, type, id)}
              >
                <View>
                  <IHeart
                    fill={
                      favourite
                        ? COLORS.primaryRedHex
                        : COLORS.primaryLightGreyHex
                    }
                  />
                </View>
                {/* <Ionicons
                name="heart"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              /> */}
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.ImageInfoOuterContainer}>
            <View style={styles.ImageInfoInnerContainer}>
              <View style={styles.InfoContainerRow}>
                <View>
                  <Text style={styles.ItemTitleText}> {name}</Text>
                  <Text style={styles.ItemSubtitleText}>
                    {special_ingredient}
                  </Text>
                </View>
                <View style={styles.ItemPropertiesContainer}>
                  <View style={styles.ProperFirst}>
                    <View>
                      {type === "Bean" ? (
                        <ICoffeeBean
                          fill={COLORS.primaryOrangeHex}
                          size={
                            type == "Bean" ? FONTSIZE.size_18 : FONTSIZE.size_24
                          }
                        />
                      ) : (
                        <IBeans fill={COLORS.primaryOrangeHex} />
                      )}
                    </View>

                    {/* <Ionicons
                    name={type == "Bean" ? "bean" : "beans"}
                    size={type == "Bean" ? FONTSIZE.size_18 : FONTSIZE.size_24}
                    color={COLORS.primaryOrangeHex}
                  /> */}
                    <Text style={styles.PropertyTextFirst}>{type}</Text>
                  </View>
                  <View style={styles.ProperFirst}>
                    <View>
                      {type === "Bean" ? (
                        <ILocation
                          fill={COLORS.primaryOrangeHex}
                          size={
                            type == "Bean" ? FONTSIZE.size_18 : FONTSIZE.size_24
                          }
                        />
                      ) : (
                        <IDrop fill={COLORS.primaryOrangeHex} />
                      )}
                    </View>

                    {/* <Ionicons
                    name={type == "Bean" ? "location" : "drop"}
                    size={FONTSIZE.size_16}
                    color={COLORS.primaryOrangeHex}
                  /> */}
                    <Text style={styles.PropertyTextFirst}>{ingredients}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.InfoContainerRow}>
                <View style={styles.RatingContainer}>
                  <View>
                    <IStar
                      fill={COLORS.primaryOrangeHex}
                      size={FONTSIZE.size_20}
                    />
                  </View>

                  {/* <Ionicons
                  name="star"
                  color={COLORS.primaryOrangeHex}
                  size={FONTSIZE.size_20}
                /> */}
                  <Text style={styles.RatingText}>{average_rating}</Text>
                  <Text style={styles.RatingCountText}>{ratings_count}</Text>
                </View>
                <View style={styles.RoastedContainer}>
                  <Text style={styles.RoastedText}> {roasted}</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  ItemBackgroundImage: {
    width: "100%",
    aspectRatio: 20 / 25,
    justifyContent: "space-between",
  },
  ImageHeaderBarContainerWithBack: {
    padding: SPACING.space_30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ImageHeaderBarContainerWithoutBack: {
    padding: SPACING.space_30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  ImageInfoOuterContainer: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_30,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
    borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
  },
  ImageInfoInnerContainer: {
    justifyContent: "space-between",
    gap: SPACING.space_15,
  },
  InfoContainerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ItemTitleText: {
    //fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryWhiteHex,
  },
  ItemSubtitleText: {
    //fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  ItemPropertiesContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.space_20,
  },
  ProperFirst: {
    height: 55,
    width: 55,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryBlackHex,
  },
  PropertyTextFirst: {
    //fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  PropertyTextLast: {
    // fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
    marginTop: SPACING.space_2 + SPACING.space_4,
  },
  RatingContainer: {
    flexDirection: "row",
    gap: SPACING.space_10,
    alignItems: "center",
  },
  RatingText: {
    //fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  RatingCountText: {
    //fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  RoastedContainer: {
    height: 55,
    width: 55 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryBlackHex,
  },
  RoastedText: {
    //fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  // Icon{

  // }
});

export default ImageBackgroundInfo;

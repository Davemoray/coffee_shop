import {
  Platform,
  ScrollView,
  StatusBar as sta,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useStore } from "../store/store";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import CartItem from "../components/CartItem";
import { StatusBar } from "expo-status-bar";
import EmptyListAnimation from "../components/EmptyListAnimation";
import HeaderBar from "../components/HeaderBar";
import PaymentFooter from "../components/PaymentFooter";
import { COLORS, SPACING } from "../theme/theme";

const FavoriteScreen = ({ navigation }: any) => {
  const FavouriteList = useStore((state: any) => state.FavoritesList);
  const tabBarHeight = useBottomTabBarHeight();
  const addToFavouriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavouritelist = useStore(
    (state: any) => state.deleteFromFavoriteList
  );
  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite
      ? deleteFromFavouritelist(type, id)
      : addToFavouriteList(type, id);
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View
          style={[styles.ScrollViewInnerView, { marginBottom: tabBarHeight }]}
        >
          <View style={styles.ItemContainer}>
            <HeaderBar title="Cart" />
            {FavouriteList.length == 0 ? (
              <EmptyListAnimation title={"No Favourites"} />
            ) : (
              <View style={styles.ListItemContainer}>
                {FavouriteList.map((data: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.pish("Details", {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}
                    key={data.id}
                  ></TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: "space-between",
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
  SafeArea: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    paddingTop: Platform.OS == "android" ? sta.currentHeight : 0,
  },
});

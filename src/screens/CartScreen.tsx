import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar as sta,
} from "react-native";
import React from "react";
import { useStore } from "../store/store";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { COLORS, SPACING } from "../theme/theme";
import { StatusBar } from "expo-status-bar";
import HeaderBar from "../components/HeaderBar";
import EmptyListAnimation from "../components/EmptyListAnimation";
import { SafeAreaView } from "react-native-safe-area-context";
import PaymentFooter from "../components/PaymentFooter";
import CartItem from "../components/CartItem";

const CartScreen = ({ navigation, route }) => {
  const cartList = useStore((state: any) => state.CartList);
  const cartPrice = useStore((state: any) => state.CartPrice);
  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity
  );
  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity
  );
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const tabBarHeight = useBottomTabBarHeight();

  const buttonPressHandler = () => {
    navigation.push("Payment", { amount: cartPrice });
  };

  const incrementCartItemQuantityHandler = (id: string, size: string) => {
    incrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  const decrementCartItemQuantityHandler = (id: string, size: string) => {
    decrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  return (
    <SafeAreaView style={styles.SafeArea}>
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
              {cartList.length == 0 ? (
                <EmptyListAnimation title={"Cart is Empty"} />
              ) : (
                <View style={styles.ListItemContainer}>
                  {cartList.map((data: any) => (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.pish("Details", {
                          index: data.index,
                          id: data.id,
                          type: data.type,
                        });
                      }}
                      key={data.id}
                    >
                      <CartItem
                        id={data.id}
                        title={data.title}
                        imagelink_square={data.imagelink_square}
                        special_ingredient={data.special_ingredient}
                        roasted={data.roasted}
                        prices={data.prices}
                        type={data.type}
                        incrementCartItemQuantityHandler={
                          incrementCartItemQuantityHandler
                        }
                        decrementCartItemQuantityHandler={
                          decrementCartItemQuantityHandler
                        }
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
            {cartList.length != 0 ? (
              <PaymentFooter
                buttonTitle="Pay"
                price={{ price: cartPrice, currency: "$" }}
                buttonPressHandler={buttonPressHandler}
              />
            ) : (
              <></>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

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

export default CartScreen;

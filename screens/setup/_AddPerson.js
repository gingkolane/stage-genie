import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";

const AddPerson = () => {
  return (
    <View style={styles.addperson}>
      <View style={[styles.frame2, styles.frameLayout5]}>
        <View style={[styles.frame3, styles.frameLayout5]} />
        <View style={[styles.frame4, styles.frameLayout4]} />
      </View>
      <View style={styles.frame5}>
        <View style={[styles.frame6, styles.frameLayout4]}>
          <View style={[styles.frameInner, styles.frameLayout3]}>
            <View style={[styles.frameChild, styles.frameChildBg]} />
          </View>
          <View style={[styles.nameField, styles.nameFieldPosition]}>
            <Text style={[styles.name, styles.nameTypo]}>Name</Text>
            <View style={[styles.frame7, styles.framePosition]}>
              <Image
                style={[styles.frameItem, styles.frameLayout2]}
                contentFit="cover"
                source={require("../assets/vector-1.png")}
              />
              <Text style={[styles.enterYourFull1, styles.nameTypo]}>
                Enter your full name
              </Text>
            </View>
          </View>
          <View style={[styles.frame8, styles.frameLayout1]}>
            <Text style={styles.whoIsThis1}>Who is this?</Text>
          </View>
          <View style={[styles.nextWrapper, styles.frameChildBg]}>
            <Text style={styles.next}>Next</Text>
          </View>
          <View style={[styles.frame9, styles.frameLayout]}>
            <View style={[styles.frame10, styles.frameLayout1]}>
              <Text style={styles.whoIsThis1}>Add a patient</Text>
            </View>
            <View style={[styles.frame11, styles.frameLayout]}>
              <Text style={[styles.whoAreYou1, styles.myFriendTypo]}>
                Who are you create this profile for?
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.myFriend, styles.myFriendTypo]}>{`My friend
`}</Text>
        <Image
          style={[styles.frameChild1, styles.frameLayout2]}
          contentFit="cover"
          source={require("../assets/group-29.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout5: {
    width: 403,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout4: {
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout3: {
    height: 5,
    borderRadius: Border.br_81xl,
    top: 0,
  },
  frameChildBg: {
    backgroundColor: Color.goldenrod,
    position: "absolute",
  },
  nameFieldPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  nameTypo: {
    textAlign: "left",
    fontSize: FontSize.bodyB2Reg_size,
  },
  framePosition: {
    left: 24,
    overflow: "hidden",
  },
  frameLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout1: {
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    width: 333,
    position: "absolute",
    overflow: "hidden",
  },
  myFriendTypo: {
    fontWeight: "600",
    color: Color.bGPrimary,
    fontFamily: FontFamily.segoeUI,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 56,
    width: 327,
    position: "absolute",
  },
  frame3: {
    top: 272,
    height: 397,
    left: 0,
  },
  frame4: {
    left: 13,
    top: 0,
    height: 812,
    backgroundColor: Color.bGPrimary,
    width: 375,
  },
  frame2: {
    left: -14,
    top: 25,
    height: 812,
  },
  frameChild: {
    width: 120,
    height: 5,
    borderRadius: Border.br_81xl,
    top: 0,
    left: 0,
  },
  frameInner: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    width: 327,
    left: 24,
    overflow: "hidden",
    position: "absolute",
  },
  name: {
    marginTop: -27,
    color: Color.darkslategray_200,
    fontFamily: FontFamily.segoeUI,
    lineHeight: 14,
    letterSpacing: 0,
    left: "50%",
    top: "50%",
    marginLeft: -163.5,
    textAlign: "left",
    fontSize: FontSize.bodyB2Reg_size,
    position: "absolute",
  },
  frameItem: {
    height: "1.67%",
    top: "98.33%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  enterYourFull1: {
    marginTop: -12,
    color: "#abb3bb",
    fontFamily: FontFamily.segoeUI,
    lineHeight: 14,
    letterSpacing: 0,
    left: "50%",
    top: "50%",
    marginLeft: -163.5,
    textAlign: "left",
    fontSize: FontSize.bodyB2Reg_size,
    position: "absolute",
  },
  frame7: {
    top: 30,
    height: 24,
    width: 327,
    position: "absolute",
  },
  nameField: {
    height: "6.98%",
    top: "9.17%",
    bottom: "83.85%",
    backgroundColor: "rgba(196, 196, 196, 0)",
    position: "absolute",
    overflow: "hidden",
  },
  whoIsThis1: {
    fontSize: FontSize.size_7xl,
    color: Color.darkslategray_100,
    fontFamily: FontFamily.subheadlineRegular,
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
  },
  frame8: {
    top: 137,
    left: 23,
    width: 329,
  },
  next: {
    top: 15,
    left: 146,
    fontSize: FontSize.bodyB1Semi_size,
    color: Color.bGPrimary,
    fontFamily: FontFamily.subheadlineRegular,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  nextWrapper: {
    top: 596,
    borderRadius: 15,
    height: 52,
    width: 327,
    left: 24,
    overflow: "hidden",
  },
  frame10: {
    left: 3,
    width: 327,
    top: 0,
  },
  whoAreYou1: {
    left: 2,
    fontSize: FontSize.title3Regular_size,
    lineHeight: 24,
    textAlign: "center",
    top: 0,
  },
  frame11: {
    height: 24,
    left: 0,
    top: 25,
  },
  frame9: {
    top: 20,
    left: 21,
    height: 49,
  },
  frame6: {
    top: 56,
    left: 1,
    height: 774,
  },
  frame5: {
    left: -1,
    width: 377,
    height: 830,
    top: 25,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    borderRadius: Border.br_xs,
    backgroundColor: "#383e6c",
    top: 0,
    left: 0,
  },
  myFriend: {
    top: 19,
    left: 44,
    textAlign: "left",
    fontSize: FontSize.bodyB2Reg_size,
    fontWeight: "600",
  },
  frameChild1: {
    height: "35.71%",
    width: "6.12%",
    top: "32.14%",
    right: "88.99%",
    bottom: "32.14%",
    left: "4.89%",
  },
  rectangleParent: {
    top: 578,
    display: "none",
    left: 24,
    overflow: "hidden",
  },
  addperson: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.bGPrimary,
  },
});

export default AddPerson;

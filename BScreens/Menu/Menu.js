//
//  Menu
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Menu extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: -44,
						right: 0,
						top: -166,
						bottom: -521,
					}}>
					<Image
						source={require("./../../assets/images/massimo-dutti-navy-floral-print-shirtdress-orig.png")}
						style={styles.massimoDuttiNavyFImage}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 44,
							right: 0,
							top: 211,
							bottom: 105,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 40,
								marginLeft: 15,
								marginRight: 16,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/icon-arrow-left.png")}
								style={styles.iconArrowLeftImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.wishlistView}>
								<Image
									source={require("./../../assets/images/icon-wishlist-2.png")}
									style={styles.iconWishlistImage}/>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.rectangle168View}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 60,
							right: 15,
							top: 681,
							bottom: 427,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.floralBlueDressFoText}>Floral Blue Dress For Women</Text>
						<Text
							style={styles.kwdText}>250.00 KWD</Text>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 40,
								marginRight: 1,
								marginTop: 40,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.tabSizeView}>
								<Text
									style={styles.sizeText}>Size</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.xlText}>XL</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.tabColourView}>
								<Text
									style={styles.colourText}>Colour</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.color1View}/>
							</View>
						</View>
						<Text
							style={styles.detailsText}>Details</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.readMoreText}>Read More</Text>
						<View
							style={styles.line27View}/>
						<Text
							style={styles.youMayAlsoLikeText}>You may also like</Text>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 205,
								marginLeft: 17,
								marginRight: 18,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/pretty-blonde-inlong-ink-dress-spinning-132075-1080-2.png")}
								style={styles.prettyBlondeInlongImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/cute-teenage-girl-fashion-jacket-color-glasses-149155-2490.png")}
								style={styles.cuteTeenageGirlFaImage}/>
						</View>
					</View>
					<Text
						style={styles.nikeDriFitIsAPoText}>Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer.{"\n"}Read More</Text>
					<View
						style={styles.rectangle172View}/>
					<View
						style={styles.rectangle173View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 44,
							width: 315,
							top: 166,
							bottom: 497,
							alignItems: "flex-start",
						}}>
						<View
							style={styles.rectangle174View}/>
						<Text
							style={styles.womenClothingMenText}>Women Clothing{"\n"}{"\n"}Men Clothing{"\n"}{"\n"}Health & Beauty{"\n"}{"\n"}Accessories{"\n"}{"\n"}Shoes{"\n"}{"\n"}Bags{"\n"}{"\n"}Shops{"\n"}{"\n"}</Text>
						<Image
							source={require("./../../assets/images/icon-arrow-right.png")}
							style={styles.iconArrowRightSevenImage}/>
						<Image
							source={require("./../../assets/images/icon-arrow-right.png")}
							style={styles.iconArrowRightEightImage}/>
						<Image
							source={require("./../../assets/images/icon-arrow-right.png")}
							style={styles.iconArrowRightFiveImage}/>
						<Image
							source={require("./../../assets/images/icon-arrow-right.png")}
							style={styles.iconArrowRightSixImage}/>
						<Image
							source={require("./../../assets/images/icon-arrow-right.png")}
							style={styles.iconArrowRightThreeImage}/>
						<Image
							source={require("./../../assets/images/icon-arrow-right.png")}
							style={styles.iconArrowRightFourImage}/>
						<Image
							source={require("./../../assets/images/icon-arrow-right.png")}
							style={styles.iconArrowRightImage}/>
						<Image
							source={require("./../../assets/images/icon-arrow-right.png")}
							style={styles.iconArrowRightTwoImage}/>
						<Image
							source={require("./../../assets/images/icon-arrow-right.png")}
							style={styles.iconArrowRightElevenImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/icon-arrow-right.png")}
							style={styles.iconArrowRightTwelveImage}/>
						<Image
							source={require("./../../assets/images/icon-arrow-right.png")}
							style={styles.iconArrowRightNineImage}/>
						<Image
							source={require("./../../assets/images/icon-arrow-right.png")}
							style={styles.iconArrowRightTenImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 73,
							right: 115,
							top: 197,
							height: 188,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.brandShopText}>BRAND {"\n"}SHOP</Text>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 90,
								marginTop: 43,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/avatar-2.png")}
								style={styles.avatarImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.solimanAhmedText}>Soliman Ahmed</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 60,
							width: 277,
							top: 871,
							bottom: 611,
							alignItems: "flex-start",
						}}>
						<View
							style={styles.line28View}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.line29View}/>
					</View>
					<Image
						source={require("./../../assets/images/group-1701-3.png")}
						style={styles.group1701Image}/>
				</View>
				<Text
					style={styles.solimanGmailComText}>Soliman@gmail.com</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	massimoDuttiNavyFImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 44,
		right: 0,
		top: 166,
		height: 514,
	},
	iconArrowLeftImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 8,
		height: 14,
		marginTop: 12,
	},
	wishlistView: {
		backgroundColor: "white",
		borderRadius: 20,
		width: 40,
		height: 40,
		justifyContent: "center",
	},
	iconWishlistImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
		marginLeft: 11,
		marginRight: 11,
	},
	rectangle168View: {
		backgroundColor: "white",
		borderRadius: 50,
		height: 989,
	},
	floralBlueDressFoText: {
		color: "black",
		fontFamily: "SFProDisplay-Bold",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	kwdText: {
		backgroundColor: "transparent",
		color: "rgb(236, 115, 87)",
		fontFamily: "SFProDisplay-Bold",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		marginTop: 15,
	},
	tabSizeView: {
		backgroundColor: "transparent",
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "rgb(235, 235, 235)",
		borderStyle: "solid",
		width: 160,
		height: 40,
		flexDirection: "row",
		alignItems: "center",
	},
	sizeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 20,
	},
	xlText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "SFProDisplay-Bold",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		marginRight: 19,
	},
	tabColourView: {
		backgroundColor: "transparent",
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "rgb(235, 235, 235)",
		borderStyle: "solid",
		width: 160,
		height: 40,
		flexDirection: "row",
		alignItems: "center",
	},
	colourText: {
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
	},
	color1View: {
		backgroundColor: "rgb(49, 64, 123)",
		borderRadius: 8,
		width: 22,
		height: 23,
		marginRight: 20,
	},
	detailsText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "SFProDisplay-Bold",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		marginTop: 39,
	},
	readMoreText: {
		backgroundColor: "transparent",
		color: "rgb(40, 126, 226)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 69,
		marginBottom: 33,
	},
	line27View: {
		backgroundColor: "rgb(112, 112, 112)",
		opacity: 0.44,
		alignSelf: "stretch",
		height: 1,
		marginBottom: 19,
	},
	youMayAlsoLikeText: {
		backgroundColor: "transparent",
		color: "rgb(40, 126, 226)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "center",
		marginBottom: 29,
	},
	prettyBlondeInlongImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 150,
		height: 205,
	},
	cuteTeenageGirlFaImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 150,
		height: 205,
	},
	nikeDriFitIsAPoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 32,
		position: "absolute",
		left: 60,
		right: 16,
		bottom: 718,
	},
	rectangle172View: {
		backgroundColor: "rgb(30, 30, 30)",
		opacity: 0.53,
		position: "absolute",
		left: 44,
		right: 0,
		bottom: 0,
		height: 1547,
	},
	rectangle173View: {
		backgroundColor: "rgb(239, 239, 239)",
		position: "absolute",
		left: 44,
		width: 315,
		bottom: 0,
		height: 1547,
	},
	rectangle174View: {
		backgroundColor: "black",
		width: 315,
		height: 257,
	},
	womenClothingMenText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		marginLeft: 61,
		marginTop: 44,
	},
	iconArrowRightSevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 6,
		height: 11,
		marginLeft: 26,
	},
	iconArrowRightEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 6,
		height: 11,
		marginLeft: 26,
		marginTop: 36,
	},
	iconArrowRightFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 6,
		height: 11,
		marginLeft: 26,
		marginTop: 35,
	},
	iconArrowRightSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 6,
		height: 11,
		marginLeft: 26,
		marginTop: 36,
	},
	iconArrowRightThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 6,
		height: 11,
		marginLeft: 26,
		marginTop: 40,
	},
	iconArrowRightFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 6,
		height: 11,
		marginLeft: 26,
		marginTop: 36,
	},
	iconArrowRightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 6,
		height: 11,
		marginLeft: 26,
		marginTop: 35,
	},
	iconArrowRightTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 6,
		height: 11,
		marginLeft: 26,
		marginTop: 36,
	},
	iconArrowRightElevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 6,
		height: 11,
		marginLeft: 24,
		marginTop: 93,
	},
	iconArrowRightTwelveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 6,
		height: 11,
		marginLeft: 24,
		marginBottom: 35,
	},
	iconArrowRightNineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 6,
		height: 11,
		marginLeft: 24,
		marginBottom: 36,
	},
	iconArrowRightTenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 6,
		height: 11,
		marginLeft: 24,
		marginBottom: 152,
	},
	brandShopText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 25,
		paddingTop: 4,
		backgroundColor: "transparent",
		marginLeft: 96,
	},
	avatarImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 90,
		height: 90,
	},
	solimanAhmedText: {
		color: "white",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 21,
	},
	line28View: {
		backgroundColor: "rgb(112, 112, 112)",
		opacity: 0.4,
		width: 277,
		height: 1,
	},
	line29View: {
		backgroundColor: "rgb(112, 112, 112)",
		opacity: 0.4,
		width: 277,
		height: 1,
	},
	group1701Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 231,
		top: 0,
		height: 263,
	},
	solimanGmailComText: {
		color: "white",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		top: 178,
	},
})

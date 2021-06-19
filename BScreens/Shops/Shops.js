//
//  Shops
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Shops extends React.Component {

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
						left: 0,
						right: -127,
						top: 48,
						bottom: -3,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 28,
							marginLeft: 21,
							marginRight: 147,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/noun-menu-1812743.png")}
							style={styles.nounMenu1812743Image}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 31,
								height: 28,
							}}>
							<Image
								source={require("./../../assets/images/noun-shopping-cart-196462.png")}
								style={styles.nounShoppingCart1Image}/>
							<View
								style={styles.ellipse234View}/>
							<Text
								style={styles.textText}>2</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 48,
							marginLeft: 13,
							marginRight: 139,
							marginTop: 48,
						}}>
						<View
							style={styles.rectangle97View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 28,
								width: 220,
								top: 13,
								height: 23,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/noun-search-1868247.png")}
								style={styles.nounSearch1868247Image}/>
							<Text
								style={styles.startSearchingForText}>Start searching for real brands</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 184,
							marginRight: 127,
							marginTop: 25,
						}}>
						<Image
							source={require("./../../assets/images/kaedi-boot-aldo.png")}
							style={styles.kaediBootAldoImage}/>
						<Text
							style={styles.aldoShoesText}>ALDO shoes</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginLeft: 16,
							marginRight: 153,
							marginTop: 33,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.womenApparelText}>Women Apparel</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.shopAllText}>Shop All</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 170,
							marginLeft: 16,
							marginTop: 5,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 153,
								marginTop: 17,
							}}>
							<View
								style={styles.rectangle151View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									width: 150,
									top: 21,
									height: 132,
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/1200px-gucci-logosvg.png")}
									style={styles.pxGucciLogoSvImage}/>
								<View
									style={styles.rectangle152View}/>
							</View>
							<Text
								style={styles.shopNowText}>shop now</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 156,
								height: 170,
								marginRight: 15,
							}}>
							<View
								style={styles.rectangle154View}/>
							<View
								style={styles.rectangle155View}/>
							<Text
								style={styles.shopNowTwoText}>shop now</Text>
							<Image
								source={require("./../../assets/images/massimo-dutti-logo.png")}
								style={styles.massimoDuttiLogoImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 153,
								marginTop: 17,
							}}>
							<View
								style={styles.rectangle156View}/>
							<View
								style={styles.rectangle157View}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginLeft: 13,
							marginRight: 153,
							marginTop: 43,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.menApparelText}>Men Apparel</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.shopAllTwoText}>Shop All</Text>
					</View>
					<View
						style={styles.group1694View}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 17,
								bottom: 0,
								flexDirection: "row",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 150,
								}}>
								<View
									style={styles.rectangle158View}/>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										width: 150,
										top: 21,
										bottom: 0,
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/1200px-gucci-logosvg.png")}
										style={styles.pxGucciLogoSvTwoImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.rectangle159View}/>
								</View>
								<Text
									style={styles.shopNowThreeText}>shop now</Text>
							</View>
							<Text
								style={styles.shopNowFourText}>shop now</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 150,
								}}>
								<View
									style={styles.rectangle162View}/>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										right: 0,
										width: 150,
										top: 21,
										bottom: 0,
										alignItems: "flex-end",
									}}>
									<Image
										source={require("./../../assets/images/1200px-gucci-logosvg.png")}
										style={styles.pxGucciLogoSvThreeImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.rectangle163View}/>
								</View>
								<Text
									style={styles.shopNowFiveText}>shop now</Text>
							</View>
						</View>
						<View
							style={styles.rectangle160View}/>
						<View
							style={styles.rectangle161View}/>
						<Image
							source={require("./../../assets/images/massimo-dutti-logo.png")}
							style={styles.massimoDuttiLogoTwoImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 179,
							marginRight: 127,
							marginTop: 43,
						}}>
						<Image
							source={require("./../../assets/images/about-us-banner.png")}
							style={styles.aboutUsBannerImage}/>
						<Text
							style={styles.dior2020Text}>Dior{"\n"}</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginLeft: 13,
							marginRight: 153,
							marginTop: 26,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.healthBeautyText}>Health & Beauty</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.shopAllThreeText}>Shop All</Text>
					</View>
					<View
						style={styles.group1695View}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								flexDirection: "row",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 150,
								}}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<View
										style={styles.rectangle158TwoView}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										width: 150,
										top: 34,
										bottom: 0,
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/oldspice-logo-black-old-spice.png")}
										style={styles.oldspiceLogoBlackImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.rectangle159TwoView}/>
								</View>
								<Text
									style={styles.shopNowSixText}>shop now</Text>
							</View>
							<Text
								style={styles.shopNowSevenText}>shop now</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 150,
								}}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										right: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<View
										style={styles.rectangle162TwoView}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										right: 0,
										width: 150,
										top: 21,
										bottom: 0,
										alignItems: "flex-end",
									}}>
									<Image
										source={require("./../../assets/images/1200px-gucci-logosvg.png")}
										style={styles.pxGucciLogoSvFourImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.rectangle163TwoView}/>
								</View>
								<Text
									style={styles.shopNowEightText}>shop now</Text>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								alignSelf: "center",
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<View
								style={styles.rectangle160TwoView}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								alignSelf: "center",
								width: 150,
								top: 20,
								bottom: 0,
								alignItems: "center",
							}}>
							<Image
								source={require("./../../assets/images/victoria-secret-logo-dbaeed9085-seeklogocom.png")}
								style={styles.victoriaSecretLogoImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.rectangle161TwoView}/>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginLeft: 13,
							marginRight: 153,
							marginBottom: 22,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.makeupFragrancesText}>Makeup & Fragrances</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.shopAllFourText}>Shop All</Text>
					</View>
					<View
						style={styles.group1696View}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								flexDirection: "row",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 150,
								}}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<View
										style={styles.rectangle158ThreeView}/>
								</View>
								<View
									style={styles.rectangle159ThreeView}/>
								<Text
									style={styles.shopNowNineText}>shop now</Text>
								<Image
									source={require("./../../assets/images/maybelline-vector-logo.png")}
									style={styles.maybellineVectorLoImage}/>
							</View>
							<Text
								style={styles.shopNowTenText}>shop now</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 150,
								}}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										right: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<View
										style={styles.rectangle162ThreeView}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										right: 0,
										width: 150,
										top: 21,
										bottom: 0,
										alignItems: "flex-end",
									}}>
									<Image
										source={require("./../../assets/images/1200px-gucci-logosvg.png")}
										style={styles.pxGucciLogoSvFiveImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.rectangle163ThreeView}/>
								</View>
								<Text
									style={styles.shopNowElevenText}>shop now</Text>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								alignSelf: "center",
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<View
								style={styles.rectangle160ThreeView}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								alignSelf: "center",
								width: 150,
								top: 36,
								bottom: 0,
								alignItems: "center",
							}}>
							<Image
								source={require("./../../assets/images/paco-rabanne-logo-04354199bb-seeklogocom.png")}
								style={styles.pacoRabanneLogo04Image}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.rectangle161ThreeView}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 105,
							marginRight: 127,
						}}>
						<View
							style={styles.rectangle113View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 31,
								right: 32,
								bottom: 18,
								height: 56,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 29,
									height: 56,
									justifyContent: "flex-end",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/group-480.png")}
									style={styles.group480Image}/>
								<Text
									style={styles.homeText}>Home</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									width: 27,
									height: 54,
									marginLeft: 47,
									justifyContent: "flex-end",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/noun-category-2834364.png")}
									style={styles.nounCategory283436Image}/>
								<Text
									style={styles.shopsText}>Shops</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/group-477.png")}
								style={styles.group477Image}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 35,
									height: 56,
									marginRight: 40,
									justifyContent: "flex-end",
									alignItems: "flex-end",
								}}>
								<Image
									source={require("./../../assets/images/noun-cart-1363648.png")}
									style={styles.nounCart1363648Image}/>
								<Text
									style={styles.myCartText}>My Cart</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									width: 23,
									height: 55,
									justifyContent: "flex-end",
									alignItems: "flex-end",
								}}>
								<Image
									source={require("./../../assets/images/group-479.png")}
									style={styles.group479Image}/>
								<Text
									style={styles.meText}>Me</Text>
							</View>
						</View>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						width: 56,
						top: 38,
						bottom: 15,
						alignItems: "center",
					}}>
					<View
						style={styles.group1702View}>
						<Image
							source={require("./../../assets/images/group-1701-2.png")}
							style={styles.group1701Image}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.brandShopText}>BRAND SHOP</Text>
						<Text
							style={styles.shoppingMadnessText}>Shopping Madness</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.dealsText}>Deals</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	nounMenu1812743Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 25,
		height: 18,
		marginTop: 7,
	},
	nounShoppingCart1Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 6,
		width: 25,
		top: 1,
		height: 27,
	},
	ellipse234View: {
		backgroundColor: "rgb(234, 169, 73)",
		borderRadius: 7.5,
		position: "absolute",
		right: 0,
		width: 15,
		top: 0,
		height: 15,
	},
	textText: {
		color: "white",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		right: 4,
		top: 2,
	},
	rectangle97View: {
		backgroundColor: "white",
		borderRadius: 24,
		borderWidth: 1,
		borderColor: "rgb(230, 230, 230)",
		borderStyle: "solid",
		shadowColor: "rgba(0, 0, 0, 0.15)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 48,
	},
	nounSearch1868247Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 22,
		height: 21,
	},
	startSearchingForText: {
		color: "rgb(49, 49, 49)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.51,
		marginLeft: 18,
		marginTop: 4,
	},
	kaediBootAldoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 184,
	},
	aldoShoesText: {
		color: "rgb(234, 169, 73)",
		fontSize: 52,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 23,
		top: 56,
	},
	womenApparelText: {
		color: "rgb(234, 169, 73)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	shopAllText: {
		color: "rgb(17, 17, 17)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	rectangle151View: {
		backgroundColor: "rgb(243, 243, 243)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		width: 150,
		top: 0,
		height: 153,
	},
	pxGucciLogoSvImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 78,
		height: 79,
		marginLeft: 36,
	},
	rectangle152View: {
		backgroundColor: "rgb(234, 169, 73)",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 42,
		marginTop: 11,
	},
	shopNowText: {
		color: "white",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 38,
		top: 120,
	},
	rectangle154View: {
		backgroundColor: "rgb(243, 243, 243)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		right: 3,
		width: 150,
		top: 17,
		height: 153,
	},
	rectangle155View: {
		backgroundColor: "rgb(234, 169, 73)",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		right: 3,
		width: 150,
		top: 128,
		height: 42,
	},
	shopNowTwoText: {
		color: "white",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		right: 47,
		top: 137,
	},
	massimoDuttiLogoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 156,
		top: 0,
		height: 156,
	},
	rectangle156View: {
		backgroundColor: "rgb(243, 243, 243)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		right: 0,
		width: 150,
		top: 0,
		height: 153,
	},
	rectangle157View: {
		backgroundColor: "rgb(234, 169, 73)",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		right: 0,
		width: 150,
		top: 111,
		height: 42,
	},
	menApparelText: {
		color: "rgb(234, 169, 73)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	shopAllTwoText: {
		color: "rgb(17, 17, 17)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	group1694View: {
		backgroundColor: "transparent",
		height: 170,
		marginLeft: 13,
		marginRight: 3,
		marginTop: 5,
	},
	rectangle158View: {
		backgroundColor: "rgb(243, 243, 243)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		width: 150,
		top: 0,
		height: 153,
	},
	pxGucciLogoSvTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 78,
		height: 79,
		marginLeft: 36,
	},
	rectangle159View: {
		backgroundColor: "rgb(234, 169, 73)",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 42,
	},
	shopNowThreeText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 38,
		bottom: 11,
	},
	shopNowFourText: {
		color: "white",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginLeft: 56,
		marginBottom: 11,
	},
	rectangle162View: {
		backgroundColor: "rgb(243, 243, 243)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		right: 0,
		width: 150,
		top: 0,
		height: 153,
	},
	pxGucciLogoSvThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 78,
		height: 79,
		marginRight: 36,
	},
	rectangle163View: {
		backgroundColor: "rgb(234, 169, 73)",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 42,
	},
	shopNowFiveText: {
		color: "white",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		right: 44,
		bottom: 11,
	},
	rectangle160View: {
		backgroundColor: "rgb(243, 243, 243)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		alignSelf: "center",
		width: 150,
		top: 17,
		height: 153,
	},
	rectangle161View: {
		backgroundColor: "rgb(234, 169, 73)",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		alignSelf: "center",
		width: 150,
		bottom: 0,
		height: 42,
	},
	massimoDuttiLogoTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 156,
		top: 0,
		height: 156,
	},
	aboutUsBannerImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 179,
	},
	dior2020Text: {
		color: "rgb(234, 169, 73)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 52,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 48,
		paddingTop: 14,
		backgroundColor: "transparent",
		position: "absolute",
		left: 32,
		top: 32,
	},
	healthBeautyText: {
		color: "rgb(234, 169, 73)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	shopAllThreeText: {
		color: "rgb(17, 17, 17)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	group1695View: {
		backgroundColor: "transparent",
		height: 153,
		marginLeft: 13,
		marginRight: 3,
		marginTop: 22,
	},
	rectangle158TwoView: {
		backgroundColor: "rgb(243, 243, 243)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 153,
	},
	oldspiceLogoBlackImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 95,
		height: 49,
		marginLeft: 28,
	},
	rectangle159TwoView: {
		backgroundColor: "rgb(234, 169, 73)",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 42,
	},
	shopNowSixText: {
		color: "white",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 38,
		bottom: 11,
	},
	shopNowSevenText: {
		color: "white",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginLeft: 56,
		marginBottom: 11,
	},
	rectangle162TwoView: {
		backgroundColor: "rgb(243, 243, 243)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 153,
	},
	pxGucciLogoSvFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 78,
		height: 79,
		marginRight: 36,
	},
	rectangle163TwoView: {
		backgroundColor: "rgb(234, 169, 73)",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 42,
	},
	shopNowEightText: {
		color: "white",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		right: 44,
		bottom: 11,
	},
	rectangle160TwoView: {
		backgroundColor: "rgb(243, 243, 243)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 153,
	},
	victoriaSecretLogoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 96,
		height: 77,
	},
	rectangle161TwoView: {
		backgroundColor: "rgb(234, 169, 73)",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 42,
	},
	makeupFragrancesText: {
		color: "rgb(234, 169, 73)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	shopAllFourText: {
		color: "rgb(17, 17, 17)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	group1696View: {
		backgroundColor: "transparent",
		height: 153,
		marginLeft: 13,
		marginRight: 3,
		marginBottom: 33,
	},
	rectangle158ThreeView: {
		backgroundColor: "rgb(243, 243, 243)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 153,
	},
	rectangle159ThreeView: {
		backgroundColor: "rgb(234, 169, 73)",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		width: 150,
		bottom: 0,
		height: 42,
	},
	shopNowNineText: {
		color: "white",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 38,
		bottom: 11,
	},
	maybellineVectorLoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 15,
		width: 120,
		top: 9,
		height: 120,
	},
	shopNowTenText: {
		color: "white",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginLeft: 56,
		marginBottom: 11,
	},
	rectangle162ThreeView: {
		backgroundColor: "rgb(243, 243, 243)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 153,
	},
	pxGucciLogoSvFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 78,
		height: 79,
		marginRight: 36,
	},
	rectangle163ThreeView: {
		backgroundColor: "rgb(234, 169, 73)",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 42,
	},
	shopNowElevenText: {
		color: "white",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		right: 44,
		bottom: 11,
	},
	rectangle160ThreeView: {
		backgroundColor: "rgb(243, 243, 243)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 153,
	},
	pacoRabanneLogo04Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 102,
		height: 49,
	},
	rectangle161ThreeView: {
		backgroundColor: "rgb(234, 169, 73)",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 150,
		height: 42,
	},
	rectangle113View: {
		backgroundColor: "rgb(239, 239, 239)",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 105,
	},
	group480Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 29,
		height: 28,
		marginBottom: 15,
	},
	homeText: {
		color: "rgb(171, 171, 171)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 1,
	},
	nounCategory283436Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 27,
		height: 27,
		marginBottom: 14,
	},
	shopsText: {
		color: "rgb(171, 171, 171)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	group477Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 16,
		height: 27,
		marginRight: 47,
		marginBottom: 28,
	},
	nounCart1363648Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 30,
		height: 28,
		marginRight: 5,
		marginBottom: 15,
	},
	myCartText: {
		color: "rgb(171, 171, 171)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	group479Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 23,
		height: 28,
		marginBottom: 14,
	},
	meText: {
		color: "rgb(171, 171, 171)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 4,
	},
	group1702View: {
		backgroundColor: "transparent",
		width: 56,
		height: 62,
	},
	group1701Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 35,
		marginLeft: 8,
		marginRight: 8,
	},
	brandShopText: {
		color: "rgb(45, 45, 45)",
		fontSize: 8,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginBottom: 3,
	},
	shoppingMadnessText: {
		color: "rgb(45, 45, 45)",
		fontSize: 4,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginLeft: 9,
		marginRight: 7,
	},
	dealsText: {
		color: "rgb(234, 169, 73)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
})

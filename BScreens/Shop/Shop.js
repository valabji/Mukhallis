//
//  Shop
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Shop extends React.Component {

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
						right: 0,
						top: 48,
						bottom: -5,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 28,
							marginLeft: 21,
							marginRight: 20,
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
							height: 184,
							marginTop: 53,
						}}>
						<Image
							source={require("./../../assets/images/massimo-dutti-holiday-2018-mens-gift-guide-001.png")}
							style={styles.massimoDuttiHolidaImage}/>
						<Text
							style={styles.winterCollectionText}>winter{"\n"}collection</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginLeft: 33,
							marginRight: 35,
							marginTop: 41,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.forHerText}>For Her</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.shopNowText}>Shop Now</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 205,
							marginLeft: 33,
							marginRight: 33,
							marginTop: 35,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 205,
							}}>
							<Image
								source={require("./../../assets/images/pretty-blonde-inlong-ink-dress-spinning-132075-1080.png")}
								style={styles.prettyBlondeInlongImage}/>
							<View
								style={styles.rectangle118View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 11,
									width: 111,
									top: 122,
									height: 72,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.shortDressForWomeText}>Short Dress for women{"\n"}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 81,
										height: 19,
										marginTop: 10,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/group-493.png")}
										style={styles.group493Image}/>
									<Image
										source={require("./../../assets/images/noun-heart-3104971-2.png")}
										style={styles.nounHeart3104971Image}/>
									<View
										style={styles.group492View}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												right: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<View
												pointerEvents="box-none"
												style={{
													height: 17,
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Image
													source={require("./../../assets/images/group-481.png")}
													style={styles.group481Image}/>
												<View
													style={styles.group487View}>
													<Image
														source={require("./../../assets/images/group-483.png")}
														style={styles.group483Image}/>
													<View
														style={{
															flex: 1,
														}}/>
													<Image
														source={require("./../../assets/images/group-485.png")}
														style={styles.group485Image}/>
												</View>
											</View>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 4,
												right: 4,
												top: 3,
												height: 11,
											}}>
											<Image
												source={require("./../../assets/images/group-488.png")}
												style={styles.group488Image}/>
											<Image
												source={require("./../../assets/images/group-490.png")}
												style={styles.group490Image}/>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 205,
							}}>
							<Image
								source={require("./../../assets/images/cute-teenage-girl-fashion-jacket-color-glasses-149155-2490-2.png")}
								style={styles.cuteTeenageGirlFaImage}/>
							<View
								style={styles.rectangle119View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 28,
									width: 111,
									top: 122,
									height: 72,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.shortDressForWomeTwoText}>Short Dress for women{"\n"}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 81,
										height: 19,
										marginRight: 30,
										marginTop: 10,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/group-493.png")}
										style={styles.group493TwoImage}/>
									<Image
										source={require("./../../assets/images/noun-heart-3104971-2.png")}
										style={styles.nounHeart3104971TwoImage}/>
									<View
										style={styles.group492TwoView}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												right: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<View
												pointerEvents="box-none"
												style={{
													height: 17,
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Image
													source={require("./../../assets/images/group-481.png")}
													style={styles.group481TwoImage}/>
												<View
													style={styles.group487TwoView}>
													<Image
														source={require("./../../assets/images/group-483.png")}
														style={styles.group483TwoImage}/>
													<View
														style={{
															flex: 1,
														}}/>
													<Image
														source={require("./../../assets/images/group-485.png")}
														style={styles.group485TwoImage}/>
												</View>
											</View>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 4,
												right: 4,
												top: 3,
												height: 11,
											}}>
											<Image
												source={require("./../../assets/images/group-488.png")}
												style={styles.group488TwoImage}/>
											<Image
												source={require("./../../assets/images/group-490.png")}
												style={styles.group490TwoImage}/>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 205,
							marginLeft: 33,
							marginRight: 33,
							marginTop: 31,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 205,
							}}>
							<Image
								source={require("./../../assets/images/pretty-blonde-inlong-ink-dress-spinning-132075-1080.png")}
								style={styles.prettyBlondeInlongTwoImage}/>
							<View
								style={styles.rectangle164View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 11,
									width: 111,
									top: 122,
									height: 72,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.shortDressForWomeThreeText}>Short Dress for women{"\n"}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 81,
										height: 19,
										marginTop: 10,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/group-493.png")}
										style={styles.group493ThreeImage}/>
									<Image
										source={require("./../../assets/images/noun-heart-3104971-2.png")}
										style={styles.nounHeart3104971ThreeImage}/>
									<View
										style={styles.group492ThreeView}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												right: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<View
												pointerEvents="box-none"
												style={{
													height: 17,
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Image
													source={require("./../../assets/images/group-481.png")}
													style={styles.group481ThreeImage}/>
												<View
													style={styles.group487ThreeView}>
													<Image
														source={require("./../../assets/images/group-483.png")}
														style={styles.group483ThreeImage}/>
													<View
														style={{
															flex: 1,
														}}/>
													<Image
														source={require("./../../assets/images/group-485.png")}
														style={styles.group485ThreeImage}/>
												</View>
											</View>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 4,
												right: 4,
												top: 3,
												height: 11,
											}}>
											<Image
												source={require("./../../assets/images/group-488.png")}
												style={styles.group488ThreeImage}/>
											<Image
												source={require("./../../assets/images/group-490.png")}
												style={styles.group490ThreeImage}/>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 205,
							}}>
							<Image
								source={require("./../../assets/images/cute-teenage-girl-fashion-jacket-color-glasses-149155-2490-2.png")}
								style={styles.cuteTeenageGirlFaTwoImage}/>
							<View
								style={styles.rectangle165View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 28,
									width: 111,
									top: 122,
									height: 72,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.shortDressForWomeFourText}>Short Dress for women{"\n"}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 81,
										height: 19,
										marginRight: 30,
										marginTop: 10,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/group-493.png")}
										style={styles.group493FourImage}/>
									<Image
										source={require("./../../assets/images/noun-heart-3104971-2.png")}
										style={styles.nounHeart3104971FourImage}/>
									<View
										style={styles.group492FourView}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												right: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<View
												pointerEvents="box-none"
												style={{
													height: 17,
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Image
													source={require("./../../assets/images/group-481.png")}
													style={styles.group481FourImage}/>
												<View
													style={styles.group487FourView}>
													<Image
														source={require("./../../assets/images/group-483.png")}
														style={styles.group483FourImage}/>
													<View
														style={{
															flex: 1,
														}}/>
													<Image
														source={require("./../../assets/images/group-485.png")}
														style={styles.group485FourImage}/>
												</View>
											</View>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 4,
												right: 4,
												top: 3,
												height: 11,
											}}>
											<Image
												source={require("./../../assets/images/group-488.png")}
												style={styles.group488FourImage}/>
											<Image
												source={require("./../../assets/images/group-490.png")}
												style={styles.group490FourImage}/>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginLeft: 33,
							marginRight: 35,
							marginTop: 49,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.forHimText}>For Him</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.shopNowTwoText}>Shop Now</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 205,
							marginLeft: 33,
							marginRight: 33,
							marginTop: 28,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 205,
							}}>
							<Image
								source={require("./../../assets/images/portrait-elegant-brutal-man-wool-suit-149155-478.png")}
								style={styles.portraitElegantBruImage}/>
							<View
								style={styles.rectangle121View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 11,
									width: 84,
									top: 122,
									height: 72,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.blueShirtForMen2Text}>Blue Shirt for Men{"\n"}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 81,
										height: 19,
										marginTop: 10,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/group-493.png")}
										style={styles.group493FiveImage}/>
									<Image
										source={require("./../../assets/images/noun-heart-3104971-2.png")}
										style={styles.nounHeart3104971FiveImage}/>
									<View
										style={styles.group492FiveView}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												right: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<View
												pointerEvents="box-none"
												style={{
													height: 17,
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Image
													source={require("./../../assets/images/group-481.png")}
													style={styles.group481FiveImage}/>
												<View
													style={styles.group487FiveView}>
													<Image
														source={require("./../../assets/images/group-483.png")}
														style={styles.group483FiveImage}/>
													<View
														style={{
															flex: 1,
														}}/>
													<Image
														source={require("./../../assets/images/group-485.png")}
														style={styles.group485FiveImage}/>
												</View>
											</View>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 4,
												right: 4,
												top: 3,
												height: 11,
											}}>
											<Image
												source={require("./../../assets/images/group-488.png")}
												style={styles.group488FiveImage}/>
											<Image
												source={require("./../../assets/images/group-490.png")}
												style={styles.group490FiveImage}/>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 205,
							}}>
							<Image
								source={require("./../../assets/images/handsome-elegant-man-with-curly-hair-wearing-black-turtleneck-glasses-149155-765.png")}
								style={styles.handsomeElegantManImage}/>
							<View
								style={styles.rectangle122View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 55,
									width: 84,
									top: 122,
									height: 72,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.blueShirtForMen2TwoText}>Blue Shirt for Men{"\n"}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 81,
										height: 19,
										marginRight: 3,
										marginTop: 10,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/group-493.png")}
										style={styles.group493SixImage}/>
									<Image
										source={require("./../../assets/images/noun-heart-3104971-2.png")}
										style={styles.nounHeart3104971SixImage}/>
									<View
										style={styles.group492SixView}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												right: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<View
												pointerEvents="box-none"
												style={{
													height: 17,
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Image
													source={require("./../../assets/images/group-481.png")}
													style={styles.group481SixImage}/>
												<View
													style={styles.group487SixView}>
													<Image
														source={require("./../../assets/images/group-483.png")}
														style={styles.group483SixImage}/>
													<View
														style={{
															flex: 1,
														}}/>
													<Image
														source={require("./../../assets/images/group-485.png")}
														style={styles.group485SixImage}/>
												</View>
											</View>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 4,
												right: 4,
												top: 3,
												height: 11,
											}}>
											<Image
												source={require("./../../assets/images/group-488.png")}
												style={styles.group488SixImage}/>
											<Image
												source={require("./../../assets/images/group-490.png")}
												style={styles.group490SixImage}/>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 205,
							marginLeft: 33,
							marginRight: 33,
							marginBottom: 50,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 205,
							}}>
							<Image
								source={require("./../../assets/images/portrait-elegant-brutal-man-wool-suit-149155-478.png")}
								style={styles.portraitElegantBruTwoImage}/>
							<View
								style={styles.rectangle166View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 11,
									width: 84,
									bottom: 11,
									height: 72,
									justifyContent: "flex-end",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.blueShirtForMen2ThreeText}>Blue Shirt for Men{"\n"}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 81,
										height: 19,
										flexDirection: "row",
										alignItems: "flex-end",
									}}>
									<Image
										source={require("./../../assets/images/group-493.png")}
										style={styles.group493SevenImage}/>
									<Image
										source={require("./../../assets/images/noun-heart-3104971-2.png")}
										style={styles.nounHeart3104971SevenImage}/>
									<View
										style={styles.group492SevenView}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												right: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<View
												pointerEvents="box-none"
												style={{
													height: 17,
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Image
													source={require("./../../assets/images/group-481.png")}
													style={styles.group481SevenImage}/>
												<View
													style={styles.group487SevenView}>
													<Image
														source={require("./../../assets/images/group-483.png")}
														style={styles.group483SevenImage}/>
													<View
														style={{
															flex: 1,
														}}/>
													<Image
														source={require("./../../assets/images/group-485.png")}
														style={styles.group485SevenImage}/>
												</View>
											</View>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 4,
												right: 4,
												top: 3,
												height: 11,
											}}>
											<Image
												source={require("./../../assets/images/group-488.png")}
												style={styles.group488SevenImage}/>
											<Image
												source={require("./../../assets/images/group-490.png")}
												style={styles.group490SevenImage}/>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 205,
							}}>
							<Image
								source={require("./../../assets/images/handsome-elegant-man-with-curly-hair-wearing-black-turtleneck-glasses-149155-765.png")}
								style={styles.handsomeElegantManTwoImage}/>
							<View
								style={styles.rectangle167View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 55,
									width: 84,
									bottom: 11,
									height: 72,
									justifyContent: "flex-end",
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.blueShirtForMen2FourText}>Blue Shirt for Men{"\n"}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 81,
										height: 19,
										marginRight: 3,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-end",
									}}>
									<Image
										source={require("./../../assets/images/group-493.png")}
										style={styles.group493EightImage}/>
									<Image
										source={require("./../../assets/images/noun-heart-3104971-2.png")}
										style={styles.nounHeart3104971EightImage}/>
									<View
										style={styles.group492EightView}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												right: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<View
												pointerEvents="box-none"
												style={{
													height: 17,
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Image
													source={require("./../../assets/images/group-481.png")}
													style={styles.group481EightImage}/>
												<View
													style={styles.group487EightView}>
													<Image
														source={require("./../../assets/images/group-483.png")}
														style={styles.group483EightImage}/>
													<View
														style={{
															flex: 1,
														}}/>
													<Image
														source={require("./../../assets/images/group-485.png")}
														style={styles.group485EightImage}/>
												</View>
											</View>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 4,
												right: 4,
												top: 3,
												height: 11,
											}}>
											<Image
												source={require("./../../assets/images/group-488.png")}
												style={styles.group488EightImage}/>
											<Image
												source={require("./../../assets/images/group-490.png")}
												style={styles.group490EightImage}/>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 105,
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
						width: 108,
						top: 9,
						bottom: 13,
						alignItems: "center",
					}}>
					<Image
						source={require("./../../assets/images/massimo-dutti-logo-2.png")}
						style={styles.massimoDuttiLogoImage}/>
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
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 6,
		width: 25,
		top: 1,
		height: 27,
	},
	ellipse234View: {
		backgroundColor: "rgb(236, 115, 87)",
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
	massimoDuttiHolidaImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 184,
	},
	winterCollectionText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 30,
		paddingTop: 6,
		backgroundColor: "transparent",
		position: "absolute",
		left: 28,
		top: 82,
	},
	forHerText: {
		color: "rgb(234, 169, 73)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	shopNowText: {
		color: "rgb(17, 17, 17)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	prettyBlondeInlongImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 150,
		top: 0,
		height: 205,
	},
	rectangle118View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		width: 150,
		top: 116,
		height: 89,
	},
	shortDressForWomeText: {
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		backgroundColor: "transparent",
	},
	group493Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 18,
		marginTop: 1,
	},
	nounHeart3104971Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: 20,
		height: 17,
		marginLeft: 10,
		marginTop: 2,
	},
	group492View: {
		backgroundColor: "transparent",
		width: 16,
		height: 17,
		marginLeft: 11,
	},
	group481Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 6,
		marginRight: 3,
	},
	group487View: {
		backgroundColor: "transparent",
		flex: 1,
		height: 17,
		marginLeft: 3,
	},
	group483Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 6,
		marginRight: 1,
	},
	group485Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 6,
		marginLeft: 1,
	},
	group488Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 5,
	},
	group490Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 5,
		marginTop: 1,
	},
	cuteTeenageGirlFaImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 150,
		top: 0,
		height: 205,
	},
	rectangle119View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		right: 0,
		width: 150,
		top: 116,
		height: 89,
	},
	shortDressForWomeTwoText: {
		backgroundColor: "transparent",
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
	},
	group493TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 18,
		marginRight: 10,
		marginTop: 1,
	},
	nounHeart3104971TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: 20,
		height: 17,
		marginRight: 11,
		marginTop: 2,
	},
	group492TwoView: {
		backgroundColor: "transparent",
		width: 16,
		height: 17,
	},
	group481TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 6,
		marginRight: 3,
	},
	group487TwoView: {
		backgroundColor: "transparent",
		flex: 1,
		height: 17,
		marginLeft: 3,
	},
	group483TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 6,
		marginRight: 1,
	},
	group485TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 6,
		marginLeft: 1,
	},
	group488TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 5,
	},
	group490TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 5,
		marginTop: 1,
	},
	prettyBlondeInlongTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 150,
		top: 0,
		height: 205,
	},
	rectangle164View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		width: 150,
		top: 116,
		height: 89,
	},
	shortDressForWomeThreeText: {
		backgroundColor: "transparent",
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
	},
	group493ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 18,
		marginTop: 1,
	},
	nounHeart3104971ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: 20,
		height: 17,
		marginLeft: 10,
		marginTop: 2,
	},
	group492ThreeView: {
		backgroundColor: "transparent",
		width: 16,
		height: 17,
		marginLeft: 11,
	},
	group481ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		flex: 1,
		height: 6,
		marginRight: 3,
	},
	group487ThreeView: {
		backgroundColor: "transparent",
		flex: 1,
		height: 17,
		marginLeft: 3,
	},
	group483ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 6,
		marginRight: 1,
	},
	group485ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 6,
		marginLeft: 1,
	},
	group488ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 5,
	},
	group490ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 5,
		marginTop: 1,
	},
	cuteTeenageGirlFaTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 150,
		top: 0,
		height: 205,
	},
	rectangle165View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		right: 0,
		width: 150,
		top: 116,
		height: 89,
	},
	shortDressForWomeFourText: {
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		backgroundColor: "transparent",
	},
	group493FourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 18,
		marginRight: 10,
		marginTop: 1,
	},
	nounHeart3104971FourImage: {
		backgroundColor: "transparent",
		opacity: 0.41,
		resizeMode: "center",
		width: 20,
		height: 17,
		marginRight: 11,
		marginTop: 2,
	},
	group492FourView: {
		backgroundColor: "transparent",
		width: 16,
		height: 17,
	},
	group481FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 6,
		marginRight: 3,
	},
	group487FourView: {
		backgroundColor: "transparent",
		flex: 1,
		height: 17,
		marginLeft: 3,
	},
	group483FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 6,
		marginRight: 1,
	},
	group485FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 6,
		marginLeft: 1,
	},
	group488FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 5,
	},
	group490FourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 5,
		marginTop: 1,
	},
	forHimText: {
		color: "rgb(234, 169, 73)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	shopNowTwoText: {
		color: "rgb(17, 17, 17)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	portraitElegantBruImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 0,
		width: 150,
		top: 0,
		height: 205,
	},
	rectangle121View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		width: 150,
		top: 116,
		height: 89,
	},
	blueShirtForMen2Text: {
		backgroundColor: "transparent",
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
	},
	group493FiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 18,
		marginTop: 1,
	},
	nounHeart3104971FiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: 20,
		height: 17,
		marginLeft: 10,
		marginTop: 2,
	},
	group492FiveView: {
		backgroundColor: "transparent",
		width: 16,
		height: 17,
		marginLeft: 11,
	},
	group481FiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		flex: 1,
		height: 6,
		marginRight: 3,
	},
	group487FiveView: {
		backgroundColor: "transparent",
		flex: 1,
		height: 17,
		marginLeft: 3,
	},
	group483FiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 6,
		marginRight: 1,
	},
	group485FiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 6,
		marginLeft: 1,
	},
	group488FiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 5,
	},
	group490FiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 5,
		marginTop: 1,
	},
	handsomeElegantManImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 0,
		width: 150,
		top: 0,
		height: 205,
	},
	rectangle122View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		right: 0,
		width: 150,
		top: 116,
		height: 89,
	},
	blueShirtForMen2TwoText: {
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		backgroundColor: "transparent",
	},
	group493SixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 18,
		marginRight: 10,
		marginTop: 1,
	},
	nounHeart3104971SixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: 20,
		height: 17,
		marginRight: 11,
		marginTop: 2,
	},
	group492SixView: {
		backgroundColor: "transparent",
		width: 16,
		height: 17,
	},
	group481SixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		flex: 1,
		height: 6,
		marginRight: 3,
	},
	group487SixView: {
		backgroundColor: "transparent",
		flex: 1,
		height: 17,
		marginLeft: 3,
	},
	group483SixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 6,
		marginRight: 1,
	},
	group485SixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 6,
		marginLeft: 1,
	},
	group488SixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 5,
	},
	group490SixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 5,
		marginTop: 1,
	},
	portraitElegantBruTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 0,
		width: 150,
		bottom: 0,
		height: 205,
	},
	rectangle166View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		width: 150,
		bottom: 0,
		height: 89,
	},
	blueShirtForMen2ThreeText: {
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		backgroundColor: "transparent",
		marginBottom: 10,
	},
	group493SevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 18,
	},
	nounHeart3104971SevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: 20,
		height: 17,
		marginLeft: 10,
	},
	group492SevenView: {
		backgroundColor: "transparent",
		width: 16,
		height: 17,
		marginLeft: 11,
		marginBottom: 2,
	},
	group481SevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 6,
		marginRight: 3,
	},
	group487SevenView: {
		backgroundColor: "transparent",
		flex: 1,
		height: 17,
		marginLeft: 3,
	},
	group483SevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 6,
		marginRight: 1,
	},
	group485SevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 6,
		marginLeft: 1,
	},
	group488SevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 5,
	},
	group490SevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 5,
		marginTop: 1,
	},
	handsomeElegantManTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 150,
		bottom: 0,
		height: 205,
	},
	rectangle167View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		position: "absolute",
		right: 0,
		width: 150,
		bottom: 0,
		height: 89,
	},
	blueShirtForMen2FourText: {
		backgroundColor: "transparent",
		color: "rgb(20, 20, 20)",
		fontFamily: "Poppins-ExtraLight",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		marginBottom: 10,
	},
	group493EightImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 18,
		marginRight: 10,
	},
	nounHeart3104971EightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.41,
		width: 20,
		height: 17,
		marginRight: 11,
	},
	group492EightView: {
		backgroundColor: "transparent",
		width: 16,
		height: 17,
		marginBottom: 2,
	},
	group481EightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 6,
		marginRight: 3,
	},
	group487EightView: {
		backgroundColor: "transparent",
		flex: 1,
		height: 17,
		marginLeft: 3,
	},
	group483EightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 6,
		marginRight: 1,
	},
	group485EightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 6,
		marginLeft: 1,
	},
	group488EightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 5,
	},
	group490EightImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 5,
		marginTop: 1,
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
	massimoDuttiLogoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 108,
		height: 108,
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

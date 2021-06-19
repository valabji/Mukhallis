//
//  Home
//  Brandshop
//
//  Created by Abdalrahman S. Valabji.
//  Copyright © 2018 infty. All rights reserved.
//

import { Feather } from "@expo/vector-icons";
import React from "react"
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { Ic_group_1703, Ic_nounshoppingcart, Ic_nounshoppingcartO, Ic_noun_menu_1812743 } from "../../components/SVG"
import Colors from "../../constants/Colors";
import styles from '../../constants/Style';

export default class Home extends React.Component {

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
			<ScrollView>
				<View
					style={{
						width: "100%"
					}}>
					<View
						style={{
							width: "100%",
							height: 30,
							paddingLeft: 21,
							paddingRight: 21,
							flexDirection: "row",
							paddingTop: 10,
						}}>
						<Ic_noun_menu_1812743 />
						<View
							style={{
								flex: 1,
							}} />
						<Ic_group_1703 />
						<View
							style={{
								flex: 1,
							}} />
						{
							false ?
								<Ic_nounshoppingcartO />
								:
								<Ic_nounshoppingcart />
						}
					</View>
					<View style={{ flex: 1, alignItems: 'center', }}>
						<View style={styles.searchContainer}>
							<Feather name="search" size={18} color={Colors.DGray} />
							<TextInput
								// value={email}
								placeholder="Start searching for real brands"
								style={styles.search}
								placeholderTextColor={Colors.DGray}
							// onChangeText={value => setEmail(value)}
							/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 184,
							marginRight: 106,
							marginTop: 25,
						}}>
						<Image
							source={require("./../../assets/images/02-campaign02-ban-01.png")}
							style={styles.campaign02Ban01Image} />
						<Text
							style={styles.wowDealsText}>w</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginLeft: 13,
							marginRight: 126,
							marginTop: 26,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.shopByCategoryText}>Shop By Category</Text>
						<View
							style={{
								flex: 1,
							}} />
						<Text
							style={styles.seeAllText}>See All</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 176,
							marginLeft: 13,
							marginRight: 118,
							marginTop: 23,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 147,
								height: 176,
							}}>
							<Image
								source={require("./../../assets/images/young-man-woman-sitting-stairs-holding-bouquet-adorable-flowers-130488-2233.png")}
								style={styles.youngManWomanSittImage} />
							<Text
								style={styles.shopFashionText}>Shop{"\n"}Fashion</Text>
						</View>
						<View
							style={{
								flex: 1,
							}} />
						<View
							pointerEvents="box-none"
							style={{
								width: 90,
								height: 176,
								marginRight: 11,
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/bright-yellow-accessories-blue-shoes-girls-women-urban-fashion-beauty-blog-concept-72402-914.png")}
								style={styles.brightYellowAccessImage} />
							<Image
								source={require("./../../assets/images/horizontal-fancy-mulatto-woman-with-colorful-makeup-curly-hair-bun-gesturing-camera-with-fashion-look-isolated-blue-wall-171337-2444.png")}
								style={styles.horizontalFancyMulImage} />
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 90,
								height: 176,
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/two-elegant-glamor-hipster-twin-girls-fashion-neon-green-dresses-149155-3333.png")}
								style={styles.twoElegantGlamorHImage} />
							<Image
								source={require("./../../assets/images/set-luxury-perfume-bottles-isolated-127657-10745.png")}
								style={styles.setLuxuryPerfumeBImage} />
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginLeft: 13,
							marginRight: 125,
							marginTop: 26,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.forHerText}>For Her</Text>
						<View
							style={{
								flex: 1,
							}} />
						<Text
							style={styles.shopNowText}>Shop Now</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 89,
							marginLeft: 13,
							marginTop: 139,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 89,
							}}>
							<View
								style={styles.rectangle118View} />
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 11,
									width: 111,
									top: 6,
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
										style={styles.group493Image} />
									<Image
										source={require("./../../assets/images/noun-heart-3104971-2.png")}
										style={styles.nounHeart3104971Image} />
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
													style={styles.group481Image} />
												<View
													style={styles.group487View}>
													<Image
														source={require("./../../assets/images/group-483.png")}
														style={styles.group483Image} />
													<View
														style={{
															flex: 1,
														}} />
													<Image
														source={require("./../../assets/images/group-485.png")}
														style={styles.group485Image} />
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
												style={styles.group488Image} />
											<Image
												source={require("./../../assets/images/group-490.png")}
												style={styles.group490Image} />
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}} />
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 89,
								marginRight: 9,
							}}>
							<View
								style={styles.rectangle119View} />
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 28,
									width: 111,
									top: 6,
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
										style={styles.group493TwoImage} />
									<Image
										source={require("./../../assets/images/noun-heart-3104971-2.png")}
										style={styles.nounHeart3104971TwoImage} />
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
													style={styles.group481TwoImage} />
												<View
													style={styles.group487TwoView}>
													<Image
														source={require("./../../assets/images/group-483.png")}
														style={styles.group483TwoImage} />
													<View
														style={{
															flex: 1,
														}} />
													<Image
														source={require("./../../assets/images/group-485.png")}
														style={styles.group485TwoImage} />
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
												style={styles.group488TwoImage} />
											<Image
												source={require("./../../assets/images/group-490.png")}
												style={styles.group490TwoImage} />
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 89,
							}}>
							<View
								style={styles.rectangle120View} />
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 28,
									width: 111,
									top: 6,
									height: 72,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.shortDressForWomeThreeText}>Short Dress for women{"\n"}</Text>
								<Image
									source={require("./../../assets/images/group-493.png")}
									style={styles.group493ThreeImage} />
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginLeft: 13,
							marginRight: 125,
							marginTop: 27,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.forHimText}>For Him</Text>
						<View
							style={{
								flex: 1,
							}} />
						<Text
							style={styles.shopNowTwoText}>Shop Now</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 205,
							marginLeft: 13,
							marginTop: 23,
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
								style={styles.portraitElegantBruImage} />
							<View
								style={styles.rectangle121View} />
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
										style={styles.group493FourImage} />
									<Image
										source={require("./../../assets/images/noun-heart-3104971-2.png")}
										style={styles.nounHeart3104971ThreeImage} />
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
													style={styles.group481ThreeImage} />
												<View
													style={styles.group487ThreeView}>
													<Image
														source={require("./../../assets/images/group-483.png")}
														style={styles.group483ThreeImage} />
													<View
														style={{
															flex: 1,
														}} />
													<Image
														source={require("./../../assets/images/group-485.png")}
														style={styles.group485ThreeImage} />
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
												style={styles.group488ThreeImage} />
											<Image
												source={require("./../../assets/images/group-490.png")}
												style={styles.group490ThreeImage} />
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}} />
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 205,
								marginRight: 9,
							}}>
							<Image
								source={require("./../../assets/images/handsome-elegant-man-with-curly-hair-wearing-black-turtleneck-glasses-149155-765.png")}
								style={styles.handsomeElegantManImage} />
							<View
								style={styles.rectangle122View} />
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
										style={styles.group493FiveImage} />
									<Image
										source={require("./../../assets/images/noun-heart-3104971-2.png")}
										style={styles.nounHeart3104971FourImage} />
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
													style={styles.group481FourImage} />
												<View
													style={styles.group487FourView}>
													<Image
														source={require("./../../assets/images/group-483.png")}
														style={styles.group483FourImage} />
													<View
														style={{
															flex: 1,
														}} />
													<Image
														source={require("./../../assets/images/group-485.png")}
														style={styles.group485FourImage} />
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
												style={styles.group488FourImage} />
											<Image
												source={require("./../../assets/images/group-490.png")}
												style={styles.group490FourImage} />
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 205,
							}}>
							<Image
								source={require("./../../assets/images/man-fastens-cuffs-his-shirt-136403-2866.png")}
								style={styles.manFastensCuffsHiImage} />
							<View
								style={styles.rectangle123View} />
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
									style={styles.blueShirtForMen2ThreeText}>Blue Shirt for Men{"\n"}</Text>
								<Image
									source={require("./../../assets/images/group-493.png")}
									style={styles.group493SixImage} />
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}} />
					<Text
						style={styles.youJustViewedText}>You Just Viewed</Text>
					<View
						pointerEvents="box-none"
						style={{
							height: 205,
							marginLeft: 13,
							marginBottom: 41,
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
								source={require("./../../assets/images/pretty-blonde-inlong-ink-dress-spinning-132075-1080.png")}
								style={styles.prettyBlondeInlongTwoImage} />
							<View
								style={styles.rectangle124View} />
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 11,
									width: 111,
									bottom: 11,
									height: 72,
									justifyContent: "flex-end",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.shortDressForWomeFourText}>Short Dress for women{"\n"}</Text>
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
										style={styles.group493SevenImage} />
									<Image
										source={require("./../../assets/images/noun-heart-3104971-2.png")}
										style={styles.nounHeart3104971FiveImage} />
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
													style={styles.group481FiveImage} />
												<View
													style={styles.group487FiveView}>
													<Image
														source={require("./../../assets/images/group-483.png")}
														style={styles.group483FiveImage} />
													<View
														style={{
															flex: 1,
														}} />
													<Image
														source={require("./../../assets/images/group-485.png")}
														style={styles.group485FiveImage} />
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
												style={styles.group488FiveImage} />
											<Image
												source={require("./../../assets/images/group-490.png")}
												style={styles.group490FiveImage} />
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}} />
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 205,
								marginRight: 9,
							}}>
							<Image
								source={require("./../../assets/images/cute-teenage-girl-fashion-jacket-color-glasses-149155-2490-2.png")}
								style={styles.cuteTeenageGirlFaTwoImage} />
							<View
								style={styles.rectangle125View} />
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 28,
									width: 111,
									bottom: 11,
									height: 72,
									justifyContent: "flex-end",
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.shortDressForWomeFiveText}>Short Dress for women{"\n"}</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 81,
										height: 19,
										marginRight: 30,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-end",
									}}>
									<Image
										source={require("./../../assets/images/group-493.png")}
										style={styles.group493EightImage} />
									<Image
										source={require("./../../assets/images/noun-heart-3104971-2.png")}
										style={styles.nounHeart3104971SixImage} />
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
													style={styles.group481SixImage} />
												<View
													style={styles.group487SixView}>
													<Image
														source={require("./../../assets/images/group-483.png")}
														style={styles.group483SixImage} />
													<View
														style={{
															flex: 1,
														}} />
													<Image
														source={require("./../../assets/images/group-485.png")}
														style={styles.group485SixImage} />
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
												style={styles.group488SixImage} />
											<Image
												source={require("./../../assets/images/group-490.png")}
												style={styles.group490SixImage} />
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 150,
								height: 205,
							}}>
							<Image
								source={require("./../../assets/images/woman-clothing-accessories-pastel-colors-72402-1146.png")}
								style={styles.womanClothingAccesTwoImage} />
							<View
								style={styles.rectangle126View} />
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 28,
									width: 111,
									bottom: 11,
									height: 72,
									justifyContent: "flex-end",
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.shortDressForWomeSixText}>Short Dress for women{"\n"}</Text>
								<Image
									source={require("./../../assets/images/group-493.png")}
									style={styles.group493NineImage} />
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 105,
							marginRight: 106,
						}}>
						<View
							style={styles.rectangle113View} />
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
									style={styles.group480Image} />
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
									style={styles.nounCategory283436Image} />
								<Text
									style={styles.shopsText}>Shops</Text>
							</View>
							<View
								style={{
									flex: 1,
								}} />
							<Image
								source={require("./../../assets/images/group-477.png")}
								style={styles.group477Image} />
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
									style={styles.nounCart1363648Image} />
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
									style={styles.group479Image} />
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
						left: 13,
						right: -106,
						top: 38,
						bottom: 18,
						alignItems: "center",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 205,
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Image
							source={require("./../../assets/images/pretty-blonde-inlong-ink-dress-spinning-132075-1080.png")}
							style={styles.prettyBlondeInlongImage} />
						<View
							style={{
								flex: 1,
							}} />
						<Image
							source={require("./../../assets/images/cute-teenage-girl-fashion-jacket-color-glasses-149155-2490-2.png")}
							style={styles.cuteTeenageGirlFaImage} />
						<Image
							source={require("./../../assets/images/woman-clothing-accessories-pastel-colors-72402-1146.png")}
							style={styles.womanClothingAccesImage} />
					</View>
					<View
						style={{
							flex: 1,
						}} />
					<Text
						style={styles.dealsText}>Deals</Text>
				</View>
			</ScrollView>
		</View>
	}
}

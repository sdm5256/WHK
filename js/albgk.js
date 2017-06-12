window.onload = function() {
	require.config({
		paths: {
			echarts: 'js/dist'
		}
	});
	require(['echarts', 'echarts/chart/bar', 'echarts/chart/line', 'echarts/chart/map'], function(ec) {
		var ecConfig = require('echarts/config')
		var myChart = ec.init(document.getElementById('mainMap'));

		var option = {
			tooltip: {
				trigger: 'item',
				formatter: '{b}'
			},
			series: [{
					name: '西亚',
					type: 'map',
					mapType: 'world',
					roam: false,
					selectedMode: 'single',
					itemStyle: {
						normal: {
							borderColor: '#e5e5e5', //各个块的边框颜色
							borderWidth: 1,
							label: {
								show: false
							}
							//非国家区块颜色
						},
						emphasis: {
							label: {
								show: false
							},
							//calculableHolderColor:'#000000',
							color: '#ba8c6d' //鼠标划过国家区块颜色
							// 								color:'#66cc00' 
						}
					},
					textFixed: {
						'Syria': [5, -15],
						'Israel': [5, -20],
						'Lebanon': [5, -10],
						'Jordan': [0, 10]
					},
					mapLocation: {
						x: '-800',
						y: '-260',
						height: '2000',
						width: '2000'
					},

					data: [{
							name: '巴勒斯坦',
							value: 10023,
							itemStyle: {
								normal: {
									color: '#cf9c9b',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						}, //国家区块颜色      字体颜色					
						{
							name: '约旦',
							value: 10024,
							itemStyle: {
								normal: {
									color: '#6eb79d',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '叙利亚',
							value: 10051,
							itemStyle: {
								normal: {
									color: '#e39a45',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '黎巴嫩',
							value: 10052,
							itemStyle: {
								normal: {
									color: '#cf9c9b',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '沙特阿拉伯',
							value: 10053,
							itemStyle: {
								normal: {
									color: '#9ca357',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '伊拉克',
							value: 10054,
							itemStyle: {
								normal: {
									color: '#7f649e',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '也门',
							value: 10055,
							itemStyle: {
								normal: {
									color: '#7f649e',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '科威特',
							value: 10056,
							itemStyle: {
								normal: {
									color: '#cf9c9b',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '阿联酋',
							value: 10057,
							itemStyle: {
								normal: {
									color: '#336f70',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '卡塔尔',
							value: 10058,
							itemStyle: {
								normal: {
									color: '#cf9c9b',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '巴林',
							value: 10059,
							itemStyle: {
								normal: {
									color: '#cf9c9b',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '阿曼',
							value: 10060,
							itemStyle: {
								normal: {
									color: '#cf9c9b',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						}

					],
					// 自定义名称
					nameMap: {
						'Afghanistan': '阿富汗',
						'Bahrain': '巴林',
						'Angola': '安哥拉',
						'Albania': '阿尔巴尼亚',
						'United Arab Emirates': '阿联酋',
						'Argentina': '阿根廷',
						'Armenia': '亚美尼亚',
						'French Southern and Antarctic Lands': '法属南半球和南极领地',
						'Australia': '澳大利亚',
						'Austria': '奥地利',
						'Azerbaijan': '阿塞拜疆',
						'Burundi': '布隆迪',
						'Belgium': '比利时',
						'Benin': '贝宁',
						'Burkina Faso': '布基纳法索',
						'Bangladesh': '孟加拉国',
						'Bulgaria': '保加利亚',
						'The Bahamas': '巴哈马',
						'Bosnia and Herzegovina': '波斯尼亚和黑塞哥维那',
						'Belarus': '白俄罗斯',
						'Belize': '伯利兹',
						'Bermuda': '百慕大',
						'Bolivia': '玻利维亚',
						'Brazil': '巴西',
						'Brunei': '文莱',
						'Bhutan': '不丹',
						'Botswana': '博茨瓦纳',
						'Central African Republic': '中非共和国',
						'Canada': '加拿大',
						'Switzerland': '瑞士',
						'Chile': '智利',
						'China': '中国',
						'Ivory Coast': '象牙海岸',
						'Cameroon': '喀麦隆',
						'Democratic Republic of the Congo': '刚果民主共和国',
						'Republic of the Congo': '刚果共和国',
						'Colombia': '哥伦比亚',
						'Costa Rica': '哥斯达黎加',
						'Cuba': '古巴',
						'Northern Cyprus': '北塞浦路斯',
						'Cyprus': '塞浦路斯',
						'Czech Republic': '捷克共和国',
						'Germany': '德国',
						'Djibouti': '吉布提',
						'Denmark': '丹麦',
						'Dominican Republic': '多明尼加共和国',
						'Algeria': '阿尔及利亚',
						'Ecuador': '厄瓜多尔',
						'Egypt': '埃及',
						'Eritrea': '厄立特里亚',
						'Spain': '西班牙',
						'Estonia': '爱沙尼亚',
						'Ethiopia': '埃塞俄比亚',
						'Finland': '芬兰',
						'Fiji': '斐',
						'Falkland Islands': '福克兰群岛',
						'France': '法国',
						'Gabon': '加蓬',
						'United Kingdom': '英国',
						'Georgia': '格鲁吉亚',
						'Ghana': '加纳',
						'Guinea': '几内亚',
						'Gambia': '冈比亚',
						'Guinea Bissau': '几内亚比绍',
						'Equatorial Guinea': '赤道几内亚',
						'Greece': '希腊',
						'Greenland': '格陵兰',
						'Guatemala': '危地马拉',
						'French Guiana': '法属圭亚那',
						'Guyana': '圭亚那',
						'Honduras': '洪都拉斯',
						'Croatia': '克罗地亚',
						'Haiti': '海地',
						'Hungary': '匈牙利',
						'Indonesia': '印度尼西亚',
						'India': '印度',
						'Ireland': '爱尔兰',
						'Iran': '伊朗',
						'Iraq': '伊拉克',
						'Iceland': '冰岛',
						'Israel': '以色列',
						'Italy': '意大利',
						'Jamaica': '牙买加',
						'Jordan': '约旦',
						'Japan': '日本',
						'Kazakhstan': '哈萨克斯坦',
						'Kenya': '肯尼亚',
						'Kyrgyzstan': '吉尔吉斯斯坦',
						'Cambodia': '柬埔寨',
						'South Korea': '韩国',
						'Kosovo': '科索沃',
						'Kuwait': '科威特',
						'Laos': '老挝',
						'Lebanon': '黎巴嫩',
						'Liberia': '利比里亚',
						'Libya': '利比亚',
						'Sri Lanka': '斯里兰卡',
						'Lesotho': '莱索托',
						'Lithuania': '立陶宛',
						'Luxembourg': '卢森堡',
						'Latvia': '拉脱维亚',
						'Morocco': '摩洛哥',
						'Moldova': '摩尔多瓦',
						'Madagascar': '马达加斯加',
						'Mexico': '墨西哥',
						'Macedonia': '马其顿',
						'Mali': '马里',
						'Myanmar': '缅甸',
						'Montenegro': '黑山',
						'Mongolia': '蒙古',
						'Mozambique': '莫桑比克',
						'Mauritania': '毛里塔尼亚',
						'Malawi': '马拉维',
						'Malaysia': '马来西亚',
						'Namibia': '纳米比亚',
						'New Caledonia': '新喀里多尼亚',
						'Niger': '尼日尔',
						'Nigeria': '尼日利亚',
						'Nicaragua': '尼加拉瓜',
						'Netherlands': '荷兰',
						'Norway': '挪威',
						'Nepal': '尼泊尔',
						'New Zealand': '新西兰',
						'Oman': '阿曼',
						'Pakistan': '巴基斯坦',
						'Panama': '巴拿马',
						'Peru': '秘鲁',
						'Philippines': '菲律宾',
						'Papua New Guinea': '巴布亚新几内亚',
						'Poland': '波兰',
						'Puerto Rico': '波多黎各',
						'North Korea': '北朝鲜',
						'Portugal': '葡萄牙',
						'Paraguay': '巴拉圭',
						'Qatar': '卡塔尔',
						'Romania': '罗马尼亚',
						'Russia': '俄罗斯',
						'Rwanda': '卢旺达',
						'Western Sahara': '西撒哈拉',
						'Saudi Arabia': '沙特阿拉伯',
						'Sudan': '苏丹',
						'South Sudan': '南苏丹',
						'Senegal': '塞内加尔',
						'Solomon Islands': '所罗门群岛',
						'Sierra Leone': '塞拉利昂',
						'El Salvador': '萨尔瓦多',
						'Somaliland': '索马里兰',
						'Somalia': '索马里',
						'Republic of Serbia': '塞尔维亚共和国',
						'Suriname': '苏里南',
						'Slovakia': '斯洛伐克',
						'Slovenia': '斯洛文尼亚',
						'Sweden': '瑞典',
						'Swaziland': '斯威士兰',
						'Syria': '叙利亚',
						'Chad': '乍得',
						'Togo': '多哥',
						'Thailand': '泰国',
						'Tajikistan': '塔吉克斯坦',
						'Turkmenistan': '土库曼斯坦',
						'East Timor': '东帝汶',
						'Trinidad and Tobago': '特里尼达和多巴哥',
						'Tunisia': '突尼斯',
						'Turkey': '土耳其',
						'United Republic of Tanzania': '坦桑尼亚联合共和国',
						'Uganda': '乌干达',
						'Ukraine': '乌克兰',
						'Uruguay': '乌拉圭',
						'United States of America': '美国',
						'Uzbekistan': '乌兹别克斯坦',
						'Venezuela': '委内瑞拉',
						'Vietnam': '越南',
						'Vanuatu': '瓦努阿图',
						'West Bank': '巴勒斯坦',
						'Yemen': '也门',
						'South Africa': '南非',
						'Zambia': '赞比亚',
						'Zimbabwe': '津巴布韦'
					}
				},
				{
					name: '中亚',
					type: 'map',
					mapType: 'world',
					roam: false,
					itemStyle: {
						normal: {
							borderColor: '#e5e5e5', //各个块的边框颜色
							borderWidth: 1,
							label: {
								show: false
							}
							//非国家区块颜色
						},
						emphasis: {
							label: {
								show: false
							},
							color: '#EECBAD' //鼠标划过国家区块颜色
						}
					},
					data: []
				},
				{
					name: '非洲',
					type: 'map',
					mapType: 'world',
					roam: false,
					itemStyle: {
						normal: {
							borderColor: '#e5e5e5', //各个块的边框颜色
							borderWidth: 1,
							label: {
								show: false
							}
							//非国家区块颜色
						},
						emphasis: {
							label: {
								show: false
							},
							color: '#EEDC82' //鼠标划过国家区块颜色
						}
					},
					data: [{
							name: '阿尔及利亚',
							value: 10063,
							itemStyle: {
								normal: {
									color: '#9ca357',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '摩洛哥',
							value: 10064,
							itemStyle: {
								normal: {
									color: '#6eb79d',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '突尼斯',
							value: 10065,
							itemStyle: {
								normal: {
									color: '#e39a45',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '利比亚',
							value: 10066,
							itemStyle: {
								normal: {
									color: '#6eb79d',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '苏丹',
							value: 10067,
							itemStyle: {
								normal: {
									color: '#9ca357',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '埃及',
							value: 10069,
							itemStyle: {
								normal: {
									color: '#336f70',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '吉布提',
							value: 10070,
							itemStyle: {
								normal: {
									color: '#CDC673',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '索马里',
							value: 10071,
							itemStyle: {
								normal: {
									color: '#9ca357',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						},
						{
							name: '毛里塔尼亚',
							value: 10074,
							itemStyle: {
								normal: {
									color: '#7f649e',
									label: {
										show: true,
										textStyle: {
											color: '#000'
										}
									}
								}
							}
						}
					]
				}
			]
		};
		myChart.setOption(option);
		myChart.on(ecConfig.EVENT.MAP_SELECTED, function(param) {
			var selected = param.selected;
			var selectedProvince;
			var name;
			for(var j = 0; j < option.series.length; j++) {
				for(var i = 0, l = option.series[j].data.length; i < l; i++) {
					name = option.series[j].data[i].name;
					var value = option.series[j].data[i].value;
					option.series[j].data[i].selected = selected[name];
					if(selected[name] && value > 0) {
						selectedProvince = name;
						//window.location.href = 'http://202.201.128.159/skwx/ningxialist?SiteID=45&sublibid=' + value;
					}
				}

			}

		});
	});
}
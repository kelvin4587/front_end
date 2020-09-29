/**
 *  echarts 样式重置
 *  params  color  string
 *  params  size   string
 *
 * */
function resetStyle(color, size) {
    return {
        color: color,
        fontSize: size,
    }
}


// 高层人才展示分布
var optsDisPie = {
    title: {
        text: '高层人才展示分布',
        padding: 5,
        left: 'center',
        textStyle: resetStyle("#838188", '110%')
    },
    color: ['#009ff1', '#2e3149'],
    tooltip: {
        show: false,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        x: 'center',
        bottom: 10,
        data: ['总人才'],
        selectedMode: false,
        textStyle: resetStyle("#889cbb", '90%')
    },

    series: [
        {
            name: '',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            silent: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: function (parmars, ticket, callback) {

                        // return `总人才()\n   200人 `
                        return `总人才(55%)`
                    },
                    textStyle: resetStyle("#fff", '100%')
                },
                emphasis: {
                    show: false,
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [
                {value: 55, name: '总人才'},
                {value: 45, name: '其他'},
            ]
        }
    ]
};


// 人才层次分布
var optsDisBar = {
    color: ['#3398DB'],
    title: {
        text: '人才层次分布',
        padding: 5,
        left: 'left',
        subtext: '单位（人）',
        textStyle: resetStyle("#fff", '100%')
    },
    grid: {
        left: '-35',
        right: '0',
        bottom: '10',
        top: "50",
        containLabel: true
    },
    tooltip: {
        trigger: 'item'
        // trigger: 'axis',
        // axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        //     type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        // }
    },

    xAxis: {
        data: ['国家千人计划', '省千人计划', '绍兴海内英才计划', '暨阳533英才计划'],

        axisTick: {
            show: true
        },

        axisLabel: {
            fontSize: "80%",
            formatter: function (params) {
                // console.log(params);
                var newParamsName = "";
                var paramsNameNumber = params.length;
                var provideNumber = 5;  //一行显示几个字
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                if (paramsNameNumber > provideNumber) {
                    for (var p = 0; p < rowNumber; p++) {
                        var tempStr = "";
                        var start = p * provideNumber;
                        var end = start + provideNumber;
                        if (p == rowNumber - 1) {
                            tempStr = params.substring(start, paramsNameNumber);
                        } else {
                            tempStr = params.substring(start, end) + "\n";
                        }
                        newParamsName += tempStr;
                    }

                } else {
                    newParamsName = params;
                }
                return newParamsName
            },
        },
        axisLine: {
            lineStyle: {
                color: "#00c0ff" // 2b83eb
            },
        },

    },
    yAxis: {

        show: false,
        type: 'value',
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: "#ddd",
                width: 1
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        {
            type: 'bar',
            itemStyle: {
                normal: {color: '#1c3e60'}
            },
            tooltip: {
                return : ""
                // // formatter: " {a}<br/>&nbsp;&nbsp;&nbsp;{b}"+skyValueArr[0],
                // backgroundColor: 'rgba(255, 255, 255, 0.7)',
                // textStyle: {
                //     // color: '#000',
                //     fontSize: "90%"
                // }
            },
            barGap: '-100%',
            barCategoryGap: '60%',
            data: [200, 200, 200, 200, 200],
            animation: false
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#055282'},
                            {offset: 0.5, color: '#00a3c3'},
                            {offset: 1, color: '#00d5e0'}
                        ]
                    )
                },
                // emphasis: {
                //     color: new echarts.graphic.LinearGradient(
                //         0, 0, 0, 1,
                //         [
                //             {offset: 0, color: '#2378f7'},
                //             {offset: 0.7, color: '#2378f7'},
                //             {offset: 1, color: '#83bff6'}
                //         ]
                //     )
                // }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            tooltip: {
                // formatter: " {a}<br/>&nbsp;&nbsp;&nbsp;{b}"+skyValueArr[0],
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                textStyle: {
                    // color: '#000',
                    fontSize: "90%"
                }
            },
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'}
            //     ]
            // },
            data: [30, 20, 50, 130]
        }
    ]
};

// 右侧 兑现金额
var optsRightBar1 = {
    title: {
        text: '兑现金额',
        padding: 5,
        left: 'left',
        subtext: '单位（万元）',
        textStyle: resetStyle("#fff", '100%')
    },
    color: ['#3398DB', "green"],
    tooltip: {
        trigger: 'item',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '-50',
        right: '-40',
        bottom: '10',
        top: "20",
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            axisLine: {
                lineStyle: {
                    color: "#00c0ff",
                    width: 1
                }
            },
            axisLabel: {
                fontSize: "80%"
            },
            // name: '年',
            data: ['2014', '2015', '2016', '2017', '2018', '2019']
        },
        {
            type: 'category',
            show: false,
            axisLine: {
                lineStyle: {
                    color: "#00c0ff",
                    width: 1
                }
            },
            // name: '年',
            boundaryGap: true,
            data: ['2014', '2015', '2016', '2017', '2018', '2019']
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: false,
            // scale: true,
            name: '万元',
            min: 0,
            axisLine: {
                lineStyle: {
                    color: "#4f4e73",
                    width: 1
                }
            },
            tooltip: {
                // formatter: " {a}<br/>&nbsp;&nbsp;&nbsp;{b}"+skyValueArr[0],
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                textStyle: {
                    // color: '#000',
                    fontSize: "90%"
                }
            },
            splitLine: {
                show: false
            },
            boundaryGap: [0, 0]
        },
        {
            show: false,
            type: 'value',
            // scale: true,
            tooltip: {
                // formatter: " {a}<br/>&nbsp;&nbsp;&nbsp;{b}"+skyValueArr[0],
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                textStyle: {
                    // color: '#000',
                    fontSize: "90%"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#ddd",
                    width: 1
                }
            },
            min: 0,
            name: '万元',
            boundaryGap: [0, 0]
        }
    ],
    series: [
        {
            name: '兑现金额',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    color: '#00dda4'
                }
            },
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            splitLine: {
                show: false
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#152851'
                    }, {
                        offset: 1,
                        color: '#00b6cc'
                    }])
                }
            },
            data: [1000, 3000, 3000, 4000, 4000, 2000]
        },
        {
            name: '兑现金额',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            barWidth: '50%',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (parmars) {
                        // console.log(parmars);
                        var str = parmars.value + "万"
                        return str
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#03fbe4'},
                            {offset: 0.5, color: '#1dd2e7'},
                            {offset: 1, color: '#419aec'}
                        ]
                    )
                },
            },
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'}
            //     ]
            // },
            data: [1000, 3000, 3000, 4000, 4000, 2000]
        },
    ]
}


//  项目金额销售和纳税
var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];
var app = {}
app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: echarts.util.reduce(posList, function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};
app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,

};
var labelOption = {
    normal: {
        show: true,
        fontSize: "80%",
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        // formatter: '{c}  {name|{a}}',
        formatter: '{c}' + " 万元",
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    }
};
// 项目销售金额 项目纳税金额
var optsBottomDbar = {
    color: ['#63c982', '#ff9a00'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['项目销售金额', '项目纳税金额'],
        left: 'left',
        itemGap: 40,
        textStyle: resetStyle("#889cbb", '90%')
    },
    calculable: true,
    grid: {
        left: '10',
        right: '0',
        bottom: '10',
        top: "30",
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            axisLine: {
                lineStyle: {
                    color: "#2b83eb",
                    width: 1
                }
            },
            axisLabel: {
                fontSize: "80%"
            },
            data: ['2014', '2015', '2016', '2017', '2018', '2019']
        }
    ],
    yAxis: [
        {
            type: 'value',
            // name: '万元',
            axisLine: {
                lineStyle: {
                    color: "#ddd",
                    width: 1
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                fontSize: "80%"
            },
        }
    ],
    series: [
        {
            name: '项目销售金额',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            data: [1000, 3000, 3000, 4000, 4000, 2000]
        },
        {
            name: '项目纳税金额',
            type: 'bar',
            barMinHeight: 4,
            label: labelOption,
            data: [30, 123, 135.4, 198.45, 200, 75.9]
        }
    ]
};


// 底部图  增加知识产权数
var optsButtomAdd = {
    color: ["#3a7cf9", "#00d5f6", "#2eddcd",],
    title: {
        show: false,
        text: '增加知识产权数',
        padding: 5,
        left: 'left',
        subtext: '',
        textStyle: resetStyle("#fff", '100%')
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        left: 'left',
        textStyle: resetStyle("#889cbb", '90%'),
        // width: 370,
        itemGap: 30,
        data: ['新增产权数', '新增论文数', '新增专利数']
    },
    grid: {
        left: '-20',
        right: '4%',
        bottom: '3%',
        top: 30,
        containLabel: true
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: "#ddd",
                width: 1
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            fontSize: "80%"
        },
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: "#2b83eb",
                width: 1
            }
        },
        axisLabel: {
            fontSize: "80%"
        },
        data: ['2014', '2015', '2016', '2017', '2018', '2019']
    },
    series: [
        {
            name: '新增产权数',
            type: 'bar',
            stack: '',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },

            data: [10, 30, 30, 40, 40, 20]
        },
        {
            name: '新增论文数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [3, 20, 22, 33, 17, 5]
        },
        {
            name: '新增专利数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [7, 10, 8, 7, 23, 15]
        }

    ]
}

// 新增就业人数
var optsButtomPerson = {
    color: ["#e06711"],
    title: {
        show: false,
        text: '新增就业人数',
        padding: 5,
        left: 'left',
        subtext: '（万元）',
        textStyle: resetStyle("#fff", '100%')
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        // show: false
        left: 'left',
        textStyle: resetStyle("#889cbb", '90%'),
        // width: 370,
        itemGap: 40,
        data: ['新增就业人数(人)']
    },
    grid: {
        left: '3%',
        // right: '4%',
        bottom: '3%',
        top: 30,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: "#2b83eb",
                width: 1
            }
        },
        axisLabel: {
            fontSize: "80%"
        },
        data: ['2014', '2015', '2016', '2017', '2018', '2019']
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: "#ddd",
                width: 1
            }
        },
        splitLine: false,
        axisLabel: {
            fontSize: "80%"
        },
    },
    series: [
        {
            name: '新增就业人数(人)',
            type: 'line',
            smooth: true,
            stack: '总量',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#152851'
                    }, {
                        offset: 1,
                        color: '#00b6cc'
                    }])
                }
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            },
            data: [100, 300, 300, 400, 400, 200]
        }
    ]
}

// 国籍分布
var optsButtomCountry = {
    color: ['#3398DB', '#e06711', '#00dca5', '#ffcf00', '#ffffff'],
    title: {
        show: true,
        text: '引进人才国籍分布',
        padding: 5,
        left: 'center',
        textStyle: resetStyle("#838188", '110%')
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        textStyle: resetStyle("#889cbb", '90%'),
        data: ['中国', '美国', '日本', '韩国', '英国', '乌克兰','德国','西班牙']
    },
    series: [
        {
            name: '人数',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 100, name: '中国'},
                {value: 20, name: '美国'},
                {value: 18, name: '日本'},
                {value: 12, name: '韩国'},
                {value: 10, name: '乌克兰'},
                {value: 19, name: '英国'},
                {value: 10, name: '德国'},
                {value: 11, name: '西班牙'}
            ],
            label: {
                normal: {
                    // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    formatter: ' {b|{b}：} {c}',
                    backgroundColor: 'transparent',
                    borderColor: '#aaa',
                    // borderWidth: 1,
                    // borderRadius: 4,
                    rich: {
                        a: {
                            color: '#999',
                            align: 'center'
                        },
                        hr: {
                            borderColor: 'transparent',
                            // width: '100%',
                            // borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: "80%",
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: 'transparent',
                            borderRadius: 2
                        }
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// 雷达图  人才领域分布
var optsRadar = {
    color: ['#e06711', '#e06711', '#00dca5', '#ffcf00', '#ffffff'],
    title: {
        show: true,
        text: '人才领域分布',
        padding: 0,
        left: 'left',
        textStyle: resetStyle("#889cbb", '100%')
    },
    tooltip: {},
    legend: {
        show: false,
        orient: 'vertical',
        left: 'right',
        textStyle: resetStyle("#889cbb", '90%'),
        data: ['预算分配']

    },
    grid: {
        left: '3%',
        // right: '4%',
        bottom: '3%',
        // top: 40,
        containLabel: true
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        radius: 50,
        indicator: [
            {name: '数字经济(100人)', max: 100},
            {name: '新能源新材料(30人)', max: 100},
            {name: '生命健康(30人)', max: 100},
            {name: '农林水产(10人)', max: 100},
            {name: '高端装备(30人)', max: 100},
        ],
        center: ['50%', '60%'],
    },
    series: [{
        name: '人才领域分布',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [100, 30, 30, 10, 30],
                name: '人才领域分布'
            }

        ]
    }]
}


// 世界地图
var geoCoordMap = {
    '中国·诸暨': [119.5107, 29.7196],
    '美国': [-100.696295, 33.679979],
    '日本': [139.710164, 35.706962],
    '韩国': [126.979208, 37.53875],
    '乌克兰': [30.8719426,48.8222422],
    '英国': [-3.435973,55.378051],
    '德国': [10.451526,51.165691],
    '西班牙': [-3.74922,40.46366700000001],
};

// 诸暨
var GZData = [
    [{name: '中国·诸暨'}, {name: "日本",value: 30}],
    [{name: '中国·诸暨'}, {name: "美国",value: 30}],
    [{name: '中国·诸暨'}, {name: "韩国",value: 30}],
    [{name: '中国·诸暨'}, {name: "乌克兰",value: 30}],
    [{name: '中国·诸暨'}, {name: "英国",value: 30}],
    [{name: '中国·诸暨'}, {name: "德国",value: 30}],
    [{name: '中国·诸暨'}, {name: "西班牙",value: 30}],
];


// 小飞机的图标，可以用其他图形替换
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

// 获取地图中起点和终点的坐标，以数组形式保存下来
var convertData = function(data) {
    var res = [];
    for(var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[1].name];
        var toCoord = geoCoordMap[dataItem[0].name];
        if(fromCoord && toCoord) {
            res.push([{
                coord: fromCoord // 起点坐标
            }, {
                coord: toCoord // 终点坐标
            }])
        }
    }
    return res;
}

var color  = ['#CDCD00', '#dcbf71'];
var series = [];


[['中国·诸暨', GZData]].forEach(function(item, i) {
    series.push({
        // 白色航线特效图
        type: 'lines',
        zlevel: 1,                    // 用于分层，z-index的效果
        effect: {
            show: true,               // 动效是否显示
            period: 6,                // 特效动画时间
            trailLength: 0.7,         // 特效尾迹的长度
            color: '#fff',            // 特效颜色
            symbolSize: 3             // 特效大小
        },
        lineStyle: {
            normal: {                 // 正常情况下的线条样式
                color: color[0],
                width: 0,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: -0.2       // 线条曲度
            }
        },
        data: convertData(item[1])    // 特效的起始、终点位置
    }, {  // 小飞机航线效果
        type: 'lines',
        zlevel: 2,
        //symbol: ['none', 'arrow'],   // 用于设置箭头
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,         // 特效形状，可以用其他svg pathdata路径代替
            // symbolSize: "100%"
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[0],
                width: 1,
                opacity: 0.6,
                curveness: -0.2
            }
        },
        data: convertData(item[1])     // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
    }, { // 散点效果
        type: 'effectScatter',
        coordinateSystem: 'geo',       // 表示使用的坐标系为地理坐标系
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke'        // 波纹绘制效果
        },
        label: {
            normal: {                  // 默认的文本标签显示样式
                show: true,
                position: 'left',      // 标签显示的位置
                formatter: '{b}'       // 标签内容格式器
            }
        },
        itemStyle: {
            normal: {
                color: color[0]
            }
        },
        data: item[1].map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name],  // 起点的位置
                symbolSize: dataItem[1].value / 8,  // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
            };
        })
    });
});

series.push({
    type: 'effectScatter',
    coordinateSystem: 'geo',
    zlevel: 3,
    rippleEffect: {
        brushType: 'stroke'
    },
    label: {
        normal: {
            show: true,
            position: 'left',
            formatter: '{b}'
        }
    },
    symbolSize: function(val) {
        return val[2] / 8;
    },
    itemStyle: {
        normal: {
            color: color[1]
        }
    },
    data: [
        {
            name: '中国·诸暨',
            value: [119.5107, 29.7196, 29],
            label: {
                normal: {
                    position: 'right'
                }
            }
        }]
});

var mapsOpts = {
    title: {
        show: false,
        text: '人才流动分布图',
        textStyle: {
            color: '#fff',
            fontSize: "100%"
        },
        top: '0px',
        left: '0px'
    },
    geo: {
        map: 'world',       // 与引用进来的地图js名字一致
        roam: false,        // 禁止缩放平移
        itemStyle: {        // 每个区域的样式
            normal: {
                areaColor: '#ababab',
                color: "#fff"
            },
            emphasis: {
                areaColor: '#2a333d',
                color: "#fff"
            }
        },
        zoom: 1.3,
        regions: [
            {        //  中国
                name: 'China',
                selected: true,
                itemStyle: {   // 高亮时候的样式
                    emphasis: {
                        areaColor: '#fe4501'
                    }
                },
                label: {    // 高亮的时候不显示标签
                    emphasis: {
                        show: false
                    }
                }
            },

            {        //  乌克兰
                name: 'Ukraine',
                selected: true,
                itemStyle: {
                    emphasis: {
                        areaColor: '#7AC5CD'
                    }
                },
                label: {    // 高亮的时候不显示标签
                    emphasis: {
                        show: false
                    }
                }
            },
            {        // 美国
                name: 'United States',
                selected: true,
                itemStyle: {   // 高亮时候的样式
                    emphasis: {
                        areaColor: '#7AC5CD'
                    }
                },
                label: {    // 高亮的时候不显示标签
                    emphasis: {
                        show: false
                    }
                }
            },
            {        // 匈牙利
                name: 'Hungary',
                selected: true,
                itemStyle: {   // 高亮时候的样式
                    emphasis: {
                        areaColor: '#7AC5CD'
                    }
                },
                label: {    // 高亮的时候不显示标签
                    emphasis: {
                        show: false
                    }
                }
            },
            {        // 德国
                name: 'Germany',
                selected: true,
                itemStyle: {   // 高亮时候的样式
                    emphasis: {
                        areaColor: '#7AC5CD'
                    }
                },
                label: {    // 高亮的时候不显示标签
                    emphasis: {
                        show: false
                    }
                }
            },
            {        // 韩国
                name: 'Korea',
                selected: true,
                itemStyle: {   // 高亮时候的样式
                    emphasis: {
                        areaColor: '#7AC5CD'
                    }
                },
                label: {    // 高亮的时候不显示标签
                    emphasis: {
                        show: false
                    }
                }
            },
            {        // 西班牙
                name: 'Spain',
                selected: true,
                itemStyle: {   // 高亮时候的样式
                    emphasis: {
                        areaColor: '#7AC5CD'
                    }
                },
                label: {    // 高亮的时候不显示标签
                    emphasis: {
                        show: false
                    }
                }
            },
            {        // 西班牙
                name: 'Japan',
                selected: true,
                itemStyle: {   // 高亮时候的样式
                    emphasis: {
                        areaColor: '#7AC5CD'
                    }
                },
                label: {    // 高亮的时候不显示标签
                    emphasis: {
                        show: false
                    }
                }
            },
            {        // 英国
                name: 'United Kingdom',
                selected: true,
                itemStyle: {   // 高亮时候的样式
                    emphasis: {
                        areaColor: '#7AC5CD'
                    }
                },
                label: {    // 高亮的时候不显示标签
                    emphasis: {
                        show: false
                    }
                }
            },
        ]
    },
    series: series,
    textStyle: {
        fontSize: "80%"
    }
}

// 初始化表
function initChart(id, opts) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(id));
    myChart.setOption(opts);
    //
    return myChart
}





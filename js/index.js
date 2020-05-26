/*
 * @Descripttion:
 * @version:
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-05-26 12:01:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-26 21:34:32
 */
// 通过立即执行函数，防止命名冲突与变量污染
// 柱图1
(function () {
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '4%',
            top: "10px",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签
                axisLabel: {
                    color: " rgba(255,255,255,.6)",
                    fontSize: "12",
                    // 刻度标签隔行显示
                    interval: 0
                },

                // 坐标轴样式
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                // 修改刻度标签
                axisLabel: {
                    color: " rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                // 坐标轴样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '35%',
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };
    myChart.setOption(option);
    // 让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });

})();

// 柱状图2
(function () {
    // 声明颜色数组
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    var option = {
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%",
            containLabel: false
        },
        xAxis: {
            show: false
        },
        yAxis: [
            {
                type: 'category',
                //不显示y轴线条
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                // 刻度标签文字设置为白色
                axisLabel: {
                    color: "#fff"
                },
                // 是否翻转显示
                inverse: true,
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
            }, {
                show: true,
                // 是否翻转显示
                inverse: true,

                data: [702, 350, 610, 793, 664],
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff"
                    }
                }
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                //修改柱子之间的距离
                barCategoryGap: 50,
                // 修改柱子的宽度
                barWidth: 10,
                data: [70, 34, 60, 78, 69],
                // 修改圆角
                itemStyle: {
                    barBorderRadius: 20,
                    // 设置柱子的不同颜色
                    color: function (parmas) {
                        // parmas 是柱子的对象
                        // console.log(parmas);
                        return myColor[parmas.dataIndex % 5]

                    }
                },
                // 显示柱子内部的文字
                label: {
                    show: true,
                    position: "inside",
                    // 文字的显示格式
                    formatter: "{c}%"
                }

            },
            {
                name: '框',
                type: 'bar',
                yAxisIndex: 1,
                //修改柱子之间的距离
                barCategoryGap: 50,
                // 修改柱子的宽度
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderWidth: 3,
                    borderColor: "#00c1de",
                    barBorderRadius: 15
                },
                data: [100, 100, 100, 100, 100],
            }
        ]
    };

    myChart.setOption(option)
    // 让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });

})();

// 折线图1
(function () {
    var myChart = echarts.init(document.querySelector(".line .chart"));
    var yearData = [
        {
            year: '2020',  // 年份
            data: [  // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2021',  // 年份
            data: [  // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];
    var option = {
        // 通过color数组修改颜色
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        // 修改图例组件
        legend: {
            textStyle: {
                color: "#4c9bfd"
            },
            right: "10%"
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: {
                show: false
            },
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            // 修改分割线
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            },
            type: 'value'
        },
        series: [
            {
                name: '新增粉丝',
                data: yearData[0].data[0],
                type: 'line',
                // 折线是否圆滑
                smooth: true,

            },
            {
                name: '新增游客',
                data: yearData[0].data[1],
                type: 'line',
                smooth: true,

            }
        ]
    };

    myChart.setOption(option)
    // 让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    // 点击切换2020与2021
    $(".line h2").on("click", "a", function () {
        // alert(1)
        // console.log($(this).index());
        // 根据a 索引号,找到相关yearData
        // console.log(yearData[$(this).index()]);
        option.series[0].data = yearData[$(this).index()].data[0]
        option.series[1].data = yearData[$(this).index()].data[1]
        // 重新渲染图表
        myChart.setOption(option)

    })

})();

// 折线图2
(function () {
    var myChart = echarts.init(document.querySelector(".line2 .chart"));
    var option = {

        tooltip: {
            trigger: 'axis'
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },

        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                }, axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: "line",
                //第一条 线是圆滑
                smooth: true,
                // 单独修改线的样式
                lineStyle: {
                    color: "#0184d5",
                    width: 2
                },
                // 填充区域
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
            },
            {
                name: "转发量",
                type: "line",
                smooth: true,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
            }
        ]
    };


    myChart.setOption(option);
    // 让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });

})();

// 饼图1
(function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
        ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },

        legend: {
            // orient: 'vertical',
            bottom: 0,
            itemWidth: 15,
            itemHeigth: 10,

            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                radius: ['40%', '60%'],
                center: ["50%", "40%"],
                avoidLabelOverlap: false,
                // 图形上的文字
                label: {
                    show: false,
                    position: 'center'
                },
                // 链接文字与图形的线
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ],
            }
        ]
    };

    myChart.setOption(option)
    // 让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();



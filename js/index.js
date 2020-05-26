/*
 * @Descripttion:
 * @version:
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-05-26 12:01:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-26 15:33:25
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


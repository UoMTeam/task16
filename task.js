/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = { * "北京": 90, * "上海": 40
        *
};
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    try {
        var city = document.getElementById("aqi-city-input").value;
        var number = document.getElementById("aqi-value-input").value;
        if (city != "" && number != "") {
            aqiData[city] = number;
        }
    } catch (err) {
        alert(err);
    }
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    try {
        var output = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
        keys = Object.keys(aqiData);
        for (var i = 0; i < keys.length; i++) {
            output += "<tr><td>" + keys[i] + "</td><td>" + aqiData[keys[i]] + "</td><td><button value='" + keys[i] + "'>删除</button></td></tr>";
        }
        document.getElementById("aqi-table").innerHTML = output;
    } catch (err) {
        alert(err);
    }
}

function bind() {
    var buttons = document.getElementById("aqi-table").getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            delBtnHandle()
        }, false);
    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
    bind();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.
    var value = event.target.value;
    delete aqiData[value];
    renderAqiList();
    bind();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById("add-btn").onclick = function () {
        addBtnHandle()
    };

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}
window.onload = function () {
    init()
};

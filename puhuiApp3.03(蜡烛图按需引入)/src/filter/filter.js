//保留四位小数
let keepFourNum = val => {
    if (val == null) {
        return '--'
    }
    val = Number(val);
    return val.toFixed(4);
}

//保留带+号的四位小数
let formFourStockChange = number => {
    var n = 4;
    n = n ? parseInt(n) : 0;
    if (n <= 0) {
        return Math.round(number);
    }
    number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n); //四舍五入
    number = Number(number).toFixed(n); //补足位数
    return number;
}



//金额转换 分->元 保留2位小数 并每隔3位用逗号分开 1,234.56
let moneyFormat = str => {
    return parseFloat(str).toFixed(2).replace(/\d(?=(?:\d{3})+\b)/g, `$&,`)
}
//只显示5位
let limitFive = value => {
    if (!value) return ''
    if (value.length > 5) {
        return value.slice(0, 5) + '...'
    }
    return value;
}
//只显示10位
let limitTen = value => {
    if (!value) return ''
    if (value.length > 10) {
        return value.slice(0, 10) + '...'
    }
    return value;
}
//最后一位不显示
let lastlimit = val => {
    val = String(val).substr(0, String(val).length - 1);
    return val;
}
//超过45个字用省略号代替
let ellipsis = value => {
    if (!value) return ''
    if (value.length > 45) {
        return value.slice(0, 45) + '...'
    }
    return value;
}

//银行卡号格式
let formatBankCard = str => {
    let newStr = str.replace(/\d(?=(?:\d{4})+\b)/g, `$& `);
    return String(newStr);
}

//从第四个取出到最后一个
let splitLast = val => {
    val = val.substr(4, val.length - 1);
    return val;
}

//保留两位小数
let keepTwoNum = val => {
    if (val == null) {
        return '--'
    }
    val = Number(val);
    return val.toFixed(2);
}

//获取最后一位数
let getLastNum = val => {
    val = String(val).substr(String(val).length - 1, String(val).length);
    return val;
}

//股市数据
let formStockChange = val => {
    if (val==null) return val;
    val = Number(val);
    if (val > 0) {
        return '+' + val.toFixed(2);
    } else {
        return val.toFixed(2);
    }
}

//股市数据百分比
let formStockPctChange = val => {
    if (val==null) return val;
    val = Number(val);
    var newVal = val;
    if (val > 0) {
        return '+' + newVal.toFixed(2) + "%";
    } else {
        return newVal.toFixed(2) + "%";
    }
}

//城市名
let blankplace = val => {
    return ' · ' + val + ' · ';
}

//过滤-
let formatSubtraction = str => {
    return String(str).replace(/[-]/g, '');
}

//过滤%
let formatPoint = str => {
    return str.replace(/[.]/g, '');
}

//晚报格式转①
let formatAbstractNumber = str => {
    if (str.indexOf("1") != -1) {
        return str.replace(/[1]/g, '①');
    }
    else if (str.indexOf("2") != -1) {
        return str.replace(/[2]/g, '②');
    }
    else if (str.indexOf("3") != -1) {
        return str.replace(/[3]/g, '③');
    }
    else if (str.indexOf("4") != -1) {
        return str.replace(/[4]/g, '④');
    }
    else if (str.indexOf("5") != -1) {
        return str.replace(/[5]/g, '⑤');
    }

}

//时间 年月日
let fomatTime4 = valueTime => {
    var date = new Date(parseInt(valueTime));
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('1' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '/' + m + '/' + d;
}

//时间 月日
let fomatTime3 = valueTime => {
    var date = new Date(parseInt(valueTime));
    var m = date.getMonth() + 1;
    var d = date.getDate();
    return m + '月' + d + '日 ';
}

//时间 年月日 星期 小时
let fomatTime2 = valueTime => {
    var date = new Date(parseInt(valueTime));
    var y = date.getFullYear();
    var myddy = date.getDay();//获取存储当前日期
    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('1' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '年' + m + '月' + d + '日 ' + weekday[myddy] + ' ' + h + '点';
}

//时间 年月日 时分秒
let fomatTime1 = valueTime => {
    var date = new Date(parseInt(valueTime));
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('1' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute;
}

//发布时间 距离发布事件
let fomatTime = valueTime => {
    if (valueTime) {
        var newData = Date.parse(new Date());
        var diffTime = newData - valueTime;
        if (diffTime >365 * 24 * 3600 * 1000) {
            var date = new Date(parseInt(valueTime));
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            var minute = date.getMinutes();
            var second = date.getSeconds();
            minute = minute < 10 ? ('1' + minute) : minute;
            second = second < 10 ? ('0' + second) : second;
            return y + '-' + m + '-' + d + ' ' + h + ':' + minute;

        } 
        else if(diffTime < 365 * 24 * 3600 * 1000 && diffTime > 30 * 24 * 3600 * 1000){
            // 注释("一个月以内")
            var monthNum = Math.floor(diffTime / (30 * 24 * 60 * 60 * 1000));
            return monthNum + "月前";
        }
        else if(diffTime < 30 * 24 * 3600 * 1000 && diffTime > 7 * 24 * 3600 * 1000){
            // 注释("一个月以内")
            var weekNum = Math.floor(diffTime / (7 * 24 * 60 * 60 * 1000));
            return weekNum + "周前";
        }
        else if (diffTime < 7 * 24 * 3600 * 1000 && diffTime > 24 * 3600 * 1000) {
            // //注释("一周之内");

            // var time = newData - diffTime;
            var dayNum = Math.floor(diffTime / (24 * 60 * 60 * 1000));
            return dayNum + "天前";

        } else if (diffTime < 24 * 3600 * 1000 && diffTime > 3600 * 1000) {
            // //注释("一天之内");
            // var time = newData - diffTime;
            var dayNum = Math.floor(diffTime / (60 * 60 * 1000));
            return dayNum + "小时前";

        } else if (diffTime < 3600 * 1000 && diffTime > 60 * 1000) {
            // //注释("一小时之内");
            // var time = newData - diffTime;
            var dayNum = Math.floor(diffTime / (60 * 1000));
            return dayNum + "分钟前";
        } else if (diffTime < 60 * 1000 && diffTime > 0) {
            return "1分钟前";
        }else{
            return "1分钟前";
        }
    }
}

//城市全名
let formatCityName = val => {
    if (val != '') {
        return val + '市';
    }
}
//转表情
let emojiFormat = str => {
    str = str.replace(/\\/g, "%");
    return unescape(str);
}

//转
let transDuringTime = d => {
    return d = d < 10 ? ('0' + d) : d;
}
//转
let formatNull = str => {
    if (str == null||str == ''||str=='%') {
        return '--';
    } else {
        return str;
    }
}
//转
let formatRMB = str => {
    if (str == '元') {
        return '--';
    } else {
        return str;
    }
}
// 金额格式化
let fundMoneyFormat = value => {
    if (value == null) {
        return '--'
    }
    //金额转换 分->元 保留2位小数 并每隔3位用逗号分开 1,234.56
    value = Number(value);
    let num;
    if (value > 100000000) {
        num = (value / 100000000).toFixed(1) + "亿";
    }
    else if (value > 10000) {
        num = (value / 10000).toFixed(1) + "万";
    } else {
        num = value.toFixed(1);
    }
    return num;
}

// 问题序号格式化
let formatQuestionOrder = value => {
    switch (value) {
        case 1:
            return "问题一：";
        case 2:
            return "问题二：";
        case 3:
            return "问题三：";
        case 4:
            return "问题四：";
        case 5:
            return "问题五：";
        case 6:
            return "问题六：";
        case 7:
            return "问题七：";
        case 8:
            return "问题八：";
        case 9:
            return "问题九：";
        case 10:
            return "问题十：";
        case 11:
            return "问题十一：";
        case 12:
            return "问题十二：";
        case 13:
            return "问题十三：";
        case 14:
            return "问题十四：";
        case 15:
            return "问题十五：";
        case 16:
            return "问题十六：";
        case 17:
            return "问题十七：";
        case 18:
            return "问题十八：";
        case 19:
            return "问题十九：";
        case 20:
            return "问题二十：";
    }
}

//定义下全局过滤器  往 {}里面加 逗号隔开
export {
    keepFourNum, formFourStockChange, moneyFormat,
    lastlimit, ellipsis, formatBankCard, splitLast, keepTwoNum,
    getLastNum, formStockChange, formStockPctChange, blankplace,
    fomatTime1, fomatTime, formatCityName, limitTen, emojiFormat,
    fomatTime2, fomatTime3, formatAbstractNumber, formatPoint,
    transDuringTime, formatSubtraction, formatRMB, fundMoneyFormat,
    formatQuestionOrder, fomatTime4,limitFive,formatNull
}


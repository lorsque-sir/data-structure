function StringBuilder() {
    console.log(this);
    // this._stringArray = new Array();
    this._stringArray = [];
}
StringBuilder.prototype.append = function(str) { // 存入数组
    this._stringArray.push(str);
};


StringBuilder.prototype.toString = function(joinGap) {
    // 将数组转换为字符串
    return this._stringArray.join(joinGap);
};
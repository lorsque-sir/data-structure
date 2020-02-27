// 将字符串转换为较大的数字
// 将较大的数字hashcode压缩到数组范围大小
function hashFunc(str, size) {
    // 定义hashCode变量
    let hashCode = 0;
    // 霍纳算法，秦九韶算法
    // ->unicode
    for (let i = 0; i < str.length; i++) {
        // 一般使用质数，37,43等，特别37;
        hashCode = 37 * hashCode + str.charCodeAt(i);
    }
    // 取余操作
    let index = hashCode % size;
    return index;
}
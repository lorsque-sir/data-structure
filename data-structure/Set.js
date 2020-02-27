// 封装集合类 使用object来封装。数组等也可以，但麻烦,需要记性数据重复的检测
function Set() {
    // 属性
    this.items = {};
    // 方法
    // add添加元素
    Set.prototype.add = function(value) {
            // 判断当前集合是否已经拥有某元素
            if (this.has(value)) {
                return false;
            }
            // 将元素添加到集合中
            this.items[value] = value;
            return true;
        }
        // remove 从集合中移除元素
    Set.prototype.remove = function(value) {
            // 判断集合是否包含某元素
            if (!this.has(value)) {
                return false;
            }
            delete this.items[value];
            return true;
        }
        // has判断集合是否拥有某个元素
    Set.prototype.has = function(value) {
            return this.items.hasOwnProperty(value);
        }
        // clear 清空方法
    Set.prototype.clear = function() {
            this.items = {};
        }
        // size方法
        //    keys很好用
    Set.prototype.size = function() {
            return Object.keys(this.items).length;
        }
        // values获取集合中所有的值
    Set.prototype.values = function() {
            return Object.keys(this.items)
        }
        // 并集
    Set.prototype.union = function(otherSet) {
            // 创建一个新的集合
            let unionSet = new Set();
            // 将集合A中所有蒜素添加到新集合中
            let values = this.values();
            for (let i = 0; i < values.length; i++) {
                unionSet.add(values[i])
            }
            // 将集合B按需求加入新集合
            values = otherSet.values();
            for (let i = 0; i < values.length; i++) {
                // if (!unionSet.has(values[i])) {
                unionSet.add(values[i])
                    // }
            }
            // return unionSet.values();
            return unionSet
        }
        // 交集
    Set.prototype.interSection = function(otherSet) {
            let interSectionSet = new Set();
            let values = this.values();
            for (let i = 0; i < values.length; i++) {
                let item = values[i];
                if (otherSet.has(item)) {
                    interSectionSet.add(item);
                }
            }
            return interSectionSet;
        }
        // 差集
    Set.prototype.difference = function(otherSet) {
        let differenceSet = new Set();
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            let item = values[i];
            if (!otherSet.has(item)) {
                differenceSet.add(item);
            }
        }
        return differenceSet;
    }

    // 子集
    Set.prototype.subset = function(otherSet) {
        // let sbuSet=new Set();
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            let item = values[i]
                // if (!otherSet.has(values[i])) {
            if (!otherSet.has(item)) {
                return false
            }
        }
        return true
    }
}
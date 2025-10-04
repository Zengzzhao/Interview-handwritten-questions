var groupAnagrams = function (strs) {
    const map=new Map() // 记录某个单词序列与其所有字母异位词组成的
    for(const str of strs){
        const key=str.split('').sort().join('') // 将当前字符串变为从a到z有序的key
        if(map.has(key)){ // 当前map中有改单词序列了
            const val=map.get(key)
            val.push(str)
            map.set(key,val)
        }else{ // 没有
            map.set(key,[str])
        }
    }
    return [...map.values()]
}
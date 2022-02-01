function CreateObject(arr) {
    // Write your code here
    objectans={};
    for (var i=0; i<arr.length; i=i+2) {
        var key=arr[i];
        var value=arr[i+1];
        objectans[key]=value;
    }
    return objectans;
}

module.exports = CreateObject;

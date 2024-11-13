function sort(arr){
    for(i=o;i<=aa.length;i++){

        temp = ""
        for(j=0;j<=arr.lenth-1;j++){
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
        }
    }

}
return arr
}
num=[5, 3, 8, 4, 2];
console.log(sort(num));

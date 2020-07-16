console.log("使用NodeJs运行的js")

function show(){
    for(var i=0;i<5;i++){
        console.log(i);
    }
}
show();
//console.log(window);  报错
console.log(global)
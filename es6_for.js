var scores =[80,90,95 ] 

for (var mark of scores) {
    mark = mark + 5;
    console.log(mark);
}

let marks=80;
for(marks=1;marks<=80;marks++)
{
    console.log(marks);

}


let colors = ['Red', 'Green', 'Blue'];

for (const color of colors) 
{
    console.log(`colors are: ${color} `);
}

function myfunction(...args)
{
console.log(args[0]);
}
myfunction(1,3)
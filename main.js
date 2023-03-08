import './style.css'
const NodeFactory = (data = null, left = null, right = null) => {
  return { data, left, right }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

const TreeFactory = (array) => {
  //Sort the array and remove any duplicate values
  let root = null
  array.sort((a, b) => a - b)
  let arrProcessed = []
  for(let element of array) {
    if(!(arrProcessed.includes(element))){
      arrProcessed.push(element)
    }
  }
  function buildTree(arr){
    let mid = arr[parseInt(arr.length/2)]
    let start = 0
    let end = arr.indexOf(mid)
    //console.log(arr.slice(arr.indexOf(mid), arr.length))
    //Start of recursion
    if(start > end) {
      return null
    } else{ 
      root = NodeFactory(mid, buildTree(arr.slice(start, end)), buildTree(arr.slice(arr.indexOf(mid)+1, arr.length)))
    }
    return root
  }
  {return root = buildTree(arrProcessed)}
}
 

let tree = TreeFactory([1,2,3,4,5,6,7,8,9,11])


console.log(prettyPrint(tree))
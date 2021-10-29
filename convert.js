let fs=require('fs');
let data=JSON.parse(fs.readFileSync('./permission.json'));//读
let permissions = data.data.permissions;
let ids=[];
permissions.forEach((item,index)=>{
  findChildren(item);
});
function findChildren(item){
  if(item.children.length>0){
    ids.push(item.permissionId);
    item.children.forEach((item)=>{
      findChildren(item);
    });
  }else{
    ids.push(item.permissionId);
  }
}
console.log(ids.length);
fs.writeFileSync("./convert.json",'ids:['+ids+']','utf8');

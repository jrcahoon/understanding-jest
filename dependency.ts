export async function find(collection: Array<any>, filter) {
  // return new Promise((resolve, reject){
  //   setTimeout(function(){
  //     resolve(collection.filter(filter););
  //   }, 2000)
  // });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(collection.filter(filter));
    }, 100);
  });
}

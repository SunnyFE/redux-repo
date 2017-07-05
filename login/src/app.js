if(process.env.NODE_ENV === 'production'){
  export default './container/root.js'
}else{
  export default './container/root.dev.js'
}
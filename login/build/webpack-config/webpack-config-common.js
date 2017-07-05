
export default {
  devtools:'#cheap-source-map',
  entry:{

  },
  output:{

  },
  module:{
    noParse:[],
    
    rules:[
      {
        test:/\.js(x)?$/,
        uses:['babel']
      },
      {
        test:/\.less$/,
        uses:['style-loader','css-loader','less-loader']
      },
      {
        test:/\.json$/,
        loader:['json-loader']
      }
    ]
  },
  plugins:[],
  resolve:{
    alias:{},
    extensitons:[]
  }
}
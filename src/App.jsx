import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
// import numbro from 'numbro';
import Handsontable from 'handsontable/dist/handsontable.full';

var https = require('https')
@observer
class ReactHandsontable extends Component {


    componentDidMount() {
        // var data = [
        //     ["", "UserId", "id", "title", "body"]
        // ];

        // new Handsontable(this.refs.table, {
        //    data: data
        // });
    var
    $$ = function(id) {
      return document.getElementById(id);
    },
    container = $$('root'),
   
    hot;
  var data;

  hot = new Handsontable(container, {
    startRows: 8,
    startCols: 6,
    rowHeaders: true,
    colHeaders: true,
    columns: [
      {data: 'userId'},
      {data: 'id'},
      {data: 'title'},
      {data: 'body'}
    ],
    
  });
  https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    res.on('data', (d) => {
      var str = String.fromCharCode.apply(null, d);
      // console.log(str)
      data = JSON.parse(str);

      hot.loadData(data);
      // process.stdout.write(d);
    });

    }).on('error', (e) => {
      console.error(e);
  });


  };
    render() {
        return(
            <div ref="table"/>
        );
    }
}


export default ReactHandsontable;
  
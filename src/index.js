const csvFilePath = 'input.csv';
const csv = require('csvtojson');
const https = require('https');

csv().fromFile(csvFilePath)
.subscribe((json)=>{
	return new Promise((resolve,reject)=>{
		    restcall(json.AADID);
        resolve();
	})
});

function restcall(oid) {

    var pathA = "/v1.0/users?$filter=id%20eq%20\'{oid}\'".replace('{oid}',oid);
    var options = {
      'method': 'GET',
      'hostname': 'graph.microsoft.com',
      'path': pathA,
      'headers': {
        'Authorization': 'Bearer <<token from https://developer.microsoft.com/en-us/graph/graph-explorer>>'
      },
      'maxRedirects': 20
    };
  
  
    var req = https.request(options, function (res) {
      req.on('error', function (e) {
        console.log(e);
      });
  
      res.on('data', function (data) {
        var resp = JSON.parse(data);
        //console.log(resp);
        if(resp.value){
        console.log(resp.value[0].id  + ',' + resp.value[0].displayName + ',' + resp.value[0].userPrincipalName);
        }else{
          console.log(oid  + ',na,na');
        }
      });
    });
    req.end();
  }
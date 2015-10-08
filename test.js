/**
 * Created by Vu Minh Quy on 10/8/2015.
 */
var request = require('request');
var url= '345';

//http://photoservice.gamesao.vn/Resources/Upload/Images/News/f0be03fe-aacf-49d2-aae9-ad93e0fcad58.jpg

/*
request.head(url, function(err, res) {
    if(res) {
        console.log('URL Valid');
        console.log(res.headers);
        var option = {
            uri: url,
            encoding: null
        };
        request.get(option, function(err, res, data) {
            if(!data){
                console.log('There is no data');
            } else {
                console.log(data);
            }
        });
    } else {
        console.log('Invalid URL');
    }
});
*/
    request.head(link, function(err, res) {
        if(res) {
            return 1;
        } else {
            return 0;
        }
    });


console.log(urlcheck(url));
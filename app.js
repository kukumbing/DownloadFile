/**
 * Created by kukumbing on 9/23/2015.
 */
var fs =require('fs');
var request = require('request');
var ProgressBar = require('progress');
console.time('download');
var totalBytes,downloadedBytes,bar;

var url = 'http://photoserviceeee.gamesao.vn/Resources/Upload/Images/News/f0be03fe-aacf-49d2-aae9-ad93e0fcad58.jpg';



request.head(url, function(err, res) {
    if(res) {
        console.log('URL Valid');

        var req = request.get(url);

        req.on('response',function(res){
            totalBytes = parseInt(res.headers['content-length'],10);
            //downloadedBytes = 0;
            //console.log('Total Bytes: '+ totalBytes);
            bar = new ProgressBar('downloading [:bar] :percent :etas',{
                complete:'=',
                incomplete:' ',
                width: 50,
                total:totalBytes
            });
        })
            .on('data',function(chunk){
                //downloadedBytes += chunk.length;
                //console.log(downloadedBytes +"/"+ totalBytes);
                bar.tick(chunk.length);
            });

        req.pipe(fs.createWriteStream('doto.jpg')
                .on('finish',function(){
                    console.timeEnd('download');
                    console.log('Done write to file');
                })
                .on('error',function(err){
                    console.log('Error write to file');
                })
        );
    } else {
        console.log('The URL you entered is invalid!');
    }
});


const zlib = require('zlib');

var buffer = new Buffer.from('H4sIAAAAAAAEAM2SQQrCMBRE31lca1HTxsRruBQXYosIpSLalXh3JyEbQ7sN8gn5ZOYzLyRH3izoOfPSvmfFhi0VnlqdwWXlWUb/wDX5g6eS26uzmskr+A90PKJ/YNR0H08v3GiV3ErNtY6niIJ2/9E+UqeJA9uOZpavFp1Pegkeq0Sj5WaITCxbkCjc3rFW5jRREzWT3rgM0b/+shNfhNXuHxoDAAA=', 'base64');
zlib.unzip(buffer, function(err, buffer) {
    if (!err) {
        console.log(buffer.toString());
    } else {
        console.log(err);
    }
});
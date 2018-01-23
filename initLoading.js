const fs = require('fs');
function readImagesToArr() {
    return new Promise((res, rej) => {
        fs.readdir('images', 'utf8', (err, files) => {
            if (err) {
                console.log(err)
                throw err;
            }
            let filesArr = files;
            res(filesArr);
        })
    });
}
function addImagesDomToXml(filesArr) {
    return new Promise((res,rej)=>{
        fs.open('needloadingImages.xml', 'a+', (err, fd) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    console.error('myfile does not exist');
                    return;
                }
    
                throw err;
            }
            let dom = '';
            for (let i = 0; i < filesArr.length; i++) {
                dom += '<img hidden src="/images/' + filesArr[i] + '">\n'
            }
            res(dom);
        });
    })
}
function writeXML(dom) {
    fs.writeFile('needloadingImages.xml', dom, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}
Promise
    .resolve()
    .then(()=>{
        return readImagesToArr()
    })
    .then((filesArr)=>{
        return addImagesDomToXml(filesArr)
    })
    .then((dom)=>{
        writeXML(dom)
    })
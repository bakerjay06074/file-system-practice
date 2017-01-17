function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
    document.addEventListener("deviceready", onDeviceReady, false);
    //setInterval(function(){ alert("Hello, Jay"); }, 3000);
}
function onDeviceReady() {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
        console.log('file system open: ' + fs.name);
        fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function (fileEntry) {
 
            console.log("fileEntry is file?" + fileEntry.isFile.toString());
            // fileEntry.name == 'someFile.txt' 
            // fileEntry.fullPath == '/someFile.txt' 
            writeFile(fileEntry, null);
 
        }, onErrorCreateFile);
 
    }, onErrorLoadFs);
}
    
function msg()
{
       setInterval(function(){ alert("Hello"); }, 3000);
}

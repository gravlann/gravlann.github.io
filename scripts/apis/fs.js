
//  
//  WebCC
//  Made by 1lann and GravityScore
//  



var fsAPI = {};
var filer = null;

serialize = function(arr) {
	var construct = "{"
	for (var index in arr) {
		var name = arr[index].replace("\"","\\\"");
		var correctIndex = parseInt(index)+1;
		construct = construct+"["+correctIndex+"]=\""+name+"\","
	}
	construct = construct+"}"
	return construct;
}

onFSError = function(err) {
	console.log(err);
}

setupFSAPI = function() {
	filer = new Filer();
	filer.init({"persistent": true, "size": 4 * 1024 * 1024}, function(fs) {
		console.log(fs);
	}, onFSError);
}


resolve = function(path) {
	if (path.substring(0, 1) != "/") {
		path = "/" + path;
	}
	path = "/" + computer.id + path;
	return path;
}


exists = function(path, callback) {

}


fsAPI.list = function(L) {
	var path = resolve(C.luaL_checkstring(L, 1));

}


fsAPI.getSize = function(L) {
	C.lua_pushnumber(L, config.maxStorageSize);
	return 1;
}


fsAPI.exists = function(L) {

}


fsAPI.isDir = function(L) {

}


fsAPI.isReadOnly = function(L) {

}


fsAPI.makeDir = function(L) {

}


fsAPI.move = function(L) {

}


fsAPI.copy = function(L) {

}


fsAPI.delete = function(L) {

}


fsAPI.open = function(L) {

}


fsAPI.getDrive = function(L) {

}


fsAPI.getFreeSpace = function(L) {

}

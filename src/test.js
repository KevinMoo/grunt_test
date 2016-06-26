(function(window,undefined){
	function add(a,b){
		return a+b;
	}
	add(10,100);
	function sub(a,b){
		return a-b;
	}
	sub(100,10);
	(function mygetTime(){
		return new Date().getTime();
	})();
})(window);
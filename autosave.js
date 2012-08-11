(function($){
//prefix - inorder to seperate the fields of different forms
	$.fn.autosave = function(prefix){
		var storage = localStorage;
		$this = $(this);
		if(typeof(prefix) === 'undefined'){
			prefix = $this.attr('id');
		}
		prefix += "_"; //_ this will give unique names and will not clash with other fields

		function save(){
			$this.find('input:not(:password,:submit)').each(function(index,element){
				var key = prefix + element.name;
				storage.setItem(key,$(element).val());
			});
		}
		
		function restore(){
			$this.find('input:not(:password,:submit)').each(function(index,element){
				var key = prefix + element.name;
				$(element).val(storage.getItem(key));
			});
		}
		
		function clear(){
			$this.find('input:not(:password,:submit)').each(function(index,element){
				var key = prefix + element.name;
				delete storage[key];
			});
		}
		
		$this.change(save);
		$this.submit(clear);
		restore();
	}		
}(jQuery))
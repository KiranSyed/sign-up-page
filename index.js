$("form").submit(function(event){
let	flag=new Boolean(true);
 $("input").each(function() {
 	let label = $('label[for="' + $(this).attr('id') + '"]');
            if($(this).val()==""){
                label.removeClass("hidden");
               $(this).addClass("error");
                flag=false;
            }
            else{
            		label.addClass("hidden");
            		$(this).removeClass("error");
            	}
        });
 	return flag;
   });


 var jsonURLObj;
 var item;
 var userInputTime
// $(document).ready(function(){
    $("form").submit(function(event){

        jsonURLObj = [];
    


        $(".earls").each(function() {
            var hostContains = "hostContains";
            var listOfEarls = $(".earls").val();

            console.log("list: ", listOfEarls);

            item = {};
            item [hostContains] = listOfEarls;

            jsonURLObj.push(item);
        });

        userInputTime = $("input[type=time]").val();
        // console.log(jsonURLObj);
        // console.log(userInputTime);
        event.preventDefault();
     
    });



// });


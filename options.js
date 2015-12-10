

$(document).ready(function(){
    $("form").submit(function(event){
        // event = $("input[type=text]")

        var jsonURLObj = [];
        var item;


        $(".earls").each(function() {
            var hostContains = "hostContains";
            var listOfEarls = $(".earls").val();

            console.log("list: ", listOfEarls);

            item = {};
            item [hostContains] = listOfEarls;

            jsonURLObj.push(item);
        });

        var userInputTime = $("input[type=time]").val();
        // console.log(jsonURLObj);
        // console.log(userInputTime);
        event.preventDefault();
     
    });



});


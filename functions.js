$( document ).ready(function() {
    function latent (a){
        var latentList= `
                    <option>none</option>
                    <option value="images/3.png">hp</option>
                    <option value="images/4.png">atk</option>
                    <option value="images/5.png">rcv</option>
                    <option value="images/6.png">fire resist</option>
                    <option value="images/7.png">water resist</option>
                    <option value="images/8.png">wood resist</option>
                    <option value="images/9.png">light resist</option>
                    <option value="images/10.png">dark resist</option>
                    <option value="images/11.png">auto heal</option>
                    <option value="images/12.png">time extend</option>
                    <option value="images/killers/1.png">dragon killer</option>
                    <option value="images/killers/2.png">balance killer</option>
                    <option value="images/killers/3.png">physical killer</option>
                    <option value="images/killers/4.png">healer killer</option>
                    <option value="images/killers/5.png">attacker killer</option>
                    <option value="images/killers/6.png">god killer</option>
                    <option value="images/killers/9.png">devil killer</option>
                    <option value="images/killers/12.png">machine killer</option>
            </select>`;
       for(var i = 0; i<6; i++){
        $("#"+a).append("<select name="+a+">" + latentList );
       }

    }

    latent("p1_leader_latent");
    latent("p1_sub1_latent");
    latent("p1_sub2_latent");
    latent("p1_sub3_latent");
    latent("p1_sub4_latent");
    latent("p2_leader_latent");
    latent("p2_sub1_latent");
    latent("p2_sub2_latent");
    latent("p2_sub3_latent");
    latent("p2_sub4_latent");
    
    $(`select`).on("change",function () {
        var array =[]
        $(`select[name=`+this.name+`]`).each(function(){
            if ($(this).val() != "none"){
            var img = "<img src="+$(this).val()+">";
            array.push(img);
            }
            });
        $("#"+this.name+"s").html(array);
    });
    
    $(`#Team_selection input[type=number]`).on("input",function () {
        if ($(this).val() > 0){
            var img = "<img src=http://puzzledragonx.com/en/img/book/"+$(this).val()+".png>";
            $("#"+this.name).html(img);}
        else{
            $("#"+this.name).html(" ");    
        }
    });
    $(`input[name=GuideDesc]`).on("input",function () {
        var text = "**__Guide "+this.value+"__**" ;
        $("#title").html(text);
    });
    $(`#leads input[type=checkbox]`).on("change",function () {
        var leads = [];
        $(`#leads input[name=`+this.name+`][type=checkbox]:checked`).each(function(){
            leads.push(this.value+" ");
            });
        $("#"+this.name).html(leads);
    });
    $(`input[name=sbr][type=checkbox]`).on("change",function () {
       if(this.checked){
        $("#sbr").html("100% :SBR:<br>");
       }else(
            $("#sbr").html(" ")
            );
    });

    $("#preemptives").on("change", "input ",function () {
        var preEmptiveFloors = [];
        var new_field = true;
        $(`input[name=PreEmptive]`).each(function(){
            if ($(this).val().length === 0) {
                new_field = false;
            }else{
                preEmptiveFloors.push(":zap: FL: "+$(this).val()+"<br>");
            }
        });
        $("#zap").html(preEmptiveFloors);
        if(new_field){
            $("#preemptives").append(`FL: <input type=number name=PreEmptive size="2" min="0" max="99"><br>`);
        }
    });
    
    $(`input[name=p1team]`).on("input",function () {
        $("#P1_team").html(this.value);
    });
    
    $(`input[name=p2team]`).on("input",function () {
        $("#P2_team").html(this.value);
    });
    
    $("#notes").on("input", "input ",function () {
        var preEmptiveFloors = [];
        var new_field = true;
        $(`input[name=note]`).each(function(){
            if ($(this).val().length === 0) {
                new_field = false;
            }else{
                preEmptiveFloors.push("&#8226; "+$(this).val()+"<br>");
            }
        });
        $("#note").html(preEmptiveFloors);   

        if(new_field){
            $("#notes").append(`&#8226; <input type=text name=note><br>`);
        }
        
    });
    var floor = 1;
    $("#rundown_input").on("input", "input ",function () {
        var rundown = [];
        var new_field = true;
        $(`input[name=rundown]`).each(function(){
            if ($(this).val().length < 5) {
                new_field = false;
            }else{
                rundown.push($(this).val()+"<br>");
            }
        });
        $("#rundown").html(rundown);   

        if(new_field == true){
            floor++;
            $("#rundown_input").append(`<input type=text name=rundown value="F`+floor+`: "><br>`);
        }
        
    });
    $(`input[name=GuideName]`).on("input",function () {
        $("#name").html(this.value);
    });          
});

//hijason
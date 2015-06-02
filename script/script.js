$.ajax({
    url: ':3000/api/zone',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data){

        $(data.muncipios).each(function(index, value){
            $("#municipios").append('<option value="'+ this.id +'">'+ this.name +'</option>')

            //console.log(value.name);
        });
    }
});

//http://disfuncionarios.org:3000/api/all_candidates

$.ajax({
    url: ':3000/api/all_candidates',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data){
        console.log("es success");
        $(data).each(function(index, value){
            var name = JSON.parse(value).name;
            var id = JSON.parse(value).id;
            $("#candidatos").append('<option value="'+ id +'">'+ name +'</option>');

            console.log(name);
        });
    }
});


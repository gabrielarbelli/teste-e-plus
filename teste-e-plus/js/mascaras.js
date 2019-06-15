$(document).ready(function(){
    $(".cpfj").on('keyup', function(){
        if($(this).val().length <= 14){
            $("#cpfj2").children("input").val("cpf");
            $(this).attr("onkeypress","");
            $(this).attr("onkeypress","mascara(this,masc_cpf)");
            $(this).attr("maxlength","");
        }else{
            $("#cpfj2").children("input").val("cnpj");
            $(this).attr("onkeypress","");
            $(this).attr("onkeypress","mascara(this,masc_cnpj)");
            $(this).attr("maxlength","");
            $(this).attr("maxlength","18");
        }
    });
});

function mostrarResultado(box,num_max,campospan){
    var contagem_carac = box.length;
    if (contagem_carac != 0){
        document.getElementById(campospan).innerHTML = contagem_carac;
        if (contagem_carac == 1){
            document.getElementById(campospan).innerHTML = contagem_carac;
        }
        if (contagem_carac >= num_max){
            document.getElementById(campospan).innerHTML = num_max;
        }
    }else{
        document.getElementById(campospan).innerHTML = "0";
    }
}

    function contarCaracteres(box,valor,campospan, id){
        var conta = valor - box.length;
        document.getElementById(campospan).innerHTML = conta;
        if(box.length >= valor){
            document.getElementById(campospan).innerHTML = "0";
            document.getElementById(id).value = document.getElementById(id).value.substr(0,valor);
	}
    } 
//Exemplo: onkeypress="maxleght(this)"

//Funcoes de tratamento
function alltrim(str){
	return str.replace(/^\s+|\s+$/g, '');
}

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}

function masc_valor(v){
v=v.replace(/\D/g,"") //Remove tudo o que não é dígito
//v=v.replace(/^([0-9]{3}\.?){3}-[0-9]{2}$/,"$1.$2");
v=v.replace(/(\d{3})(\d)/g,"$1,$2")
v=v.replace(/(\d)(\d{2})$/,"$1,$2") //Coloca vigula antes dos 2 últimos digitos
return v
}
//Exemplo: onkeypress="mascara(this,masc_valor)"
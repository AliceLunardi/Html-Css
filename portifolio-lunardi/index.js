function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode-js");
}

function mascara_tel() {
    var tel_form = document.getElementById("telefone").value
    if (tel_form[0]!="("){
        if(tel_form[0]!=undefined)
        {
            document.getElementById("telefone").value="("+tel_form[0];
        }
    }

    if (tel_form[3]!=")"){
        if(tel_form[3]!=undefined)
        {
            document.getElementById("telefone").value=tel_form.slice(0,3)+")"+tel_form[3]
        }
    }

    if (tel_form[9]!="-"){
        if(tel_form[9]!=undefined)
        {
            document.getElementById("telefone").value=tel_form.slice(0,9)+"-"+tel_form[9]
        }
    }
}
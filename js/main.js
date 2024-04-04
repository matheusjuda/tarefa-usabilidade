dados = {};

dados.inicio = function (callback) {
    $.getJSON('banco/dados.json', function (data) {
        dados.data = data;
        if (callback) {
            callback();
        }
    });
}

function inicioSelect() {
    for (var i = 0; i < dados.data.length; i++) {
        var item = dados.data[i];
        var select_text = "<option value='" + item.id + "'>" + item.titulo + "</option>";
        $('#topicos').append(select_text);
    }
};

function selecionaChange() {
    var id = $('#topicos').val();
    var item = dados.data[id - 1];
    $('#lbl-txt-desc').text(item.titulo);
    $('#txt-desc').text(item.descricao);
};

dados.inicio(inicioSelect); dados
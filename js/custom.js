function confirmar_exclusao(index) {
    msg = "Tem certeza que deseja excluir este item?";
    if (confirm(msg)) {
        rmChild(index);
    }
}

function rmChild(index) {
    var a = document.getElementById('formulario');
    var b = document.getElementById(`form-${index}`);
    a.removeChild(b);
    M.toast({ html: "Item removido!" });
}

function formFields(index, size, icon_name, id, mark, example_text) {//size,icon_name, id, label, example_text
    var field = document.createElement('div');
    field.className = `input-field col ${size}`; //size

    var icon = document.createElement('i');
    icon.className = 'material-icons prefix';
    icon.innerText = icon_name;//icon_name
    field.appendChild(icon);

    var input = document.createElement('input');
    input.id = id + index; //id
    input.type = 'text';
    input.className = 'validate';
    input.setAttribute('name',`${id}-${index}`);
    field.appendChild(input);

    var label = document.createElement('label');
    label.setAttribute('for', id + index); //label
    label.innerText = mark;
    field.appendChild(label);

    var span = document.createElement('span');
    span.className = 'helper-text';
    span.setAttribute('data-error', 'Tá Errado Otário');
    span.setAttribute('data-sucess', 'Acertô Miseravis');
    span.innerText = example_text; //example_text
    field.appendChild(span);

    return field;
}

function addForm(index) {
    var row = document.createElement('li');
    row.id = `form-${index}`;
    document.getElementById('formulario').appendChild(row);

    var col = document.createElement('div');
    col.className = 'collapsible-header';
    row.appendChild(col);

    var icon = document.createElement('i');
    icon.className = 'material-icons left';
    icon.innerHTML = 'expand_more';
    col.appendChild(icon);

    var text = document.createElement('a');
    text.className = 'btn-flat';
    text.innerHTML = `Titulo ${index}`;
    col.appendChild(text);

    var button = document.createElement('a');
    button.className = 'waves-effect waves-light btn-small red';
    button.setAttribute('onclick', `confirmar_exclusao(${index})`);
    button.innerHTML = 'excluir';
    col.appendChild(button);

    var form = document.createElement('div');
    form.className = 'collapsible-body white';
    row.appendChild(form);

    var span = document.createElement('div');
    span.className = 'row';
    form.appendChild(span);

    span.appendChild(formFields(index, 's6 m3 xl1', 'plus_one', 'quantidade', 'Quantidade', 'ex. 1'));
    span.appendChild(formFields(index, 's12 m9 xl2', 'account_circle', 'autor', 'Autor', 'ex: Antoine de Saint-Exupéry'));
    span.appendChild(formFields(index, 's12 m12 xl3', 'title', 'titulo', 'Título', 'O Pequeno Príncipe'));
    span.appendChild(formFields(index, 's12 m3 xl1', 'import_contacts', 'edicao', 'Edição', 'ex. 1ª'));
    span.appendChild(formFields(index, 's6 m3 xl1', 'date_range', 'ano', 'Ano', 'ex: 1945'));
    span.appendChild(formFields(index, 's12 m6 xl2', 'domain', 'editora', 'Editora', 'ex: Editora Cultura'));
    span.appendChild(formFields(index, 's12 m12 xl2', 'place', 'local', 'Local', 'ex: Brasil'));

}

function nextPage(currentPage,nextPage){
    let x = document.getElementById(currentPage);
    x.className = 'hide';

    let y = document.getElementById(nextPage);
    y.className = '';
}

var count = 1;
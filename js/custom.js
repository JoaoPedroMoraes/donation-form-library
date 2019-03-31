function rmChild(index){
    var a  = document.getElementById('formulario');
    var b = document.getElementById('form-' + index);
    a.removeChild(b);
}

function formFields (index, size,icon_name, id, mark, example_text){//size,icon_name, id, label, example_text
    var field = document.createElement('div');
    field.className = "input-field col " + size; //size

    var icon = document.createElement('i');
    icon.className = 'material-icons prefix';
    icon.innerText = icon_name;//icon_name
    field.appendChild(icon);

    var input = document.createElement('input');
    input.id = id + index; //id
    input.type = 'text';
    input.className = 'validate';
    input.setAttribute('name','teste'); 
    field.appendChild(input);

    var label = document.createElement('label');
    label.setAttribute('for',id + index); //label
    label.innerText = mark;
    field.appendChild(label);

    var span = document.createElement('span');
    span.className = 'helper-text';
    span.setAttribute('data-error','Tá Errado Otário'); 
    span.setAttribute('data-sucess','Acertô Miseravis');
    span.innerText = example_text; //example_text
    field.appendChild(span);

    return field;
}

function addForm(index){
    var row = document.createElement('div');
    row.className = 'row';
    row.id = 'form-' + index;
    document.getElementById('formulario').appendChild(row);

    var col = document.createElement('div');
    col.className = 'col s12 m10 offset-m1 l12';
    row.appendChild(col);

    var card = document.createElement('div');
    card.className = 'card-panel';
    col.appendChild(card);

    var form = document.createElement('div');
    form.className = 'row';

    card.appendChild(form);

    form.appendChild(formFields(index,'s6 m3 xl1','plus_one','quantidade','Quantidade','ex. 1'));
    form.appendChild(formFields(index,'s12 m9 xl2','account_circle','autor','Autor','ex: Antoine de Saint-Exupéry'));
    form.appendChild(formFields(index,'s12 m12 xl3','title','titulo','Título','O Pequeno Príncipe'));
    form.appendChild(formFields(index,'s12 m3 xl1','import_contacts','edicao','Edição','ex. 1ª'));
    form.appendChild(formFields(index,'s6 m3 xl1','date_range','ano','Ano','ex: 1945'));
    form.appendChild(formFields(index,'s12 m6 xl2','domain','editora','Editora','ex: Editora Cultura'));
    form.appendChild(formFields(index,'s12 m12 xl2','place','local','Local','ex: Brasil'));

    var button = document.createElement('a')
    button.className = 'waves-effect waves-light btn-large red';
    button.innerText = 'Excluir';
    button.setAttribute('onclick','rmChild(' + index + ' ); M.toast({html: "Item removido!"});');

    card.appendChild(button);
}

 var count = 0;
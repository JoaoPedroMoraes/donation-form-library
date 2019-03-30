function rmChild(index){
    var a  = document.getElementById('formulario');
    var b = document.getElementById('form-' + index);
    a.removeChild(b);
}

function formFields (size,icon_name, id, mark, example_text){//size,icon_name, id, label, example_text
    var field = document.createElement('div');
    field.className = "input-field col " + size; //size

    var icon = document.createElement('i');
    icon.className = 'material-icons prefix';
    icon.innerText = icon_name;//icon_name
    field.appendChild(icon);

    var input = document.createElement('input');
    input.id = id; //id
    input.type = 'text';
    input.className = 'validate';
    field.appendChild(input);

    var label = document.createElement('label');
    label.setAttribute('for',id); //label
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

function completeForm(x){
    var row = document.createElement('div');
    row.className = 'row';
    row.id = 'form-' + x;
    document.getElementById('formulario').appendChild(row);

    var col = document.createElement('div');
    col.className = 'col s12 m8 offset-m2';
    row.appendChild(col);

    var card = document.createElement('div');
    card.className = 'card-panel';
    col.appendChild(card);

    var form = document.createElement('div');
    form.className = 'row';

    card.appendChild(form);

    form.appendChild(formFields('s6 l2','plus_one','quantidade','Quantidade','ex. 1'));
    form.appendChild(formFields('s12 l5','account_circle','autor','Autor','ex: Antoine de Saint-Exupéry'));
    form.appendChild(formFields('s12 l5','title','titulo','Título','O Pequeno Príncipe'));
    form.appendChild(formFields('s12 l2','import_contacts','edicao','Edição','ex. 1ª'));
    form.appendChild(formFields('s6 l2','date_range','ano','Ano','ex: 1945'));
    form.appendChild(formFields('s12 l5','domain','editora','Editora','ex: Editora Agir'));
    form.appendChild(formFields('s12 l3','place','local','Local','ex: Editora Agir'));

    var button = document.createElement('a')
    button.className = 'waves-effect waves-light btn-large red';
    button.innerText = 'Excluir';
    button.setAttribute('onclick','rmChild(' + x + ');');

    card.appendChild(button);
}

 var x = 0;
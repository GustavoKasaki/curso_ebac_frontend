$(document).ready(function() {

    $('form').on('submit', function(e) { /* inserir tarefa na lista */
        e.preventDefault();

        const tarefa = $('input').val();
        const novaTarefa = $(`<li class="tarefaAFazer">${tarefa}</li>`);

        $(novaTarefa).appendTo('ul');
        $(novaTarefa).hide().fadeIn(1000);

        $('input').val('');
    })

    $(document).on('click', 'ul li', function() { /* marcar tarefa realizada ou desmarcar tarefa feita */
        $(this).toggleClass('tarefaAFazer').toggleClass('tarefaFeita')
    })

})
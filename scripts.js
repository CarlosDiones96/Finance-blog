$(function(){
    const PLA = '#planejamento-';
    const DEP = '#depoimentos-';
    const PAR = '#parceiros-';

    const btns = {
        1: 'btn1',
        2: 'btn2',
        3: 'btn3',
        4: 'btn4'
    };

    const btnIdCollection = {
        planejamento: {
            1: PLA + btns[1],
            2: PLA + btns[2],
            3: PLA + btns[3],
            4: PLA + btns[4]
        },

        depoimentos: {
            1: DEP + btns[1],
            2: DEP + btns[2],
            3: DEP + btns[3],
            4: DEP + btns[4]
        },

        parceiros: {
            1: PAR + btns[1],
            2: PAR + btns[2],
            3: PAR + btns[3]
        }
    };

    $('button.small-rounded-btn').on('click', function(){
       const $btnId = $('#'+ $(this).attr('id'));
       
       switch($btnId){
           case btnIdCollection.planejamento[1] || 
                btnIdCollection.depoimentos[1] || 
                btnIdCollection.parceiros[1]:
                // todo
                break;

            case btnIdCollection.planejamento[2] ||
                 btnIdCollection.depoimentos[2] || 
                 btnIdCollection.parceiros[2]:
                 //todo 
                 break;
            case btnIdCollection.planejamento[3] || 
                 btnIdCollection.depoimentos[3] ||
                 btnIdCollection.parceiros[3]:
                 // todo
                 break;
            case btnIdCollection.planejamento[4] ||
                 btnIdCollection.depoimentos[4]:
                 // todo 
                 break;
            default:
                //todo
                break;
       }
    });

});
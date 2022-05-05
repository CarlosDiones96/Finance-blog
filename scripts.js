$(function () {

    const btns = {
        1: 'btn1',
        2: 'btn2',
        3: 'btn3',
        4: 'btn4'
    };

    const elementIds = {
        planejamento: {
            1: 'planejamento1',
            2: 'planejamento2',
            3: 'planejamento3',
            4: 'planejamento4'
        },
        depoimentos: {
            1: 'depoimento1',
            2: 'depoimento2',
            3: 'depoimento3',
            4: 'depoimento4'
        },
        parceiros: {
            1: 'parceiro1',
            2: 'parceiro2',
            3: 'parceiro3'
        }
    };

    const btnIds = {
        planejamento: {
            1: 'planejamento-' + btns[1],
            2: 'planejamento-' + btns[2],
            3: 'planejamento-' + btns[3],
            4: 'planejamento-' + btns[4]
        },
        depoimentos: {
            1: 'depoimentos-' + btns[1],
            2: 'depoimentos-' + btns[2],
            3: 'depoimentos-' + btns[3],
            4: 'depoimentos-' + btns[4]
        },
        parceiros: {
            1: 'parceiros-' + btns[1],
            2: 'parceiros-' + btns[2],
            3: 'parceiros-' + btns[3],
        }
    };

    // FUNCTIONS
    function initializeElements() {
        $('#planejamento1').hide().slideDown('slow').siblings().hide();
        $('#depoimento1').hide().slideDown('slow').siblings().hide();
        $('#parceiro1').hide().slideDown('slow').siblings().hide();
    }

    function animateElement(btnId, eltId) {
        const id = '#' + btnId;
        const elt = '#' + eltId;
        $(id).on('click', function(){
            $(elt).fadeIn('slow')
            .siblings()
            .hide();
        });
    }

    // FUNCTION CALLS 

    initializeElements();


    // #planejamento
    animateElement(btnIds.planejamento[1], elementIds.planejamento[1]);
    animateElement(btnIds.planejamento[2], elementIds.planejamento[2]);
    animateElement(btnIds.planejamento[3], elementIds.planejamento[3]);
    animateElement(btnIds.planejamento[4], elementIds.planejamento[4]);

    // #depoimentos
    animateElement(btnIds.depoimentos[1], elementIds.depoimentos[1]);
    animateElement(btnIds.depoimentos[2], elementIds.depoimentos[2]);
    animateElement(btnIds.depoimentos[3], elementIds.depoimentos[3]);
    animateElement(btnIds.depoimentos[4], elementIds.depoimentos[4]);

    // #parceiros
    animateElement(btnIds.parceiros[1], elementIds.parceiros[1]);
    animateElement(btnIds.parceiros[2], elementIds.parceiros[2]);
    animateElement(btnIds.parceiros[3], elementIds.parceiros[3]);

});
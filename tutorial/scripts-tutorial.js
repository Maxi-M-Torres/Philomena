const vmT = Vue.createApp({
    data() {
        return {
            id:0,
            auxiliar: 'aparecer',
            data: [{
                id: 0,
                title: 'Encuadernacion',
                content : {
                    intro: 'Aquí te cuento qué materiales necesitas para realizar un cuaderno A5 y cómo hacer las tapas.',
                    section: 'Para las tapas:',
                    items: [
                        '2 rectángulos de cartón de 2mm de espesor de 15,5cm x 22cm',
                        '2 rectángulos de tela de 21,5cm x 26cm para forrar cada tapa de cartón (debe haber un excedente de 3cm por lado',
                        'Cola vinílica',
                        'Pinceleta',
                        'Cutter',
                        'Trapito limpio'
                    ],
                    section2: 'Para la costura:',
                    items2: [
                        'Punzón',
                        'Aguja',
                        'Hilo encerado del color que te guste'
                    ]
                },
                instructions: {
                    section3: 'Paso a paso para las tapas:',
                    items: [
                        'Tomar una de las tapas de cartón y aplicar cola vinílica con la pinceleta.',
                        'Cuidadosamente colocar uno de los rectángulos de tela sobre la cara encolada y con el trapito presionar del centro hacia los extremos para asegurarse de que la tela se adhiera bien al cartón y no queden burbujas.',
                        'Cortar los cuatro triángulos de tela en las esquinas.',
                        'Encolar uno de los lados y doblar la solapa de modo que envuelva el cartón. ',
                        'Presionar con el trapito, especialmente en el borde del cartón, para que no quede aire y la tela se bien al cartón.',
                        'Repetir en los otros tres lados.',
                        'Finalmente, dejar secar bien (preferentemente de un día para el otro) con algo de peso, como un libro o dos, encima para que se arquee.',
                        'Repetir las operaciones para la contratapa.'
                    ]
                }
                },{
                id: 1,
                title: 'Mosaiquismo',
                content : {
                    intro: 'Pendiente de desarrollo',
                    section: '',
                    items: [
                        ''
                    ],
                    section2: '',
                    items2: [
                        ''
                    ]
                },
                instructions: {
                    section3: '',
                    items: [
                        ''
                    ]
                }
                },{
                id: 2,
                title: 'Vitrofusion',
                content : {
                    intro: 'Pendiente de desarrollo',
                    section: '',
                    items: [
                        ''
                    ],
                    section2: '',
                    items2: [
                        ''
                    ]
                },
                instructions: {
                    section3: '',
                    items: [
                        ''
                    ]
                }
                },{
                id: 3,
                title: 'Ceramica',
                content : {
                    intro: 'Pendiente de desarrollo',
                    section: '',
                    items: [
                        ''
                    ],
                    section2: '',
                    items2: [
                        ''
                    ]
                },
                instructions: {
                    section3: '',
                    items: [
                        ''
                    ]
                }
                },{
                id: 4,
                title: 'Tejidos',
                content : {
                    intro: 'Pendiente de desarrollo',
                    section: '',
                    items: [
                        ''
                    ],
                    section2: '',
                    items2: [
                        ''
                    ]
                },
                instructions: {
                    section3: '',
                    items: [
                        ''
                    ]
                }
                }
            ]
        }
    },
    methods: {
        tutorialAcceso(id) {
            if(id==0){
                this.auxiliar = 'aparecer';
            } else {
                this.auxiliar = 'desaparecer';
            }
            this.id = id;
        }
    }
}).mount('#appT');
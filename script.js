const vm = Vue.createApp({
    data() {
        return {
            id: '0',
            position: 0,
            acercaDe: 'noShow',
            data: [{
                id: 0,
                foto: './Imagenes/cuadernos1.png',
                title: 'Encuadernación',
                description: [
                    'El primer taller que hice fue de encuadernación tradicional. En las fotos se puede ver que son cuadernos de tapa dura, forrados en tela y con el lomo cubierto. Se trabaja cosiendo a mano 10 cuadernillos con 4 hojas dobladas a la mitad, de ese modo el cuaderno tendrá un total de 80 hojas. En mi caso, suelo hacerlos de hojas lisas, en algún momento los hice rayados y luego cuadriculados, pero creo que la hoja lisa es más libre y permite escribir, dibujar, garabatear. ',
                    'Más adelante, siguiendo tutoriales aprendí una nueva encuadernación: copta. ¡Y me encantó! Se logra una apertura total del cuaderno, con la encuadernación tradicional es un poco más difícil porque se fuerzan un poco las costuras. Estos también son de tapa dura y forrados en tela. Como tienen el lomo expuesto, se puede jugar con el color del hilo para que combine o contraste con la tela.',
                    'También hice un taller de fanzines, aunque yo los llamo anotadores. Son cuadernitos chiquitos (aunque se pueden hacer más grandes), de tapa blanda y con menos hojas, en general 24.'
                ],
                image: [
                    './Imagenes/cuadernos1.png',
                    './Imagenes/cuadernos2.png',
                    './Imagenes/cuadernos3.png'
                ],
                alt: 'Imagen de cuadernos',
                selected: 'selected'
            },{
                id: 1,
                foto: './Imagenes/Vitro1.png',
                title: 'Mosaiquismo y vitrofusión',
                description: [
                    'Quise empezar con mosaiquismo, pero la profe insistió en empezar con vitro para practicar bien los cortes, ganar firmeza y precisión. Para las dos actividades uso las mismas herramientas: un cortante con vidia que sirve para cortar vidrio, espejo y azulejo y una pinza de abrir que, justamente, abre el corte y separa la sección.',
                    'En vitro, luego de cortar el vidrio y limpiarlo muy bien con alcohol se pinta por goteo cada vidrio, se deja secar y se cocina a 900°. Esto me ayudo a imaginarme cómo iba a quedar cada pieza, porque los esmaltes con los que pintamos se ven, en su mayoría, de color gris, alguno más claro, otro más oscuro. Pero hasta que no sale del horno (o tenes mucha experiencia en el tema), no sabés muy bien cómo va a quedar. Algunos esmaltes se mezclan con óxido y cuando sale del horno forman una burbuja divina cuando están bajocubierta (es decir, cuando tienen otro pedacito de vidrio encima). En mosaiquismo, terminar un proyecto lleva más tiempo, pero a medida que avanzas, ves cómo va quedando, aunque tal vez no puedas hacerte una idea más acabada del resultado final. Por eso digo que voy desarrollando la creatividad y la imaginación, intentando visualizar cómo quedará la pieza de vitrofusión; y la paciencia, al ir creando, poco a poco, el proyecto con azulejos.',
                    'El primer año hice muchos, muchísimos, móviles con caireles que fui regalando a toda la familia. Hice llaveros, bijou, ¡hasta platos y ceniceros! Hasta que me animé al mosaico. Lo primero que hice fue un espejo (que tengo colgado en casa), super colorido y con un plato reciclado (o partes). Hice espejos de espejitos, otros combinando mosaiquismo y vitrofusión.',
                    'Por aquí hay algunas fotos de lo que se puede hacer con estas técnicas tan lindas.'
                ],
                image:[
                    './Imagenes/Vitro1.png',
                    './Imagenes/Vitro2.png',
                    './Imagenes/Vitro3.png'
                ],
                alt: 'Imagen mosaiquismo',
                selected: 'free'
            },{
                id: 2,
                foto: './Imagenes/ceramica1.jpg',
                title: 'Cerámica',
                description: [
                    'Empecé hace relativamente poco con este arte. Intenté hace un par de años, pero mi paciencia no estaba tan desarrollada como ahora, por lo que fue un intento fallido. El año pasado, en la pospandemia, hice un segundo intento y no pude parar. Me gusta hacer objetos utilitarios para la cocina: mates, tazas, fuentes o cuencos. Lo más decorativo que hice fueron macetas (porque me encantan las plantas). A veces me cuesta dedicarle el tiempo necesario a algunas etapas del proceso para que las piezas queden bien prolijas y con buenas terminaciones, pero es la paciencia en desarrollo 😊',
                    'La primera pieza que hice en este segundo intento fue un cuenco naranja, que ahora tiene una prima. Cuando llegó el momento de pintar, no sabía muy bien qué hacer y la profe me sugirió esgrafiar. ¡Gran idea! Increíble nivel de abstracción y concentración que logré en esa primera pieza. El resultado final me encantó.'
                ],
                image:[
                    './Imagenes/ceramica1.jpg',
                    './Imagenes/ceramica2.png',
                    './Imagenes/ceramica3.png'
                ],
                alt: 'Imagen de ceramica',
                selected: 'free'
            },{
                id: 3,
                foto: './Imagenes/Tejidos1.png',
                title: 'Tejidos',
                description: [
                    'Otro taller que hice, aunque con menos continuidad, pero igualmente fructífero, es el de tejido. Lo primero fue crochet o ganchillo con totora. Empecé con un individual o posa fuente rectangular… y como Penélope, lo destejí yy volví a tejer para practicar.',
                    'Lo siguiente fueron cuencos redondos y cuadrados. La base de estos cuencos empieza igual, con el anillo mágico. Estos cuencos son muy útiles porque pueden ser de cualquier tamaño y ponen orden a todo… desde despojaderos, cuencos pequeños para dejar las llaves y cualquier cosita que tengamos en el bolsillo dando vueltas, hasta alfombras y canastos para los juguetes de mis hijos. Cuando aprendí a hacer manijitas, me volví loca y todo llevaba una o dos manijitas. Quedan divinos.',
                    'Con la misma profe que me enseñó a tejer crochet, hice un seminario de tejido XXL con lana merino para hacer unas mantas hermosas. El resultado son mantas super suaves y calentitas que todos aman, ¡sobre todo los mininos! Lo genial de esta técnica es que parece un tejido a dos agujas, pero se teje sin agujas... ¡solo con las manos!'
                ],
                image:[
                    './Imagenes/Tejidos1.png',
                    './Imagenes/Tejidos2.png',
                    './Imagenes/Tejidos3.png'
                ],
                alt: 'Imagen de tejido',
                selected: 'free'
            },{
                id: 4,
                foto: './Imagenes/Miscelanea1.png',
                title: 'Miscelánea',
                description: [
                    'En 2020, organizamos con unas colegas una feria de cosas lindas. La llamamos “El patio” porque se hizo en el patio del instituto donde soy profe. La idea era que las teachers del instituto que, además de enseñar inglés, hacen manualidades pudieran exponer y lograr alguna venta. ¡Salió muy linda! ',
                    'Después llegó el COVID y quedaron las siguientes ediciones en espera. ',
                    'Esperemos próximamente poder hacer otra 🤞🏻.'
                ],
                image:[
                    './Imagenes/Miscelanea1.png',
                    './Imagenes/Miscelanea2.png',
                    './Imagenes/Miscelanea3.png'
                ],
                alt: 'Imagen de feria',
                selected: 'free'
            }
                ]
            }
        },
        methods: {
            cargarTexto(id){
                this.id = id;
                this.selected = id;
            },
            select(e){
                for(let i = 0; i<5; i++){
                    if(e == this.data[i].id){
                        this.data[i].selected = 'selected';
                    } else {
                        this.data[i].selected = 'free';
                    }
                }
            },
            acerca() {
                this.acercaDe = 'show';
                this.cargarTexto(0);
                this.select(0);
            },
            artesanias() {
                this.acercaDe = 'noShow';
            },
            fotoSeleccionada(id) {
                switch (this.position){
                    case 0:
                        this.position = 1;
                        this.data[id].foto = this.data[id].image[1];
                        return this.data[id].image[1];
                        break;
                    case 1:
                        this.position = 2;
                        this.data[id].foto = this.data[id].image[2];
                        return this.data[id].image[2];
                        break;
                    case 2:
                        this.position = 0;
                        this.data[id].foto = this.data[id].image[0];
                        return this.data[id].image[0];
                        break;
                }
            }
        }
    }).mount('#app');

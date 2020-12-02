document.addEventListener('DOMContentLoaded', () => {
    const ctx2 = document.getElementById('kk').getContext('2d');
    const chart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            datasets: [
                {
                    label: 'Lluvias',
                    borderColor: 'rgb(77, 186, 132)',
                    data: [],
                    type: 'line',
                    order: 2
                },
                {
                    label: 'Temperaturas',
                    data: [],
                    backgroundColor: 'rgb(73, 72, 72)',
                    order: 1
                },
            ],
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        },
    });

const boton = document.getElementById('button');


boton.addEventListener('click', () => {
const aux = true;
            let temperatura = document.getElementById('temperatura').value.split(',');
            let meses = document.getElementById('meses').value.split(',');
            let lluvia = document.getElementById('lluvia').value.split(',');

            if(temperatura == "" && meses == "" && lluvia == ""){
                alert('Campos vacios');

            }else if(meses.length == temperatura.length && lluvia.length == temperatura.length && meses.length == lluvia.length){
                for(let i = 0; i < meses.length; i++){
                    chart2.data.datasets[0].data[meses[i]-1] = lluvia[i];
                    chart2.data.datasets[1].data[meses[i]-1] = temperatura[i];

                };
                chart2.update();
                aux = true;

            }else{
                alert('Faltan informacion por rellenar');
        }
    });
});



const date = new Date()
let day = date.getDate()<=9?`0${date.getDate()}`:date.getDate()
let month = (date.getMonth() + 1)<=9?`0${(date.getMonth() + 1)}`:date.getMonth() + 1
let year = date.getFullYear()
select('#date').innerHTML = `${day}/${month}/${year}`

const archives = new Database()

/* 2020 */
archives.insert('2020',new Acervo('2020','Especial Inverno','Julho','inverno-sp-Lexique/index.html'))
archives.insert('2020',new Acervo('2020','Especial Suínos','Setembro','suinos/produca/especial-suinos/pubs/suinos_sp/index.html'))
archives.insert('2020',new Acervo('2020','Especial Cafés','Outubro','cafe/produca/www/pubs/link_sp/index.html'))
archives.insert('2020',new Acervo('2020','Especial Natal','Novembro','especial-natal/produca/pubs/link_sp/index.html'))
/* 2021 */
archives.insert('2021',new Acervo('2021','Especial Cafés','Maio','maio/cafes/pubs/link_sp/index.html'),)
archives.insert('2021',new Acervo('2021','Especial Drinks','Agosto','agosto/drinks/final/link_sp/index.html'),)
archives.insert('2021',new Acervo('2021','Especial Suínos','Setembro','setembro/especial-suinos/final/link_sp/index.html'),)
archives.insert('2021',new Acervo('2021','Especial Cafés','Outubro','outubro/especial-cafes/final/link_sp/index.html'),)
archives.insert('2021',new Acervo('2021','Especial Natal','Novembro','novembro/especial-natal/final/link_sprj/index.html'))
/* 2022 */
archives.insert('2022',new Acervo('2022','Especial Drinks','Janeiro','janeiro/especial-drinks/pubs/link_sp/index.html'),)
archives.insert('2022',new Acervo('2022','Drinks Não Alcoólicos','Fevereiro','fevereiro/nao-alcoolicos/v7/pubs/link_sp/index.html'),)
archives.insert('2022',new Acervo('2022','Rotisserie de Páscoa','Fevereiro','fevereiro/rotisserie-pascoa/v7/pubs/link_sp/index.html'),)
archives.insert('2022',new Acervo('2022','Especial Delícias de Páscoa','Março','marco/delicias-pascoa/vs-final/pubs/link_sp/index.html'),)
archives.insert('2022',new Acervo('2022','Carnabril','Abril','abril/drinks-carnabril/final/pubs/link_sp_pda/index.html'),)
archives.insert('2022',new Acervo('2022','Especial Suínos','Maio','maio/suinos/final/pubs/link_sp/index.html'),)
archives.insert('2022',new Acervo('2022','Microcervejarias','Maio','maio/microcervejarias/final/pubs/link_sp/index.html'),)
archives.insert('2022',new Acervo('2022','São João','Maio','maio/sao-joao/final/pubs/link_sp/index.html'),)
archives.insert('2022',new Acervo('2022','Inverno Vale','Junho','junho/inverno-vale/final/pubs/link_vale/index.html'),)
archives.insert('2022',new Acervo('2022','Inverno Nacional','Junho','junho/inverno-nacional/final/pubs/link_sp/index.html'),)
archives.insert('2022',new Acervo('2022','Especial Cafés','Junho','junho/especial-cafes/v14/pubs/link_sp/index.html'),)
archives.insert('2022',new Acervo('2022','Rotisserie Pais','Julho','julho/rotisserie-pais/v13/link_sp/index.html'),)
archives.insert('2022',new Acervo('2022','Rotisserie Massas','Julho','julho/rotisserie-massas/v18/pubs/link_sp/index.html'),)
archives.insert('2022',new Acervo('2022','Especial Pescados','Agosto','agosto/especial-pescados/vfinal/pubs/link_sp/index.html'),)
archives.insert('2022',new Acervo('2022','Especial Saudáveis','Agosto','agosto/especial-saudaveis/vfinal/pubs/link_sp/index.html'),)
archives.insert('2022',new Acervo('2022','Drinks','Outubro','outubro/drinks-22/v5/pubs/link_sp/index.html'),)
archives.insert('2022',new Acervo('2022','Especial Café','Novembro','novembro/especial-cafe/v12/pubs/link_sp/index.html'),)
archives.insert('2022',new Acervo('2022','Especial Natal','Novembro','novembro/natal/v9-final/pubs/link_sp/index.html'))
/* 2023 */
archives.insert('2023',new Acervo('2023','Especial Drinks','Janeiro','janeiro/especial-drinks/v7/pubs/link_sp/index.html'),)
archives.insert('2023',new Acervo('2023','Rotisserie Páscoa','Março','marco/especial-pascoa-23/v7/link_sp/index.html'),)
archives.insert('2023',new Acervo('2023','Especial Dia das Mães','Abril','abril/especial-dia-das-maes/v12/link_sp/index.html'),)
archives.insert('2023',new Acervo('2023','Especial Suínos','Maio','maio/especial-suinos/v7/pubs/link_sp/index.html'),)
archives.insert('2023',new Acervo('2023','Especial São João','Junho','junho/especial-sao-joao/final/link_ce/index.html'),)
archives.insert('2023',new Acervo('2023','Especial Festa Junina','Junho','junho/especial-festa-junina/offers/link_sp/index.html'),)
archives.insert('2023',new Acervo('2023','Especial Inverno','Junho','junho/especial-inverno/v7/pubs/link_sp_nacional/index.html'),)
archives.insert('2023',new Acervo('2023','Especial Cafés','Julho','julho/especial-cafes/v5/link_sp/index.html'),)
archives.insert('2023',new Acervo('2023','Rotisserie Pais','Julho','julho/rotisserie-pais/v4/pubs/link_sp/index.html'),)
archives.insert('2023',new Acervo('2023','Especial Pescados','Agosto','agosto/especial-pescados/v3/pubs/link_sp/index.html'))
archives.insert('2023',new Acervo('2023','Especial Cervejas','Outubro','outubro/cervejas/link_sp/index.html'))
archives.insert('2023',new Acervo('2023','Especial Cafés','Outubro','outubro/especial-cafes/pubs/link_sp/index.html'))

let index = select('#acervo-revistas-ano')

function start() {
    for(let y in archives.check()) {
        console.log(Number(archives.check()[y]))
        let general = document.createElement('div')
        general.setAttribute('class',`revistas-${archives.check()[y]} w-full group flex flex-row justify-start items-start pt-7 pb-14 border-b border-b-white`)
        index.appendChild(general)
        let ano = document.createElement('div')
        ano.setAttribute('id',`ano-${archives.check()[y]}`)
        ano.setAttribute('class','hidden lg:block xl:w-1/12 pb-7 relative')
        select(`.revistas-${archives.check()[y]}`).appendChild(ano)
        let revistas = document.createElement('div')
        revistas.setAttribute('id',`revistas-${archives.check()[y]}`)
        revistas.setAttribute('class','w-7/12 xl:w-3/12 lg:pl-4')
        select(`.revistas-${archives.check()[y]}`).appendChild(revistas)
        let mes = document.createElement('div')
        mes.setAttribute('id',`meses-${archives.check()[y]}`)
        mes.setAttribute('class','hidden xl:block xl:w-3/12 lg:pl-4')
        select(`.revistas-${archives.check()[y]}`).appendChild(mes)
        let link = document.createElement('div')
        link.setAttribute('id',`links-${archives.check()[y]}`)
        link.setAttribute('class','w-5/12 xl:w-8/12 flex flex-col justify-center items-center pl-4')
        select(`.revistas-${archives.check()[y]}`).appendChild(link)
        for(let i in Array.from(archives.select(archives.check()[y]))) {
            select(`#ano-${archives.check()[y]}`).innerHTML = `
                <h5 class="text-white text-3xl p-2">${archives.check()[y]}</h5>
            `;
            select(`#revistas-${archives.check()[y]}`).innerHTML += `
                <p class="text-white p-2 border-b border-b-white/25 border-dotted">${Array.from(archives.select(archives.check()[y]))[i].name} <span class="inline-block lg:hidden text-xs text-white/25">${archives.check()[y]}</span> <span class="text-white/25">&#8227;</span></p>
            `;
            select(`#meses-${archives.check()[y]}`).innerHTML += `
                <p class="hidden lg:block text-white/25 p-2 border-b border-b-white/25 border-dotted">${Array.from(archives.select(archives.check()[y]))[i].month} <span class="text-white/25">&#8227;</span></p>
            `;
            select(`#links-${archives.check()[y]}`).innerHTML += `
                <a class="links-revistas w-full transition-all duration-500 text-white hover:text-[#f16421]" href="${Array.from(archives.select(archives.check()[y]))[i].link}" target="_blank">
                    <p class="w-full text-white p-2 border-b border-b-white/25 border-dotted cursor-pointer transition-all duration-500 hover:text-[#f16421]">Ver revista <span class="text-black pl-1 transition-all duration-700 -translate-x-1">&xrarr;</span></p>
                </a>
            `;
        }
    }
    select('#header').classList.remove('border-b-white/0');
    select('#header').classList.add('border-b-white');
    setTimeout(()=>{
        select('#logo-png').classList.remove('opacity-0');
        select('#logo-png').classList.remove('translate-y-4');
        setTimeout(()=>{
            select('#title').classList.remove('opacity-0');
            select('#title').classList.remove('translate-y-3');
            setTimeout(()=>{
                select('#subtitle').classList.remove('opacity-0');
                select('#subtitle').classList.remove('translate-y-5');
                setTimeout(()=>{
                    select('#date').classList.remove('opacity-0');
                    select('#date').classList.remove('translate-y-1');
                    setTimeout(()=>{
                        setTimeout(()=>{
                            index.classList.remove('opacity-0');
                            index.classList.remove('translate-y-2');
                        },50);
                    },100);
                },100);
            },100);
        },100);
    },100);
}

start();

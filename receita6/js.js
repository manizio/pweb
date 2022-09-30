
export const montarTabela = (v, k, id="apiDiv") => {
    let div = document.getElementById(`${id}`)
    let chaves = chavesToUpperCase(k)

    let htmls = v.map( obj => `<tr>${k.map( c => `<td>${obj[c]}</td>` ).join("\n")}</tr>` ).join("\n")

    let bloco = htmls
    let header = chaves.map(c => `<th>${c}</th>`).join("\n")
    div.innerHTML= `<table><tr>${header}</tr> ${bloco}</table>`
}

export function montarTabelaGenerica(v){
    let keys = findKeys(v)
    montarTabela(v,keys)
}

function findKeys(v){
    return Object.keys(v[0]).slice(2)
}

function chavesToUpperCase(chaves){

    return chaves.map(c=> c.charAt(0).toUpperCase() + c.slice(1))
       

}
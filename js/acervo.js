const sutructure = 'endereco-do-acervo-no-servidor'; /* Caminho geral do servidor */

class Acervo {
    constructor(year,name,month,path) {
        this.link = `${sutructure}/${year}/${path}`
        this.name = name
        this.month = month
    }
}

class Database {
    archives = []
    years = []
    select(year) {
        const data = this.archives[year]??[]
        return data
    }
    insert(year,data) {
        const { name,month,link } = data
        if(Array.isArray(this.archives[year])) {
            this.archives[year].push(data)
        } else {
            this.archives[year] = [data]
        }
        this.map(year)
        return { data,year }
    }
    map(year) {
        this.years.push(year)
        this.check()
    }
    check(years) { 
        return this.years.filter((item,index) => this.years.indexOf(item) === index); 
    }   
}
const fs = require('fs')

module.exports = {
    preguntas: './data/faqs.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.preguntas, 'utf-8'));
    },

    totalPreguntas : function (){
        let libroTraducido = this.leerJSON()

        return libroTraducido.faqs.length

    },

    listaPreguntas : function(){
        let preguntas = this.leerJSON()

        let pregResp = preguntas.faqs.map(function(faq){

            return `\n\n ${faq.faq_title}\n\n\n\n ${faq.faq_answer}`

        })

        return pregResp



    }



}

/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports  = function(app) {
    
    app.route('/negotiations/week')
        .get(api.listWeek);
        
    app.route('/negotiations/previous')
        .get(api.previousList);
        
    app.route('/negotiations/retrasada')
        .get(api.regardList);  
        
    app.route('/negotiations')
        .post(api.addNegotinegotiation);          
};
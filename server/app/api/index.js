/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}

var currentDate = new Date();
var previousDate = new Date();
previousDate.setDate(currentDate.getDate() - 7);
var regardDate = new Date();
regardDate.setDate(currentDate.getDate() - 14);

var negotiations = [
      { data : currentDate, quantidade : 1, valor : 150},
      { data : currentDate, quantidade : 2, valor : 250},
      { data : currentDate, quantidade : 3, valor : 350},
      { data : previousDate, quantidade : 1, valor : 450},
      { data : previousDate, quantidade : 2, valor : 550},
      { data : previousDate, quantidade : 3, valor : 650},
      { data : regardDate, quantidade : 1, valor : 750},
      { data : regardDate, quantidade : 2, valor : 950},
      { data : regardDate, quantidade : 3, valor : 950}
    ];


api.listWeek = function(req, res) {
    var currentNegotiations = negotiations.filter(function(negotiation) {
        return negotiation.date > previousDate;
    });
    res.json(currentNegotiations);
};

api.previousList = function(req, res) {
   
   var previousNegotiations = negotiations.filter(function(negotiation) {
        return negotiation.date < currentDate && negotiation.date > regardDate;
    });
	setTimeout(function() {
		res.json(previousNegotiations);	
	}, 500);
    
};

api.regardList = function(req, res) {

   var regardNegotiations = negotiations.filter(function(negotiation) {
        return negotiation.date < previousDate;
    });
    res.json(regardNegotiations);
    
};

api.addNegotinegotiation = function(req, res) {

   console.log(req.body);
   req.body.date = new Date(req.body.date.replace(/-/g,'/'));
   negotiations.push(req.body);
   res.status(200).json("Negociação recebida");
};



module.exports = api;
(function(angular){

'use strict';

var app = angular.module('timenessApp', ['ui.bootstrap']);
// -----------------------------------------------------------------------------

/**
*
*
*
*
*
*
**/
app.controller('DatepickerDemoCtrl', function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
});
// -----------------------------------------------------------------------------
//
//
//
//
//
// -----------------------------------------------------------------------------
/**
*
*
*
*
*
*
**/
app.controller('MouseTimeLineInteraciontCtrl', function ($scope) {
  $scope.MouseTimeLineInteracionMsg1 = 'Hi from MouseTimeLineInteraciontCtrl';
  $scope.MouseTimeLineInteracionMsg2 = '';
});
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
//
//
//
//
//
// -----------------------------------------------------------------------------
/**
*
*
*
*
*
*
**/
app.controller('PopoverDemoCtrl', function ($scope) {
  $scope.dynamicPopover = 'Hello, World! (vindo do controller!)';
  $scope.dynamicPopoverTitle = '(Título vindo do controller)';
});
// -----------------------------------------------------------------------------

//(function(w){
    //
/*d3.json("js/data.json", function(error, data) {
    // Thats ugly, but required by CSRF security...
    data = data.data;

    // Converting strings to Date
    data.forEach(function(stream) {
        stream.dates = stream.dates.map(function(time) {
            return new Date(time);
        });
    });

    var eventDropsChart = d3.chart.eventDrops()
        .axisFormat(function(xAxis) {
            xAxis.ticks(5);
        });
    //d3.select('#chart_placeholder2').datum(data).call(eventDropsChart);
});
*/

// -----------------------------------------------------------------------------
/**
*
*
*
*
*
*
**/
    
//    data = [{"total":225,"days":[12,51,60,26,38,31,7]},{"total":279,"days":[42,33,34,72,61,12,25]},{"total":212,"days":[12,59,24,70,36,5,6]},{"total":335,"days":[17,43,38,58,67,72,40]},{"total":329,"days":[40,53,62,48,38,36,52]},{"total":234,"days":[15,25,41,66,35,37,15]},{"total":175,"days":[2,40,23,40,23,34,13]},{"total":308,"days":[20,22,63,55,51,66,31]},{"total":401,"days":[20,64,42,62,88,79,46]},{"total":214,"days":[24,27,25,48,38,28,24]},{"total":332,"days":[26,43,20,109,74,29,31]},{"total":333,"days":[65,66,62,60,14,43,23]},{"total":437,"days":[33,74,82,70,85,64,29]},{"total":687,"days":[29,82,87,167,156,126,40]},{"total":243,"days":[11,52,44,50,46,30,10]},{"total":360,"days":[16,41,86,62,83,60,12]},{"total":349,"days":[22,55,48,36,88,57,43]},{"total":368,"days":[29,100,68,54,55,46,16]},{"total":377,"days":[3,71,66,57,93,82,5]},{"total":265,"days":[12,61,61,19,44,46,22]},{"total":396,"days":[20,58,70,52,84,93,19]},{"total":467,"days":[25,47,128,93,70,35,69]},{"total":524,"days":[55,79,94,95,122,70,9]},{"total":535,"days":[21,96,95,115,78,89,41]},{"total":333,"days":[20,50,49,52,58,51,53]},{"total":258,"days":[7,23,50,59,46,50,23]},{"total":242,"days":[12,4,54,53,46,33,40]},{"total":335,"days":[1,34,40,75,97,51,37]},{"total":325,"days":[32,57,65,46,60,58,7]},{"total":224,"days":[23,42,43,28,31,27,30]},{"total":317,"days":[20,46,43,46,83,36,43]},{"total":119,"days":[1,10,9,45,30,17,7]},{"total":368,"days":[13,74,77,85,72,40,7]},{"total":271,"days":[10,50,46,61,68,31,5]},{"total":290,"days":[26,48,39,37,68,43,29]},{"total":393,"days":[27,50,133,47,73,37,26]},{"total":316,"days":[2,63,66,47,63,33,42]},{"total":146,"days":[0,32,38,23,45,7,1]},{"total":255,"days":[23,34,72,46,48,24,8]},{"total":196,"days":[9,32,82,18,16,29,10]},{"total":410,"days":[41,52,67,42,49,103,56]},{"total":280,"days":[13,35,40,60,68,53,11]},{"total":432,"days":[45,65,59,55,71,68,69]},{"total":371,"days":[19,104,95,51,66,20,16]},{"total":285,"days":[2,38,50,72,74,47,2]},{"total":350,"days":[47,16,96,93,32,52,14]},{"total":234,"days":[34,68,66,32,5,10,19]},{"total":279,"days":[27,43,64,48,60,25,12]},{"total":391,"days":[40,54,59,68,80,51,39]},{"total":168,"days":[0,44,42,36,30,16,0]},{"total":0,"days":[0,0,0,0,0,0,0]},{"total":14,"days":[6,0,0,0,0,2,6]},{"total":0,"days":[0,0,0,0,0,0,0]}];



  

var TimeLine = {};

var chartPlaceholder = document.getElementById('chart_placeholder');

var eventNames = ["Matemática",
                  "Física",
                  "Artes plásticas",
                  "Política",
                  "Catástrofes",
                  "Fim dos tempos",
                  "Dia seguinte ao Fim dos Tempos",
                  "Outro dia depois de ontem",
                  "O dia em que a Terra parou",
                  "Diretas Já",
                  "Coraçao de Estudante",
                  "Marimbondos de Fogo",
                  "Collors around",
                  "Zélia I",
                  "Zéli II",
                  "Confisco",
                  "Sem Fisco",
                  "Pão de queijo e topete",
                  "Unidade Real Virtal",
                  "Virtualmente Real",
                  "Esqueçam o que eu disse I",
                  "Esqueçam o que eu disse II",
                  "Don Vito I",
                  "Don Vito II",
                  "Don Vito III",
                  "Don Vito IV"];

var data       = [];
var endTime    = Date.now();
var oneMonth   = 30 * 24 * 60 * 60 * 1000;
var startTime  = endTime - oneMonth;
var middleTime = startTime + ((endTime - startTime) / 2);

// =============================================================================
var indebugmode = true;
// -----------------------------------------------------------------------------
function createEvent_temp_func(name) {
    var event = {};
    event.name = name;
    event.dates = [];
    var max = Math.floor(Math.random() * 200);
    for (var j = 0; j < max; j++) {
        var time = Math.floor((Math.random() * oneMonth)) +
            startTime;
        event.dates.push(new Date(time));
    }
    return event;
}
// -----------------------------------------------------------------------------
//function createEvent (name) {
//
// }
// -----------------------------------------------------------------------------
if (indebugmode) {
    for (var i = 0; i < 6; i++) {
        data.push(createEvent_temp_func(eventNames[i]));
    }
} else {
    for (var i = 0; i < 6; i++) {
        data.push(createEvent(eventNames[i]));
    }
}
// =============================================================================

var linha;
var timestamp;


var color = d3.scale.category20();
var locale = d3.locale({
    "decimal": ".",
    "thousands": " ",
    "grouping": [3],
    "dateTime": "%x, %X",
    "date": "%d/%m/%Y",
    "time": "%H:%M",
    "periods": ["AM", "PM"],
    "days": ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
    "shortDays": ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "sab."],
    'months': ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'agosto', 'novembro', 'dezembro'],
    'shortMonths': ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dec.']
});

/*var ti = d3.tip()
           .attr('class', 'd3-tip')
           .html(function(d) { return d; }); */       

graph = d3.chart.eventDrops()
    .start(new Date(startTime))
    .end(new Date(endTime))
    .minScale(0.5)
    .maxScale(100)
    .locale(locale)
    .eventColor(function(datum, index) {
        if (datum.getTime() < middleTime) {
            return 'green';
        }
        return 'red';
    })
    .width(1000)
    .margin({
        top: 100,
        left: 250,
        bottom: 40,
        right: 40
    })
    .axisFormat(function(xAxis) {
        xAxis.ticks(5);
    })
    .eventHover(function(el) {
        

        if(el.nodeName !== 'circle'){
          return;
        }

        linha = el.parentNode.firstChild.innerHTML;

        var timestamp = d3.select(el).data()[0];
        document.getElementById('legend').innerHTML = 'Mouse sobre [' + timestamp + '] na série "' + linha + '"';

        TimeLine.mouseOverEventMarker(el, timestamp);
    })
    .eventZoom(function(scale) {
        var limit = scale.domain();
        var period = parseInt((limit[1] - limit[0]) / (60 * 60 * 1000));
        document.getElementById('zoomEnd').innerHTML = 'Zoom cobrindo um período de "' + period + ' horas"';
    }) 
   .eventClick(function(el){
    console.log('eventClick. Elemento', el);
      linha = el.parentNode.firstChild.innerHTML;
      var timestamp = d3.select(el).data()[0];
      document.getElementById('legend').innerHTML = 'Mouse sobre [' + timestamp + '] na série "' + linha + '"';

      TimeLine.mouseClickEventMarker(el);

   })
   .eventLeave(function(el){
       TimeLine.mouseLeaveEventMarker(el);
   });// zee 42

//    
var element = d3.select(chartPlaceholder).append('div').datum(data);

//
graph(element);

//
var updateDelimiter = function(value) {
    graph.hasDelimiter(!graph.hasDelimiter())(element);
}; 

var addLine = function() {
    var data = element.datum();
    var i = data.length;
    data.push(createEvent_temp_func(eventNames[i]));
    elements = element.datum(data);
    graph(element);
};

var removeLine = function() {
    var data = element.datum();
    data.pop();
    element = element.datum(data);
    graph(element);
};

var zoomIn = function(){
   console.log('Zoom In YTBI');
   d3.chart.eventDrops().eventZoom();
};

var zoomOut = function(){
    console.log('Zoom Out YTBI');
};

var circulo;
var registrado = false;
/* ----------------------------------------------------------------------- */
TimeLine.mouseClickEventMarker = function(el){
    //TODO
    console.log('mouseClickEventMarker. Element Name: ', el.nodeName);
    
    if(el.nodeName !== 'circle'){
        return;
    }    

    // TOTO change hard codded values to MACRO_LIKE variables or read from a 
    // config file
    var DEFAULT_TIME_EVENT_RADIUS = '10';
    var CLICKED_TIME_EVENT_RADIUS = '50';

    circulo = d3.select(el).attr('r');

    if (circulo !== DEFAULT_TIME_EVENT_RADIUS){
        circulo = d3.select(el).attr('r', DEFAULT_TIME_EVENT_RADIUS);
    } else {
        circulo = d3.select(el).attr('r', CLICKED_TIME_EVENT_RADIUS);
    }

};
/* ----------------------------------------------------------------------- */





TimeLine.mouseLeaveEventMarker = function(el){
  
    console.log('mouseLeaveEventMarker is YTBI: ');

    if(el.nodeName === 'circle'){
        test = d3.select(el).attr('r', '10');  
    }
};


TimeLine.mouseOverEventMarker = function(el, timeStamp){

    console.log('mouseOverEventMarker. el: ', el);
    
/*    if(el.nodeName === 'circle'){
        test = d3.select(el).attr('r', '50')
                 .on("mouseenter");
    }*/

// this handler will be executed only once when the cursor moves over the unordered list
d3.selectAll('circle').on("mouseenter", function( event ) {   
  // highlight the mouseenter target
  d3.select(event.target).attr('r', 50);
}, false); // false: does not bubble




    
};

TimeLine.mngrTimeLineEventForm = function(form){
    //TODO
    console.log('mngrTimeLineEventForm is YTBD');
};

TimeLine.addTimeLineEvent = function(){
    //TODO
    console.log('addTimeLineEvent is YTBD');
};

TimeLine.removeTimeLineEvent = function(){
    //TODO
    console.log('removeTimeLineEvent is YTBD');
};

TimeLine.editTimeLineEvent = function(){
    //TODO
    console.log('editTimeLineEvent is YTBD');
};

(function(){}());






})(window.angular);

angular.module('timenessApp', ['ui.bootstrap'])
.controller('MainCtrl', [function($scope, $window){
    $scope.timeness = {};
    $scope.timeness.hello = 'Hello';
}]);

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

var chartPlaceholder = document.getElementById('chart_placeholder');

var eventNames = ["Matemática",
                  "Física",
                  "Artes plásticas",
                  "Política",
                  "Catástrofes",
                  "Fim dos tempos"];

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

var color = d3.scale.category20();
var locale = d3.locale({
    "decimal": ".",
    "thousands": " ",
    "grouping": [3],
    "dateTime": "%A %e %B %Y, %X",
    "date": "%d/%m/%Y",
    "time": "%H:%M",
    "periods": ["AM", "PM"],
    "days": ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
    "shortDays": ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "sab."],
    'months': ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'agosto', 'novembro', 'dezembro'],
    'shortMonths': ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dec.']
});
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
    .width(800)
    .margin({
        top: 100,
        left: 200,
        bottom: 0,
        right: 0
    })
    .axisFormat(function(xAxis) {
        xAxis.ticks(5);
    })
    .eventHover(function(el) {
        var linha = el.parentNode.firstChild.innerHTML;
        var timestamp = d3.select(el).data()[0];
        document.getElementById('legend').innerHTML = 'Mouse sobre [' + timestamp + '] na série "' + linha + '"';
    })
    .eventZoom(function(scale) {
        var limit = scale.domain();
        var period = parseInt((limit[1] - limit[0]) / (60 * 60 * 1000));
        document.getElementById('zoomEnd').innerHTML = 'Zoom cobrindo um período de "' + period + ' horas"';
    });
/*                .eventClick(function (el) {
                    console.log('clicked');
                    });*/
var element = d3.select(chartPlaceholder).append('div').datum(data);

graph(element);

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
};

var zoomOut = function(){
    console.log('Zoom Out YTBI');
};

/**
*
*
*
*
*
*/
var TimeLine = {};

TimeLine.mngrTimeLineEventForm = function(form){
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













//})(window);
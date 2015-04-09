
/**
*
*
*
*
*
*
**/
angular.module('timenessApp', ['ui.bootstrap']);
// -----------------------------------------------------------------------------
//
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
angular.module('timenessApp').controller('DatepickerDemoCtrl', function ($scope) {
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
angular.module('timenessApp').controller('MouseTimeLineInteraciontCtrl', function ($scope) {
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
angular.module('timenessApp').controller('PopoverDemoCtrl', function ($scope) {
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

var linha ;


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

        //zi
        TimeLine.mouseOverEventMarker(el, timestamp);
        //ze

    })
    .eventZoom(function(scale) {
        var limit = scale.domain();
        var period = parseInt((limit[1] - limit[0]) / (60 * 60 * 1000));
        document.getElementById('zoomEnd').innerHTML = 'Zoom cobrindo um período de "' + period + ' horas"';


        //var limit = scale.domain();
        //var period = parseInt((limit[1] - limit[0]) / (60 * 60 * 1000) );
        //document.getElementById('zoomEnd').innerHTML = 'Zoomed on a period of "' + period + ' hours"';

    }) 
   .eventClick(function(el){
    console.log('el click ', el);
      linha = el.parentNode.firstChild.innerHTML;
      var timestamp = d3.select(el).data()[0];
      document.getElementById('legend').innerHTML = 'Mouse sobre [' + timestamp + '] na série "' + linha + '"';


      TimeLine.mouseClickEventMarker(el);
   })
   .eventLeave(function(el){
       TimeLine.mouseLeaveEventMarker(el);
   });// zee 42
    
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
   d3.chart.eventDrops().eventZoom();
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
var circulo;
var registrado = false;

function simulateClick(elem) {
  var evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  var cb = elem; //element to click on
  var canceled = !cb.dispatchEvent(evt);
}


TimeLine.mouseClickEventMarker = function(el){
    //TODO
    console.log('mouseClickEventMarker. el: ', el.nodeName);
    
    if(el.nodeName !== 'circle'){
        return;
    }    


    d3.select(el).on('mouseover');    

    
    if(!registrado){
      el.addEventListener('click', simulateClick(el));
      registrado = true;
    }
    
    circulo = d3.select(el).attr('r', '50');  
    
    registrado = false;
};


TimeLine.mouseLeaveEventMarker = function(el){
    console.log('mouseLeaveEventMarker is YTBI: ');

    if(el.nodeName === 'circle'){
        test = d3.select(el).attr('r', '10');  
    }
};

TimeLine.mouseOverEventMarker = function(el, timeStamp){
    //TODO

    console.log('mouseOverEventMarker. el: ', el);
    
    if(el.nodeName === 'circle'){
        test = d3.select(el).attr('r', '100');  
    }
    
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




  
  
/*  // this handler will be executed only once when the cursor moves over the unordered list
  test.addEventListener("mouseenter", function( event ) {   
    // highlight the mouseenter target
    event.target.style.color = "purple";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
*/









//})(window);
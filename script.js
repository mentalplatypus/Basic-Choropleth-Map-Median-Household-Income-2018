// all state data

var state = [
                { abbrev: 'AL', income: 49861 },
                { abbrev: 'AK', income: 74346 },
                { abbrev: 'AZ', income: 59246 },
                { abbrev: 'AR', income: 47062 },
                { abbrev: 'CA', income: 75277 },
                { abbrev: 'CO', income: 71953 },
                { abbrev: 'CT', income: 76348 },
                { abbrev: 'DE', income: 64805 },
                { abbrev: 'FL', income: 55462 },
                { abbrev: 'GA', income: 58756 },
                { abbrev: 'HI', income: 80212 },
                { abbrev: 'ID', income: 55583 },
                { abbrev: 'IL', income: 65030 },
                { abbrev: 'IN', income: 55746 },
                { abbrev: 'IA', income: 59955 },
                { abbrev: 'KS', income: 58218 },
                { abbrev: 'KY', income: 50247 },
                { abbrev: 'LA', income: 47905 },
                { abbrev: 'ME', income: 55602 },
                { abbrev: 'MD', income: 83242 },
                { abbrev: 'MA', income: 79835 },
                { abbrev: 'MI', income: 56697 },
                { abbrev: 'MN', income: 70315 },
                { abbrev: 'MS', income: 44717 },
                { abbrev: 'MO', income: 54478 },
                { abbrev: 'MT', income: 55328 },
                { abbrev: 'NE', income: 59566 },
                { abbrev: 'NV', income: 58646 },
                { abbrev: 'NH', income: 74991 },
                { abbrev: 'NJ', income: 81740 },
                { abbrev: 'NM', income: 47169 },
                { abbrev: 'NY', income: 67844 },
                { abbrev: 'NC', income: 53855 },
                { abbrev: 'ND', income: 63837 },
                { abbrev: 'OH', income: 56111 },
                { abbrev: 'OK', income: 51924 },
                { abbrev: 'OR', income: 63426 },
                { abbrev: 'PA', income: 60905 },
                { abbrev: 'RI', income: 64340 },
                { abbrev: 'SC', income: 52306 },
                { abbrev: 'SD', income: 56274 },
                { abbrev: 'TN', income: 52375 },
                { abbrev: 'TX', income: 60629 },
                { abbrev: 'UT', income: 71414 },
                { abbrev: 'VT', income: 60782 },
                { abbrev: 'VA', income: 72577 },
                { abbrev: 'WA', income: 74073 },
                { abbrev: 'WV', income: 44097 },
                { abbrev: 'WI', income: 60773 },
                { abbrev: 'WY', income: 61584 }
            ];

            for (let i = 0; i < state.length; i++) {
                let objectState = state[i].abbrev;
                let transparency = state[i].income;
                let income = state[i].income;
                console.log(transparency);

                if (state[i].income > 40000 && state[i].income < 50000) {
                    transparency = 0.2;
                } else if (state[i].income >= 50000 && state[i].income < 60000) {
                    transparency = 0.4;
                } else if (state[i].income >= 60000 && state[i].income < 70000) {
                    transparency = 0.6;
                } else if (state[i].income >= 70000 && state[i].income < 80000) {
                    transparency = 0.8;
                } else if (state[i].income >= 80000 && state[i].income < 90000) {
                    transparency = 1;
                }

                let currentState = document.getElementById(objectState);
                currentState.style.opacity = transparency;
              
              console.log($("#"+objectState));
              
              $("#"+objectState).hover(function(e) {
                  console.log(objectState);
                
              $('#box-description').css('display','block');
              $('#box-description').html($(this).data('name') + " (" + objectState + ")" + "<br/> <b>" + "$" + income); 
              });
            }

$("path").mouseleave(function(e) {
  $('#box-description').css('display','none');
});


$(document).mousemove(function(e) {
  $('#box-description').css('top',e.pageY-$('#box-description').height()-30);
  $('#box-description').css('left',e.pageX-($('#box-description').width())/2);
}).mouseover();
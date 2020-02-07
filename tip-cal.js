const cost_input = document.querySelector('.cost');
const service_input = document.querySelector('.service');
const people_input = document.querySelector('.people');

const tip_btn = document.querySelector('#tip-btn');
tip_btn.addEventListener('click', tip_cal)

function tip_cal(){
   let cost = Number(cost_input.value);
   let service = Number(service_input.value)/100;
   let people = Number(people_input.value);
   let tip = (cost*service)/people;

   let tip_el = document.querySelector('.tip-wrap .tip');
   tip_el.innerText = '$' + tip.toFixed(2) + ((people>1) ? 'each' : '');

}

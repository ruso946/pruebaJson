let plan = '[{"plan":"210","valor":"1200"},'+
             '{"plan":"310","valor":"1300"},'+
             '{"plan":"410","valor":"1400"},'+
             '{"plan":"510","valor":"1500"}]';


//import plan from "./data.json" assert { type: 'JSON' };

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log("primer console.log ",json));
    const obj = JSON.parse(plan);
    console.log("primer console.log ",plan);
    console.log("primer console.log pasado a objeto ",obj);
    console.log("segundo console.log",obj[1].plan);
    console.log("tercer console.log",obj[2].valor);

const data = {
temperature:42,
duration:63,
noise:25,
lighting:75,
fatigueIndex:33
};

function createDoughnut(id,value,color){

new Chart(document.getElementById(id),{

type:'doughnut',

data:{
datasets:[{
data:[value,100-value],
backgroundColor:[color,'#2a3b4d']
}]
},

options:{
responsive:true,
maintainAspectRatio:false,
cutout:'70%',
plugins:{
legend:{display:false}
}
}

});

}

createDoughnut('tempChart',data.temperature,'#22c55e');
createDoughnut('durationChart',data.duration,'#eab308');
createDoughnut('noiseChart',data.noise,'#f97316');
createDoughnut('lightChart',data.lighting,'#84cc16');

new Chart(document.getElementById('fatiguePie'),{

type:'pie',

data:{
datasets:[{
data:[data.fatigueIndex,100-data.fatigueIndex],
backgroundColor:['#eab308','#2a3b4d']
}]
},

options:{
responsive:true,
maintainAspectRatio:false,
plugins:{
legend:{display:false}
}
}

});

function updateTimestamp(){
document.getElementById('lastUpdate').textContent =
new Date().toLocaleTimeString();
}

updateTimestamp();

setInterval(updateTimestamp,60000);
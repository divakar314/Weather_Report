let btn1=document.querySelector('.btn')

btn1.addEventListener('click',click1)


function click1()
{
    let a = document.querySelector('.input1').value
    fetch(`https://goweather.herokuapp.com/weather/${a}`)
    .then(response =>response.json())
    .then(data=>htmlrender(data))

   function htmlrender(data)
   {
       document.querySelector('.display1').innerHTML=data.temperature
       document.querySelector('.sun').innerHTML=data.description
       document.querySelector('.wind').innerHTML=`Wind : ${data.wind}`
       document.querySelector('.city1').innerHTML=`${a}`
    document.querySelector('.tomorrow1').innerHTML=`Tomorrow : ${data.forecast[0].temperature}`
   }
    
}
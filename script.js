let busesData = [
    {
        "name" : "Shuttl",
        "from" : "Amritsar",
        "to" : "Jalandhar",
        "price" : 359,
        "arrival" : "21:30PM",
        "departure" : "19:30PM"
    },

    {
        "name" : "Zimindara Travels",
        "from" : "Bathinda",
        "to" : "Jalandhar",
        "price" : 699,
        "arrival" : "6:00AM",
        "departure" : "00:45AM"
    },

    {
        "name" : "Pepsu",
        "from" : "Barnala",
        "to" : "Patiala",
        "price" : 224,
        "arrival" : "16:00PM",
        "departure" : "14:35PM"
    },

    {
        "name" : "Shekhar Travels",
        "from" : "Fatehgrarh Sahib",
        "to" : "Jalandhar",
        "price" : 450,
        "arrival" : "21:30PM",
        "departure" : "19:30PM"
    },

    {
        "name" : "Amit Travels",
        "from" : "Fazilka",
        "to" : "Jalandhar",
        "price" : 750,
        "arrival" : "5:30PM",
        "departure" : "11:30PM"
    },

    {
        "name" : "Shekhar Travels",
        "from" : "Firozpur",
        "to" : "Jalandhar",
        "price" : 450,
        "arrival" : "21:30PM",
        "departure" : "19:30PM"
    },

    {
        "name" : "Pepsu",
        "from" : "Gurdaspur",
        "to" : "Patiala",
        "price" : 550,
        "arrival" : "20:00PM",
        "departure" : "14:35PM"
    },

    {
        "name" : "Yellow Pedal",
        "from" : "Hoshiarpur",
        "to" : "Chandigarh",
        "price" : 90 ,
        "arrival" : "17.00PM",
        "departure" : "15:45PM"
    },

    {
        "name" : "Laxmi holidays",
        "from" : "Jalandhar",
        "to" : "Amritsar",
        "price" : 522,
        "arrival" : "08:00AM",
        "departure" : "05:55AM"
    },
    
]
document.getElementById('submit').addEventListener('click',function(){
    var a=document.querySelectorAll('input')[0].value;
    var b=document.querySelectorAll('input')[1].value;
     busesData.forEach(function(busInfo){
      if(a===busInfo.from && b===busInfo.to )
      {
        document.getElementById('result').style.visibility='visible';
        let c=document.querySelector('table').style.visibility='visible';
        let d=document .querySelectorAll('tr')[1];
        document.querySelectorAll('td')[5].innerText=a;
        document.querySelectorAll('td')[6].innerText=b;
        document.querySelectorAll('td')[7].innerText=busInfo.arrival;
        document.querySelectorAll('td')[8].innerText=busInfo.price;
        document.querySelectorAll('td')[9].innerText=busInfo.name;
      }
    })
})
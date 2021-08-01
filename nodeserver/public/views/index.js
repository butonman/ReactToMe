
var myip="https://3472612e1eb07adcd44425431320f17f.balena-devices.com/"

function button_click(data){

    console.log(data)

    const txt={button:data};

    const request= new Request(myip+"/backend_data",{
        method:'POST',
        body: JSON.stringify(txt),
        headers: new Headers({
            "Content-type": "application/json"
        })

    });

    fetch(request)
    .then(res => res.json())
    .then(res => console.log(res));
    


}

function lights_click(data){

    console.log(data)
    
    const txt={temp:data};

    const request= new Request(myip+"/lights",{
        method:'POST',
        body: JSON.stringify(txt),
        headers: new Headers({
            "Content-type": "application/json"
        })

    });

    fetch(request)
    .then(res => res.json())
    .then(res => console.log(res));
    


}

function buzz_click(data){

    console.log(data)
    
    //const txt={temp:data};
    const txt={note:800,duration:0.2}
    const request= new Request(myip+"/buzz",{
        method:'POST',
        body: JSON.stringify(txt),
        headers: new Headers({
            "Content-type": "application/json"
        })

    });

    fetch(request)
    .then(res => res.json())
    .then(res => console.log(res));
    


}
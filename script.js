
const mydata = [
    {
        width: 2,
        name: "Maka Motors",
        type: "Brand Design",
        year: 2023,
        images: {
            full: './images/maka.png'
        },
        color: {
            primary: '#55CCFF',
            text:'black'
        }
    },
    {
        width: 2,
        name: "Queerdo",
        type: "Art Performance",
        year: 2023,
        images: {
            full: './images/queerdo.png'
        },
        color: {
            primary: '#590D31',
            text:'white'
        }
    },
    {
        width: 2,
        name: "GO-BOX",
        type: "Brand Direction",
        year: 2016,
        images: {
            full: './images/gobox.png'
        },
        color: {
            primary: '#E2B100',
            text:'#472B2F'
        }
    },
    {
        width: 1,
        name: "Ganesha Exhibition",
        type: "Logo Design",
        year: 2013,
        images: {
            png: './images/gep_logo.png'
        },
        color: {
            primary: '#203B8C',
            text:'white'
        }
    },
    {
        width: 2,
        name: "Ganesha Film Festival",
        type: "Brand Direction",
        year: 2013,
        images: {
            full: './images/ganffest.png'
        },
        color: {
            primary: 'white',
            text:'red'
        }
    },
    {
        width: 1,
        name: "EV",
        type: "Illustration",
        year: 2023,
        images: {
            png: './images/motorcycle.png'
        },
        color: {
            primary: 'black',
            text:'#55CCFF'
        }
    },
    {
        width: 1,
        name: "Circular Maze Generator",
        type: "Code",
        year: 2024,
        images: {
            full: './images/maze.png'
        },
        color: {
            primary: 'black',
            text:'white'
        }
    }
];

let data = [];
for (let d of mydata) {
    if (Math.round(Math.random())) {
        data.push(d);
    } else {
        data.unshift(d);
    }
}

for (let i=0;i<data.length;i++) {
    const item = document.createElement("div");
    item.setAttribute("class", "items");
    item.style.flex = ""+(data[i].width * 20)+"%";
    item.style.maxWidth = ""+((25*data[i].width)-1)+"%";

    const content = document.createElement("div");
    content.setAttribute("class", "content");

    const pname = document.createElement("span");
    pname.setAttribute("class","name");
    pname.innerHTML = data[i].name;
    content.appendChild(pname);

    const ptype = document.createElement("span");
    ptype.setAttribute("class","type");
    ptype.innerHTML = data[i].type;
    content.appendChild(ptype);

    if (data[i].images.full) {
        item.style.backgroundImage="url("+data[i].images.full+")";
    }
    if (data[i].images.png) {
        const img = document.createElement('img');
        img.setAttribute("src",data[i].images.png);
        content.appendChild(img);
    }
    
    item.appendChild(content);
    item.style.backgroundColor=data[i].color.primary;
    item.style.color=data[i].color.text;
    //console.log(document.getElementById("collection"));
    document.getElementById("collection").appendChild(item);
}


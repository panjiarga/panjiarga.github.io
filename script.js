
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

function createDiv (item) {
    const element = document.createElement("div");
    element.setAttribute("class", "items");
    element.style.flex = ""+(item.width * 20)+"vw";

    //if 1 --> 23
    //if 2 --> 49
    element.style.maxWidth = ""+(item.width>1 ? 49 : 22)+"vw";

    const content = document.createElement("div");
    content.setAttribute("class", "content");

    const pname = document.createElement("span");
    pname.setAttribute("class","name");
    pname.innerHTML = item.name;
    content.appendChild(pname);

    const ptype = document.createElement("span");
    ptype.setAttribute("class","type");
    ptype.innerHTML = item.type;
    content.appendChild(ptype);

    if (item.images.full) {
        element.style.backgroundImage="url("+item.images.full+")";
    }
    if (item.images.png) {
        const img = document.createElement('img');
        img.setAttribute("src",item.images.png);
        content.appendChild(img);
    }

    element.appendChild(content);
    element.style.backgroundColor=item.color.primary;
    element.style.color=item.color.text;

    return element;
}


function isSquare (data) {
    return (data.width == 1);
}

let creation;
const collection = document.getElementById("collection");

while (data.length>0) {
    creation = data.shift();
    if (creation.width==1) {
        let idx = data.findIndex(isSquare);
        console.log("idx "+idx);
        if (idx>=0) {
            collection.appendChild(createDiv(creation));
            console.log("create "+creation.name);
            creation = data.splice(idx,1)[0];
            collection.appendChild(createDiv(creation));
            console.log("create "+creation.name);
        } else {
            creation.width = 2;
            collection.appendChild(createDiv(creation));
            console.log("create "+creation.name);
        }
    } else {
        collection.appendChild(createDiv(creation));
        console.log("create "+creation.name);
    }
}


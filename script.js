
const data = [
    {
        name: "Ganesha Film Festival",
        type: "Brand Direction",
        images: {
            main: './images/ganffest.png'
        },
        color: {
            primary: 'white',
            text:'red'
        }
    },
    {
        name: "Maka Motors",
        type: "Brand Design",
        images: {
            main: './images/maka.png'
        },
        color: {
            primary: '#55CCFF',
            text:'black'
        }
    },
    {
        name: "GO-BOX",
        type: "Brand Direction",
        images: {
            main: './images/gobox.png'
        },
        color: {
            primary: '#E2B100',
            text:'#472B2F'
        }
    },
    {
        name: "Queerdo",
        type: "Art Performance",
        images: {
            main: './images/queerdo.png'
        },
        color: {
            primary: '#590D31',
            text:'white'
        }
    }
];

for (let i=0;i<data.length;i++) {
    const item = document.createElement("div");
    item.setAttribute("class", "items");

    const content = document.createElement("div");
    content.setAttribute("class", "content");

    const pname = document.createElement("span");
    pname.setAttribute("class","title");
    pname.innerHTML = data[i].name;
    content.appendChild(pname);

    const ptype = document.createElement("span");
    ptype.setAttribute("class","type");
    ptype.innerHTML = data[i].type;
    content.appendChild(ptype);

    item.appendChild(content);

    item.style.backgroundColor=data[i].color.primary;
    if (data[i].images.main) {
        item.style.backgroundImage="url("+data[i].images.main+")";
    }
    item.style.color=data[i].color.text;
    //console.log(document.getElementById("collection"));
    document.getElementById("collection").appendChild(item);
}


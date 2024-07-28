
const mydata = [
    {width:2,name: "Maka Motors",
        type: "Brand Identity",
        year: 2023,
        images: {
            full: './images/maka.png'
        },
        color: {
            primary: '#55CCFF',
            text:'black'
        }
    },{width:3,name: "Queerdo",
        type: "Art Performance",
        year: 2023,
        images: {
            full: './images/queerdo.png'
        },
        color: {
            primary: '#590D31',
            text:'white'
        }
    },{width: 2,name: "GO-BOX",
        type: "Brand Direction",
        year: 2016,
        images: {
            full: './images/gobox.png'
        },
        color: {
            primary: '#E2B100',
            text:'#472B2F'
        }
    },{width: 1,name: "Ganesha Exhibition",
        type: "Brand Identity",
        year: 2013,
        images: {
            png: './images/gep_logo.png'
        },
        color: {
            primary: '#203B8C',
            text:'white'
        }
    },{width: 2,name: "Ganesha Film Festival",
        type: "Brand Direction",
        year: 2013,
        images: {
            full: './images/ganffest.png'
        },
        color: {
            primary: 'white',
            text:'red'
        }
    },{width: 1,name: "EV",
        type: "Illustration",
        year: 2023,
        images: {
            png: './images/motorcycle.png'
        },
        color: {
            primary: 'black',
            text:'#55CCFF'
        }
    },{width: 3,name: "Circular Maze Generator",
        type: "Code",
        year: 2024,
        images: {
            full: './images/maze.png'
        },
        color: {
            primary: 'black',
            text:'white'
        }
    },/*{width: 1,name: "Bioskop Kampus",
        type: "Brand Identity",
        year: 2013,
        images: {
            full: './images/bioskopkampus.png'
        },
        color: {
            primary: '#0D0D05',
            text:'yellow'
        }
    },*/{width: 1,name: "Citilink In-Flight Entertainment",
        type: "Prototype",
        year: 2014,
        images: {
            png: './images/citilink.png'
        },
        color: {
            primary: '#235521',
            text:'white'
        }
    },{width: 1,name: "Luminara",
        type: "Web Design",
        year: 2024,
        images: {
            png: './images/luminara.png'
        },
        color: {
            primary: '#31184E',
            text:'white'
        }
    },{width: 3,name: "Cineclub",
        type: "Mobile App",
        year: 2024,
        images: {
            png: './images/cineclub.gif'
        },
        color: {
            primary: '#B92981',
            text:'#FFCC19'
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

    //if 1 --> 23
    //if 2 --> 49

    //console.log('createDiv for');
    //console.log(item);
    element.style.flex = ""+((item.width==2) ? 45 : 22)+"vw";
    element.style.maxWidth = ""+((item.width==2) ? 45 : 22)+"vw";
    if (item.width == 3) {
        element.style.maxHeight = "45vw";
        element.style.flex = "1 1 45vw";
    }

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

function wrapDiv (elements,flexdir) {
    const parent = document.createElement('div');
    parent.setAttribute('class',"group "+flexdir);

    console.log('wrapDiv for');
    console.log(elements);
    elements = elements.sort(WidthSort);
    for (let i = 0; i < elements.length; i++) {
        parent.appendChild(createDiv(elements[i]));
    }
    return parent;
}


function findWidthNotOne (data,w) {
    return (data.width != w);
}

function WidthSort (a,b) {
    return (b.width - a.width);
}


let creation = [];
let x;
const collection = document.getElementById("collection");
while (data.length>0) {
    x = data.shift(); //add first square
    creation.push(x);
    console.log('1st');
    console.log(creation[0]);
    if (data.length>=1) { //can add second square
        let idx = data.findIndex(function(el){return (el.width==creation[0].width);}); //find another square with the same width
        if (idx!=-1) { //found the same square
            x = data.splice(idx,1)[0];
            creation.push(x);
            console.log('2nd');
            console.log(creation[1]);
            //find third square?
            if (creation[0].width==1) { //two little square
                idx = data.findIndex(function(el){return (el.width!=1);}); //find a big square
                if (idx!=-1) { //found a big square
                    x = data.splice(idx,1)[0];
                    creation.push(x);
                    console.log('3rd');
                    console.log(creation[2]);
                    collection.appendChild(wrapDiv(creation,(creation[2].width == 3 ? 'vertical':'horizontal')));
                    console.log('bbP');
                } else { //no big square, all little square left
                    if (data.length>0) {
                        x = data.shift();
                        creation.push(x);
                        console.log('3rd');
                        console.log(creation[2]); // third little square
                        if (data.length>0) { //there are more little square 
                            x = data.shift();
                            creation.push(x);
                            console.log('3rd');
                            console.log(creation[3]); // fourth little square
                        }
                    }
                    console.log('bbbb');
                    collection.appendChild(wrapDiv(creation,'horizontal')); 
                }
            } else { //good day
                console.log('PP');
                collection.appendChild(wrapDiv(creation,(creation[0].width == 3 ? 'vertical':'horizontal')));
            }
        } else { //no same square left
            if (creation[0].width!=1) { //if the only big square left
                //can we find two little square?
                idx = data.findIndex(function(el){return (el.width==1);}); //find a little square
                if (idx!=-1) { //found lil square (2nd)
                    x = data.splice(idx,1)[0];
                    creation.push(x);
                    console.log('2nd');
                    console.log(creation[1]); //second little square
                    if (data.length>0) { //try to find third little square
                        idx = data.findIndex(function(el){return (el.width==1);}); //find a little square
                        if (idx!=-1) { //found lil square (3rd)
                            x = data.splice(idx,1)[0];
                            creation.push(x);
                            console.log('3rd');
                            console.log(creation[2]); //third little square
                            collection.appendChild(wrapDiv(creation,(creation[0].width == 3 ? 'vertical':'horizontal')));
                            console.log('Ppp');
                        } else {
                            creation[1].width = creation[0].width; //extend the second square to match
                            collection.appendChild(wrapDiv(creation,(creation[0].width == 3 ? 'vertical':'horizontal')));
                            console.log('P$');   
                        }
                    } else { //no lil square left...
                        //creation[1].width = creation[0].width;
                        collection.appendChild(wrapDiv(creation,(creation[0].width == 3 ? 'vertical':'horizontal')));
                        console.log('P$');
                    }
                } else { //the rest is the other big square
                    //pop back the thing
                    if (data.length >= 2) {
                        console.log('reject');
                        console.log(creation[0]);
                        data.push(creation[0]);
                    } else {
                        collection.appendChild(wrapDiv(creation,(creation[0].width == 3 ? 'vertical':'horizontal')));
                        creation[0] = data.shift();
                        collection.appendChild(wrapDiv(creation,(creation[0].width == 3 ? 'vertical':'horizontal')));
                    }
                }
            } else { // the only lil square left
                if (data.length <2) {
                    x = data.shift();
                    creation.push(x);
                    console.log('2nd');
                    console.log(creation[1]);
                    collection.appendChild(wrapDiv(creation,(creation[1].width == 3 ? 'vertical':'horizontal')));
                    console.log('Pp');
                } else {
                    console.log('reject');
                    console.log(creation[0]);
                    data.push(creation[0]);
                }
            }
        }
    } else {
        collection.appendChild(wrapDiv(creation,(creation[0].width == 3 ? 'vertical':'horizontal')));
        console.log('?');
    };
    creation = [];
}


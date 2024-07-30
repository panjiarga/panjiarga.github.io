
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
            text:'#FF40FF'
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
            primary: '#03080A',
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
    },{width: 1,name: "Bioskop Kampus",
        type: "Brand Identity",
        year: 2013,
        images: {
            png: './images/bioskopkampus.png'
        },
        color: {
            primary: '#FFE100',
            text:'black'
        }
    },{width: 1,name: "Citilink In-Flight App",
        type: "Prototype",
        year: 2014,
        images: {
            png: './images/citilink.png'
        },
        color: {
            primary: '#028540',
            text:'#00F900'
        }
    },{width: 1,name: "Luminara",
        type: "Web Design",
        year: 2024,
        images: {
            png: './images/luminara.png'
        },
        color: {
            primary: '#460B61',
            text:'#FF40FF'
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
    },{width: 1,name: "Parlemen Muda",
        type: "Brand Identity",
        year: 2024,
        images: {
            png: './images/parlemenmuda.jpg'
        },
        color: {
            primary: '#A60F01',
            text:'#FFFFFF'
        }
    },{width: 1,name: "StudentsxCEOs",
        type: "Brand Identity",
        year: 2024,
        images: {
            png: './images/sxc.png'
        },
        color: {
            primary: '#090A6C',
            text:'#FFFFFF'
        }
    },{width: 1,name: "Tech Talk",
        type: "Brand Identity",
        year: 2011,
        images: {
            png: './images/techtalk.png'
        },
        color: {
            primary: '#13889D',
            text:'#F9CF55'
        }
    },{width: 3,name: "Photography",
        type: "",
        year: 2024,
        images: {
            full: './images/photography/photo'+(Math.floor(Math.random()*14)+1)+'.jpg'
        },
        color: {
            primary: 'grey',
            text:'#FFFFFF'
        }
    },{width: 2,name: "Labs Project",
        type: "Brand Identity",
        year: 2010,
        images: {
            full: './images/labsproject.png'
        },
        color: {
            primary: '#FFA723',
            text:'#FFFB00'
        }
    },{width: 2,name: "DUB:LIN",
        type: "Videography",
        year: 2024,
        images: {
            full: './images/dub-lin.png'
        },
        color: {
            primary: 'dark grey',
            text:'white'
        }
    },{width: 2,name: "Icarus",
        type: "Game",
        year: 2024,
        images: {
            full: './images/icarus.png'
        },
        color: {
            primary: 'black',
            text:'white'
        }
    },{width: 2,name: "Colors of India",
        type: "Videography",
        year: 2014,
        images: {
            full: './images/colorsofindia.png',
            //video: './images/colorsofindia.mp4'
        },
        color: {
            primary: 'black',
            text:'white'
        }
    }
];

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}
data = shuffle(mydata);  

function createDiv (item) {
    const element = document.createElement("div");
    switch (item.width) {
        case 1:
            element.setAttribute("class", "items square");
            break;
        case 2:
            element.setAttribute("class", "items long");
            break;
        case 3:
            element.setAttribute("class", "items tall");
            break;
        default:
            element.setAttribute("class", "items square");
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
    if (item.images.video) {
        const vid = document.createElement('video');
        const src = document.createElement('source');
        vid.setAttribute("autoplay","");
        vid.setAttribute("loop","");
        vid.setAttribute("muted","");
        src.setAttribute("src",item.images.video);
        src.setAttribute("type","video/mp4");
        vid.appendChild(src);
        content.appendChild(vid);
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
    for (const el of elements) {
        parent.appendChild(createDiv(el));
    }
    return parent;
}


function findWidthNotOne (data,w) {
    return (data.width != w);
}

function WidthSort (a,b) {
    return (b.width - a.width);
}



const collection = document.getElementById("collection");

let elements = [];
let x;
while (data.length) {
    //add first square
    elements.push(data.shift());
    console.log('1st');
    console.log(elements[0]);
    if (data.length) { //can add second square
        let idx = data.findIndex((el)=>(el.width==elements[0].width)); //find another square with the same width

        if (idx!=-1) { //found the same square
            x = data.splice(idx,1)[0];
            elements.push(x);
            console.log('2nd');
            console.log(elements[1]);
            //find third square?
            if (elements[0].width==1) { //two little square
                idx = data.findIndex(function(el){return (el.width!=1);}); //find a big square
                if (idx!=-1) { //found a big square
                    x = data.splice(idx,1)[0];
                    elements.push(x);
                    console.log('3rd');
                    console.log(elements[2]);
                    collection.appendChild(wrapDiv(elements,(elements[2].width == 3 ? 'vertical':'horizontal')));
                    console.log('bbP');
                } else { //no big square, all little square left
                    if (data.length>0) {
                        x = data.shift();
                        elements.push(x);
                        console.log('3rd');
                        console.log(elements[2]); // third little square
                        if (data.length>0) { //there are more little square 
                            x = data.shift();
                            elements.push(x);
                            console.log('3rd');
                            console.log(elements[3]); // fourth little square
                        }
                    }
                    console.log('bbbb');
                    collection.appendChild(wrapDiv(elements,'horizontal')); 
                }
            } else { //good day
                console.log('PP');
                collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':'horizontal')));
            }
        } else { //no same square left
            if (elements[0].width!=1) { //if the only big square left
                //can we find two little square?
                idx = data.findIndex(function(el){return (el.width==1);}); //find a little square
                if (idx!=-1) { //found lil square (2nd)
                    x = data.splice(idx,1)[0];
                    elements.push(x);
                    console.log('2nd');
                    console.log(elements[1]); //second little square
                    if (data.length>0) { //try to find third little square
                        idx = data.findIndex(function(el){return (el.width==1);}); //find a little square
                        if (idx!=-1) { //found lil square (3rd)
                            x = data.splice(idx,1)[0];
                            elements.push(x);
                            console.log('3rd');
                            console.log(elements[2]); //third little square
                            collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':'horizontal')));
                            console.log('Ppp');
                        } else {
                            elements[1].width = elements[0].width; //extend the second square to match
                            collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':'horizontal')));
                            console.log('P$');   
                        }
                    } else { //no lil square left...
                        //elements[1].width = elements[0].width;
                        collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':'horizontal')));
                        console.log('P$');
                    }
                } else { //the rest is the other big square
                    //pop back the thing
                    if (data.length >= 2) {
                        console.log('reject');
                        console.log(elements[0]);
                        data.push(elements[0]);
                    } else {
                        collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':'horizontal')));
                        elements[0] = data.shift();
                        collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':'horizontal')));
                    }
                }
            } else { // the only lil square left
                if (data.length <2) {
                    x = data.shift();
                    elements.push(x);
                    console.log('2nd');
                    console.log(elements[1]);
                    collection.appendChild(wrapDiv(elements,(elements[1].width == 3 ? 'vertical':'horizontal')));
                    console.log('Pp');
                } else {
                    console.log('reject');
                    console.log(elements[0]);
                    data.push(elements[0]);
                }
            }
        }
    } else {
        collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':'horizontal')));
        console.log('?');
    };
    elements = [];
}


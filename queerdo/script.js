
function getimagelink(string) {
    return "https://imagedelivery.net/nXoGYFHrWSV5zhQn3UrkkA/"+string+"/public";
}
function getvideolink(string) {
    return "https://customer-xh7nlekwyfir3ntv.cloudflarestream.com/"+ string +"/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-xh7nlekwyfir3ntv.cloudflarestream.com%2Ff8c6c06afe0ea595172b37650e0ab9dd%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false";
}
var mydata = [
    {featured:1,width:3,hover:"",name: "Queerdo",
        type: "Art Performance",
        url:["https://youtu.be/_vhjyShgjfE?si=JL1r4uoF3y4anzp0&t=5770",'Watch '],
        year: 2023,
        images: {
            full: 'f01e42b1-d87e-4e67-0e07-53092e759000',
            video: '968ba6fa9841999e88ec39df9bc9e6e1'},
        color: {
            primary: '#590D31',
            text:'#FF40FF'
        }
    },
    {featured:1,width:3,hover:"",name: "Queerdo",
        type: "Art Performance",
        url:["https://youtu.be/_vhjyShgjfE?si=JL1r4uoF3y4anzp0&t=5770",'Watch '],
        year: 2023,
        images: {
            full: 'f01e42b1-d87e-4e67-0e07-53092e759000',
            video: '968ba6fa9841999e88ec39df9bc9e6e1'},
        color: {
            primary: '#590D31',
            text:'#FF40FF'
        }
    },
    {featured:1,width:3,hover:"",name: "Queerdo",
        type: "Art Performance",
        url:["https://youtu.be/_vhjyShgjfE?si=JL1r4uoF3y4anzp0&t=5770",'Watch '],
        year: 2023,
        images: {
            full: 'f01e42b1-d87e-4e67-0e07-53092e759000',
            video: '968ba6fa9841999e88ec39df9bc9e6e1'},
        color: {
            primary: '#590D31',
            text:'#FF40FF'
        }
    },
    {featured:1,width:3,hover:"",name: "Queerdo",
        type: "Art Performance",
        url:["https://youtu.be/_vhjyShgjfE?si=JL1r4uoF3y4anzp0&t=5770",'Watch '],
        year: 2023,
        images: {
            full: 'f01e42b1-d87e-4e67-0e07-53092e759000',
            video: '968ba6fa9841999e88ec39df9bc9e6e1'},
        color: {
            primary: '#590D31',
            text:'#FF40FF'
        }
    },
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
function createDiv (item) {
    const element = document.createElement("div");
    const content = document.createElement("div");
    content.setAttribute("class", "content");
    
    switch (item.width) {
        case 1:
            element.setAttribute("class", "items square "+item.hover);
            break;
        case 2:
            element.setAttribute("class", "items long "+item.hover);
            break;
        case 3:
            element.setAttribute("class", "items tall "+item.hover);
            break;
        case 4:
            element.setAttribute("class", "items portrait"+item.hover);
            break;
        case 5:
            element.setAttribute("class", "items big "+item.hover);
            break;
        default:
            element.setAttribute("class", "items square "+item.hover);
    }

    const pname = document.createElement("span");
    pname.innerHTML = item.name;
    if (item.type) {
        const ptype = document.createElement("span");
        ptype.setAttribute("class","type");
        ptype.innerHTML = item.type;
        content.appendChild(ptype);
        pname.setAttribute("class","name");
    } else {
        pname.setAttribute("class","name title");
    }
    content.appendChild(pname);

    

    if (item.images) {
        if (item.images.full) {
            content.style.backgroundImage="url("+getimagelink(item.images.full)+")";
        }
        if (item.images.png) {
            const img = document.createElement('img');
            img.setAttribute("src",getimagelink(item.images.png));
            if (item.width>1) {
                img.setAttribute("class","prototype");
            }
            content.appendChild(img);
        }
        if (item.images.video) {
            const vid = document.createElement('iframe');
            vid.setAttribute("loading","lazy");
            vid.setAttribute("allowfullscreen","true");
            vid.setAttribute("allow","accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;");
            //vid.setAttribute("style","border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;");
            vid.setAttribute("src",getvideolink(item.images.video));
            content.appendChild(vid);
        }

    }
    
    if (item.url) {
        const link = document.createElement('a');
        link.setAttribute("href",item.url[0]);
        link.setAttribute("target","_blank");
        link.innerHTML = item.url[1];
        const i = document.createElement('i');
        i.setAttribute("class","fa-solid fa-arrow-up-right-from-square");
        link.append(i);
        link.style.color=item.color.primary;
        const span = document.createElement('span');
        span.setAttribute("class",'url');
        link.style.backgroundColor=item.color.text;
        span.appendChild(link);
        content.appendChild(span);
    }
    if (item.color) {
        content.style.backgroundColor=item.color.primary;
        element.style.color=item.color.text;
    }
    element.appendChild(content);
    //element.style.boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 0px 1px"
    
    return element;
}
function wrapDiv (elements,flexdir) {
    const parent = document.createElement('div');
    parent.setAttribute('class',"group "+flexdir);

    console.log('wrapDiv for');
    console.log(elements);
    
    elements = elements.sort((widthIdx(elements,4)>=0)?WidthSortDesc:(Math.random()>=.5?WidthSortDesc:WidthSort));
    
    for (const el of elements) {
        parent.appendChild(createDiv(el));    
        console.log(el);
    }
    return parent;
}
function findWidthNotOne (data,w) {
    return (data.width != w);
}
function WidthSort (a,b) {
    return (b.width - a.width);
}
function WidthSortDesc (a,b) {
    return (a.width - b.width);
}
function widthFound (data,width) {
    return ((data.findIndex((el)=>(el.width==width)))!=-1);
}
function widthIdx (data,width) {
    return data.findIndex((el)=>(el.width==width));
}
function generate (data,collection) {
    let elements = [];
    let x;
    let idx;
        //add first square
        elements.push(data.shift());
        console.log('1st');
        console.log(elements[0]);
        if ((data.length) && (elements[0].width!=5)) { //can add second square
            //let idx = data.findIndex((el)=>(el.width==elements[0].width)); //find another square with the same width
            if ((widthFound(data,elements[0].width))&&(elements[0].width<4)) { //found the same square
                x = data.splice(widthIdx(data,elements[0].width),1)[0];
                elements.push(x);
                console.log('2nd');///////////
                console.log(elements[1]);
                //find third square?
                if (elements[0].width==1) { //two little square
                    idx = data.findIndex(function(el){return ((el.width!=1)&&(el.width!=5));}); //find a big square
                    if (idx!=-1) { //found a big square
                        x = data.splice(idx,1)[0];
                        elements.push(x);
                        console.log('3rd');///////////
                        console.log(elements[2]);
                        collection.appendChild(wrapDiv(elements,(elements[2].width == 3 ? 'vertical':(elements[2].width == 4 ? 'vertical':'horizontal'))));
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
                    collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':(elements[0].width == 4 ? 'vertical':'horizontal'))));
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
                                collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':(elements[0].width == 4 ? 'vertical':'horizontal'))));
                                console.log('Ppp');
                            } else {
                                elements[1].width = elements[0].width; //extend the second square to match
                                collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':(elements[0].width == 4 ? 'vertical':'horizontal'))));
                                console.log('P$');   
                            }
                        } else { //no lil square left...
                            //elements[1].width = elements[0].width;
                            collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':(elements[0].width == 4 ? 'vertical':'horizontal'))));
                            console.log('P$');
                        }
                    } else { //the rest is the other big square
                        //pop back the thing
                        if (data.length >= 2) {
                            console.log('reject');
                            console.log(elements[0]);
                            data.push(elements[0]);
                        } else {
                            collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':(elements[0].width == 4 ? 'vertical':'horizontal'))));
                            elements[0] = data.shift();
                            collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':(elements[0].width == 4 ? 'vertical':'horizontal'))));
                        }
                    }
                } else { // the only lil square left
                    if (data.length <2) {
                        x = data.shift();
                        elements.push(x);
                        console.log('2nd');
                        console.log(elements[1]);
                        collection.appendChild(wrapDiv(elements,(elements[1].width == 3 ? 'vertical':(elements[1].width == 4 ? 'vertical':'horizontal'))));
                        console.log('Pp');
                    } else {
                        console.log('reject');
                        console.log(elements[0]);
                        data.push(elements[0]);
                    }
                }
            }
        } else {
            collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':(elements[0].width == 4 ? 'vertical':'horizontal'))));
            console.log('?');
        };
    
}
function generate2 (data,collection) {
    console.log('gen2');
    let elements = [];
    let x;
        //add first square
        elements.push(data.shift());
        console.log('1st');
        console.log(elements[0]);

        if ((data.length)&&(elements[0].width!=5)) { //can add more square
            if (elements[0].width!=1) {
                //find small square
                if (widthIdx(data,1)!=-1) { //found small square
                    x = data.splice(widthIdx(data,1),1)[0];
                    if (widthIdx(data,1)!=-1) { //found another small square
                        elements.push(x);
                        x = data.splice(widthIdx(data,1),1)[0];
                        elements.push(x);
                        collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':(elements[0].width == 4 ? 'vertical':'horizontal'))));
                    } else if (elements[0].width<4) { //cant find another small square
                        if (widthIdx(data,elements[0].width)!=-1) {
                            x = data.splice(widthIdx(data,elements[0].width),1)[0];
                            elements.push(x);
                            collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':'horizontal')));
                        } else {
                            data.push(elements[0]);
                        }
                    } else {
                        data.push(elements[0]);
                    }
                }
            } else {
                data.push(elements[0]);
            }
        } else {
            collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':(elements[0].width == 4 ? 'vertical':'horizontal'))));
            console.log('?');
        };
    
}
function generate3 (data,collection) {
    // create group 2x3
    // pick one item from data + find another with the same length
    // 
}


let featured = mydata.filter((data) => (data.featured==1));
let data = mydata.filter((data) => (data.featured==0));

featured.unshift({featured:1,width: 3,name: "",
    type: "",
    year: 1991,
    images: {
        full: '7033c319-fd2d-420b-1e6e-55f0e0a47c00',
    },
    color: {
        primary: 'white',
        text:'black'
    }
});

data = shuffle(data);/*
featured.unshift({featured:1,width: 2,name: "",
    type: "",
    year: 1,
    images: {
        full: '94a302cf-fea0-4cf0-000f-a750fa432700',
    },
    color: {
        primary: '#D2D5D4',
        text:'black'
    }
});*/
featured = shuffle(featured);
const publish = featured.concat(data);
/*publish.unshift({featured:1,width:1,hover:"free",name: "Hello World"
});*/

while (publish.length) {
    generate2(publish,collection);
    generate(publish,collection);
    generate(publish,collection);
}



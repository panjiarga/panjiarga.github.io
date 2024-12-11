
function getimagelink(string) {
    return "https://imagedelivery.net/nXoGYFHrWSV5zhQn3UrkkA/"+string+"/public";
}
function getvideolink(string) {
    return "https://customer-xh7nlekwyfir3ntv.cloudflarestream.com/"+ string +"/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-xh7nlekwyfir3ntv.cloudflarestream.com%2Ff8c6c06afe0ea595172b37650e0ab9dd%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false";
}
var mydata = [
    {featured:1,width:2,name: "Maka Motors",
        type: "Brand Identity",
        year: 2023,
        images: {
            full: 'b48dfc74-04fb-476e-5ec8-acf6da4def00'
        },
        color: {
            primary: '#55CCFF',
            text:'black'
        }
    },{featured:0,width:1,name: "Maka Motors",
        type: "Brand Art",
        year: 2023,
        images: {
            png: '0e7670dd-4e6f-4532-0195-dccc32bed600'
        },
        color: {
            primary: '#111111',
            text:'#BFAC85'
        }
    },{featured:1,width:3,name: "Queerdo",
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
    },{featured:1,width: 2,name: "GO-BOX",
        type: "Brand Direction",
        year: 2016,
        images: {
            full: '4017d7f1-6c38-4bd4-f44b-0ec38c630c00'
        },
        color: {
            primary: '#F2CB03',
            text:'#472B2F'
        }
    },{featured:1,width: 3,name: "GO-BOX",
        type: "Brand Direction",
        year: 2016,
        images: {
            png: 'c9dd5876-bbb6-40a8-ebe2-5d7b52ba2400'
        },
        color: {
            primary: '#45282E',
            text:'#F2CB03'
        }
    },{featured:0,width: 1,name: "Ganesha Exhibition Program",
        type: "Brand Identity",
        year: 2013,
        images: {
            png: 'cdac8cd7-0429-456a-e52d-c86cd958fe00'
        },
        color: {
            primary: '#203B8C',
            text:'white'
        }
    },{featured:1,width: 2,name: "Ganesha Film Festival",
        type: "Brand Direction",
        year: 2013,
        images: {
            full: 'a7f69b8d-5d3f-42e1-cadd-e29d1f39f200'
        },
        color: {
            primary: 'white',
            text:'red'
        }
    },{featured:0,width: 2,name: "Maka Motors",
        type: "Visual Graphic",
        year: 2023,
        images: {
            png: '1f18f4b2-8208-4380-bab1-98740457ce00'
        },
        color: {
            primary: '#000',
            text:'#55CCFF'
        }
    },{featured:0,width: 1,name: "Maka Motors",
        type: "Visual Graphic",
        year: 2023,
        images: {
            png: 'd493861a-4e29-4164-d0fd-814a9a047000'
        },
        color: {
            primary: '#55CCFF',
            text:'black'
        }
    },{featured:1,width: 1,name: "Circular Maze Generator",
        type: "Code",
        year: 2024,
        images: {
            full: '406efc56-f9e2-4f7d-33bb-ebb307a0ef00'
        },
        color: {
            primary: 'black',
            text:'white'
        }
    },{featured:0,width: 1,name: "Circular Maze Generator",
        type: "Code",
        year: 2024,
        images: {
            full: '171aa2e2-1636-409e-2fc6-16243fdc4500'
        },
        color: {
            primary: 'white',
            text:'black'
        }
    },{featured:0,width: 1,name: "Bioskop Kampus",
        type: "Brand Identity",
        year: 2013,
        images: {
            png: 'c66f954e-8b2a-4233-dab6-51dab4bb4e00'
        },
        color: {
            primary: '#111',
            text:'gold'
        }
    },{featured:0,width: 1,name: "Citilink In-Flight App",
        type: "Prototype",
        year: 2014,
        images: {
            png: '886f651d-2a57-4495-d1b8-0f0e6d2d8600'
        },
        color: {
            primary: '#028540',
            text:'#00F900'
        }
    },{featured:0,width: 1,name: "Luminara",
        type: "Web Design",
        year: 2024,
        images: {
            png: 'a332ef3b-3a9a-43db-6990-9d29c5105700'
        },
        color: {
            primary: '#460B61',
            text:'#FF40FF'
        }
    },{featured:1,width: 3,name: "Cineclub",
        type: "Mobile App",
        year: 2024,
        images: {
            png: '35ff615b-5dd6-4ac8-ef64-534de8d44200'
        },
        color: {
            primary: '#B92981',
            text:'#FFCC19'
        }
    },{featured:-1,width: 1,name: "Parlemen Muda",
        type: "Brand Identity",
        year: 2024,
        images: {
            png: '89a3c1a1-aaf7-40c4-4586-e29f6b899400'
        },
        color: {
            primary: '#A60F01',
            text:'#FFFFFF'
        }
    },{featured:0,width: 1,name: "StudentsxCEOs",
        type: "Brand",
        year: 2024,
        images: {
            png: '33b73cec-dc41-4260-9dd9-080c2bb41900'
        },
        color: {
            primary: '#011279',
            text:'#FFFFFF'
        }
    },{featured:-1,width: 1,name: "StudentsxCEOs",
        type: "Brand",
        year: 2024,
        images: {
            png: 'f74ac92e-cf6c-4867-a4d6-782448511a00'
        },
        color: {
            primary: '#011279',
            text:'#FFFFFF'
        }
    },{featured:-1,width: 1,name: "Tech Talk",
        type: "Brand Identity",
        year: 2011,
        images: {
            png: '8b8fbe5b-8e6e-4839-449e-5c38ab0d1600'
        },
        color: {
            primary: '#13889D',
            text:'#F9CF55'
        }
    },{featured:-1,width: 1,name: "Tech Talk",
        type: "Brand Identity",
        year: 2011,
        images: {
            png: 'd8c52085-04ae-4459-df75-2018ae253e00'
        },
        color: {
            primary: '#13889D',
            text:'#F9CF55'
        }
    },{featured:0,width: 2,name: "Labs Project",
        type: "Brand Identity",
        year: 2010,
        images: {
            full: '106eb7dd-9890-46db-baca-4f913df76c00'
        },
        color: {
            primary: '#FFA723',
            text:'#FFFB00'
        }
    },{featured:1,width: 2,name: "DUB:LIN",
        type: "Videography",
        year: 2024,
        images: {
            full: 'dab8e49d-53f0-4428-f7e7-df5618509500',
            video:'821e0e2b184ae59391213ffb9a33419d'
        },
        color: {
            primary: 'dark grey',
            text:'white'
        }
    },{featured:1,width: 2,name: "Icarus",
        type: "Game",
        year: 2024,
        images: {
            full: 'e21acc7d-e39a-45f8-a7f1-e78bda685700'
        },
        color: {
            primary: 'black',
            text:'white'
        }
    },{featured:0,width: 2,name: "Colors of India",
        type: "Videography",
        year: 2014,
        images: {
            full: '5d42d420-ed23-4777-270a-5bc207200600',
            video: 'ca8c10285da6302edc01b458ace0e562'
        },
        color: {
            primary: 'black',
            text:'white'
        }
    },{featured:1,width: 1,name: "",
        type: "Passport Cover",
        year: 1,
        images: {
            full: '0b609396-607b-4225-a0b6-7e8c3ba15100',
        },
        color: {
            primary: 'transparent',
            text:'#222'
        }
    },{featured:0,width: 1,name: "Ganadipa Satyasatama",
        type: "Org Emblem",
        year: 2009,
        images: {
            full: '3504a7af-077a-44db-6014-d4f69f428f00',
        },
        color: {
            primary: 'dark grey',
            text:'white'
        }
    },{featured:1,width: 4,name: "Plan(e)t",
        type: "Illustration",
        year: 2011,
        images: {
            full: '4dfd3104-00b2-429d-8dd9-51bee3c01800',
        },
        color: {
            primary: 'white',
            text:'black'
        }
    },{featured:-1,width: 3,name: "",
        type: "Illustration",
        year: 2011,
        images: {
            full: 'c1d7fc6f-1087-4465-7ed9-eb3ebedc7c00',
        },
        color: {
            primary: 'white',
            text:'black'
        }
    },{featured:1,width: 3,name: "Down To Earth",
        type: "Illustration",
        year: 2008,
        images: {
            png: 'f625065c-60ee-4a85-fabd-b200a136c900',
        },
        color: {
            primary: 'white',
            text:'black'
        }
    },{featured:0,width: 2,name: "Blazing Virgins",
        type: "Illustration",
        year: 2008,
        images: {
            full: 'd54e1969-2949-47ec-5342-14aefec1e700',
        },
        color: {
            primary: 'black',
            text:'white'
        }
    },{featured:0,width: 1,name: "Labs Recital",
        type: "Brand Identity",
        year: 2008,
        images: {
            png: '2e3098eb-cb35-4b8f-9747-4b997202f100',
        },
        color: {
            primary: '#111',
            text:'gold'
        }
    },{featured:-1,width: 2,name: "Rasa",
        type: "Short Film",
        url: ["https://www.youtube.com/watch?v=xH3r5FV-fS4",'Watch '],
        year: 2011,
        images: {
            full: 'a921d8e1-4390-49f2-c046-a0adf93cf200',
        },
        color: {
            primary: 'black',
            text:'white'
        }
    },{featured:1,width: 2,name: "Wingman",
        type: "Short Film",
        url: ["https://youtu.be/YEFw8J220ME",'Watch '],
        year: 2024,
        images: {
            png: 'f1f31877-4774-440e-28ec-637f52448a00',
        },
        color: {
            primary: 'black',
            text:'white'
        }
    },
];
var photos = [
    {id:1,url:'f24fad38-fac2-4639-f643-975ee3e4e500',title:'Phoenix Park, Dublin, Ireland'},
    {id:2,url:'e8e7b494-aa35-4db1-64d1-fa92ee9c1e00',title:'Amalfi, Italy'},
    {id:3,url:'5a9e66a4-8258-47a2-8104-24ea7a903500',title:'Herbert Park, Dublin, Ireland'},
    {id:4,url:'089bc93b-ab22-45d8-b717-1321517c2300',title:'Porto, Portugal'},
    {id:5,url:'ad7adf98-f4fb-4e06-42c4-3e7830be4f00',title:'Cappadocia, Turkey'},
    {id:6,url:'7819879d-9d18-4c2a-9a95-b2a1c57b2600',title:'Disneyland, California, USA'},
    {id:7,url:'377d4b3e-55ec-4f2a-349f-a0820fc99600',title:'Palawan, The Philippines'},
    {id:8,url:'e429fb6f-ff97-4e7b-1d5f-a166e3cc7f00',title:'Cappadocia, Turkey'},
    {id:9,url:'ab5d5b22-757c-402a-b0f4-fea132a9b500',title:'Uluwatu Kecak Dance, Bali, Indonesia'},
    {id:10,url:'ea87ae04-8e1f-4c96-baee-23a843ffb600',title:'Seville, Spain'},
    {id:11,url:'91c24e0e-0385-4d7a-db02-e41a5cbffe00',title:'Paris, France'},
    {id:12,url:'966e5a98-c5d5-406e-8344-80de0c3adf00',title:'Goreme, Turkey'},
    {id:13,url:'f364f072-e360-4c6d-5338-3501b071a900',title:'Musée d\'Orsay, Paris, France'},
    {id:14,url:'9753bc42-b7a0-4ed0-2cc8-dc6805cd4000',title:'New York City, USA'},
    {id:15,url:'6c085d4b-7ffb-4f65-d110-fb79175f9c00',title:'Dubrovnik, Croatia'},
]

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
            element.setAttribute("class", "items square");
            break;
        case 2:
            element.setAttribute("class", "items long");
            break;
        case 3:
            element.setAttribute("class", "items tall");
            break;
        case 4:
            element.setAttribute("class", "items tall free");
            break;
        case 5:
            element.setAttribute("class", "items big");
            break;
        default:
            element.setAttribute("class", "items square");
    }

    const pname = document.createElement("span");
    pname.setAttribute("class","name");
    pname.innerHTML = item.name;
    content.appendChild(pname);

    const ptype = document.createElement("span");
    ptype.setAttribute("class","type");
    ptype.innerHTML = item.type;
    content.appendChild(ptype);

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

    content.style.backgroundColor=item.color.primary;
    element.appendChild(content);
    element.style.color=item.color.text;
    //element.style.boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 0px 1px"
    
    return element;
}
function wrapDiv (elements,flexdir) {
    const parent = document.createElement('div');
    parent.setAttribute('class',"group "+flexdir);

    console.log('wrapDiv for');
    console.log(elements);
    elements = elements.sort((Math.random()>=.5?WidthSortDesc:WidthSort));

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
function generate (data,collection) {
    let elements = [];
    let x;
        //add first square
        elements.push(data.shift());
        console.log('1st');
        console.log(elements[0]);
        if (data.length) { //can add second square
            let idx = data.findIndex((el)=>(el.width==elements[0].width)); //find another square with the same width
            if ((idx!=-1)) { //found the same square
                x = data.splice(idx,1)[0];
                elements.push(x);
                console.log('2nd');
                console.log(elements[1]);
                //find third square?
                if (elements[0].width==1) { //two little square
                    idx = data.findIndex(function(el){return ((el.width!=1)&&(el.width!=4));}); //find a big square
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
            collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':(elements[0].width == 4 ? 'vertical':'horizontal'))));
            console.log('?');
        };
    
}
function findSquare (data,width) {
    let idx = data.findIndex((el)=>(el.width==width));
    return idx;
}
function generate2 (data,collection) {
    let elements = [];
    let x;
        //add first square
        elements.push(data.shift());
        console.log('1st');
        console.log(elements[0]);

        if (data.length) { //can add more square
            if ((elements[0].width==2) || (elements[0].width==3)) {
                //find small square
                if (findSquare(data,1)!=-1) { //found small square
                    x = data.splice(findSquare(data,1),1)[0];
                    if (findSquare(data,1)!=-1) { //found another small square
                        elements.push(x);
                        x = data.splice(findSquare(data,1),1)[0];
                        elements.push(x);
                        collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':'horizontal')));
                    } else { //cant find another small square
                        data.push(elements[1]);
                        if (findSquare(data,elements[0].width)!=-1) {
                            x = data.splice(findSquare(data,elements[0].width),1)[0];
                            elements.push(x);
                            collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':'horizontal')));
                        } else {
                            data.push(elements[0]);
                        }
                    }
                }
            }
        } else {
            collection.appendChild(wrapDiv(elements,(elements[0].width == 3 ? 'vertical':(elements[0].width == 4 ? 'vertical':'horizontal'))));
            console.log('?');
        };
    
}


// create photo widget 
const collection = document.getElementById("collection");
let photoarray = [];
let x;
while (photoarray.length<6) {
    x = Math.floor(Math.random()*14)+1;
    if (!photoarray.includes(x)) {
        photoarray.push(x);
    }
}
x = 0;
let w = 1;
for (const idx of photoarray) {
    w = (w==3?1:3);
    x++;
    x = (x==1?0:1);
    mydata.push({featured:1,width:w,name: photos[idx].title,
        type: "Photography",
        year: 2024,
        images: {
           full: photos[idx].url
        },
        color: {
            primary: 'white',
            text:'#FFFFFF'
        }
    });
}

let featured = mydata.filter((data) => (data.featured==1));
let data = mydata.filter((data) => (data.featured==0));
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

publish.unshift({featured:1,width: 3,name: "",
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
generate2(publish,collection);

generate(publish,collection);
generate(publish,collection);

generate2(publish,collection);
generate(publish,collection);
generate(publish,collection);


while (publish.length) {
    generate(publish,collection);
    generate2(publish,collection);
}



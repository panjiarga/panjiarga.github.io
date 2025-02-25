
function getimagelink(string) {
    return "https://imagedelivery.net/nXoGYFHrWSV5zhQn3UrkkA/"+string+"/public";
}
function getvideolink(string) {
    return "https://customer-xh7nlekwyfir3ntv.cloudflarestream.com/"+ string +"/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-xh7nlekwyfir3ntv.cloudflarestream.com%2Ff8c6c06afe0ea595172b37650e0ab9dd%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false";
}
var mydata = [
    {featured:1,width:2,hover:"",name: "Maka Motors",
        type: "Brand Identity",
        year: 2023,
        images: {
            full: 'b48dfc74-04fb-476e-5ec8-acf6da4def00'
        },
        color: {
            primary: '#55CCFF',
            text:'black'
        }
    },{featured:1,width:1,hover:"",name: "Maka Motors",
        type: "Brand Visual",
        year: 2023,
        images: {
            png: '0e7670dd-4e6f-4532-0195-dccc32bed600'
        },
        color: {
            primary: '#111111',
            text:'#BFAC85'
        }
    },{featured:0,width:2,hover:"",name: "Maka Motors",
        type: "Brand Visual",
        year: 2023,
        images: {
            png: '1f18f4b2-8208-4380-bab1-98740457ce00'
        },
        color: {
            primary: '#000',
            text:'#55CCFF'
        }
    },{featured:1,width:1,hover:"",name: "Maka Motors",
        type: "Brand Visual",
        year: 2023,
        images: {
            png: 'd493861a-4e29-4164-d0fd-814a9a047000'
        },
        color: {
            primary: '#55CCFF',
            text:'black'
        }
    },{featured:1,width:3,hover:"",name: "Queerdo",
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
    },{featured:1,width:2,hover:"",name: "GO-BOX",
        type: "Brand Direction",
        year: 2016,
        images: {
            full: '4017d7f1-6c38-4bd4-f44b-0ec38c630c00'
        },
        color: {
            primary: '#F2CB03',
            text:'#472B2F'
        }
    },{featured:1,width:3,hover:"",name: "GO-BOX",
        type: "Brand Direction",
        year: 2016,
        images: {
            png: 'c9dd5876-bbb6-40a8-ebe2-5d7b52ba2400'
        },
        color: {
            primary: '#45282E',
            text:'#F2CB03'
        }
    },{featured:-1,width:1,hover:"",name: "Ganesha Exhibition Program",
        type: "Brand Identity",
        year: 2013,
        images: {
            png: 'cdac8cd7-0429-456a-e52d-c86cd958fe00'
        },
        color: {
            primary: '#203B8C',
            text:'white'
        }
    },{featured:0,width:2,hover:"",name: "Ganesha Film Festival",
        type: "Brand Direction",
        year: 2013,
        images: {
            full: 'a7f69b8d-5d3f-42e1-cadd-e29d1f39f200'
        },
        color: {
            primary: 'white',
            text:'red'
        }
    },{featured:0,width:1,hover:"",name: "Circular Maze Generator",
        type: "Code",
        year: 2024,
        images: {
            full: '406efc56-f9e2-4f7d-33bb-ebb307a0ef00'
        },
        color: {
            primary: 'black',
            text:'white'
        }
    },{featured:0,width:1,hover:"",name: "Circular Maze Generator",
        type: "Code",
        year: 2024,
        images: {
            full: '171aa2e2-1636-409e-2fc6-16243fdc4500'
        },
        color: {
            primary: 'white',
            text:'black'
        }
    },{featured:-1,width:1,hover:"",name: "Bioskop Kampus",
        type: "Brand Identity",
        year: 2013,
        images: {
            png: 'c66f954e-8b2a-4233-dab6-51dab4bb4e00'
        },
        color: {
            primary: '#111',
            text:'gold'
        }
    },{featured:-1,width:1,hover:"",name: "Citilink In-Flight App",
        type: "Prototype",
        year: 2014,
        images: {
            png: '886f651d-2a57-4495-d1b8-0f0e6d2d8600'
        },
        color: {
            primary: '#028540',
            text:'#00F900'
        }
    },{featured:0,width:1,hover:"",name: "Luminara",
        type: "Web Design",
        year: 2024,
        images: {
            png: 'a332ef3b-3a9a-43db-6990-9d29c5105700'
        },
        color: {
            primary: '#460B61',
            text:'#FF40FF'
        }
    },{featured:1,width:3,hover:"",name: "Cineclub",
        type: "Mobile App",
        year: 2024,
        images: {
            png: '35ff615b-5dd6-4ac8-ef64-534de8d44200'
        },
        color: {
            primary: '#B92981',
            text:'#FFCC19'
        }
    },{featured:-1,width:1,hover:"",name: "Parlemen Muda",
        type: "Brand Identity",
        year: 2024,
        images: {
            png: '89a3c1a1-aaf7-40c4-4586-e29f6b899400'
        },
        color: {
            primary: '#A60F01',
            text:'#FFFFFF'
        }
    },{featured:-1,width:1,hover:"",name: "StudentsxCEOs",
        type: "Brand",
        year: 2024,
        images: {
            png: '33b73cec-dc41-4260-9dd9-080c2bb41900'
        },
        color: {
            primary: '#011279',
            text:'#FFFFFF'
        }
    },{featured:-1,width:1,hover:"",name: "StudentsxCEOs",
        type: "Brand",
        year: 2024,
        images: {
            png: 'f74ac92e-cf6c-4867-a4d6-782448511a00'
        },
        color: {
            primary: '#011279',
            text:'#FFFFFF'
        }
    },{featured:-1,width:1,name: "Tech Talk",
        type: "Brand Identity",
        year: 2011,
        images: {
            png: '8b8fbe5b-8e6e-4839-449e-5c38ab0d1600'
        },
        color: {
            primary: '#13889D',
            text:'#F9CF55'
        }
    },{featured:-1,width:1,name: "Tech Talk",
        type: "Brand Identity",
        year: 2011,
        images: {
            png: 'd8c52085-04ae-4459-df75-2018ae253e00'
        },
        color: {
            primary: '#13889D',
            text:'#F9CF55'
        }
    },{featured:-1,width:2,hover:"",name: "Labs Project",
        type: "Brand Identity",
        year: 2010,
        images: {
            full: '106eb7dd-9890-46db-baca-4f913df76c00'
        },
        color: {
            primary: '#FFA723',
            text:'#FFFB00'
        }
    },{featured:1,width:2,hover:"",name: "DUB:LIN",
        type: "Videography",
        year: 2024,
        url:["https://www.instagram.com/reel/C8krlEksA9o/","Watch "],
        images: {
            full: 'dab8e49d-53f0-4428-f7e7-df5618509500',
            video:'821e0e2b184ae59391213ffb9a33419d'
        },
        color: {
            primary: 'dark grey',
            text:'white'
        }
    },{featured:1,width:2,hover:"",name: "Icarus",
        type: "Game",
        year: 2024,
        images: {
            full: 'e21acc7d-e39a-45f8-a7f1-e78bda685700'
        },
        color: {
            primary: 'black',
            text:'white'
        }
    },{featured:0,width:2,hover:"",name: "Colors of India",
        type: "Videography",
        year: 2014,
        url:["https://youtu.be/4N0OiFcL97M?si=pY3Iu3mHmN17CW4R","Watch "],
        images: {
            full: '5d42d420-ed23-4777-270a-5bc207200600',
            video: 'ca8c10285da6302edc01b458ace0e562'
        },
        color: {
            primary: 'black',
            text:'white'
        }
    },{featured:1,width:1,hover:"",name: "",
        type: "Passport Cover",
        year: 1,
        images: {
            full: '0b609396-607b-4225-a0b6-7e8c3ba15100',
        },
        color: {
            primary: 'transparent',
            text:'#222'
        }
    },{featured:-1,width:1,hover:"",name: "Ganadipa Satyasatama",
        type: "Org Emblem",
        year: 2009,
        images: {
            full: '3504a7af-077a-44db-6014-d4f69f428f00',
        },
        color: {
            primary: 'dark grey',
            text:'white'
        }
    },{featured:1,width:3,hover:"free",name: "Plan(e)t",
        type: "Illustration",
        year: 2011,
        images: {
            full: '4dfd3104-00b2-429d-8dd9-51bee3c01800',
        },
        color: {
            primary: '#00000000',
            text:'black'
        }
    },{featured:-1,width:3,hover:"",name: "",
        type: "Illustration",
        year: 2011,
        images: {
            full: 'c1d7fc6f-1087-4465-7ed9-eb3ebedc7c00',
        },
        color: {
            primary: 'white',
            text:'black'
        }
    },{featured:0,width:3,hover:"free",name: "Down To Earth",
        type: "Illustration",
        year: 2008,
        images: {
            png: 'f625065c-60ee-4a85-fabd-b200a136c900',
        },
        color: {
            primary: '#00000000',
            text:'black'
        }
    },{featured:0,width:2,hover:"",name: "Blazing Virgins",
        type: "Illustration",
        year: 2008,
        images: {
            full: 'd54e1969-2949-47ec-5342-14aefec1e700',
        },
        color: {
            primary: 'black',
            text:'white'
        }
    },{featured:-1,width:1,hover:"",name: "Labs Recital",
        type: "Brand Identity",
        year: 2008,
        images: {
            png: '2e3098eb-cb35-4b8f-9747-4b997202f100',
        },
        color: {
            primary: '#111',
            text:'gold'
        }
    },{featured:0,width:2,hover:"",name: "Rasa",
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
    },{featured:1,width:2,hover:"",name: "Wingman",
        type: "Short Film",
        url: ["https://youtu.be/YEFw8J220ME",'Watch '],
        year: 2024,
        images: {
            full: '5d4a441c-523c-401c-71fc-84cafcbc4800',
            video: '51b1d6d5f2d137ae77cfc2729ba2262b'
        },
        color: {
            primary: 'black',
            text:'white'
        }
    },{featured:1,width:1,hover:"",name: "",desc:"Persephone",
        type: "Poetry",
        year: 2024,
        images: {
            full: '2c7079cf-f4d8-4c0f-52e9-1a2054ff8f00',
        },
        color: {
            primary: 'white',
            text:'white'
        }
    },{featured:1,width:1,hover:"",name: "",desc:"atnight",
        type: "Poetry",
        year: 2024,
        images: {
            full: '38de464d-41bf-4b27-20bd-5504da961e00',
        },
        color: {
            primary: 'white',
            text:'white'
        }
    },{featured:1,width:1,hover:"",name: "",desc:"guitar",
        type: "Poetry",
        year: 2024,
        images: {
            full: 'a35ba3c5-8754-4187-3a85-1e6a9230f600',
        },
        color: {
            primary: 'white',
            text:'white'
        }
    },
];
var photos = [
    {id:1,url:'f24fad38-fac2-4639-f643-975ee3e4e500',title:'Phoenix Park, Dublin, Ireland',width:1},
    {id:2,url:'e8e7b494-aa35-4db1-64d1-fa92ee9c1e00',title:'Amalfi, Italy',width:3},
    {id:3,url:'5a9e66a4-8258-47a2-8104-24ea7a903500',title:'Herbert Park, Dublin, Ireland',width:3},
    {id:4,url:'089bc93b-ab22-45d8-b717-1321517c2300',title:'Porto, Portugal',width:3},
    {id:5,url:'ad7adf98-f4fb-4e06-42c4-3e7830be4f00',title:'Cappadocia, Turkey',width:3},
    {id:6,url:'7819879d-9d18-4c2a-9a95-b2a1c57b2600',title:'Disneyland, California, USA',width:3},
    {id:7,url:'377d4b3e-55ec-4f2a-349f-a0820fc99600',title:'Palawan, The Philippines',width:3},
    {id:8,url:'e429fb6f-ff97-4e7b-1d5f-a166e3cc7f00',title:'Cappadocia, Turkey',width:1},
    {id:9,url:'ab5d5b22-757c-402a-b0f4-fea132a9b500',title:'Uluwatu Kecak Dance, Bali, Indonesia',width:3},
    {id:10,url:'ea87ae04-8e1f-4c96-baee-23a843ffb600',title:'Seville, Spain',width:3},
    /*{id:11,url:'91c24e0e-0385-4d7a-db02-e41a5cbffe00',title:'Paris, France',width:3},*/
    {id:12,url:'966e5a98-c5d5-406e-8344-80de0c3adf00',title:'Goreme, Turkey',width:3},
    {id:13,url:'f364f072-e360-4c6d-5338-3501b071a900',title:'Musée d\'Orsay, Paris, France',width:3},
    {id:14,url:'9753bc42-b7a0-4ed0-2cc8-dc6805cd4000',title:'New York City, USA',width:3},
    {id:15,url:'6c085d4b-7ffb-4f65-d110-fb79175f9c00',title:'Dubrovnik, Croatia',width:3}
]

var instax = [
    {id:1,url:'d2f319fa-6031-4199-e261-3fb592520600',title:'',desc:'Paris, France'},
    {id:2,url:'f2cce737-28f4-479d-04ed-0c6aa2577e00',title:'',desc:'Santa Monica, USA'},
    {id:3,url:'0e27ad3f-4d5c-4af8-237c-a8b04d785600',title:'',desc:'Santorini, Greece'},
    {id:4,url:'bfe1b091-2af6-4abf-e694-2c67c4f9e200',title:'',desc:'Dubrovnik, Croatia'},
    {id:5,url:'fffbc987-b2b3-49cf-1be0-7e285bafb900',title:'',desc:'New York, USA'},
    {id:6,url:'15dd6aa1-1b84-49c7-91a3-51418ac49300',title:'',desc:'Yellow'},
    {id:7,url:'b5b7f9c7-3a41-42c2-248c-620ed801b000',title:'', desc:'Athens'},
    {id:8,url:'ab7731de-e5a2-4a72-adde-13b9ed329400',title:'', desc:'Inle Lake'},
    {id:9,url:'e5230bda-f7b5-45d5-8eed-a7894540ff00',title:'', desc:'Pena Palace'},
    {id:10,url:'a317746d-0bcd-4867-a4d6-22117415a300',title:'', desc:'Amalfi Coast'},
    {id:11,url:'cfa657d1-3d5e-4d53-5aa3-f5428a5c1f00',title:'', desc:'Boat'},
    {id:12,url:'19ae9bec-242d-4a72-e2bc-1373e52d5900',title:'', desc:'Malta'},
    /*{id:13,url:'a9afaa86-7694-45b3-964c-6231a4a39a00',title:'', desc:'Trees'},*/
    {id:14,url:'2b2f0d19-9432-44e2-1c63-53c23d6f2b00',title:'', desc:'Madrid Trees'},
    {id:15,url:'7a10e36f-9420-4950-58f1-b01807c1cb00',title:'', desc:'Prague'},
    {id:16,url:'b5e696bf-3f92-49db-1cbf-0a6bc4b72e00',title:'', desc:'Malta'},
    {id:17,url:'2b2f0d19-9432-44e2-1c63-53c23d6f2b00',title:'', desc:'Madrid Trees'}
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

// create photo widget 
const collection = document.getElementById("collection");
let photoarray = [];
let x;
while (photoarray.length<10) {
    x = Math.floor(Math.random()*14);
    if (!photoarray.includes(x)) {
        photoarray.push(x);
    }
}
x = 0;
let w ;
//w = (Math.floor(Math.random()*2)?5:3);
for (const idx of photoarray) {
    x = (x==1?0:1);
    w = (Math.floor(Math.random()*2)?1:3);
    console.log(photos[idx]+","+idx);
    mydata.push({featured:x,
        width:photos[idx].width,
        name:"",
        type: photos[idx].title,
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
photoarray=[];
while (photoarray.length<8) {
    x = Math.floor(Math.random()*14);
    if (!photoarray.includes(x)) {
        photoarray.push(x);
    }
}
x = 0;
for (const idx of photoarray) {
    x = (x==1?0:1);
    mydata.push({featured:x,width:1,type: instax[idx].desc,
        name: "",
        year: 2024,
        images: {
           full: instax[idx].url
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
/*publish.unshift({featured:1,width:1,hover:"free",name: "Hello World"
});*/
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


while (publish.length) {
    generate2(publish,collection);
    generate(publish,collection);
    generate(publish,collection);
}



let idx = -1;
const r = document.querySelector(':root');
const lyric = (lyrics) => {
    return {
        _text : lyrics.text,
        _song : lyrics.song,
        _artist : lyrics.artist,
        _color : lyrics.color ? lyrics.color : [[0,0,0],[255,255,255]],
        get song() {return `<strong>${this._song}</strong> &nbsp${this._artist}`;},
        get lyric() {return this._text;},
        get image() {return `./images/${this._artist} ${this._song.slice(0,3)}.jpg`;},
        get mainColor() {return `rgb(${this._color[0]})`;},
        get textColor() {return `rgb(${this._color[1]})`;},
    }
};
const data = [
    {
        text: "You're in the wind, I'm in the water<BR>Nobody's son, nobody's daughter",
        song: "Chemtrails Over The Country Club",
        artist: "Lana Del Rey",
        color: [[230, 219, 255],[0, 55, 94]]
    },
    {
        text: "I don't wanna get lost inside the color under my tongue",
        song: "Heavy",
        artist: "The Marias",
        color: [[138, 0, 0],[255,255,255]]

    },
    {
        text: "Pools of sorrow, waves of joy,<BR>are drifting through my open mind",
        song: "Across The Universe",
        artist: "The Beatles",
        color: [[20, 20, 20],[255,255,255]]
    },
    {
        text: "Born in a century lost to memories<BR>Falling trees, get off your knees",
        song: "A Lot's Gonna Change",
        artist: "Weyes Blood",
        color: [[0,29,70],[255,86,202]]
    },
    {
        text: "Why does all the purest love get filtered through machines?",
        song: "Begin Again",
        artist: "Jessie Ware",
        color: [[238, 102, 74],[255,255,255]]
    },
    {
        text: "The awe and wonder will never tire<BR>Make me be that lover and be that fighter",
        song: "New World (Flow)",
        artist: "Joe Goddard & Florious",
        color: [[200, 200, 200],[0, 10, 10]]
    }
    
];

const lyrics = [];
for (const item of data) { 
    lyrics.push(lyric(item));
};

const update = (num) => {
    let idx;
    do {
        idx = Math.floor(Math.random()*lyrics.length);
    } while (idx==num);
    document.getElementById("lyric").innerHTML = lyrics[idx].lyric;
    document.getElementById("song").innerHTML = lyrics[idx].song;
    r.style.setProperty('--main-color',lyrics[idx].mainColor);
    r.style.setProperty('--text-color',lyrics[idx].textColor);
    r.style.setProperty('--bg-image',`url('${lyrics[idx].image}')`);
    console.log(`url('${lyrics[idx].image}')`);
    console.log('refresh!')
    return idx;
};

function eventHandler() {
    idx = update(idx);
    console.log(`next = ${idx}`);
}

idx = update(idx);
document.getElementById("next").addEventListener("click", eventHandler);
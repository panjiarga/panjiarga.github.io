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
        text: "You're in the wind,<BR>I'm in the water<BR>Nobody's son,<BR>nobody's daughter",
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
        text: "Pools of sorrow,<BR>waves of joy,<BR>are drifting through my open mind",
        song: "Across The Universe",
        artist: "The Beatles",
        color: [[0, 173, 239],[255,255,255]]
    },
    {
        text: "Born in a century<BR>lost to memories<BR>Falling trees,<BR>get off your knees",
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
        text: "When the muse comes calling to take me higher<BR>The awe and wonder will never tire",
        song: "New World (Flow)",
        artist: "Joe Goddard & Florious",
        color: [[107, 131, 210],[255, 204, 0]]
    }
    
];

let lyrics = [];
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

let idx = -1;
let r = document.querySelector(':root');

function refresh() {
    idx = update(idx);
    console.log(`idx = ${idx}`);
}

refresh();
document.getElementById("next").addEventListener("click", refresh);
var Post_Data = {"function":"nothing"}
function getFunc(_data) {
    var request = new XMLHttpRequest(); // Create a request variable and assign a new XMLHttpRequest object to it.
    request.open('GET', 'http://127.0.0.1:5000/js/'+_data); // Open a new connection, using the GET request on the URL endpoint
    request.send();
    
    request.onload = async function () {
        Post_Data = JSON.parse(this.response)
        eval(Post_Data['function'])
        // console.log(Post_Data['result'])
    }
}


var Action_Dict = ["create", "interact", "do","functions","construct","objects"]
var Key_page = ""

document.onkeydown = function(e){
    Key_page = Key_page+e.key;
    document.getElementById('mytext').innerHTML = document.getElementById('mytext').innerHTML+e.key;
    if (e.key=='Enter') {Key_page="";document.getElementById('mytext').innerHTML="|"}

};
document.onkeyup = function(e){
    for (const element of Action_Dict) {
        if (Key_page.includes(element)) {getFunc(element);Key_page="";}
    };
};

function addaCircle(_cx,_cy,_r,_stroke,_fill,_where) {
    let aCircle = document.createElementNS('http://www.w3.org/2000/svg', "circle");
    aCircle.setAttribute("cx", _cx);
    aCircle.setAttribute("cy", _cy);
    aCircle.setAttribute("r", _r);
    aCircle.setAttribute("stroke", _stroke);
    aCircle.setAttribute("fill", _fill);
    document.getElementById(_where).appendChild(aCircle);
}


function add_a_row() {
    document.getElementById('cons-table').innerHTML += '<tr><td class="input-chara-td"><input type="text" class="input-chara" placeholder="characteristic"></td><td colspan="2" class="input-factinstruction-td"><input type="text" class="input-factinstruction" placeholder="fact/instruction"></td></tr>';
}









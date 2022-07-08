// PolyWorld

var polyworld ={'created':0,'creatures':{},'creaturesLength':0};

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

document.getElementById('textarea-Attributes').value='name:poly-1\nrang:[.8,.7,.9,.4]\nbasa:320\nmode:[.7,.8,.9]\nmood:Sad\ngoal:survive\nself-cons:1';
document.getElementById('textarea-Functionalities').value='exhi:rang\ncept:rang\nchange-attr:rang\nchange-func:cept';

var Action_Dict = ["create", "interact", "do","functions","construct","objects","clear"]
var Key_page = ""
document.onkeydown = function(e){
    console.log(e.key)

    if (e.key.length==1) {
        Key_page = Key_page+e.key;
        document.getElementById('mytext').innerHTML = document.getElementById('mytext').innerHTML+e.key;
    }
    if (e.key=='Backspace') {
        document.getElementById('mytext').innerHTML = document.getElementById('mytext').innerHTML.substring(0, document.getElementById('mytext').innerHTML.length - 1);
        Key_page.substring(0, Key_page.length - 1);

    }
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



function add_a_svg(_target_div='main-div',_id='main-svg',_style='') {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('id',_id);
    svg.setAttribute('style',_style)
    document.getElementById(_target_div).appendChild(svg);
}

function draw_a_cirlce(_svg,_id='x',_cx,_cy,_r,_style='fill: none; stroke: blue; stroke-width: 1px;') {
    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttributeNS(null, 'cx', _cx);
    circle.setAttributeNS(null, 'cy', _cy);
    circle.setAttributeNS(null, 'r', _r);
    circle.setAttribute(null,'id',_id);
    circle.setAttributeNS(null, 'style', _style);
    document.getElementById(_svg).appendChild(circle);
}
function draw_a_rect(_svg,_id='x',_x,_y,_width,_height,_style='fill: none; stroke: blue; stroke-width: 1px;') {
    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttributeNS(null, 'x', _x);
    rect.setAttributeNS(null, 'y', _y);
    rect.setAttributeNS(null, 'width', _width);
    rect.setAttributeNS(null, 'height', _height);
    rect.setAttributeNS(null, 'style', _style);
    rect.setAttribute(null,'id', _id);
    document.getElementById(_svg).appendChild(rect);
}
function draw_a_polygon(_svg='main-svg',_id='',_points="10,10 10,40 40,10 40,40",_style="fill:none;stroke:gray;stroke-width:2px;stroke-linejoin:round;") {
    var polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttributeNS(null, 'points', _points);
    polygon.setAttributeNS(null, 'style', _style);
    polygon.setAttribute('id', 'polygon-'+_id);
    document.getElementById(_svg).appendChild(polygon);
    polygon.classList.toggle('polygons');

}





  
function draw_a_character(_x,_y,_r,_l,_m,_id) {
    let polyPoints = '';
    let _n = _l+_m;
    var group_svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
    group_svg.setAttribute("id","poly-"+polyworld.creaturesLength)
    group_svg.classList.toggle('polys');

    document.getElementById('main-svg').appendChild(group_svg);
    var a_text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    a_text.setAttribute('id','text-'+_id);
    a_text.setAttribute('x',_x-24);
    a_text.setAttribute('y',_y+40);
    a_text.setAttribute('font-size','10px');
    group_svg.appendChild(a_text);
    document.getElementById('text-'+_id).innerHTML= ('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'+_id+'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0').substring(Math.floor((28+_id.length)/2)-8,Math.floor((28+_id.length)/2)+7);

    for (let index = 1; index < _n+1; index++) {
        let aPointX = _x + _r*Math.cos(index*Math.PI*(360/_n)/180);
        let aPointY = _y + _r*Math.sin(index*Math.PI*(360/_n)/180);
        var polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttributeNS(null, 'points', _x+','+_y+' '+aPointX+','+aPointY);
        if (index<_l+1) {
            polygon.setAttributeNS(null, 'style', 'fill:white;stroke-width:1px;stroke-linejoin:round;'+'stroke:'+'rgb('+140+','+0+','+70+')');

        } else {
            polygon.setAttributeNS(null, 'style', 'fill:white;stroke-width:1px;stroke-linejoin:round;'+'stroke:'+'rgb('+70+','+0+','+140+')');

        }

        document.getElementById("poly-"+polyworld.creaturesLength).appendChild(polygon);
        polygon.classList.toggle('polygons');

        polyPoints += aPointX + ',' + aPointY + ' ';


    } 
    draw_a_polygon(_svg="poly-"+polyworld.creaturesLength,_id='',polyPoints);

  }

  function findbestlocationforpolys() {
    let polys = document.getElementsByClassName("polys");
    for (let index = 0; index < polys.length; index++) {
        console.log(polys[index].getBoundingClientRect().x+':'+polys[index].getBoundingClientRect().y)
    };
}

// "attributes":{
//     "name":["name"],
//     "rang":[[100,100,100,100]],
//     "bas":[[40,30,60,20]],
//     "mod":[["1","2/3","11/12"]],
//     "mood":["sad"],
//     "goal":["surviving"]
// },
// "functionalities":{
//     "exhi":["exhi([10,24],own/other)"],
//     "cept":["reco(attr,own/others)"],
//     "change-attr":[["changeAttr(attr,own/others)"]],
//     "change-func":[["changeFunc(func,own/others)"]]
// },
// "interactions":[["name-n","name-m"]]
function changeAttr(_obj,_attr={"rang":"[.1,.5,.3,1]"}) {
    for (const key in _attr) {
        if (Object.hasOwnProperty.call(_attr, key)) {
            _obj[key]=_attr[key];           
        }
    }
}
function changeFunc(_obj,_func={"exhi":"console.log('---')"}) {
    for (const key in _func) {
        if (Object.hasOwnProperty.call(_func, key)) {
            _obj[key]=_func[key];
        }
    }
}


function exhi(_obj,_attr={"rang":"[.1,.5,.3,1]"}) {
    for (const key in _attr) {
        if (Object.hasOwnProperty.call(_attr, key)) {
            _obj[key]=_attr[key];   
        }
    }
}
function cept(_obj,_attr_names=["rang"]) {
    let result = {};
    _attr_names.forEach(function (item, index) {
        result[item]=_obj[item];
      });
      return result
}
function textcolor(_poly) {
    document.getElementById('text-'+_poly).setAttribute('fill','orange');
    setTimeout(function() {document.getElementById('text-'+_poly).setAttribute('fill','black');},4000)
}

class creatures{
    constructor(name, attributes, functionalities) {
      this.name = name;
      this.IsInteractingNow = 0;
      this.attributes = attributes;
      this.functionalities = functionalities;
      this.showme = function(_x,_y) {
        draw_a_character(_x,_y,20,Object.keys(this.attributes).length,Object.keys(this.functionalities).length,this.id);
      }
      this.attr = function(_attributes) {
        console.log(_attributes);
        for (const [key, value] of Object.entries(_attributes)) {
            console.log(key, value);
            this[key]=value;

        }
      }
      this.func = function(_functionalities) {
        
        for (const [key, value] of Object.entries(_functionalities)) {
            console.log(key, value);
            this[key]=value;

        }
      }
      this.at=this.attr(attributes);
      this.fu=this.func(functionalities);
      


    }
  }

function create_an_object() {
    let attrArray = document.getElementById('textarea-Attributes').value.replace(/\s\s+/g, ' ').replace(/\n/g, ';').split(';');
    let attrDict={};
    attrArray.forEach(element => {
        attrDict[element.split(':')[0]]=element.split(':')[1];
    });
    let funcArray = document.getElementById('textarea-Functionalities').value.replace(/\s\s+/g, ' ').replace(/\n/g, ';').split(';');
    let funcDict={};
    funcArray.forEach(element => {
        funcDict[element.split(':')[0]]=element.split(':')[1];
    });
    let newChar = new creatures(attrDict['name'],attrDict,funcDict);
    newChar.id = 'poly-'+(polyworld.creaturesLength+1);
    console.log(newChar.id);
    polyworld.creatures[newChar.id]=newChar;
    polyworld.creaturesLength=Object.keys(polyworld.creatures).length;
    newChar.showme(60*polyworld.creaturesLength,100);
    console.log(newChar);
}

function set_interactingpolys_positions(_id1,_id2) {

    document.getElementById(_id1).setAttribute('x','30px');
    document.getElementById(_id2).setAttribute('x','-30px');
    document.getElementById(_id1).setAttribute('y','200px');
    document.getElementById(_id2).setAttribute('y','200px');
}


function interact(_objs) {
    // set_interactingpolys_positions(_objs[0],_objs[1]);
    _objs.forEach(element => {
        textcolor(element)
    });
    console.log("---------------------------");
}

function interactionStart() {
    let _objsIds = ['poly-'+Math.floor(1+(Math.random()*polyworld.creaturesLength)-.01),'poly-'+Math.floor(1+(Math.random()*polyworld.creaturesLength)-.01)];
    console.log(_objsIds)
    interact(_objsIds);
}
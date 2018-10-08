let alphabats= [
{
	name:"A",
	imgURL:"images/keyboard-key.png",
},
{
	name:"B",
	imgURL:"images/keyboard-key.png",
},
{
	name:"C",
	imgURL:"images/keyboard-key.png",
},
{
	name:"D",
	imgURL:"images/keyboard-key.png",
},
{
	name:"E",
	imgURL:"images/keyboard-key.png",
},
{
	name:"F",
	imgURL:"images/keyboard-key.png",
},
{
	name:"G",
	imgURL:"images/keyboard-key.png",
},
{
	name:"H",
	imgURL:"images/keyboard-key.png",
},
{
	name:"I",
	imgURL:"images/keyboard-key.png",
},
{
	name:"J",
	imgURL:"images/keyboard-key.png",
},
{
	name:"K",
	imgURL:"images/keyboard-key.png",
},
{
	name:"L",
	imgURL:"images/keyboard-key.png",
},
{
	name:"M",
	imgURL:"images/keyboard-key.png",
},
{
	name:"N",
	imgURL:"images/keyboard-key.png",
},
{
	name:"O",
	imgURL:"images/keyboard-key.png",
},
{
	name:"P",
	imgURL:"images/keyboard-key.png",
},
{
	name:"Q",
	imgURL:"images/keyboard-key.png",
},
{
	name:"R",
	imgURL:"images/keyboard-key.png",
},
{
	name:"S",
	imgURL:"images/keyboard-key.png",
},
{
	name:"T",
	imgURL:"images/keyboard-key.png",
},
{
	name:"U",
	imgURL:"images/keyboard-key.png",
},
{
	name:"V",
	imgURL:"images/keyboard-key.png",
},
{
	name:"W",
	imgURL:"images/keyboard-key.png",
},
{
	name:"X",
	imgURL:"images/keyboard-key.png",
},
{
	name:"Y",
	imgURL:"images/keyboard-key.png",
},
{
	name:"Z",
	imgURL:"images/keyboard-key.png",
},];


function myFunction(){
    buttons=document.querySelector(".keys-section");
    for (let i = 0; i < alphabats.length; i++) {
        buttons.innerHTML+=`
        
        <div class="key-div" onclick="msg(${alphabats[i].name})"  
		style="background-image: url('${alphabats[i].imgURL}')"  >${alphabats[i].name}
		
		</div>
       
		
		` }


}


let m= "";
function msg(google){
    m="jhjh";
    let msgdiv= document.querySelector(".result-div").innerHTML+=m;
   

}






const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');
const scorecard=document.querySelector('.SC');
const pname=document.querySelector('.pname');

	 let score=0;
	 let flag=0;
	function Score()
	{
		score=0;   
    }

const Circle =
{
	X:canvas.width/4,
	Y:canvas.height/4,
	size:10,
	dx:3,
	dy:3
};

const slide =
{
	l:70,
	w:10,
	sy:canvas.height-10,
	sx:canvas.width/2,
	sspeed:10,
	sdx:0,
	sdy:0
};


function drawCircle()
{
	ctx.beginPath();
	ctx.arc(Circle.X, Circle.Y, Circle.size,0,Math.PI*2);
	ctx.fillStyle='black';
	ctx.fill();
	

}


function updatescore()
 {
 	
	console.clear();
		score=score+1;
	console.log(score);
	scorecard.value=score;
	if(Circle.dx!==0)
	{
		requestAnimationFrame(updatescore);
	}
}
function update()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawCircle();
	Circle.X+=Circle.dx
	Circle.Y+=Circle.dy



	
//1st
 if(Circle.X-Circle.size<0||Circle.X+Circle.size>canvas.width)
    {

		Circle.dx=-Circle.dx;
	}

	if(Circle.Y-Circle.size<0 )
	{

		Circle.dy=-Circle.dy;

	}
	if(Circle.X>=slide.sx && Circle.X<=slide.sx+70 )
	{
		if(Circle.Y+Circle.size>canvas.height-10)
		{
			Circle.dy=-Circle.dy;

			console.log('touch');
	    }
    }
	
	if(Circle.Y+Circle.size>canvas.height)
	{
		
		Circle.dx=0;
		Circle.dy=0;
		Circle.X=150;
		Circle.Y=150;
		//alert("gameover");

        
	}


function getslide(){
  ctx.beginPath();
  ctx.rect(slide.sx,slide.sy,slide.l,slide.w);
  ctx.fillStyle='black';
  ctx.fill();

}
 if(slide.sx<0){
 	slide.sx=0;
 }
 if(slide.sx+slide.l>canvas.width){
 	slide.sx=canvas.width-slide.l;
 }
getslide();
	requestAnimationFrame(update);
 }

function moveright(){
	slide.sx+=slide.sspeed;

}
function moveleft(){
	slide.sx-=slide.sspeed;

}


function replay()
	{
		Circle.X=150;
		Circle.Y=200;
		Circle.dx=3;
		Circle.dy=3;
		slide.sx=canvas.width/2;
		Score();
		Score.score=0;
		console.log(score);
		updatescore();
		
	} 


function keydown(e)
{
	if(e.key === 'ArrowRight'||e.key === 'Right')
	{
		console.log(e.key);
		moveright();
	}
		if(e.key === 'ArrowLeft'||e.key === 'Left')
	{
		console.log(e.key);
		moveleft();
	}
	if(e.keyCode===13)
	{
		console.log(e.key);
		replay();

	}
}




update();
updatescore();
document.addEventListener('keydown',keydown);

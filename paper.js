class Paper{
	constructor(x,y,r)
	{
var options={
	
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 0.12
	}
	   this.image=loadImage("paper.png")
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y,(this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;

			push()
			translate(paperpos.x, paperpos.y);
			strokeWeight(4);
			fill("white");
			imageMode (CENTER)
			image(this.image,0,0,this.r,this.r)
			pop()
	}

}
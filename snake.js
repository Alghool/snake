function Snake(){
    this.alive = true;
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.long = 4;
    this.tail = [[0,1], [0,2], [0,3], [0,4]];

    this.speedChange = function(x, y){
        alive = true;
        if(this.xSpeed === 0 && x != 0){
            this.ySpeed = 0;
            this.xSpeed = x *grid;
        }
        if(this.ySpeed === 0 && y != 0){
            this.xSpeed = 0;
            this.ySpeed = y *grid;
        }
    };

    this.move = function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x >= width)
            this.x = 0;
        else if(this.x < 0)
            this.x = width - grid;

        if(this.y >= height)
            this.y = 0;
        else if(this.y < 0)
            this.y = height - grid;

        for(var i = 0; i < this.tail.length -1; i++){
            if(this.x == this.tail[i][0] && this.y == this.tail[i][1]
            &&(this.xSpeed !=0 ||this.ySpeed !=0 )
            ){
                console.log("you kiled");
                this.alive = false;
            }
        };
        this.tail.push([this.x, this.y]);
        if(this.tail.length > this.long)
            this.tail.splice(0,1);



    };

    this.draw = function(){
        fill(0,255,0);
        for(var i = 0; i < this.tail.length; i++)
            rect(this.tail[i][0], this.tail[i][1], grid, grid);
    };

    this.tryEat = function(apple){
        if(this.x == apple[0] && this.y == apple[1]){
            this.long ++;
            return true;
        }else{
            return false;
        }
    };
}

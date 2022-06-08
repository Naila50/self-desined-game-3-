class Game{
    constructor(){
        this.b1 = createButton("1.Niharo")
        this.b2 = createButton("2.Nohari")
        this.b3 = createButton("3.Novara")
        this.b4 = createButton("4.Nohara")

        this.b5 = createButton("1.Jasmine")
        this.b6 = createButton("2.Rose")
        this.b7 = createButton("3.Sunflower")
        this.b8 = createButton("4.Lotus")


        

        this.Img1 = createImg("images/image for Q1.jpg")
        this.Img2 = createImg("images/image for Q2.jpg")
        this.question1 = createElement('h1');
        this.next1 = createButton('Next')
        this.question2 = createElement('h1');
        this.next2 = createButton('Next');
    }
    getState() { 
        var gameStateRef = database.ref("gameState"); 
        gameStateRef.on("value", function(data) { gameState = data.val(); }); 
    } 

    update(state) { 
        database.ref("/").update({ gameState: state }); 
    }

    hideQ1(){
        this.question1.hide();
        this.b1.hide();
        this.b2.hide();
        this.b3.hide();
        this.b4.hide();
        this.Img1.hide();
        this.next1.hide();
        
    }
    hideQ2(){
        this.question2.hide();
        this.b5.hide();
        this.b6.hide();
        this.b7.hide();
        this.b8.hide();
        this.Img2.hide();
        this.next2.hide();
    }

    start(){
        form = new Form();
        form.display();
    }

    play(){
        form.hide();
        console.log("gameStatePlay");
        this.question1.html('What is the surname of Shinchan?');
        this.question1.position(400,80);
        
        

        
        this.Img1.position(0,80);
        this.Img1.size(300,400);
        
        this.b1.position(400,160);
        this.b1.class("customButton");
        this.b2.position(400,240);
        this.b2.class("customButton");
        this.b3.position(400,330);
        this.b3.class("customButton");
        this.b4.position(400,410);
        this.b4.class("customButton");
        
        
        this.next1.position(1000,500);
        this.next1.class("nextButton");
        this.next1.mousePressed(()=>{
        this.hideQ1()
         this.question2.html('Shinchan is in which school group');
         this.question2.position(400,80);
         this.Img2.position(0,100);
         this.Img2.size(300,400);
         this.b5.position(400,160);
        this.b5.class("customButton");
        this.b6.position(400,240);
        this.b6.class("customButton");
        this.b7.position(400,330);
        this.b7.class("customButton");
        this.b8.position(400,410);
        this.b8.class("customButton");
        this.next2.position(1000,500);
        this.next2.class("nextButton");

        })
    this.next2.mousePressed(( )=>{
    this.hideQ2()
    })

    
    


    }
    end(){

    }
}
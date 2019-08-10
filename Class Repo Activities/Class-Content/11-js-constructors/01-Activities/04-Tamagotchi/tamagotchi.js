function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function () {
        if (this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks, not hungry!")
        }
    };
    this.sleep = function () {
        if (this.sleepy) {
            console.log("Zzzzzzzzzzzzzzzzzzz...");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge()
        } else {
            console.log("I'm not tired!")
        }
    };
    this.play = function () {
        if (this.bored) {
            console.log("Yay!  Let's play!");
            this.bored = false;
            this.hungry = true;    
        } else {
            console.log("I'm not in the mood.  Maybe later?")
        }
    };
    this.increaseAge = function () {
        this.age ++;
        console.log('Happy Birthday to me!  I am ' + this.age + ' "years" old!')
    } 
};

var dog = new DigitalPal()
dog.outside = false;
dog.bark = function () {
    console.log("Woof!  Woof!")
};
dog.goOutside = function () {
    if (this.outside == false) {
        console.log("Yay!  I love going outside!");
        this.outside = true;
        dog.bark();
    } else {
        console.log("But we're already outside?")
    }
};
dog.goInside = function () {
    if (this.outside) {
        console.log("Aww....  Do I have to?");
        this.outside === false;
    } else {
        console.log("But we're already inside?")
    }
}

var cat = new DigitalPal();
cat.houseCondition = 100;
cat.meow = function () {
    console.log("Meow!  Meow!")
}
cat.destroyFurniture = function () {
    if (cat.houseCondition > 0) {
        cat.houseCondition -= 10;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        cat.bored = true;
        cat.sleepy = true;
    }
}
cat.buyNewFurniture = function () {
    cat.houseCondition += 50;
    console.log("Are you sure about that?")
}

cat.destroyFurniture()
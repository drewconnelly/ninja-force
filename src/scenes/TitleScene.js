class TitleScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'TitleScene'
        });
    }

    preload ()
    {
        this.load.image('title', 'assets/title.png');
    }

    create ()
    {
    	this.add.image(300, 200, 'title');    	
    }


}

export default TitleScene;
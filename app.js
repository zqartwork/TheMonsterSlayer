new Vue({
    el: '#app',
    data: {
        slayerHP: 100,
        monsterHP: 100,
        SD: 0,
        MD: 0,
        HD: 0,
        SSD: 0,
        MSD: 0,
        condis:[],
        showModal: false,
        showAnModal: false,
        announce:[],
        time: '',
    },
    created: function(){
        this.time = new Date().getMinutes() + ':' + new Date().getSeconds();
    },
    methods: {
        loseHeath: function() {
            this.SD = Math.round(Math.random() * 5);
            this.MD = Math.round(Math.random() * 5);
            this.slayerHP -= this.SD;
            this.monsterHP -= this.MD;
            this.time = new Date().getMinutes() + ':' + new Date().getSeconds();
            var condi = {
                'Slayer lose health': this.SD + ' %' + ' - ' + this.time, 
                'Monster lose health': this.MD + ' %' + ' - ' + this.time
            };
            this.condis.push(condi);
            this.time = new Date().getMinutes() + ':' + new Date().getSeconds();
        },
        SPLoseHeath: function() {
            this.SSD = Math.round(Math.random() * 20);
            this.MSD = Math.round(Math.random() * 20);
            this.slayerHP -= this.SSD;
            this.monsterHP -= this.MSD;
            this.time = new Date().getMinutes() + ':' + new Date().getSeconds();
            var condi = {
                'Slayer lose health': this.SSD + ' %' + ' - ' + this.time, 
                'Monster lose health': this.MSD + ' %' + ' - ' + this.time
            };
            this.condis.push(condi);
        },
        gainHeath: function() {
            this.HD = Math.round(Math.random() * 10);
            this.slayerHP += this.HD;
            this.time = new Date().getMinutes() + ':' + new Date().getSeconds();
            setTimeout(function(){
                this.SD = Math.round(Math.random() * 5);
                this.slayerHP -= this.SD;
            }.bind(this),500)
            var condi = {
                'Slayer gain health': this.HD + ' %' + ' - ' + this.time, 
                'Slayer lose health': this.SD + ' %' + ' - ' + this.time
            };
            this.condis.push(condi);
            
        },
        giveUp: function() {
            this.slayerHP = 100
            this.monsterHP = 100
            this.SD = 0
            this.MD = 0
            this.HD = 0
            this.SSD = 0
            this.MSD = 0
            this.condis = []
            this.showModal = false
            this.showAnModal = false
            this.announce = []
        }
    },
    watch: {
        slayerHP: function(){
            if(this.slayerHP > 100) {
                this.slayerHP = 100;
            } 
            else if (this.slayerHP < 0) {
                this.slayerHP = 0;
            }
            else if (this.slayerHP == 0) {
                this.showAnModal = true;
                var an = 'You have lost';
                this.announce.push(an);
            }
            else if(this.slayerHP == 0 && this.monsterHP == 0) {
                this.showAnModal = true;
                var an = 'What a tie!';
                this.announce.push(an);
            }
        },
        monsterHP: function(){
            if(this.monsterHP > 100) {
                this.monsterHP = 100;
            } 
            else if (this.monsterHP < 0) {
                this.monsterHP = 0;
            }
            else if (this.monsterHP == 0) {
                this.showAnModal = true;
                var an = 'You have win';
                this.announce.push(an);
            }
            else if(this.slayerHP == 0 && this.monsterHP == 0) {
                this.showAnModal = true;
                var an = 'What a tie!';
                this.announce.push(an);
            }
        },
        
    }
})
var CardView = Backbone.View.extend({

  classname: 'card',

  //template: _.template('<%= rankName %> of <%= suitName %>'),
  templateString: "<img src = {{this.cardImg}}>",

  initialize: function(){
    this.render();
  },

  render: function(){
    if (this.model.get('revealed')){
      var rank = this.model.get('rankName');
      if (isNaN(rank)){
        rank = rank.toLowerCase();
      }
      this.cardImg = "./img/cards/" + rank + '-' +
        this.model.get('suitName').toLowerCase() +'.png'; 
      // this.$el.addClass('covered');
    }
    else{
      this.cardImg = "./img/card-back.png"; 
    }
    this.$el.children().detach();
    this.$el.html(Handlebars.compile(this.templateString)(this));
    return this.$el; 
  }
});

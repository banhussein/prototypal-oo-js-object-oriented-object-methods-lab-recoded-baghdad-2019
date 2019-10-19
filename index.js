function BoardMember(name,homeState,training){
  this.name=name;
  this.homeState=homeState;
  this.training=training;
}
//User.prototype.sayHello = function() {
BoardMember.prototype.veto=function(){
  return "No, I must disagree"
}
BoardMember.prototype.approve=function(){
  
}
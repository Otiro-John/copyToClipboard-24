$("document").ready(() =>{
//adding an animation to the copied span
function add(){
    $(".copied").addClass("bounce-effect");
}
function remove(){
    $(".copied").removeClass("bounce-effect");
}



//copying the text from the texarea after selection
$(".copy-btn").click(() =>{
    $("#textfield").select();
    document.execCommand("copy");
    add();
    setTimeout(remove,800);
})
});
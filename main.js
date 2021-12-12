
var last_x, last_y;



    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var width= screen.width
    var height= screen.height

    var new_width= screen.width-100;
    var new_height= screen.height-300;

    if(width < 992)
    {
        document.getElementById("mycanvas")=new_width
        document.getElementById("mycanvas")=new_height
        document.body.style.overflow="hidden"
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        last_x = e.touches[0].clientX - canvas.offsetLeft; 
        last_y = e.touches[0].clientY - canvas.offsetTop;

        last_x = e.touches[0].clientX - canvas.offsetLeft; 
        last_y = e.touches[0].clientY - canvas.offsetTop;
        
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

        current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft; 
        current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;    

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        
        ctx.moveTo(last_x, last_y);

       
        
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

        last_x = current_position_of_mouse_x
        last_y = current_position_of_mouse_y
        }

       

    


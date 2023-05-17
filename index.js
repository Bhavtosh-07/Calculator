let buttons=document.querySelectorAll("input[type=button]");
let input=document.getElementsByClassName("input-box")[0];
let text="";

buttons.forEach((ele)=>
{
    ele.addEventListener('click',(eve)=>
    {
        if(eve.target.value == '=')
        {
            text=eval(text);
            
        }
        else if(eve.target.value == 'AC')
        {
            text="";
            
        }
        else if(eve.target.value == 'DE')
        {
            let len_text=text.length;
            text=text.substring(0,len_text-1)
            
        }
        else
        {
            text+=eve.target.value;
            
        }

        input.value=text;
    })    
})
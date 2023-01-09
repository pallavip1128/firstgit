
function Submit(event)
{
    event.preventDefault();
    const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
       
    console.log("name :"+name+'\n'+'email:'+email);
   
}

var str=prompt('Enter a string'); 
var a =prompt("Enter a string you want to remove");
if (str.substring(4,10)=== a)
{
  remstr=str.substring(0,4)+str.substring(10,str.length)
  document.write(remstr);
}  
else{
  document.write(str);
}
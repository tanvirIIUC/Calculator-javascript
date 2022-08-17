   function inputnumber(input)
{
    const inputOne= document.getElementById(input);
    const inputOneString= inputOne.innerText;
    const inputOneNumber = parseFloat(inputOneString);
    return inputOneNumber;
}

// console.log(inputnumber());

document.getElementById('input1').addEventListener('click',function()
{
  const one=  inputnumber('input1');
  const displayNumber=document.getElementById('display');
  displayNumber.innerText=one;
  
})
document.getElementById('input2').addEventListener('click',function()
{
    const one=  inputnumber('input2');
  const displayNumber=document.getElementById('display');
  displayNumber.innerText=one;
})
document.getElementById('input3').addEventListener('click',function()
{
    const one=  inputnumber('input3');
    const displayNumber=document.getElementById('display');
    displayNumber.innerText=one;
})
document.getElementById('input4').addEventListener('click',function()
{
    const one=  inputnumber('input4');
  const displayNumber=document.getElementById('display');
  displayNumber.innerText=one;
})
document.getElementById('input5').addEventListener('click',function()
{
    const one=  inputnumber('input5');
  const displayNumber=document.getElementById('display');
  displayNumber.innerText=one;
})
document.getElementById('input6').addEventListener('click',function()
{
    const one=  inputnumber('input6');
  const displayNumber=document.getElementById('display');
  displayNumber.innerText=one;
})
document.getElementById('input7').addEventListener('click',function()
{
    const one=  inputnumber('input7');
  const displayNumber=document.getElementById('display');
  displayNumber.innerText=one;
})
document.getElementById('input8').addEventListener('click',function()
{
    const one=  inputnumber('input8');
  const displayNumber=document.getElementById('display');
  displayNumber.innerText=one;
})
document.getElementById('input9').addEventListener('click',function()
{
    const one=  inputnumber('input9');
  const displayNumber=document.getElementById('display');
  displayNumber.innerText=one;
})
document.getElementById('input0').addEventListener('click',function()
{
    const one=  inputnumber('input0');
  const displayNumber=document.getElementById('display');
  displayNumber.innerText=one;
})



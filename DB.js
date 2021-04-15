// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** скрипт смены маркеров триугольник/квадрат *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false; // чтобы гарантировать порядок
  document.head.appendChild(script);
}

addScript('alphabet.js'); // загружаться эти скрипты начнут сразу
addScript('form.js'); // выполнятся, как только загрузятся
addScript('cod.js');
addScript('srift.js');
addScript('tag.js');
addScript('style.js');
addScript('webFarben.js');
addScript('Cursor.js');
addScript('CommandsJavaScriptCss.js');
addScript('CommandsJavaScriptHtml.js'); // но, гарантированно, в порядке 1 -> 2 -> 3
// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
// *** ~~~~~~~~~~~~~~~~~~~~~~ *** скрипт смены маркеров триугольник/квадрат *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
function verocultar(cual)
{
 var c=cual.nextSibling;
 if (c.innerHTML=='▶')
 {c.innerHTML='&#9632;';}
 else
 {c.innerHTML='▶';}
  return false;
}
// *** ~~~~~~~~~~~~~~~~~~ *** Скрипты рабочего списка *** ~~~~~~~~~~~~~~~ *** //

// text
function text()
{
document.title="Text";
    display = document.getElementById('textBox').style.display;
    if(display=='none')
    {
       document.getElementById('textBox').style.display='block';
       document.getElementById('textIco').style.listStyleImage = "url('B.ico')";
    }
    else
    {
       document.getElementById('textBox').style.display='none';
       document.getElementById('textIco').style.listStyleImage = "url('D.ico')";
    }
}
// HTM
function htm()
{
document.title="Text";
    display = document.getElementById('htmBox').style.display;
    if(display=='none')
    {
       document.getElementById('htmBox').style.display='block';
       document.getElementById('htmIco').style.listStyleImage = "url('B.ico')";
    }
    else
    {
       document.getElementById('htmBox').style.display='none';
       document.getElementById('htmIco').style.listStyleImage = "url('D.ico')";
    }
}
// HTML
function html()
{
document.title="HTML";
    display = document.getElementById('htmlBox').style.display;
    if(display=='none')
    {
       document.getElementById('htmlBox').style.display='block';
       document.getElementById('htmlIco').style.listStyleImage = "url('B.ico')";
    }
    else
    {
       document.getElementById('htmlBox').style.display='none';
       document.getElementById('htmlIco').style.listStyleImage = "url('D.ico')";
    }
}
// CSS
function css()
{
document.title="CSS";
    display = document.getElementById('cssBox').style.display;
    if(display=='none')
    {
       document.getElementById('cssBox').style.display='block';
       document.getElementById('cssIco').style.listStyleImage = "url('B.ico')";
    }
    else
    {
       document.getElementById('cssBox').style.display='none';
       document.getElementById('cssIco').style.listStyleImage = "url('D.ico')";
    }
}
// CSS/HTML
function csshtml()
{
document.title="CSS/HTML";
    display = document.getElementById('csshtmlBox').style.display;
    if(display=='none')
    {
       document.getElementById('csshtmlBox').style.display='block';
       document.getElementById('csshtmlIco').style.listStyleImage = "url('B.ico')";
    }
    else
    {
       document.getElementById('csshtmlBox').style.display='none';
       document.getElementById('csshtmlIco').style.listStyleImage = "url('D.ico')";
    }
}
// JavaScript
function javascript()
{
document.title="JavaScript";
    display = document.getElementById('javascriptBox').style.display;
    if(display=='none')
    {
       document.getElementById('javascriptBox').style.display='block';
       document.getElementById('javascriptIco').style.listStyleImage = "url('B.ico')";
    }
    else
    {
       document.getElementById('javascriptlBox').style.display='none';
       document.getElementById('javascriptIco').style.listStyleImage = "url('D.ico')";
    }
}
// JavaScript/HTML
function javascriptHtml()
{
document.title="JavaScript/HTML";
    display = document.getElementById('javascriptHtmlBox').style.display;
    if(display=='none')
    {
       document.getElementById('javascriptHtmlBox').style.display='block';
       document.getElementById('javascriptHtmlIco').style.listStyleImage = "url('B.ico')";
    }
    else
    {
       document.getElementById('javascriptHtmlBox').style.display='none';
       document.getElementById('javascriptHtmlIco').style.listStyleImage = "url('D.ico')";
    }
}
// JavaScript/CSS
function javascriptCss()
{
document.title="JavaScript/CSS";
    display = document.getElementById('javascriptCssBox').style.display;
    if(display=='none')
    {
       document.getElementById('javascriptCssBox').style.display='block';
       document.getElementById('javascriptCssIco').style.listStyleImage = "url('B.ico')";
    }
    else
    {
       document.getElementById('javascriptCssBox').style.display='none';
       document.getElementById('javascriptCssIco').style.listStyleImage = "url('D.ico')";
    }
}
// JavaScript/Canvas
function javascriptCanvas()
{
document.title="JavaScript/Canvas";
    display = document.getElementById('javascriptCanvasBox').style.display;
    if(display=='none')
    {
       document.getElementById('javascriptCanvasBox').style.display='block';
       document.getElementById('javascriptCanvasIco').style.listStyleImage = "url('B.ico')";
    }
    else
    {
       document.getElementById('javascriptCanvasBox').style.display='none';
       document.getElementById('javascriptCanvasIco').style.listStyleImage = "url('D.ico')";
    }
}
// SVG
function svg()
{
document.title="SVG";
    display = document.getElementById('svgBox').style.display;
    if(display=='none')
    {
       document.getElementById('svgBox').style.display='block';
       document.getElementById('svgIco').style.listStyleImage = "url('B.ico')";
    }
    else
    {
       document.getElementById('svgBox').style.display='none';
       document.getElementById('svgIco').style.listStyleImage = "url('D.ico')";
    }
}
// Инструменты
function tool()
{
document.title="Инструменты";
    display = document.getElementById('toolBox').style.display;
    if(display=='none')
    {
       document.getElementById('toolBox').style.display='block';
       document.getElementById('toolIco').style.listStyleImage = "url('B.ico')";
    }
    else
    {
       document.getElementById('toolBox').style.display='none';
       document.getElementById('toolIco').style.listStyleImage = "url('D.ico')";
    }
}
// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** Выберите цвет фона *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
function SelectBackgroundColor()
{
document.title="Выберите цвет фона";
obj=document.getElementById('sbc').style;
tmp=(obj.display!='block') ? 'block' : 'none';
obj.display=tmp; return false
}
// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** Калькулятор *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
function FunКechner()
{
document.title="Калькулятор";
obj=document.getElementById('rechner').style;
tmp=(obj.display!='block') ? 'block' : 'none';
obj.display=tmp; return false
}
// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** Черновик *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
function draft()
{
document.title="Черновик";
obj=document.getElementById('draft').style;
tmp=(obj.display!='block') ? 'block' : 'none';
obj.display=tmp; return false
}
// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** Простые числа *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
function primeNumber()
{
document.title="Простые числа";
obj=document.getElementById('primeNumber').style;
tmp=(obj.display!='block') ? 'block' : 'none';
obj.display=tmp; return false
}
// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** Закрыть все окна *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
function clos()
{
document.title="Окна закрыты";
document.getElementById("Txt").style.display="none";
}
// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ***


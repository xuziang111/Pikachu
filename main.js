!function(){
    let duration =50
    let id
    function control_bt(){    
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        $button.addClass('active').siblings().removeClass('active');
        let speed = $button.attr('data-speed')
        switch(speed){
            case 'slow':
              duration = 70
              break
            case 'normal':
              duration = 40 
              break
            case 'fast':
              duration = 0; 
              console.log('x') 
              break
            case 'end':
            console.log(id)
              clearTimeout(id)
              let domCode = document.querySelector('#code')  
              domCode.innerHTML = Prism.highlight(code, Prism.languages.css);
              document.querySelector('#styleTag').innerHTML = code;
              writeNet();
              domCode.scrollTo(0,domCode.scrollHeight);
              break
        }
    })
}
control_bt.call()
let code = `
/*准备一张纸*/
.paper-border{
    width:100%;
    height:50%;
    background:#FEE433;
    display:flex;
    justify-content: center;
    align-items:center; 
}
.paper{
    width:100%;
    height:165px;
    position:relative;
}
.paper > :not(:last-child){
    z-index:1;
}
/*鼻子*/
.nose{
    width:0;
    height:0;
    border-width:12px;
    border-style:solid;
    border-color:black transparent transparent transparent ;
    border-radius:10px;
    position:absolute;
    top:30px;
    left:50%;
    margin-left:-12px;
}
/*眼睛*/
.eye{
    top:0;
    background:#2E2E2E;
    border:2px solid #000;
    border-radius:50%;
    width:50px;
    height:50px;
    position:absolute;
}
.eye::after{
    content: '';
    position: absolute;
    background:#fff;
    width:25px;
    height:25px;
    left:3px;
    border:2px solid #000;
    border-radius:50%;
}
/*左边眼睛*/
.eye.left{
    right:50%;
    margin-right:90px;
}
/*右边眼睛*/
.eye.right{
    left:50%;
    margin-left:90px;
}
/*脸*/
.face{
    width:62px;
    height:62px;
    position: absolute;
    background:#FC0D1C;
    border:2px solid #000;
    border-radius:50%;
}
/*脸放到正确位置*/
.face.left{
    right:50%;
    top:85px;
    margin-right:116px;
}
.face.right{
    left:50%;
    top:85px;
    margin-left:116px;
}
/*上嘴唇*/
.upperLip{
    position:absolute;
    top: 50px;
    width: 85px;
    height:23px;
    border-bottom:2px solid #000;
    background:#FEE433;
}
.upperLip.left{
    right:50%;
    transform: rotate(-15deg);
    border-left:2px solid #000;
    border-bottom-left-radius: 50px 26px;
}
.upperLip.right{
    left:50%;
    transform: rotate(15deg);
    border-right:2px solid #000;
    border-bottom-right-radius: 50px 26px;
}
/*嘴*/
.lowerLip{
    position:absolute;
    top:36%;
    width:100%;
    height:100%;
    overflow: hidden;
}
.mouse{
    position:absolute;
    left:50%;
    top:-894px;
    margin-left:-75px;
    height:1000px;
    background-color:#990513;
    border:2px black solid;
    width:150px;
    border-radius:50%;
    overflow: hidden;
}
/*舌头*/
.mouse::after{
    content:'';
    position:absolute;
    display:block;
    left:50%;
    margin-left:-40px;
    bottom:0;
    background: #FC4A62;
    width:80px;
    height:80px;
    border-radius: 50%;
}
`
    function writerCss(prefix,code,fn){
        let domCode = document.querySelector('#code')
        let styleBox = document.querySelector('#styleBox')
        let n = 0  
        id = setTimeout(function run() {
            n += 1
            domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css);
            styleTag.innerHTML = prefix + code.substring(0,n)
            domCode.scrollTo(0,domCode.scrollHeight)
            if(n < code.length){
                id = setTimeout(run,duration)
            }else{
                fn&&fn.call()
            }
        },duration)
      }
writerCss('',code,() => {writeNet()})
function writeNet(){
    let netf = document.createElement("A");
    let nets = document.createElement("A");
    netf.innerHTML="查看成品";
    netf.setAttribute("href","https://lolimy.club/Pikachu/pika");
    $("#code").append(netf);
    nets.innerHTML="查看源代码";
    nets.setAttribute("href","https://github.com/xuziang111/Pikachu");
    $("#code").append(nets);
}
    }.call()


const arr=[
    {
        dp:'https://images.unsplash.com/photo-1734365294861-3f6df6a6af89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1734881368192-b71a88293b78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
        username:'LunaStarlight_98'
    },
    {
        dp:'https://images.unsplash.com/photo-1702884162674-b05320817c58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1734282432994-064de2eb1d25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
        username:'SophieDawn_22'
    },
    {
        dp:'https://images.unsplash.com/photo-1734312621516-3d258db95e76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D',
        story:'https://plus.unsplash.com/premium_photo-1732776567041-885234fdc3c4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
        username:'MayaSkies_15'
    },
    {
        dp:'https://images.unsplash.com/photo-1583167465109-1a1db796e8d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
        story:'https://images.unsplash.com/photo-1587157013165-d2944ffe7094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8',
        username:'BellaDreamer_33'
    },
    {
        dp:'https://images.unsplash.com/photo-1662849966305-d30a8732a382?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8',
        story:'https://images.unsplash.com/photo-1713496131391-e1025827474a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY2fHx8ZW58MHx8fHx8',
        username:'EthanRogue_77'
    },
    {
        dp:'https://images.unsplash.com/photo-1734365294861-3f6df6a6af89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1734881368192-b71a88293b78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
        username:'LunaStarlight_98'
    },
    {
        dp:'https://images.unsplash.com/photo-1702884162674-b05320817c58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1734282432994-064de2eb1d25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
        username:'SophieDawn_22'
    },
    {
        dp:'https://images.unsplash.com/photo-1734312621516-3d258db95e76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D',
        story:'https://plus.unsplash.com/premium_photo-1732776567041-885234fdc3c4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
        username:'MayaSkies_15'
    },
    {
        dp:'https://images.unsplash.com/photo-1583167465109-1a1db796e8d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
        story:'https://images.unsplash.com/photo-1587157013165-d2944ffe7094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8',
        username:'BellaDreamer_33'
    },
    {
        dp:'https://images.unsplash.com/photo-1662849966305-d30a8732a382?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8',
        story:'https://images.unsplash.com/photo-1713496131391-e1025827474a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY2fHx8ZW58MHx8fHx8',
        username:'EthanRogue_77'
    }
]

var sum=''
arr.forEach(function(elem,idx){
    console.log(idx);

  sum = sum + `<div class="story">
                <img id=${idx} src=${elem.dp} alt="">
            </div>`
})
var storiyan =document.querySelector('.storiyan')
var full =document.querySelector('.full')
var fullUser=document.querySelector('.full h2')
var growth = document.querySelector('.growth')

storiyan.innerHTML=sum


storiyan.addEventListener('click',function(dets){
    var grow=0
   var value = arr[dets.target.id]

 var int=  setInterval(function(){
        grow++
        growth.style.width= grow +"%"
   },30)

   full.style.display='block'
   full.style.backgroundImage=`url(${value.story})`
   fullUser.innerHTML=value.username

   setTimeout(function(){
    full.style.display='none'
    clearInterval(int)
   },3000)

})

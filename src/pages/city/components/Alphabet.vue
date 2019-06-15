<template>
        
            <ul class='Alphabet'>
                <li class="item">A</li>
                <li class="item">A</li>
                <li class="item">A</li>
                <li class="item">A</li>
                <li class="item">A</li>
                <li class="item">A</li>
            </ul>
            
        
</template>

<script>
export default{
    name:'CityAlphabet'
}
</script>

<style scoped>
 .Alphabet{
     position:absolute;
     top:86px;
     right:0;
     bottom:0;
     width:16px;
     background-color: brown;
     display:flex;
     flex-direction: column;
     justify-content:center;
     list-style-type:none;
}
.item{
    text-align:center;
    line-height:20px;
}
</style>
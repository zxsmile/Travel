<template>
        
            <ul class='Alphabet'>
                <li class="item" 
                    v-for='item of letters' 
                    :key="item" 
                    :ref="item"
                    @click='clickHandleLetter'
                    @touthstart="handleTouthstart"
                    @touthmove="handleTouthmove"
                    @touthend="handleTouthend"
                >{{item}}</li>
            </ul>
            
        
</template>

<script>
export default{
    name:'CityAlphabet',
    props:{
        cities:Object,
    },
    data:function(){
        return {
        touch:false
        }
    },
    computed:{
        letters:function(){
            let letters = [];
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    methods:{
        clickHandleLetter:function(event){
            this.$emit('change',event.target.innerHTML)
        },
        handleTouthstart:function(){
            this.touch=ture
        },
        handleTouthmove:function(event){
             if(this.touch){
               let letterY = this.$refs['A'][0].offsetTop;
               let touchY  = event.touchs[0].clientY-86;
               let elementIndex = Math.floor((letterY - touchY)/20);
            if(elementIndex>=0 && elementIndexthis.letters.length)
               this.$emit('change',event.letters[elementIndex])
             }
        },
        handleTouthend:function(){
            this.touch.false
        }
        
    }
}
</script>

<style scoped>
 .Alphabet{
     position:absolute;
     top:86px;
     right:0;
     bottom:0;
     width:16px;
     color:#ccc;
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
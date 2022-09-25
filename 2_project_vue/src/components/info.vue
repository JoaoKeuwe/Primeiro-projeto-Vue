<template>
    <div>
     <p>
        Estou trabalhando
     </p>
     <p>Estou utilizando essas linguagens</p>
    </div>
</template>
    
<script>
import { initCustomFormatter } from 'vue';

    export default {
        name:initCustomFormatter,
        data() {
            return {
                trabalhando: true
            }
        }
    }
</script>
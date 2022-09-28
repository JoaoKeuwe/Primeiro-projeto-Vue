<template>
    <ul>
        <li ><a href="#">Home</a></li>
        <li><a href="#">Detalhes</a></li>
        <li><a href="#">Sair</a></li>
    </ul>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    ul {
        display: flex;
        list-style: none
    }
    li {
        margin-right: 10px;
    }
    
    a{
        color : rgb(123, 26, 26);
        text-align: none;
        transition: .5s
    }

    a:hover {
        color: turquoise
    }
</style>
<template lang="">
    <div>
        <h1 clas="text-center">Login</h1>

        <div class="container">
            <div>
                <label  for="email"></label>
                <input type="email" id="email" placeholder="Email">
            </div>
            <div>
                <label for="password"></label>
                <input type="password" id="password" placeholder="Password">
            </div>

            <button class="submit">Login</button>
        </div>
    </div>
</template>
<script setup>

</script>
<style lang="sass" scoped>
.text-center{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
}
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    }

    label{
        display: block;
        margin-bottom: 10px;
        font-weight: bold;

    }
    input{
        display: block;
        margin-bottom: 10px;
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;

    }
    .submit{
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        font-weight: bold;
        font-size: 16px;
    }


</style>
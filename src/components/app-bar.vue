<template>
    <div
        class="fixed w-full bg-white h-14 p-4 flex flex-row shadow-slate-200 shadow-sm items-center justify-between md:justify-around"
    >
        <div class="flex flex-row items-center space-x-2">
            <span class="text-lg font-bold">Hey!</span>

            <!-- <span style="font-size: 19px;" class="material-icons">waving_hand</span> -->
        </div>

        <div class="flex flex-row items-center space-x-8">
            <ShareButton />
        </div>
    </div>
</template>

<script setup>
import ShareButton from "./share-btn.vue"



</script>

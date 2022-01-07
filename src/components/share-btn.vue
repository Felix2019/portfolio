<template>
    <button @click="share">
        <span class="material-icons p-2 rounded-full md:hover:bg-slate-100">share</span>
    </button>
</template>
<script>
export default {
    setup() {
        const share = () => {

            if (navigator.share)
                navigator
                    .share({ title: "https://felixguenthner.com", text: "Ein Schmuckstück für Dich." })
                    .catch((error) => console.log(error));
        };
        return {
            share,
        };
    },
};
</script>

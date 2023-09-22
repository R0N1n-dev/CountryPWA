<script>
import useRegisterSW from '../mixins/useRegisterSW'

export default {
    name: 'ReloadPrompt',
    mixins: [useRegisterSW]
}
</script>

<template>
    <div v-if="offlineReady || needRefresh" class="pwa-toast">
        <vs-alert title="App status" style="height: 8rem;">
            <span v-if="offlineReady" class="text">
                App ready to work offline
            </span>
            <span v-else class="text">
                New content available, click on reload button to update.
            </span>
            <div style="margin-top:1rem">
                <vs-button v-if="needRefresh" @click="updateServiceWorker()" color="primary">
                    Reload
                </vs-button>
                <vs-button @click="closePromptUpdateSW" color="danger">
                    Close
                </vs-button>
            </div>

        </vs-alert>
    </div>
    <!--<div v-if="offlineReady || needRefresh" class="pwa-toast" role="alert">
        <div class="message">
            <span v-if="offlineReady">
                App ready to work offline
            </span>
            <span v-else>
                New content available, click on reload button to update.
            </span>
        </div>
        <vs-button v-if="needRefresh" @click="updateServiceWorker()">
            Reload
        </vs-button>
        <vs-button @click="closePromptUpdateSW">
            Close
        </vs-button>
    </div>-->
</template>

<style>
button {
    cursor: pointer;
}

.pwa-toast {
    position: fixed;
    right: 0;
    bottom: 0;
    margin-inline: 1rem;
    z-index: 1;
    text-align: left;
    box-shadow: 3px 4px 5px 0 #8885;
}

.pwa-toast .message {
    margin-bottom: 8px;
}

.pwa-toast .text {
    color: black;
}
</style>
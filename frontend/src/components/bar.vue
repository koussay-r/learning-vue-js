
<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <template >
                
            </template>
        </Sidebar>
        <Button icon="pi pi-bars" @click="visible = true" />
    </div>
</template>

<script>
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';

export default {
    data() {
        return {
            visible: false
        };
    },
    components: { Sidebar, Avatar, Button }
    ,mounted() {
    this.$primevue.config.ripple = true;
}
}
</script>

<template>
    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <enso-form class="box form-box has-background-light raises-on-hover"/>
        </div>
    </div>
</template>
<router>
{
    name: 'repositories.create'
}
</router>
<script>
import { EnsoForm } from '@enso-ui/forms/bulma';

export default {
    name: 'Create',
    layout: 'auth',
    meta: {
        permission: { name: 'repositories menu' },
        title: 'Repositories - Create'
    },
    components: { EnsoForm },
};
</script>

<style lang="scss">
</style>

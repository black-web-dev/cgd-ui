<template>
    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <enso-form class="box form-box has-background-light raises-on-hover"
                ref="form"
                :path="`api${this.$route.path}`"
            />
        </div>
    </div>
</template>

<router>
{
    name: 'personevent.edit'
}
</router>
<script>
import { EnsoForm } from '@enso-ui/forms/bulma';

export default {

layout: 'auth',
    meta: {
        permission: { name: 'personevent menu' },
        title: 'Person Event - Edit'
    },

    components: { EnsoForm },
};
</script>

<style lang="scss">
</style>

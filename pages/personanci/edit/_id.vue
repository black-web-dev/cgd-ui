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
    name: 'personanci.edit'
}
</router>
<script>
import { EnsoForm } from '@enso-ui/forms/bulma';

export default {

layout: 'auth',
    meta: {
        permission: { name: 'personanci menu' },
        title: 'Person Anci - Edit'
    },

    components: { EnsoForm },
};
</script>

<style lang="scss">
</style>

<template>
    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <enso-form class="box form-box has-background-light raises-on-hover"
                :path="`api${this.$route.path}`"
            />
        </div>
    </div>
</template>

<router>
{
    name: 'familyevents.edit'
}
</router>
<script>
import { EnsoForm } from '@enso-ui/forms/bulma';

export default {

layout: 'auth',
    meta: {
        permission: { name: 'familyevents menu' },
        title: 'Family Events - Edit'
    },


    components: { EnsoForm },
};
</script>

<style lang="scss">
</style>

<template>
    <enso-table class="box is-paddingless raises-on-hover"
        id="people" ref="table"/>
</template>
<router>
{
    name: 'administration.people.index',
}
</router>

<script>
import { EnsoTable } from '@enso-ui/tables/bulma';

export default {
    meta: {
        breadcrumb: 'index',
        title: 'People',
    },

    components: { EnsoTable },
    
    inject: ['canAccess', 'i18n'],
};
</script>

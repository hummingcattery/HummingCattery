<script setup lang="ts">
    import { defineProps } from "vue";

    const props = defineProps<{
        cats: string[];
    }>();
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <table class="table table-bordered custom-table">
                    <tbody>
                        <tr>
                            <th>Nimi</th>
                            <th>Väri</th>
                            <th>Sukupuoli</th>
                            <th>Taso</th>
                            <th>Näyttelymenestys</th>
                        </tr>

                        <tr v-for=" cat in props.cats">
                            <td v-for="detail in cat">{{detail}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .col {
        overflow-x: auto;
    }

    .custom-table tbody tr {
        --bs-table-bg: #F8F3FC !important;
    }
</style>
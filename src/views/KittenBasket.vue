<template>
    <div>
        <h1>Pentukori</h1>
    </div>

    <div class="content-container">
        <p>
           Suunnitelmissa pentue Huldalle 2024-2025
        </p>
    </div>
</template>

<style lang="scss" scoped>
    img {
        object-fit: contain;
    }
    
    p {
        margin-top: 0;
        margin-bottom: 0;
        text-align: center;
    }

    tr > th {
        background-color: #F8F3FC;
    }

    tr > td {
        background-color: #F8F3FC;
    }
    
    .content-container {
        background-color: #F8F3FC;
        padding: 2rem;
    }

    .row {
        display: flex;
    }

    .column {
        flex: 50%;
        padding: 5px;
        overflow: auto
    }

    .col {
        overflow-x: auto;
    }
</style>

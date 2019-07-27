<template>
    <div class="container-custom pt-5 pb-4">
        <div class="row">
            <div class="col-md-4">
                <b-card
                    title="Card Title"
                    img-src="https://via.placeholder.com/250x150"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="shadow-lg mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<style>
  @import '../assets/css/custom.css';
  @import '../assets/fontawesome/css/all.css';
</style>


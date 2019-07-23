<template>
    <div class="container-custom pt-4 pb-4">
        <div class="row">
            <div class="col-md-4">
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
                <i class="fas fa-user"></i>
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


<template lang="html">
	<div class="single add-post">
	    <form enctype="multipart/form-data">
            <section>
                <div class="columns is-mobile is-centered">
                    <div class="column is-8 is-narrow is-full-mobile">
                        <div class="box">
                            <article class="media">
                                <div class="media-left">
                                    <figure class="image is-96x96">
                                        <img class="auth-avatar img-circle" src="/static/img/auth.jpg" alt="Image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p id="name">
                                            <strong>Vlad Dobrescu</strong>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <h1 contenteditable="true" class="title">Your Post Title</h1>
                    </div>
                </div>
            </section>
            <section class="is-single is-mobile is-centered">
                <div class="hero">
                    <div class="upbutton dropbox button is-medium">
                        <span class="icon is-small">
                          <i class="fa fa-picture-o fa-3x"></i>
                        </span>
                        <input class="input-file" type="file" accept="image/*" onchange="document.getElementById('heroimg').src = window.URL.createObjectURL(this.files[0])">

                    </div>
                    <img id="heroimg"/>
                </div>
                <div class=" add-post columns is-mobile aligner">
                    <div id="target" class="editable column is-6 is-offset-3 body">
                        <p>Write something..</p>
                    </div>
                </div>
            </section>
		</form>
	</div>
</template>

<script>
    tinymce.init({
        selector: 'div.editable',
        body_class: 'body',
        content_css: '/static/css/addpost.css',
        font_formats: 'Lora=lora,serif',
        theme: "inlite",
        theme_advanced_buttons1: "styleselect",
        inline: true,
        selection_toolbar: 'bold italic | quicklink h1 h2 blockquote div',
        plugins: 'image table link paste contextmenu textpattern autolink code',
        insert_toolbar: 'quickimage quicktable',
        image_class_list: [
            {title: 'None', value: ''},
            {title: 'Hero', value: 'hero'},
        ]

    });

    //disable footer for a no-distractions writing experience
    $(document).ready(function () {
        var f = $('footer');
        f.css('display', 'none');
    });
   // Class swap for responsiveness & crap
    var breakp = $(window).width();
    $(document).ready(function hotSwap() {
        var target = $('#target');
        if (breakp < 1264) {
            target.removeClass('is-6 is-offset-3');
            target.addClass('is-8 is-offset-2');
        }
    });

    export default {
        name: 'new-post',
    }
</script>

<style scoped lang="css">
    .editable{
        font-family:'Lora', serif !important;
    }
    #name {
        padding-bottom: 0;
    }

    small {
        font-size: .675em;
    }

    [contenteditable]:focus {
        outline: 0px solid transparent;
    }

    .card.card-content p {
        color: var(--text) !important;
    }

    .card-content h2 {
        font-size: 1.35em;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .column.handle.has-text-right p {
        font-size: .7em;
    }

    .body p {
        color: var(--title);
        font-size: 1.2em;
        font-weight: 400;
        font-style: normal;
        font-size: 21px;
        line-height: 1.58;
        letter-spacing: -.003em;
        font-family:'Lora', serif !important;
    }
    h1 {
        padding-bottom: .7em;
        font-family: 'Lora', serif !important;
        color: var(--titlu)
    }

    h2 {
        padding-top: 2em;
        padding-bottom: 1.5em;
        font-size: 1.8em;
        font-weight: 600;
        font-family: 'Lora', serif !important;
        color: var(--titlu)
    }

    p {
        font-family: 'Lora', serif !important;
        color: var(--text);
        padding: 1em 0 1em 0;
    }

    p strong {
        font-family: 'Lora', serif !important;
        color: var(--subtitlu)
    }

    .img-circle {
        border-radius: 50%;
        margin-top: 0 !important;
    }

    figure img {
        width: 36px;
    }
    figure.image{
        border: none;
        background-color: transparent;
    }

    .media-left {
        width: 7%;
    }

    figure img.auth-avatar {
        width: 50%;
    }

    small {
        padding-left: 2em;
    }

    .box {
        padding-top: 2em;
        webkit-box-shadow: none;
        box-shadow: none;
    }

    img.social {
        max-height: 15px;
        max-width: 20px;
    }

    .hero {
        padding-bottom: 2em;
    }
    .dropbox{
        align-self: center;
        background: var(--gri);
        /*width: 90px;*/
        position: relative;
        cursor: pointer;
    }
    .input-file {
        opacity: 0; /* invisible but it's there! */
        width: 100%;
        height: 90px;
        position: absolute;
        cursor: pointer;
    }

    .button .icon:first-child:not(:last-child){
        margin-left: 0;
        margin-right: 0;
    }
    .icon.is-small .fa{
        font-size: 40px;
        color: var(--text);
    }

    @media screen and (max-width: 430px) {
        p {
            font-size: 1em !important;
            padding: .4em 0 .4em 0;
        }

    }
</style>

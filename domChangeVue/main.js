var app = new Vue ({
    el: '#app',
    data: {
        animal: 'Wolves',
        images: [
            { file: './images/wolf.bmp' },
            { file: 'https://th.bing.com/th/id/OIP.AqkF_131YtWtRf_u10IMOQHaLH?pid=Api&rs=1' },
            { file: 'https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/50417W_DogSidebar_0.jpg?itok=B2nqMim0' },
            { file: 'http://wolf.org/wp-content/uploads/2013/08/wcs_10_5_09-66.jpg'}]
    }
})
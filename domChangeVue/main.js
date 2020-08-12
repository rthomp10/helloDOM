var app = new Vue ({
    el: '#app',
    data: {
        animal: 'Wolves',
        images: [
            { src: './images/wolf.bmp',
              alt: "A cool looking wolf"},
            { src: 'https://th.bing.com/th/id/OIP.AqkF_131YtWtRf_u10IMOQHaLH?pid=Api&rs=1',
              alt: "The intimidating wolf"},
            { src: 'https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/50417W_DogSidebar_0.jpg?itok=B2nqMim0',
              alt: "Sus wolf" },
            { src: 'http://wolf.org/wp-content/uploads/2013/08/wcs_10_5_09-66.jpg',
              alt: "Cute wolf couple"}],
        correctWolfValue: true,
        message: ""
    },
    methods: {
      titleChange: function (img) {
        this.animal = img.alt;
      },

      wolfValueOkay: function () {
        if(this.message > 0 && this.message < this.images.length) {
          this.correctWolfValue = true;
          console.log("Wolf number in range");
        }
        else {
          this.correctWolfValue = false;
          console.log("Wolf number out of range");
        }
      }
    }
})
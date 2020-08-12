Vue.component('wolf-list', {
  props: ['wolf'],
  template: '<li>{{wolf.alt}}</li>'
})

var app = new Vue ({
    el: '#app',
    data: {
        animal: 'wolves',
        images: [
            { src: './images/wolf.bmp',
              alt: "A cool looking wolf"},
            { src: 'https://th.bing.com/th/id/OIP.AqkF_131YtWtRf_u10IMOQHaLH?pid=Api&rs=1',
              alt: "The intimidating wolf"},
            { src: 'https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/50417W_DogSidebar_0.jpg?itok=B2nqMim0',
              alt: "Sus wolf" },
            { src: 'http://wolf.org/wp-content/uploads/2013/08/wcs_10_5_09-66.jpg',
              alt: "Cute wolf couple"}],
        wolfId: ""
    },
    computed: {
        wolfIdValid() { 
            if((this.wolfId > 0 && this.wolfId < this.images.length + 1) || this.wolfId == "" && typeof this.wolfId !== "number") {
                if( !this.wolfId == "" ) 
                    this.titleChange(this.wolfId-1);
                return true; 
            }
            else { return false; }
        }
    },
    methods: {
      titleChange: function (img) {
        if(typeof img === "object") {
            this.animal = img.alt;
            this.wolfId = "";
        }
        else if(typeof img === "number") {
            this.animal = this.images[img].alt;
        }
      }
    }
})
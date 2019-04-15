var slideshow = {
    photoList: ['Can1', ['Can2'],['Can3']],
    currentPhotoIndex: 0,
    nextPhoto: function(){
      for(this.currentPhotoIndex = 0; this.currentPhotoIndex < this.photoList.length; this.currentPhotoIndex++){
        console.log(this.photoList[this.currentPhotoIndex].toString());
      } 
      console.log('End of Slide');
    },
    prevPhoto: function(){
      for(this.currentPhotoIndex = this.photoList.length; this.currentPhotoIndex > 0; this.currentPhotoIndex--){
        console.log(this.photoList[this.currentPhotoIndex-1].toString());
      }
      console.log('End of Slide');
    },
    getCurrentPhoto: function(){
      
      console.log(this.photoList[this.currentPhotoIndex]);
    }
  }
  
  ​
  slideshow.nextPhoto();
  slideshow.prevPhoto();
  slideshow.getCurrentPhoto();
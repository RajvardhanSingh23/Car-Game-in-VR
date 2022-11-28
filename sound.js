
AFRAME.registerComponent("sound1", {
    init: function () {
      this.move();
    },
    move: function () {
      window.addEventListener("keydown", (e) => {
        if (
          e.key === "ArrowUp"
        ) {
          var entity = document.querySelector("#sound-accelerate");
         entity.components.sound.playSound();
  //        entity.sound.playSound()  
  
        }
      });
    },
  });
  
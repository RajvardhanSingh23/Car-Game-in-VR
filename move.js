AFRAME.registerComponent("move", {
    // schema: {
    //   speed: { type: "number", default: 0 },
    // },

    init: function () {

        var duration = 120;
        const timerEl = document.querySelector("#timer");

        window.addEventListener("keydown", (e) => {

          var car1 = document.querySelector('#racingCar')

          var cam1 = document.querySelector('#camera')
          var camPos = cam1.getAttribute('position')

          var carPos = car1.getAttribute("position");
          var carRot = car1.getAttribute("rotation")
            console.log(carPos)
          if (e.key === "ArrowRight") {
                carPos.x += 0.5;
                carRot.y -= 5
                car1.setAttribute("position", carPos);
                car1.setAttribute("rotation",{x:carRot.x,y:carRot.y,z:carRot.z})
                cam1.setAttribute('position',{x:carPos.x,y:carPos.y+5,z:carPos.z+4})

          }
           
          if (e.key === "ArrowLeft") {
              carPos.x -= 0.5;
              carRot.y += 5
              car1.setAttribute("position", carPos);
              car1.setAttribute("rotation",{x:carRot.x,y:carRot.y,z:carRot.z})
              cam1.setAttribute('position',{x:carPos.x,y:carPos.y+5,z:carPos.z+4})

          }

          if (e.key === "ArrowUp") {
              //console.log(carPos.x)
              carPos.z -= 0.5;
              car1.setAttribute("position",{x:carPos.x,y:carPos.y,z:carPos.z} );
              cam1.setAttribute('position',{x:carPos.x,y:carPos.y+5,z:carPos.z+4})

              this.startTimer(duration, timerEl);


          }

          if (e.key === "ArrowDown") {
              carPos.z += 0.5;
              car1.setAttribute("position", carPos);
              cam1.setAttribute('position',{x:carPos.x,y:carPos.y+5,z:carPos.z+4})

          }
        });
      },


      startTimer: function (duration, timerEl) {
        var minutes;
        var seconds;
    
        var timer = setInterval(countDown,1000);
    
        function countDown() {
          if (duration >= 0) {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
    
            if (minutes < 10) {
              minutes = "0" + minutes;
            }
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
    
            timerEl.setAttribute("text", {
              value: minutes + ":" + seconds,
            });
    
            duration -= 1;
          } 
          else {
            this.gameOver()
          }
        }
      },

})







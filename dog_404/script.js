function getPosition(obj) {
  let top = 0;
  let left = 0;
  while (obj && obj.tagName.toUpperCase() !== "BODY") {
    top += obj.offsetTop - obj.scrollTop;
    left += obj.offsetLeft - obj.scrollLeft;
    obj = obj.parentElement;
  }
  return {
    top: top,
    left: left,
  };
}

document.addEventListener("mousemove", function (e) {
  const dog = document.querySelector(".dog");
  const eyes = dog.querySelector(".dog-eyes");
  const eyeLeft = eyes.querySelector(".dog-eye.left");
  const eyeRight = eyes.querySelector(".dog-eye.right");
  const nose = dog.querySelector(".dog-nose");
  const lips = dog.querySelector(".dog-lips");
  const slice = dog.querySelector(".slice");
  const ocularLeft = dog.querySelector(".dog-ocular.left");
  const ocularRight = dog.querySelector(".dog-ocular.right");

  const eyesXY = getPosition(eyes);
  const left = eyesXY.left;
  const top = eyesXY.top;

  const calcX = -(100 - (e.pageX / left) * 100);
  const calcY = -((100 - (e.pageY / top) * 100) * 0.2);

  const calcXNose = -((100 - (e.pageX / left) * 100) * 0.1);
  const calcYNose = -((100 - (e.pageY / top) * 100) * 0.02);

  eyeLeft.style.setProperty("--moveX", calcX + "%");
  eyeLeft.style.setProperty("--moveY", calcY + "%");

  eyeRight.style.setProperty("--moveX", calcX + "%");
  eyeRight.style.setProperty("--moveY", calcY + "%");

  ocularLeft.style.setProperty("--moveX", -110 + calcXNose + "%");
  ocularRight.style.setProperty("--moveX", calcXNose + "%");

  nose.style.setProperty("--moveX", -50 + calcXNose + "%");
  nose.style.setProperty("--moveY", calcYNose + "%");
  lips.style.setProperty("--moveX", -50 + calcXNose + "%");
  lips.style.setProperty("--moveY", calcYNose + "%");

  slice.style.setProperty("--moveX", calcXNose + "%");
  slice.style.setProperty("--moveY", calcYNose + "%");
});

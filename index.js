const bgAnimation = document.getElementById("bgAnimation");

const noOfColorBoxes=400;

for(let i=0; i<noOfColorBoxes;i++){
    const colorBox = document.createElement('div');
    colorBox.classList.add(colorBox);
    bgAnimation.append(colorBox);

}
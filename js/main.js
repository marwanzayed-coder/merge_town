let duration = 1000,
  blocksContainer = document.querySelector(".game"),
  blocks = Array.from(blocksContainer.children),
  orderRange = Array.from(Array(blocks.length).keys());

blocks.forEach((block, index) => {
  setTimeout(() => {
    block.innerHTML = block.getAttribute("data-text");
  }, duration);
  block.addEventListener("click", function () {
    ClickBox(block);
  });
});
let AllUnBoxs = blocks.filter((block) => !block.getAttribute("data-text"));
addBlocks(AllUnBoxs);
function ClickBox(selectedBlock) {
  selectedBlock.classList.add("is-clicked");
  let allClickedBlocks = blocks.filter((ClickedBlock) =>
    ClickedBlock.classList.contains("is-clicked")
  );
  if (allClickedBlocks.length === 2) {
    stopClicking();
    checkMergedBlocks(allClickedBlocks[0], allClickedBlocks[1]);
  }
}

function stopClicking() {
  blocksContainer.classList.add("no-clicking");
  setTimeout(() => {
    blocksContainer.classList.remove("no-clicking");
  }, duration);
}

function checkMergedBlocks(firstBlock, secondBlock) {
  if (firstBlock.dataset.text === secondBlock.dataset.text) {
    let blocknum = Number(secondBlock.getAttribute("data-text"));
    firstBlock.classList.remove("is-clicked");
    secondBlock.classList.remove("is-clicked");
    firstBlock.innerHTML = "";
    firstBlock.removeAttribute("data-text");
    secondBlock.setAttribute("data-text", ++blocknum);
    console.log();
    secondBlock.innerHTML++;
  } else {
    setTimeout(() => {
      firstBlock.classList.remove("is-clicked");
      secondBlock.classList.remove("is-clicked");
    }, duration);
  }
}

function addBlocks(boxs) {
  setInterval(() => {
    let boxsLength = boxs.length;
    let box = boxs[Math.floor(Math.random() * boxsLength)];
    let blocknum = Number(box.getAttribute("data-text"));
    if (!box.getAttribute("data-text") == "1") {
      setTimeout(() => {
        console.log("Test");
        box.setAttribute("data-text", ++blocknum);
        box.innerHTML = blocknum;
      }, 4000);
    }
  }, 4000);
}

// function saveGame(blocks) {
//   localStorage.setItem("blocks", blocks.innerHTML);
// }

// setInterval(() => {
//   saveGame(blocksContainer);
// }, 1000);

// if (localStorage.getItem("blocks")) {
//   blocksContainer.innerHTML = localStorage.getItem("blocks");
// }

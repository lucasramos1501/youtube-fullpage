const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const container = document.querySelector(".container");
    const containerStart = document.querySelector(".container-start");
    const input = document.querySelector("input");
    let isRemoved = false;

    var url = new URL(input.value);

    videoID = url.searchParams.get("v");

    console.log(videoID);

    removeContainerStart(container, containerStart, isRemoved);

    var iframe = document.createElement("iframe");
    iframe.classList.add("videoDinamicBanner");
    iframe.style.width = "100vw";
    iframe.style.height = "95vh";

    iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoID + "?autoplay=1&controls=1&");
    iframe.setAttribute("allow", "autoplay");

    var btnAfter = document.createElement("button");
    btnAfter.classList.add("btn");
    btnAfter.innerHTML = "Click aqui para parar";
    btnAfter.style.backgroundColor = "white";
    btnAfter.style.color = "royalblue";
    btnAfter.style.display = "block";


    container.appendChild(iframe);
    container.appendChild(btnAfter);

})

function removeContainerStart(container, containerStart, isRemoved) {
    container.removeChild(containerStart);
    return isRemove = true;
}
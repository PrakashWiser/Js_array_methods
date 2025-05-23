function handleclick() {
    document.body.style.backgroundColor = "lightgray"
    document.getElementById("parent").style.display = "block"
    document.getElementById("parent").style.backgroundColor = "white"
}
function closeclick() {
    document.getElementById("parent").style.display = "none"
    document.body.style.backgroundColor = "white"
}
function Accordion1() {
    let htmlData = document.getElementById('button1').innerHTML
    console.log(htmlData);
    if (htmlData == 'Accordion1') {
        document.getElementById("Accordion1").style.display = "block"
        document.getElementById('button1').innerHTML = 'Accordion open'
    } else {
        document.getElementById("Accordion1").style.display = "none"
        document.getElementById('button1').innerHTML = 'Accordion1'
    }

}
function Accordion2() {
    let htmlData = document.getElementById('button2').innerHTML
    console.log(htmlData);
    if (htmlData == 'Accordion2') {
        document.getElementById("Accordion2").style.display = "block"
        document.getElementById('button2').innerHTML = 'Accordion open'
    } else {
        document.getElementById("Accordion2").style.display = "none"
        document.getElementById('button2').innerHTML = 'Accordion2'
    }
}
function Accordion3() {
    let htmlData = document.getElementById('button3').innerHTML
    console.log(htmlData);
    if (htmlData == 'Accordion3') {
        document.getElementById("Accordion3").style.display = "block"
        document.getElementById('button3').innerHTML = 'Accordion open'
    } else {
        document.getElementById("Accordion3").style.display = "none"
        document.getElementById('button3').innerHTML = 'Accordion3'
    }
}
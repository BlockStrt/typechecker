const sentenceTag = document.querySelector(`input[type="text"]`)
const outputTag = document.querySelector("textarea.output")
const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector(`span.typesize-output`)

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")
const originalText = outputTag.value;


const italicTag = document.querySelector(`input[name="italic"]`)
const typefaceTag = document.querySelector(`select[name="typeface"]`)
const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOut = document.querySelector("span.fontweight-output")

const colorTags = document.querySelectorAll("div.colors div")







// when i type in my sentence tag update the output accordingly
// if there is no value put in original text
sentenceTag.addEventListener("keyup", function(){
    if (this.value){
        outputTag.value = this.value
    } else {
        outputTag.value = originalText
    }
})

// when i type in the output tag update the sentence tage

outputTag.addEventListener("keyup", function(){
    sentenceTag.value = this.value
})

//when i change the typpe size slider update text next to it
// and change the output tags fontsize
typesizeTag.addEventListener("input", function(){
    outputTag.style.fontSize = this.value + 'px'
    typesizeOutput.innerHTML = this.value + 'px'
})

fontweightTag.addEventListener("input", function(){
    outputTag.style.fontWeight = this.value
    fontweightOut.innerHTML = this.value
})

lineheightTag.addEventListener("input", function(){
    outputTag.style.lineHeight = this.value
    lineheightOutput.innerHTML = this.value
})

//When i change the italic text update font to either normal or italic

italicTag.addEventListener("change", function(){
 if (this.checked){
     outputTag.style.fontStyle = "italic"
 } else {
     outputTag.style.fontStyle = "normal"
 }
})
//When i change my select for typeface update font family

typefaceTag.addEventListener("input", function(){
    outputTag.style.fontFamily = this.value
})

//Go through all of my color tags
//when clicked change background color and text

colorTags.forEach(tag => {

    tag.addEventListener("click", function(){
        outputTag.style.backgroundColor = this.style.backgroundColor
        outputTag.style.color = this.style.color

        //reset the classes
        colorTags.forEach(tag => {
            tag.classList.remove("selected")
        })
        //only to this clicked one
        this.classList.add("selected")
    })
})


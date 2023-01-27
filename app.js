const searchBtn = document.querySelector(".search");

searchBtn.addEventListener("click", () => {

    const searchValue = document.querySelector(".search-box").value;
    console.log(searchValue)


    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
      .then((respone) => respone.json())
      .then((data) => {
        const name = data[0].word;
        const phonetic = data[0].phonetic;
        const partOfSpeech = data[0].meanings[0].partOfSpeech;
        const meaning = data[0].meanings[0].definitions[0].definition;
        const audioFile = data[0].phonetics[1].audio;
        console.log(audioFile)
    
        const updateName = document.querySelector(".name");
        const updatePhonetic = document.querySelector(".phonetic");
        const updateSpeech = document.querySelector(".partofspeech");
        const updateMeaning = document.querySelector(".meaning");
    
        updateName.textContent = name
        updatePhonetic.textContent = phonetic
        updateSpeech.textContent = partOfSpeech
        updateMeaning.textContent = meaning
        
        const playBtn = document.querySelector('.play')

        playBtn.addEventListener("click", () => {
            const mediaFile = document.querySelector('.media')
            mediaFile.src = audioFile
            mediaFile.play()
        })
      });
})





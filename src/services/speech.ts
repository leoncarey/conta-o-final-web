class SpeechService {
  // language: string,
  static talk(text: string) {
    if (SpeechService.checkSpeechOnBrowser()) {
      // Configure voice
      const speech = new SpeechSynthesisUtterance()

      // speech.voice = await _configVoice(language)
      speech.text = text
      speech.lang = 'pt-BR' // language.replace('_', '-')
      speech.pitch = 0.6
      speech.rate = 1.3

      SpeechService.stopTalk()

      // Finally Speech
      window.speechSynthesis.speak(speech)
    } else {
      throw new Error('A versão do seu navegador não permite')
    }
  }

  static checkSpeechOnBrowser() {
    return window.speechSynthesis.speak !== undefined
  }

  static stopTalk() {
    window.speechSynthesis.cancel()
  }
}

// const _configVoice = async (language: string) => {
//   const voices = await window.speechSynthesis.getVoices()
//   return voices[16]
// }

export default SpeechService

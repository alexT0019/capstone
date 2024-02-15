import './AugmentedReality.css'

import { useRef, useState } from "react"

// npm i @tensorflow/tfjs
import classes from './lib/tf'
import * as tf from "@tensorflow/tfjs"
import * as cocoSsd from "@tensorflow-models/coco-ssd"

// const minMax = (n, min, max) => n < min ? min : n > max ? max : n


const reader = new FileReader()
let image = document.createElement('img')

const synth = window.speechSynthesis

function AugmentedReality() {
    const DEV = false
    const testPrediction = {english: "test", cantonese: "test", bbox: {}}
    const testImg = "https://picsum.photos/800/800"
    const [prediction, $prediction] = useState(DEV ? testPrediction : null)
    const [img, $img] = useState(DEV ? testImg : null)
    const [loading, $loading] = useState(false)
    
    
      const input = useRef()
    
      function getCantoneseWord(predictions) {
          return classes[predictions[0]?.class]
      }
      
      reader.addEventListener('load', predict)
      
      function readFile(input) {
          if (input.files.length < 1) {
              alert('you must choose a file first')
              return
          }
          $loading('Reading file.')
          reader.readAsDataURL(input.files[0])
      }
      
      async function predict(e) {
          image.src = e.target.result
          // console.log("Image:")
          // console.dir(image)
  
          $img(e.target.result)
      
          // Load the model.
          // something is causing a memory leak, I think it's this. I think this needs to be loaded once instead of every time predict is called.
          $loading("Loading tensorflow.")
          const model = await cocoSsd.load()
  
          // detect objects in the image.
          $loading("Scanning image.")

          const predictions = await model.detect(image)
          console.log(predictions)
      
          console.log('Predictions: ', predictions);
          let cantonese = getCantoneseWord(predictions)
          const [x, y, w, h] = predictions[0]?.bbox
          $prediction({
              english: predictions[0]?.class,
              bbox: {
                  left: (x/image.naturalWidth*100)+'%',
                  top: (y/image.naturalHeight*100)+'%',
                  width: (w/image.naturalWidth*100)+'%',
                  height: (h/image.naturalHeight*100)+'%'
              },
              cantonese
          })
          $loading(false)
      }
  
  
      function handlePredict(e) {
          if (loading) return
          $prediction(null)
          $loading("Starting prediction.")
          readFile(input.current)
      }
  
      function readCantonese(word) {
          console.log('attempting speech...')
          const utterance = new SpeechSynthesisUtterance(word)
          utterance.lang = "zh-HK"
          synth.speak(utterance)
      }
  
      return (
          <>
              <div>
                  <input type="file" accept="image/*" ref={input} />
                  <button onClick={handlePredict}>predict</button>
                  <br />
                  <div id="prediction-container">
                      {loading && (
                          <>
                              Loading. This may take a while... <span className="loading-icon">⭐</span> <br />
                              {loading}
                          </>
                      )}
                      {(prediction && !loading) ? (
                          <div id="prediction">
                              <img src={img} alt={prediction.english}/>
                              <div className="prediction_text">
                                  <div className="prediction_eng">
                                      English: {prediction.english}
                                  </div>
                                  <div className="prediction_can">
                                      Cantonese: {prediction.cantonese}
                                      <button onClick={()=>{readCantonese(prediction.cantonese)}}>
                                          🔊
                                      </button>
                                  </div>
                              </div>
                              <div className="rect" style={{
                                  position: 'absolute',
                                  left: prediction.bbox.left,
                                  top: prediction.bbox.top,
                                  width: prediction.bbox.width,
                                  height: prediction.bbox.height,
                              }}>
                              </div>
                          </div>
                      ):!loading&&(
                          <>
                              Upload an image to see a translation!
                          </>
                      )}
                  </div>
              </div>
          </>
      )
}
export default AugmentedReality;
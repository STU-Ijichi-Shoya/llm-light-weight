// Copyright 2024 The MediaPipe Authors.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//      http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// ---------------------------------------------------------------------------------------- //

import {FilesetResolver, LlmInference} from 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai';
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const input = document.getElementById('input');
const output = ''
const submit = document.getElementById('submit');
const outputArea = document.getElementById('outputArea');
const status = document.getElementById('status')

const modelFileName = 'https://objectstorage.ap-osaka-1.oraclecloud.com/n/axzkxwozwemt/b/bucket-20240330-1634/o/Gemma2b-gpugemma-2b-it-gpu-int4.bin'


const markedOptions = {
  highlight: (code, lang) => {
      return (
          '<code class="hljs">' + highlight.highlightAuto(code).value + '</code>'
      );
  }
}

/**
 * Display newly generated partial results to the output text box.
 */
function displayPartialResults(partialResults, complete) {
  output += partialResults;

  outputArea.innerHTML=marked.parse(output, markedOptions)

  if (complete) {
    if (!output.textContent) {
      output = 'Result is empty';
    }
    submit.disabled = false;
    hljs.highlightAll();
  }
}

/**
 * Main function to run LLM Inference.
 */
async function runDemo() {
  const genaiFileset = await FilesetResolver.forGenAiTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai/wasm');
  let llmInference;

  submit.onclick = () => {
    output.textContent = '';
    submit.disabled = true;
    llmInference.generateResponse(input.value, displayPartialResults);
  };

  submit.value = 'Loading the model...'
  status.textContent='model loading... wait about 10 min'
  LlmInference
      .createFromOptions(genaiFileset, {
        baseOptions: {modelAssetPath: modelFileName},
        // maxTokens: 512,  // The maximum number of tokens (input tokens + output
        //                  // tokens) the model handles.
        // randomSeed: 1,   // The random seed used during text generation.
        // topK: 1,  // The number of tokens the model considers at each step of
        //           // generation. Limits predictions to the top k most-probable
        //           // tokens. Setting randomSeed is required for this to make
        //           // effects.
        // temperature:
        //     1.0,  // The amount of randomness introduced during generation.
        //           // Setting randomSeed is required for this to make effects.
      })
      .then(llm => {
        llmInference = llm;
        submit.disabled = false;
        submit.value = 'Compute Response'
        status.textContent=''
      })
      .catch(() => {
        alert('Failed to initialize the task.');
      });
}

runDemo();

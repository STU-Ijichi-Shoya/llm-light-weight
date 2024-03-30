<!-- Copyright 2024 The MediaPipe Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. -->

<!doctype html>
<html lang="ja">

<head>
    <title>LLM Local Inference </title>
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown-light.min.css"
        integrity="sha512-Pmhg2i/F7+5+7SsdoUqKeH7UAZoVMYb1sxGOoJ0jWXAEHP0XV2H4CITyK267eHWp2jpj7rtqWNkmEOw1tNyYpg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/default.min.css">
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/highlight.min.js"></script>    
    <style>
        .inputContainer{
            border: 1px solid black;
            width: fit-content;
            height: fit-content;
        }
        textarea{
            border: none;
            border-bottom: 1px solid black;
        }
        .senderControll{
            display: flex;
            justify-content: right;
        }
    </style>
</head>

<body>
    Input:
    <div class="inputContainer">
        <textarea id="input" style="height: 300px; width: 600px"></textarea><br />
        <div class="senderControll">
            <p id="status"></p>
            <input type="button" id="submit" value="Compute Response" disabled /><br />
        </div>
    </div>
    <div class=" " style="max-width: 50%;">
        <p>Result:</p>
        <div id="outputArea" class="balloon2-top markdown-body">
            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Population</td>
                        <td>127,770,000</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>37,770.00 km²</td>
                    </tr>
                    <tr>
                        <td>GDP</td>
                        <td>4,990.00 billion</td>
                    </tr>
                    <tr>
                        <td>GDP per capita</td>
                        <td>3,900.00 USD</td>
                    </tr>
                    <tr>
                        <td>Literacy rate</td>
                        <td>98.3%</td>
                    </tr>
                    <tr>
                        <td>Life expectancy</td>
                        <td>80.3 years</td>
                    </tr>
                    <tr>
                        <td>Infant mortality rate</td>
                        <td>10.3%</td>
                    </tr>
                    <tr>
                        <td>Foreign direct investment</td>
                        <td>1,000.00 billion</td>
                    </tr>
                    <tr>
                        <td>Government spending</td>
                        <td>1,000.00 billion</td>
                    </tr>
                    <tr>
                        <td>Foreign aid</td>
                        <td>100.00 billion</td>
                    </tr>
                    <tr>
                        <td>Energy production</td>
                        <td>37,770.00 MW</td>
                    </tr>
                    <tr>
                        <td>Industry</td>
                        <td>1,700.00 industries</td>
                    </tr>
                    <tr>
                        <td>Agriculture</td>
                        <td>60% of GDP</td>
                    </tr>
                    <tr>
                        <td>Manufacturing</td>
                        <td>20% of GDP</td>
                    </tr>
                    <tr>
                        <td>Trade</td>
                        <td>10% of GDP</td>
                    </tr>
                    <tr>
                        <td>Tourism</td>
                        <td>5% of GDP</td>
                    </tr>
                    <tr>
                        <td>Education</td>
                        <td>10% of GDP</td>
                    </tr>
                    <tr>
                        <td>Healthcare</td>
                        <td>5% of GDP</td>
                    </tr>
                    <tr>
                        <td>Innovation</td>
                        <td>5% of GDP</td>
                    </tr>
                    <tr>
                        <td>Science</td>
                        <td>5% of GDP</td>
                    </tr>
                    <tr>
                        <td>Culture</td>
                        <td>5% of GDP</td>
                    </tr>
                    <tr>
                        <td>Environment</td>
                        <td>5% of GDP</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <script type="module" src="index.js"></script>
</body>

</html>

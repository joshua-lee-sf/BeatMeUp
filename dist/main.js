/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas */ \"./src/scripts/canvas.js\");\n/* harmony import */ var _scripts_audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/audio */ \"./src/scripts/audio.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmVhdGl0dXAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICcuL3NjcmlwdHMvY2FudmFzJztcbmltcG9ydCBfXyBmcm9tICcuL3NjcmlwdHMvYXVkaW8nO1xuXG4iXSwibmFtZXMiOlsiXyIsIl9fIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/audio.js":
/*!******************************!*\
  !*** ./src/scripts/audio.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchJamendoSound\": function() { return /* binding */ fetchJamendoSound; }\n/* harmony export */ });\nconst youtubeAPI = 'https://thibaultjanbeyer.github.io/YouTube-Free-Audio-Library-API/api.json';\nlet freeSoundAPI;\nfunction jamendoRandomID(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min) + min);\n}\n;\nasync function fetchJamendoSound() {\n  let jamendoID = jamendoRandomID(10, 250100);\n  let jamendoAPI = `https://api.jamendo.com/v3.0/tracks?client_id=096b8c72&id=${jamendoID}`;\n  try {\n    let res = await fetch(jamendoAPI);\n    let body = await res.json();\n    console.log(body, 'body');\n    if (body.results.length === 1) {\n      body.results[0].audio;\n    } else {\n      return await fetchJamendoSound();\n    }\n    ;\n  } catch (err) {\n    console.log(err);\n  }\n  ;\n}\nlet audioAPI = document.getElementById('music-api-selector');\nlet generateRandomSound = document.getElementById('random-api-sound-generator');\nif (audioAPI.value === 'jamendoAPI') {\n  generateRandomSound.addEventListener('click', fetchJamendoSound());\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hdWRpby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsVUFBVSxHQUFHLDRFQUE0RTtBQUMvRixJQUFJQyxZQUFZO0FBRWhCLFNBQVNDLGVBQWVBLENBQUNDLEdBQUcsRUFBQ0MsR0FBRyxFQUFDO0VBQy9CRCxHQUFHLEdBQUdFLElBQUksQ0FBQ0MsSUFBSSxDQUFDSCxHQUFHLENBQUM7RUFDcEJDLEdBQUcsR0FBR0MsSUFBSSxDQUFDRSxLQUFLLENBQUNILEdBQUcsQ0FBQztFQUNyQixPQUFPQyxJQUFJLENBQUNFLEtBQUssQ0FBQ0YsSUFBSSxDQUFDRyxNQUFNLEVBQUUsSUFBSUosR0FBRyxHQUFHRCxHQUFHLENBQUMsR0FBR0EsR0FBRyxDQUFDO0FBQ3REO0FBQUM7QUFFTSxlQUFlTSxpQkFBaUJBLENBQUEsRUFBRztFQUN4QyxJQUFJQyxTQUFTLEdBQUdSLGVBQWUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDO0VBQzNDLElBQUlTLFVBQVUsR0FBSSw2REFBNERELFNBQVUsRUFBQztFQUN6RixJQUFHO0lBQ0QsSUFBSUUsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsVUFBVSxDQUFDO0lBQ2pDLElBQUlHLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksRUFBRSxNQUFNLENBQUM7SUFDekIsSUFBSUEsSUFBSSxDQUFDSSxPQUFPLENBQUNDLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDN0JMLElBQUksQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxLQUFLO0lBQ3ZCLENBQUMsTUFBTTtNQUNMLE9BQU8sTUFBTVgsaUJBQWlCLEVBQUU7SUFDbEM7SUFBQztFQUNELENBQUMsQ0FDRCxPQUFPWSxHQUFHLEVBQUU7SUFDWkwsT0FBTyxDQUFDQyxHQUFHLENBQUNJLEdBQUcsQ0FBQztFQUNsQjtFQUFDO0FBQ0g7QUFFQSxJQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG9CQUFvQixDQUFDO0FBQzVELElBQUlDLG1CQUFtQixHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQztBQUUvRSxJQUFJRixRQUFRLENBQUNJLEtBQUssS0FBSyxZQUFZLEVBQUU7RUFDbkNELG1CQUFtQixDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVsQixpQkFBaUIsRUFBRSxDQUFDO0FBQ3BFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmVhdGl0dXAvLi9zcmMvc2NyaXB0cy9hdWRpby5qcz8xMDdjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHlvdXR1YmVBUEkgPSAnaHR0cHM6Ly90aGliYXVsdGphbmJleWVyLmdpdGh1Yi5pby9Zb3VUdWJlLUZyZWUtQXVkaW8tTGlicmFyeS1BUEkvYXBpLmpzb24nIDtcbmxldCBmcmVlU291bmRBUEk7XG5cbmZ1bmN0aW9uIGphbWVuZG9SYW5kb21JRChtaW4sbWF4KXtcbiAgbWluID0gTWF0aC5jZWlsKG1pbilcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hKYW1lbmRvU291bmQoKSB7XG4gIGxldCBqYW1lbmRvSUQgPSBqYW1lbmRvUmFuZG9tSUQoMTAsIDI1MDEwMCk7XG4gIGxldCBqYW1lbmRvQVBJID0gYGh0dHBzOi8vYXBpLmphbWVuZG8uY29tL3YzLjAvdHJhY2tzP2NsaWVudF9pZD0wOTZiOGM3MiZpZD0ke2phbWVuZG9JRH1gIDtcbiAgdHJ5e1xuICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChqYW1lbmRvQVBJKVxuICAgIGxldCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKGJvZHksICdib2R5JylcbiAgICBpZiAoYm9keS5yZXN1bHRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYm9keS5yZXN1bHRzWzBdLmF1ZGlvXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhd2FpdCBmZXRjaEphbWVuZG9Tb3VuZCgpO1xuICAgIH07XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpXG4gIH07XG59XG5cbmxldCBhdWRpb0FQSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdXNpYy1hcGktc2VsZWN0b3InKVxubGV0IGdlbmVyYXRlUmFuZG9tU291bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tLWFwaS1zb3VuZC1nZW5lcmF0b3InKVxuXG5pZiAoYXVkaW9BUEkudmFsdWUgPT09ICdqYW1lbmRvQVBJJykge1xuICBnZW5lcmF0ZVJhbmRvbVNvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmV0Y2hKYW1lbmRvU291bmQoKSk7XG59Il0sIm5hbWVzIjpbInlvdXR1YmVBUEkiLCJmcmVlU291bmRBUEkiLCJqYW1lbmRvUmFuZG9tSUQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwicmFuZG9tIiwiZmV0Y2hKYW1lbmRvU291bmQiLCJqYW1lbmRvSUQiLCJqYW1lbmRvQVBJIiwicmVzIiwiZmV0Y2giLCJib2R5IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwibGVuZ3RoIiwiYXVkaW8iLCJlcnIiLCJhdWRpb0FQSSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZW5lcmF0ZVJhbmRvbVNvdW5kIiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/audio.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rectangularDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rectangularDrawer */ \"./src/scripts/rectangularDrawer.js\");\n/* harmony import */ var _rectangularDrawer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rectangularDrawer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _circularDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circularDrawer */ \"./src/scripts/circularDrawer.js\");\n/* harmony import */ var _circularDrawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_circularDrawer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio */ \"./src/scripts/audio.js\");\n\n\n\nlet visualizerShape = document.getElementById('shape-selector');\nlet fftSize = document.getElementById('size-selector').value;\n\n//canvas setup\nwindow.canvas = document.getElementById('visualizer-canvas');\nconst canvasCtx = canvas.getContext('2d');\nwindow.canvas.width = window.innerWidth; //might change\nwindow.canvas.height = window.innerHeight; // might change\n\n//audio set up\nconst audioElement = document.getElementById('audio-element');\nlet audioSource;\nlet analyzer;\n\n//visualizer function\nfunction visualizer(drawerFunc) {\n  const audioContext = new AudioContext();\n  audioElement.src = '/Users/joellee/Desktop/AppAcademyGit/Projects/BeatMeUp/assets/682338__henkonen__sax-solo-2.wav'; //change this to the audio source of the element? Maybe in another function?\n  audioSource = audioContext.createMediaElementSource(audioElement);\n  analyzer = audioContext.createAnalyser();\n  audioSource.connect(audioContext.destination);\n  audioSource.connect(analyzer);\n  analyzer.fftSize = fftSize;\n  const bufferLength = analyzer.frequencyBinCount;\n  const dataArray = new Uint8Array(bufferLength);\n  const barWidth = canvas.width / bufferLength;\n  let barHeight;\n  let xPos;\n  function animation() {\n    xPos = 0;\n    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);\n    analyzer.getByteFrequencyData(dataArray);\n    drawerFunc(bufferLength, xPos, barWidth, barHeight, dataArray);\n    requestAnimationFrame(animation);\n  }\n  animation();\n}\n\n// event listeners\nvisualizerShape.addEventListener('change', function () {\n  if (visualizerShape.value === 'rectangle') {\n    audioElement.addEventListener('play', visualizer(rectangleDrawer));\n  } else {\n    audioElement.addEventListener('play', visualizer(circularDrawer));\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9DO0FBQ0Y7QUFDVTtBQUU1QyxJQUFJRyxlQUFlLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGdCQUFnQixDQUFDO0FBQy9ELElBQUlDLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUNFLEtBQUs7O0FBRzVEO0FBQ0FDLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHTCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztBQUM1RCxNQUFNSyxTQUFTLEdBQUdELE1BQU0sQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQztBQUN6Q0gsTUFBTSxDQUFDQyxNQUFNLENBQUNHLEtBQUssR0FBR0osTUFBTSxDQUFDSyxVQUFVLENBQUMsQ0FBQztBQUN6Q0wsTUFBTSxDQUFDQyxNQUFNLENBQUNLLE1BQU0sR0FBR04sTUFBTSxDQUFDTyxXQUFXLENBQUMsQ0FBQzs7QUFFM0M7QUFDQSxNQUFNQyxZQUFZLEdBQUdaLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQztBQUM3RCxJQUFJWSxXQUFXO0FBQ2YsSUFBSUMsUUFBUTs7QUFFWjtBQUNBLFNBQVNDLFVBQVVBLENBQUNDLFVBQVUsRUFBQztFQUM3QixNQUFNQyxZQUFZLEdBQUcsSUFBSUMsWUFBWSxFQUFFO0VBQ3ZDTixZQUFZLENBQUNPLEdBQUcsR0FBRyxnR0FBZ0csQ0FBQyxDQUFDO0VBQ3JITixXQUFXLEdBQUdJLFlBQVksQ0FBQ0csd0JBQXdCLENBQUNSLFlBQVksQ0FBQztFQUNqRUUsUUFBUSxHQUFHRyxZQUFZLENBQUNJLGNBQWMsRUFBRTtFQUN4Q1IsV0FBVyxDQUFDUyxPQUFPLENBQUNMLFlBQVksQ0FBQ00sV0FBVyxDQUFDO0VBQzdDVixXQUFXLENBQUNTLE9BQU8sQ0FBQ1IsUUFBUSxDQUFDO0VBQzdCQSxRQUFRLENBQUNaLE9BQU8sR0FBR0EsT0FBTztFQUMxQixNQUFNc0IsWUFBWSxHQUFHVixRQUFRLENBQUNXLGlCQUFpQjtFQUMvQyxNQUFNQyxTQUFTLEdBQUcsSUFBSUMsVUFBVSxDQUFDSCxZQUFZLENBQUM7RUFFOUMsTUFBTUksUUFBUSxHQUFHdkIsTUFBTSxDQUFDRyxLQUFLLEdBQUNnQixZQUFZO0VBQzFDLElBQUlLLFNBQVM7RUFDYixJQUFJQyxJQUFJO0VBRVIsU0FBU0MsU0FBU0EsQ0FBQSxFQUFFO0lBQ2hCRCxJQUFJLEdBQUcsQ0FBQztJQUNSeEIsU0FBUyxDQUFDMEIsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMzQixNQUFNLENBQUNHLEtBQUssRUFBRUgsTUFBTSxDQUFDSyxNQUFNLENBQUM7SUFDcERJLFFBQVEsQ0FBQ21CLG9CQUFvQixDQUFDUCxTQUFTLENBQUM7SUFDeENWLFVBQVUsQ0FBQ1EsWUFBWSxFQUFFTSxJQUFJLEVBQUVGLFFBQVEsRUFBRUMsU0FBUyxFQUFFSCxTQUFTLENBQUM7SUFDOURRLHFCQUFxQixDQUFDSCxTQUFTLENBQUM7RUFDcEM7RUFFQUEsU0FBUyxFQUFFO0FBQ2I7O0FBRUE7QUFDQWhDLGVBQWUsQ0FBQ29DLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFVO0VBQ25ELElBQUlwQyxlQUFlLENBQUNJLEtBQUssS0FBSyxXQUFXLEVBQUU7SUFDekNTLFlBQVksQ0FBQ3VCLGdCQUFnQixDQUFDLE1BQU0sRUFBRXBCLFVBQVUsQ0FBQ3FCLGVBQWUsQ0FBQyxDQUFDO0VBQ3BFLENBQUMsTUFBTTtJQUNMeEIsWUFBWSxDQUFDdUIsZ0JBQWdCLENBQUMsTUFBTSxFQUFFcEIsVUFBVSxDQUFDc0IsY0FBYyxDQUFDLENBQUM7RUFDbkU7QUFDRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWF0aXR1cC8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcz83YmRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJy4vcmVjdGFuZ3VsYXJEcmF3ZXInO1xuaW1wb3J0IF9fIGZyb20gJy4vY2lyY3VsYXJEcmF3ZXInO1xuaW1wb3J0IHsgZmV0Y2hKYW1lbmRvU291bmQgfSBmcm9tICcuL2F1ZGlvJztcblxubGV0IHZpc3VhbGl6ZXJTaGFwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFwZS1zZWxlY3RvcicpXG5sZXQgZmZ0U2l6ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplLXNlbGVjdG9yJykudmFsdWU7XG5cblxuLy9jYW52YXMgc2V0dXBcbndpbmRvdy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlzdWFsaXplci1jYW52YXMnKTtcbmNvbnN0IGNhbnZhc0N0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xud2luZG93LmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoOyAvL21pZ2h0IGNoYW5nZVxud2luZG93LmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7IC8vIG1pZ2h0IGNoYW5nZVxuXG4vL2F1ZGlvIHNldCB1cFxuY29uc3QgYXVkaW9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1ZGlvLWVsZW1lbnQnKTtcbmxldCBhdWRpb1NvdXJjZTtcbmxldCBhbmFseXplcjtcblxuLy92aXN1YWxpemVyIGZ1bmN0aW9uXG5mdW5jdGlvbiB2aXN1YWxpemVyKGRyYXdlckZ1bmMpe1xuICBjb25zdCBhdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gIGF1ZGlvRWxlbWVudC5zcmMgPSAnL1VzZXJzL2pvZWxsZWUvRGVza3RvcC9BcHBBY2FkZW15R2l0L1Byb2plY3RzL0JlYXRNZVVwL2Fzc2V0cy82ODIzMzhfX2hlbmtvbmVuX19zYXgtc29sby0yLndhdic7IC8vY2hhbmdlIHRoaXMgdG8gdGhlIGF1ZGlvIHNvdXJjZSBvZiB0aGUgZWxlbWVudD8gTWF5YmUgaW4gYW5vdGhlciBmdW5jdGlvbj9cbiAgYXVkaW9Tb3VyY2UgPSBhdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvRWxlbWVudCk7XG4gIGFuYWx5emVyID0gYXVkaW9Db250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gIGF1ZGlvU291cmNlLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgYXVkaW9Tb3VyY2UuY29ubmVjdChhbmFseXplcik7XG4gIGFuYWx5emVyLmZmdFNpemUgPSBmZnRTaXplOyBcbiAgY29uc3QgYnVmZmVyTGVuZ3RoID0gYW5hbHl6ZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gIGNvbnN0IGRhdGFBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlckxlbmd0aCk7XG5cbiAgY29uc3QgYmFyV2lkdGggPSBjYW52YXMud2lkdGgvYnVmZmVyTGVuZ3RoXG4gIGxldCBiYXJIZWlnaHQ7XG4gIGxldCB4UG9zO1xuICBcbiAgZnVuY3Rpb24gYW5pbWF0aW9uKCl7XG4gICAgICB4UG9zID0gMDtcbiAgICAgIGNhbnZhc0N0eC5jbGVhclJlY3QoMCwwLGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICAgIGFuYWx5emVyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGRhdGFBcnJheSk7XG4gICAgICBkcmF3ZXJGdW5jKGJ1ZmZlckxlbmd0aCwgeFBvcywgYmFyV2lkdGgsIGJhckhlaWdodCwgZGF0YUFycmF5KTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICB9XG5cbiAgYW5pbWF0aW9uKCk7XG59XG5cbi8vIGV2ZW50IGxpc3RlbmVyc1xudmlzdWFsaXplclNoYXBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gIGlmICh2aXN1YWxpemVyU2hhcGUudmFsdWUgPT09ICdyZWN0YW5nbGUnKSB7XG4gICAgYXVkaW9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCB2aXN1YWxpemVyKHJlY3RhbmdsZURyYXdlcikpO1xuICB9IGVsc2Uge1xuICAgIGF1ZGlvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgdmlzdWFsaXplcihjaXJjdWxhckRyYXdlcikpO1xuICB9XG59KSJdLCJuYW1lcyI6WyJfIiwiX18iLCJmZXRjaEphbWVuZG9Tb3VuZCIsInZpc3VhbGl6ZXJTaGFwZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmZnRTaXplIiwidmFsdWUiLCJ3aW5kb3ciLCJjYW52YXMiLCJjYW52YXNDdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhdWRpb0VsZW1lbnQiLCJhdWRpb1NvdXJjZSIsImFuYWx5emVyIiwidmlzdWFsaXplciIsImRyYXdlckZ1bmMiLCJhdWRpb0NvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJzcmMiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJjcmVhdGVBbmFseXNlciIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImJ1ZmZlckxlbmd0aCIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZGF0YUFycmF5IiwiVWludDhBcnJheSIsImJhcldpZHRoIiwiYmFySGVpZ2h0IiwieFBvcyIsImFuaW1hdGlvbiIsImNsZWFyUmVjdCIsImdldEJ5dGVGcmVxdWVuY3lEYXRhIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlY3RhbmdsZURyYXdlciIsImNpcmN1bGFyRHJhd2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

/***/ }),

/***/ "./src/scripts/circularDrawer.js":
/*!***************************************!*\
  !*** ./src/scripts/circularDrawer.js ***!
  \***************************************/
/***/ (function() {

eval("let hue = document.getElementById('hue-slider').value;\nlet saturation = document.getElementById('saturation-slider').value;\nlet lightness = document.getElementById('lightness-slider').value;\nlet plainOrRainbow = document.getElementById('rainbow');\nfunction circularDrawer(bufferLength, xPos, barWidth, barHeight, dataArray) {\n  for (let i = 0; i < bufferLength; i++) {\n    barHeight = dataArray[i];\n    canvasCtx.save();\n    canvasCtx.translate(canvas.width / 2, canvas.height / 2);\n    canvasCtx.rotate(i + Math.PI * 2 / bufferLength);\n    hue = plainOrRainbow.value ? hue : hue * 5;\n    canvasCtx.fillStyle = 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';\n    canvasCtx.fillRect(0, 0, barWidth, barHeight);\n    xPos += barWidth;\n    canvasCtx.restore();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaXJjdWxhckRyYXdlci5qcy5qcyIsIm5hbWVzIjpbImh1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInNhdHVyYXRpb24iLCJsaWdodG5lc3MiLCJwbGFpbk9yUmFpbmJvdyIsImNpcmN1bGFyRHJhd2VyIiwiYnVmZmVyTGVuZ3RoIiwieFBvcyIsImJhcldpZHRoIiwiYmFySGVpZ2h0IiwiZGF0YUFycmF5IiwiaSIsImNhbnZhc0N0eCIsInNhdmUiLCJ0cmFuc2xhdGUiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicmVzdG9yZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmVhdGl0dXAvLi9zcmMvc2NyaXB0cy9jaXJjdWxhckRyYXdlci5qcz82MTZkIl0sInNvdXJjZXNDb250ZW50IjpbIlxubGV0IGh1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodWUtc2xpZGVyJykudmFsdWU7XG5sZXQgc2F0dXJhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXR1cmF0aW9uLXNsaWRlcicpLnZhbHVlO1xubGV0IGxpZ2h0bmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWdodG5lc3Mtc2xpZGVyJykudmFsdWU7XG5sZXQgcGxhaW5PclJhaW5ib3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbmJvdycpO1xuXG5mdW5jdGlvbiBjaXJjdWxhckRyYXdlcihidWZmZXJMZW5ndGgsIHhQb3MsIGJhcldpZHRoLCBiYXJIZWlnaHQsIGRhdGFBcnJheSl7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmZmVyTGVuZ3RoOyBpKyspe1xuICAgIGJhckhlaWdodCA9IGRhdGFBcnJheVtpXVxuICAgIGNhbnZhc0N0eC5zYXZlKClcbiAgICBjYW52YXNDdHgudHJhbnNsYXRlKGNhbnZhcy53aWR0aC8yLCBjYW52YXMuaGVpZ2h0LzIpO1xuICAgIGNhbnZhc0N0eC5yb3RhdGUoaSArIE1hdGguUEkgKiAyL2J1ZmZlckxlbmd0aClcbiAgICBodWUgPSBwbGFpbk9yUmFpbmJvdy52YWx1ZSA/IGh1ZSA6IGh1ZSAqIDVcbiAgICBjYW52YXNDdHguZmlsbFN0eWxlID0gJ2hzbCgnICsgaHVlICsgJywgJyArIHNhdHVyYXRpb24gKyAnJSwgJyArIGxpZ2h0bmVzcyArICclKSc7XG4gICAgY2FudmFzQ3R4LmZpbGxSZWN0KDAsIDAsIGJhcldpZHRoLCBiYXJIZWlnaHQpO1xuICAgIHhQb3MgKz0gYmFyV2lkdGg7XG4gICAgY2FudmFzQ3R4LnJlc3RvcmUoKTtcbiAgfVxufSJdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBSUEsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsS0FBSztBQUNyRCxJQUFJQyxVQUFVLEdBQUdILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUNDLEtBQUs7QUFDbkUsSUFBSUUsU0FBUyxHQUFHSixRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDQyxLQUFLO0FBQ2pFLElBQUlHLGNBQWMsR0FBR0wsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDO0FBRXZELFNBQVNLLGNBQWNBLENBQUNDLFlBQVksRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFDO0VBQ3pFLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTCxZQUFZLEVBQUVLLENBQUMsRUFBRSxFQUFDO0lBQ3BDRixTQUFTLEdBQUdDLFNBQVMsQ0FBQ0MsQ0FBQyxDQUFDO0lBQ3hCQyxTQUFTLENBQUNDLElBQUksRUFBRTtJQUNoQkQsU0FBUyxDQUFDRSxTQUFTLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxHQUFDLENBQUMsRUFBRUQsTUFBTSxDQUFDRSxNQUFNLEdBQUMsQ0FBQyxDQUFDO0lBQ3BETCxTQUFTLENBQUNNLE1BQU0sQ0FBQ1AsQ0FBQyxHQUFHUSxJQUFJLENBQUNDLEVBQUUsR0FBRyxDQUFDLEdBQUNkLFlBQVksQ0FBQztJQUM5Q1IsR0FBRyxHQUFHTSxjQUFjLENBQUNILEtBQUssR0FBR0gsR0FBRyxHQUFHQSxHQUFHLEdBQUcsQ0FBQztJQUMxQ2MsU0FBUyxDQUFDUyxTQUFTLEdBQUcsTUFBTSxHQUFHdkIsR0FBRyxHQUFHLElBQUksR0FBR0ksVUFBVSxHQUFHLEtBQUssR0FBR0MsU0FBUyxHQUFHLElBQUk7SUFDakZTLFNBQVMsQ0FBQ1UsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVkLFFBQVEsRUFBRUMsU0FBUyxDQUFDO0lBQzdDRixJQUFJLElBQUlDLFFBQVE7SUFDaEJJLFNBQVMsQ0FBQ1csT0FBTyxFQUFFO0VBQ3JCO0FBQ0YifQ==\n//# sourceURL=webpack-internal:///./src/scripts/circularDrawer.js\n");

/***/ }),

/***/ "./src/scripts/rectangularDrawer.js":
/*!******************************************!*\
  !*** ./src/scripts/rectangularDrawer.js ***!
  \******************************************/
/***/ (function() {

eval("let hue = document.getElementById('hue-slider').value;\nlet saturation = document.getElementById('saturation-slider').value;\nlet lightness = document.getElementById('lightness-slider').value;\nlet plainOrRainbow = document.getElementById('rainbow');\nfunction rectangleDrawer(bufferLength, xPos, barWidth, barHeight, dataArray) {\n  for (let i = 0; i < bufferLength; i++) {\n    hue = plainOrRainbow.value ? hue : hue * 5;\n    barHeight = dataArray[i];\n    canvasCtx.fillStyle = 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';\n    canvasCtx.fillRect(xPos, canvas.height - barHeight, barWidth, barHeight);\n    xPos += barWidth;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9yZWN0YW5ndWxhckRyYXdlci5qcy5qcyIsIm5hbWVzIjpbImh1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInNhdHVyYXRpb24iLCJsaWdodG5lc3MiLCJwbGFpbk9yUmFpbmJvdyIsInJlY3RhbmdsZURyYXdlciIsImJ1ZmZlckxlbmd0aCIsInhQb3MiLCJiYXJXaWR0aCIsImJhckhlaWdodCIsImRhdGFBcnJheSIsImkiLCJjYW52YXNDdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNhbnZhcyIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmVhdGl0dXAvLi9zcmMvc2NyaXB0cy9yZWN0YW5ndWxhckRyYXdlci5qcz9iNjZiIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBodWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVlLXNsaWRlcicpLnZhbHVlO1xubGV0IHNhdHVyYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F0dXJhdGlvbi1zbGlkZXInKS52YWx1ZTtcbmxldCBsaWdodG5lc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlnaHRuZXNzLXNsaWRlcicpLnZhbHVlO1xubGV0IHBsYWluT3JSYWluYm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhaW5ib3cnKTtcblxuZnVuY3Rpb24gcmVjdGFuZ2xlRHJhd2VyKGJ1ZmZlckxlbmd0aCwgeFBvcywgYmFyV2lkdGgsIGJhckhlaWdodCwgZGF0YUFycmF5KXtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWZmZXJMZW5ndGg7IGkrKyl7XG4gICAgaHVlID0gcGxhaW5PclJhaW5ib3cudmFsdWUgPyBodWUgOiBodWUgKiA1O1xuICAgIGJhckhlaWdodCA9IGRhdGFBcnJheVtpXVxuICAgIGNhbnZhc0N0eC5maWxsU3R5bGUgPSAnaHNsKCcgKyBodWUgKyAnLCAnICsgc2F0dXJhdGlvbiArICclLCAnICsgbGlnaHRuZXNzICsgJyUpJztcbiAgICBjYW52YXNDdHguZmlsbFJlY3QoeFBvcywgY2FudmFzLmhlaWdodCAtIGJhckhlaWdodCwgYmFyV2lkdGgsIGJhckhlaWdodCk7XG4gICAgeFBvcyArPSBiYXJXaWR0aDtcbiAgfVxufVxuXG4iXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUNDLEtBQUs7QUFDckQsSUFBSUMsVUFBVSxHQUFHSCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDQyxLQUFLO0FBQ25FLElBQUlFLFNBQVMsR0FBR0osUUFBUSxDQUFDQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQ0MsS0FBSztBQUNqRSxJQUFJRyxjQUFjLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQztBQUV2RCxTQUFTSyxlQUFlQSxDQUFDQyxZQUFZLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBQztFQUMxRSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0wsWUFBWSxFQUFFSyxDQUFDLEVBQUUsRUFBQztJQUNwQ2IsR0FBRyxHQUFHTSxjQUFjLENBQUNILEtBQUssR0FBR0gsR0FBRyxHQUFHQSxHQUFHLEdBQUcsQ0FBQztJQUMxQ1csU0FBUyxHQUFHQyxTQUFTLENBQUNDLENBQUMsQ0FBQztJQUN4QkMsU0FBUyxDQUFDQyxTQUFTLEdBQUcsTUFBTSxHQUFHZixHQUFHLEdBQUcsSUFBSSxHQUFHSSxVQUFVLEdBQUcsS0FBSyxHQUFHQyxTQUFTLEdBQUcsSUFBSTtJQUNqRlMsU0FBUyxDQUFDRSxRQUFRLENBQUNQLElBQUksRUFBRVEsTUFBTSxDQUFDQyxNQUFNLEdBQUdQLFNBQVMsRUFBRUQsUUFBUSxFQUFFQyxTQUFTLENBQUM7SUFDeEVGLElBQUksSUFBSUMsUUFBUTtFQUNsQjtBQUNGIn0=\n//# sourceURL=webpack-internal:///./src/scripts/rectangularDrawer.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWF0aXR1cC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
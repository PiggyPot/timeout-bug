# timeout-bug
Demos the setTimeout/setInterval bug in react-native.

## Reproduction:
1. Clone & `npm install`.
2. `react-native run-ios`
4. Run the remote debugger in the simulator.
3. Open `index.ios.js` in project root.
4. Adjust the delay on line 25 to break the timeout. Usually over 1500ms is enough to break it.


/* Copyright 2021 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Factors to rescale LiberationSans-Regular.ttf to have the same
// metrics as segoeui.ttf.
const SegoeuiRegularFactors = [
  1.76738, 1, 0.96706, 0.86035, 0.86035, 0.96706, 0.96706, 0.96706, 0.96706,
  0.96706, 0.96706, 0.96635, 0.96706, 0.96706, 0.96706, 0.96706, 0.96706,
  0.85944, 0.85944, 0.85734, 0.85734, 0.85734, 0.85734, 0.85734, 0.85734,
  0.88433, 0.97093, 0.97093, 0.97093, 0.96491, 0.75842, 0.75842, 0.75842,
  0.75842, 0.75842, 0.75842, 0.75842, 0.75842, 0.75842, 1.03444, 0.75842,
  0.75842, 0.72727, 0.9831, 0.92366, 0.97093, 0.96927, 0.79936, 0.88198,
  0.85638, 0.88198, 0.88198, 1, 0.88198, 0.9831, 1, 0.99862, 0.99862, 1, 0.9831,
  0.9831, 0.95782, 0.84784, 0.95782, 0.95782, 0.95782, 0.95782, 0.95782,
  0.95782, 0.95782, 0.95782, 0.95782, 0.95782, 0.98601, 0.95782, 0.71387,
  0.71387, 0.86969, 0.86969, 1, 0.84636, 0.84636, 0.94152, 0.84636, 1, 0.84636,
  0.84636, 1.07796, 1.07796, 1.03584, 1.03584, 1.03584, 1, 1.03584, 1.03584,
  0.96924, 0.93066, 0.96924, 0.96924, 0.96924, 0.96924, 0.96924, 0.96924,
  0.96924, 1.0098, 1.09799, 0.96924, 1.03405, 0.96924, 0.96924, 0.96924,
  0.83968, 0.94492, 0.98715, 0.9287, 0.96924, 0.82826, 0.82826, 0.82826, 1,
  0.83968, 0.79649, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.79649, 0.79649,
  0.79649, 0.79649, 1, 0.83491, 0.85771, 0.85771, 0.85771, 0.85771, 1, 0.96924,
  0.83968, 0.95132, 0.95132, 0.95132, 0.95132, 0.95132, 0.95132, 0.95132,
  0.95132, 0.95132, 0.8287, 0.8287, 0.77968, 0.95132, 0.95132, 0.93119, 0.98965,
  0.98965, 0.98965, 0.98965, 0.98965, 0.88433, 0.78437, 0.8287, 0.8287, 0.8287,
  0.8287, 0.8287, 0.93365, 0.93365, 0.93365, 0.93365, 0.93365, 0.91484, 0.91484,
  0.91484, 0.91484, 0.84751, 0.91484, 0.93575, 0.93575, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.91484, 1.0625, 1.0625, 0.91484,
  1.19985, 0.78032, 0.91484, 1.24822, 0.91484, 0.91484, 0.86182, 0.94434,
  0.86279, 0.86279, 0.94434, 1, 1, 1.45786, 1.1714, 1.07152, 0.94084, 0.91484,
  1.05707, 1.3638, 0.92105, 0.95246, 1, 0.90351, 0.90351, 1.08612, 1.08612,
  0.91202, 0.92105, 1.16039, 0.92383, 0.92383, 1.11437, 0.92383, 0.92383,
  0.92383, 0.92383, 0.61584, 0.96927, 1.02512, 1.42603, 1.11437, 1.04315,
  0.78032, 0.78032, 1.20808, 0.99912, 1.05882, 0.67428, 0.67428, 1.0969,
  1.05882, 0.94261, 1.04912, 1.34163, 1.2434, 0.81818, 1.24644, 1, 1, 0.96927,
  0.60411, 0.8717, 0.9403, 0.9403, 0.9403, 0.9403, 0.9403, 0.9403, 0.9403,
  0.9403, 0.96927, 0.73291, 0.9403, 1, 0.89903, 1.01756, 0.9403, 0.98248,
  0.98248, 1.1714, 1.17238, 1, 1.03424, 1.03424, 1.00527, 1.02285, 0.95996,
  0.85337, 1.12654, 1, 1.42603, 1, 0.96927, 1.11358, 0.96927, 0.96927, 0.87796,
  1.05882, 1.03809, 1.05882, 1.05882, 1, 1.05882, 0.89049, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0.80499, 1.1714, 1.24822, 0.90957, 0.90957, 0.94868, 0.94868,
  1.01756, 1.01756, 1.01756, 1.15296, 1, 0.97361, 1.09011, 0.8717, 0.8717,
  0.8717, 0.8717, 0.8717, 1.11551, 0.8717, 1.14589, 1.9697, 1, 1, 0.97622,
  1.42603, 1.42603, 1, 1.09011, 1.2, 1.2, 1.2, 1.2, 0.8717, 1.09011, 1.09011,
  0.99414, 1.04785, 1, 0.99414, 1.09011, 1.09011, 0.99609, 1.0536, 1, 0.94298,
  1.1714, 1.24822, 1, 0.96927, 1.1714, 1.08571, 1.18083, 1.23297, 1, 1.034,
  0.75155, 1, 1, 1.1714, 1.22135, 1.00169, 1.1714, 1, 1, 1.01756, 1.01756,
  1.00323, 1.01756, 1, 0.96927, 1, 1.24822, 1.01756, 1.05176, 1.06234, 1.05356,
  1.05356, 1.05356, 1.05356, 1.05356, 0.98293, 0.55572, 1.05356, 1.05356,
  1.05356, 1.03502, 1.03502, 1.05356, 1.05356, 0.96927, 1.10539, 1.11593,
  1.08665, 0.99862, 1.05937, 1.17914, 0.69825, 0.95923, 0.95923, 1.05356,
  1.05707, 0.85273, 0.90616, 0.90616, 1.083, 0.92037, 0.78032, 1.20996, 1.01518,
  1.07831, 0.9087, 1.1714, 1.24644, 0.91578, 1.05205, 1.05882, 0.80597, 0.73381,
  1.10454, 1.13196, 1.13196, 1.13196, 1.03077, 1.03077, 1.03077, 1.03077,
  1.2046, 1.04399, 1.04399, 1.18416, 1.04399, 1, 1.20808, 1, 1.03004, 0.84164,
  1, 0.84863, 0.84863, 0.84863, 0.84863, 0.84863, 1, 1.06483, 0.80597, 0.96927,
  1.06967, 1, 0.93117, 0.95542, 0.96927, 1.40246, 1, 1.2886, 0.96927, 0.86507,
  1, 1.21968, 1.23362, 1.21968, 1.17318, 1, 1.05443, 1.05707, 0.96927, 1.10539,
  1.14169, 1.01173, 0.81818, 0.77295, 0.87025, 0.87025, 0.87025, 0.87025,
  0.96927, 1.01756, 1.01756, 1.01756, 1.01756, 1.01756, 1.01756, 1.01756,
  1.01756, 0.74627, 0.75155, 0.98594, 1.20088, 1.09971, 1.09971, 1, 1.05425,
  0.85771, 1.21968, 0.93109, 0.78032, 0.75842, 1.03719, 0.9403, 1.04021, 1,
  1.20088, 1.24633, 1.05425, 1.09971, 1.09971, 1.09971, 1.07497, 1, 1, 1,
  0.78032, 1, 1, 1, 1.10938, 1.10938, 1.01756, 1, 1.01071, 1.01071, 1.01071,
  1.01071, 1.01756, 1.01756, 0.95801, 1.00068, 1.00068, 1.00068, 1.00068,
  1.00068, 0.91797, 0.99346, 0.96777, 0.96777, 0.96777, 0.96777, 0.96927,
  0.96777, 0.9043, 0.9043, 0.9043, 0.9043, 0.96927, 1.00221,
];

export { SegoeuiRegularFactors };

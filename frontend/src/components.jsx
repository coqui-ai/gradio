import React from "react";

import { AudioInput, AudioInputExample } from "./components/input/audio";
import {
  DropdownInput,
  DropdownInputExample
} from "./components/input/dropdown";
import { FileInput, FileInputExample } from "./components/input/file";
import { TextboxInput, TextboxInputExample } from "./components/input/textbox";

import { AudioOutput, AudioOutputExample } from "./components/output/audio";

let input_component_set = [
  {
    name: "audio",
    component: AudioInput,
    memoized_component: null,
    example_component: AudioInputExample
  },
  {
    name: "dropdown",
    component: DropdownInput,
    memoized_component: null,
    example_component: DropdownInputExample
  },
  {
    name: "file",
    component: FileInput,
    memoized_component: null,
    example_component: FileInputExample
  },
  {
    name: "textbox",
    component: TextboxInput,
    memoized_component: null,
    example_component: TextboxInputExample
  },
];
let output_component_set = [
  {
    name: "audio",
    component: AudioOutput,
    memoized_component: null,
    example_component: AudioOutputExample
  },
];

for (let component_set of [input_component_set, output_component_set]) {
  for (let component_data of component_set) {
    component_data.memoized_component = React.memo(
      component_data.component,
      component_data.component.memo
    );
  }
}

export { input_component_set, output_component_set };

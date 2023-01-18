import React from "react";
import Entry from "./entry";
import emojipedia from "../emojipedia";


// id: 1,
// emoji: "💪",
// name: "Tense Biceps",
// meaning:
//   "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// function createEntry(emojiterm){
//     return(
//     );
// }

function createEntry(emojiterm){
    
    return <Entry
    key = {emojiterm.id}
    emoji = {emojiterm.emoji}
    name = {emojiterm.name}
    description = {emojiterm.meaning}
    />

}

function App() {
  return (
    <div>
      <h1>
        <span>emojigram</span>
      </h1>

      <dl className="dictionary"> {emojipedia.map(createEntry)} </dl>

    </div>
  );
}

export default App;

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;

  // take a sentence as input
  // reverse the input sentence
  // the start of the sentence must start with a capital
  // for javascript

const reverseSentence = (sentence) => {

    
    const reversed = sentence.split('').reverse().join('');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
};

const sentence = "Hello, world!";
const reversedSentence = reverseSentence(sentence);
console.log(reversedSentence);

const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 40 }
    ]
];

const names = data.flatMap(group => group.map(person => person.name));
console.log(names);
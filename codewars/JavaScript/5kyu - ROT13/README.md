# ROT13

How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

```
"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
```

## Solution

```javascript
function rot13(str) {
  const rotChar = ["a", "b","c","d","e","f","g","h","i","j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
  
  let value = "";
  
  for (let a=0; a<str.length; a++){
    if(!rotChar.includes(str[a].toLowerCase())){
       value+=str[a]
       }else{
         if(str[a].toLowerCase() > "m"){
            value+= String.fromCharCode(str.charCodeAt(a)-13)
         }else{
            value+= String.fromCharCode(str.charCodeAt(a)+13)

         }
       }
  }
return value;

}

```
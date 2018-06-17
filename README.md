# touc
Node.js command line for easily creating files and directories specially for window 
## Quick Overview
`touc a b c index.css`
create 3 directories [a,b,c] and one file index.css .

`touc a b c -e css` create 3 files with css as the extension of the file.
## Getting start
`npm i -g touc`

To make sure that the package installed 

`touc -V`  

## HOW 
`touc ...args -e [file extension]`

## examples 
`touc a b c d`
this creates 3 4 directories 

if you want to specify extension 

`touc a b c d -e css ` this command creates 4 files 
a.css , b.css , c.css , d.css 

if you omit the -e option , arguments that start with **.** 
or has extension in the end  will create file , anything else 
will create directory 

`touc a b c.css i.html`

this will create 2 directories a b and 2 files 
c.css i.html
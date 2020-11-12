# ArchLinux

Guide "Arch linux install "
<br>
You can revise it here: https://bananiys202024.github.io/arch-linux/ <br>
You can find more information inside source code, at file:
"arch-linux/src/app/lessons/lesson9/lesson9.component.html", because i am too lazy to re deploy

<h1>New information</h1>
New information i did add to file lesson9.component.html; but did not re deploy.
<ol>
  <li>tuning brightness of screen</li>
  <li>How read external drive and usb stick designed for windows</li>
  <li>Media transfer protocol</li>
  <li>Automatically connect wi-fi</li>
  </ol>

<h1>How deploy angular on github</h1>

    git checkout -b gh-pages
    git push origin gh-pages
    sudo npm install -g angular-cli-ghpages
    sudo ng build --prod --base-href https://bananiys202024.github.io/arch-linux/
    sudo ngh --dir=dist/arch-linux/ --no-silent

In next time of building 

    sudo ng build --prod
    
Last step drag and drop dist/arch-linux to /arch-linux on github in gh-pages branch

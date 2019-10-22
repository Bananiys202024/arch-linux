# ArchLinux

Guide "Arch linux install "
<br>
You can revise it here: https://bananiys202024.github.io/arch-linux/


<h1>How deploy angular on github</h1>

    git checkout -b gh-pages
    git push origin gh-pages
    sudo npm install -g angular-cli-ghpages
    sudo ng build --prod --base-href https://bananiys202024.github.io/arch-linux/
    sudo ngh --dir=dist/arch-linux/ --no-silent

In next time of building 

    sudo ng build --prod
    
Last step drag and drop dist/arch-linux to /arch-linux

# portfilio


### Live Reload 방법

html 파일에 아래 코드를 포함시킨다.
```html
<script>
  document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
  ':35729/livereload.js?snipver=1"></' + 'script>')
</script>  
```

그런다음 터미널에서 아래 명령어를 입력한다.

```bash
livereload [폴더경로]
```

html 파일을 브라우저에 띄운다 (option + B)